'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import PaywallModal from '@/components/PaywallModal'
import { usePayment } from '@/lib/usePayment'
import PaymentSuccessToast from '@/components/PaymentSuccessToast'

type Mode = 'crop' | 'split' | 'filters'

const RATIOS = [
  { label:'9:16 Shorts',    w:1080, h:1920 },
  { label:'1:1 Квадрат',   w:1080, h:1080 },
  { label:'4:5 Instagram',  w:1080, h:1350 },
  { label:'16:9 YouTube',   w:1280, h:720  },
]

const FILTERS = [
  { id:'none',     label:'🎥 Без фильтра', css:'' },
  { id:'vivid',    label:'🌈 Яркий',        css:'saturate(1.6) contrast(1.1)' },
  { id:'bw',       label:'⬛ Ч/Б',          css:'grayscale(1)' },
  { id:'warm',     label:'🔆 Тёплый',       css:'sepia(0.4) saturate(1.3) brightness(1.05)' },
  { id:'cool',     label:'❄️ Холодный',     css:'hue-rotate(30deg) saturate(1.2)' },
  { id:'dramatic', label:'🎭 Драматичный',  css:'contrast(1.4) brightness(0.9) saturate(0.8)' },
  { id:'fade',     label:'🌫 Выцветший',    css:'brightness(1.1) contrast(0.85) saturate(0.7)' },
  { id:'neon',     label:'💜 Неон',         css:'hue-rotate(200deg) saturate(2) brightness(0.9)' },
]

const SNAP = ['tl','tc','tr','ml','mc','mr','bl','bc','br'] as const

function fmtT(sec: number) {
  const m=Math.floor(sec/60), s=Math.floor(sec%60)
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
}

const CROP_FEATURES = [
  'Нарезка видео на N равных частей',
  'Ручные точки разреза на таймлайне',
  '8 видеофильтров',
]

export default function CropTool() {
  const [mode,       setMode]       = useState<Mode>('crop')
  const [loaded,     setLoaded]     = useState(false)
  const [fileName,   setFileName]   = useState('')
  const [ratio,      setRatio]      = useState(RATIOS[0])
  const [filter,     setFilter]     = useState(FILTERS[0])
  const [processing, setProcessing] = useState(false)
  const [progress,   setProgress]   = useState(0)
  const [statusMsg,  setStatusMsg]  = useState('')
  const [cropX,  setCropX]  = useState(0)
  const [cropY,  setCropY]  = useState(0)
  const [vidW,   setVidW]   = useState(0)
  const [vidH,   setVidH]   = useState(0)
  const [cropW,  setCropW]  = useState(0)
  const [cropH,  setCropH]  = useState(0)
  const [dragging,  setDragging]  = useState(false)
  const [dragStart, setDragStart] = useState({x:0,y:0,cx:0,cy:0})
  const [splitCount,  setSplitCount]  = useState(3)
  const [splitPoints, setSplitPoints] = useState<number[]>([])
  const [duration,    setDuration]    = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying,   setIsPlaying]   = useState(false)

  const { paid, showPay, setShowPay, justPaid, info } = usePayment('crop-pro')

  const videoRef      = useRef<HTMLVideoElement>(null)
  const mainCanvasRef = useRef<HTMLCanvasElement>(null)
  const previewRef    = useRef<HTMLCanvasElement>(null)
  const fileRef       = useRef<HTMLInputElement>(null)
  const rafRef        = useRef<number>(0)
  const pendingInit   = useRef<any>(null)
  const audioCtxRef   = useRef<AudioContext | null>(null)
  const audioDestRef  = useRef<MediaStreamAudioDestinationNode | null>(null)
  const audioSrcRef   = useRef<MediaElementAudioSourceNode | null>(null)
  const fileUrlRef    = useRef<string>('')

  // ── RENDER LOOP ──────────────────────────────────────────────────────────────
  const renderLoop = useCallback(() => {
    const vid=videoRef.current, canvas=mainCanvasRef.current, prev=previewRef.current
    if(!vid||!canvas||!prev){rafRef.current=requestAnimationFrame(renderLoop);return}
    const ctx=canvas.getContext('2d')!, pctx=prev.getContext('2d')!

    ctx.filter='none'
    ctx.drawImage(vid,0,0,canvas.width,canvas.height)
    ctx.fillStyle='rgba(0,0,0,0.4)'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.save()
    ctx.beginPath();ctx.rect(cropX,cropY,cropW,cropH);ctx.clip()
    ctx.filter=filter.css||'none'
    ctx.drawImage(vid,0,0,canvas.width,canvas.height)
    ctx.restore()
    ctx.strokeStyle='#ff3d5a';ctx.lineWidth=2
    ctx.strokeRect(cropX,cropY,cropW,cropH)
    ctx.strokeStyle='rgba(255,255,255,0.15)';ctx.lineWidth=1
    for(let i=1;i<3;i++){
      ctx.beginPath();ctx.moveTo(cropX+(cropW/3)*i,cropY);ctx.lineTo(cropX+(cropW/3)*i,cropY+cropH);ctx.stroke()
      ctx.beginPath();ctx.moveTo(cropX,cropY+(cropH/3)*i);ctx.lineTo(cropX+cropW,cropY+(cropH/3)*i);ctx.stroke()
    }

    prev.width=160;prev.height=Math.round(160*ratio.h/ratio.w)
    pctx.filter=filter.css||'none'
    pctx.drawImage(vid,
      cropX/canvas.width*vid.videoWidth, cropY/canvas.height*vid.videoHeight,
      cropW/canvas.width*vid.videoWidth, cropH/canvas.height*vid.videoHeight,
      0,0,prev.width,prev.height)


    setCurrentTime(vid.currentTime)
    rafRef.current=requestAnimationFrame(renderLoop)
  },[cropX,cropY,cropW,cropH,filter,ratio])

  useEffect(()=>{
    if(!loaded||!pendingInit.current) return
    const{dw,dh}=pendingInit.current;pendingInit.current=null
    const canvas=mainCanvasRef.current;if(!canvas) return
    canvas.width=dw;canvas.height=dh
    setVidW(dw);setVidH(dh);initCrop(dw,dh)
    cancelAnimationFrame(rafRef.current)
    rafRef.current=requestAnimationFrame(renderLoop)
  },[loaded,renderLoop])

  useEffect(()=>{
    if(!loaded) return
    cancelAnimationFrame(rafRef.current)
    rafRef.current=requestAnimationFrame(renderLoop)
    return()=>cancelAnimationFrame(rafRef.current)
  },[loaded,renderLoop])

  function initCrop(dw:number,dh:number){
    const ar=ratio.w/ratio.h
    let cw=Math.min(dw,dh*ar),ch=cw/ar
    if(ch>dh){ch=dh;cw=ch*ar}
    setCropW(Math.round(cw));setCropH(Math.round(ch))
    setCropX(Math.round((dw-cw)/2));setCropY(Math.round((dh-ch)/2))
  }

  useEffect(()=>{if(loaded)initCrop(vidW,vidH)},[ratio,loaded])

  // ── FILE LOAD ────────────────────────────────────────────────────────────────
  function handleFile(file:File){
    const ext = file.name.split('.').pop()?.toLowerCase() || ''
    const isVideo = file.type.startsWith('video/') || ['mp4','webm','mov','avi','mkv','m4v'].includes(ext)
    if(!isVideo) return
    setFileName(file.name);setLoaded(false);setIsPlaying(false)
    if(fileUrlRef.current) URL.revokeObjectURL(fileUrlRef.current)
    // Close old audio context so new file gets fresh audio node
    if(audioCtxRef.current){ audioCtxRef.current.close(); audioCtxRef.current=null }
    audioSrcRef.current = null
    const url=URL.createObjectURL(file)
    fileUrlRef.current=url
    const vid=videoRef.current
    if(!vid){console.error('videoRef not ready');return}
    vid.src=url
    vid.onloadedmetadata=()=>{
      const scale=Math.min(800/vid.videoWidth,500/vid.videoHeight,1)
      const dw=Math.round(vid.videoWidth*scale),dh=Math.round(vid.videoHeight*scale)
      pendingInit.current={dw,dh}
      // duration may still be Infinity here for some formats — wait for it
      if(isFinite(vid.duration) && vid.duration > 0){
        setDuration(vid.duration); setLoaded(true)
      }
    }
    // ondurationchange fires when duration becomes known (fixes Infinity:NaN)
    vid.ondurationchange=()=>{
      if(isFinite(vid.duration) && vid.duration > 0){
        setDuration(vid.duration)
        if(pendingInit.current) setLoaded(true)
      }
    }
    vid.onplay  = () => setIsPlaying(true)
    vid.onpause = () => setIsPlaying(false)
    vid.onended = () => setIsPlaying(false)
    vid.load() // force metadata fetch without autoplay
  }

  // ── SETUP AUDIO CONTEXT (once per file) ─────────────────────────────────────
  function setupAudio(vid:HTMLVideoElement){
    try{
      const AudioCtx=window.AudioContext||(window as any).webkitAudioContext
      // Create context once per file load
      if(!audioCtxRef.current || audioCtxRef.current.state === 'closed'){
        audioCtxRef.current = new AudioCtx()
        audioSrcRef.current = null // reset source when new context created
      }
      const ctx = audioCtxRef.current
      // Create source node only once — can't recreate for same element
      if(!audioSrcRef.current){
        audioSrcRef.current = ctx.createMediaElementSource(vid)
      } else {
        // Disconnect from previous destination before reconnecting
        try { audioSrcRef.current.disconnect() } catch(_){}
      }
      // Create fresh destination each time
      const dest = ctx.createMediaStreamDestination()
      audioSrcRef.current.connect(dest)
      audioSrcRef.current.connect(ctx.destination)
      audioDestRef.current = dest
      return dest.stream.getAudioTracks()
    }catch(e){
      console.warn('Audio setup failed:',e)
      return []
    }
  }

  // ── DRAG ─────────────────────────────────────────────────────────────────────
  function onMouseDown(e:React.MouseEvent<HTMLCanvasElement>){
    const rect=mainCanvasRef.current!.getBoundingClientRect()
    const mx=(e.clientX-rect.left)*(vidW/rect.width)
    const my=(e.clientY-rect.top)*(vidH/rect.height)
    if(mx>=cropX&&mx<=cropX+cropW&&my>=cropY&&my<=cropY+cropH){
      setDragging(true);setDragStart({x:e.clientX,y:e.clientY,cx:cropX,cy:cropY})
    }
  }
  function onMouseMove(e:React.MouseEvent){
    if(!dragging) return
    const rect=mainCanvasRef.current!.getBoundingClientRect()
    const dx=(e.clientX-dragStart.x)*(vidW/rect.width)
    const dy=(e.clientY-dragStart.y)*(vidH/rect.height)
    setCropX(Math.round(Math.max(0,Math.min(dragStart.cx+dx,vidW-cropW))))
    setCropY(Math.round(Math.max(0,Math.min(dragStart.cy+dy,vidH-cropH))))
  }
  function onMouseUp(){setDragging(false)}

  function snapCrop(p:string){
    const x=p[1]==='l'?0:p[1]==='c'?Math.round((vidW-cropW)/2):vidW-cropW
    const y=p[0]==='t'?0:p[0]==='m'?Math.round((vidH-cropH)/2):vidH-cropH
    setCropX(x);setCropY(y)
  }

  // ── CORE EXPORT ─────────────────────────────────────────────────────────────
  async function recordSegment(
    startTime: number,
    endTime: number,
    outCanvas: HTMLCanvasElement,
    filename: string,
  ): Promise<void> {
    const vid = videoRef.current!
    const ctx = outCanvas.getContext('2d')!
    const scaleX = vid.videoWidth / vidW
    const scaleY = vid.videoHeight / vidH
    const segDuration = endTime - startTime

    const drawFrame = (forRecorder?: CanvasRenderingContext2D) => {
      const c = forRecorder || ctx
      c.filter = filter.css || 'none'
      c.drawImage(vid, cropX*scaleX, cropY*scaleY, cropW*scaleX, cropH*scaleY, 0, 0, outCanvas.width, outCanvas.height)
    }

    // ── Seek ─────────────────────────────────────────────────────────────────
    await new Promise<void>(res => {
      if(Math.abs(vid.currentTime - startTime) < 0.05){ res(); return }
      const onSeeked = () => { vid.removeEventListener('seeked', onSeeked); res() }
      vid.addEventListener('seeked', onSeeked)
      vid.currentTime = startTime
    })

    // ── Draw several frames BEFORE starting recorder ─────────────────────────
    // This primes the canvas so captureStream has real pixel data
    for(let i = 0; i < 3; i++){
      drawFrame()
      await new Promise(r => requestAnimationFrame(r))
    }

    // ── Audio setup ──────────────────────────────────────────────────────────
    const audioTracks = setupAudio(vid)
    if(audioCtxRef.current?.state === 'suspended') await audioCtxRef.current.resume()

    // ── Build stream AFTER frames are drawn ──────────────────────────────────
    const canvasStream = (outCanvas as any).captureStream(30) as MediaStream
    const allTracks = [...canvasStream.getVideoTracks(), ...audioTracks]
    const stream = new MediaStream(allTracks)

    // Pick best supported mimeType
    const mimeType = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm;codecs=vp9',
      'video/webm;codecs=vp8',
      'video/webm',
    ].find(t => MediaRecorder.isTypeSupported(t)) || ''

    const recorder = new MediaRecorder(stream, {
      mimeType: mimeType || undefined,
      videoBitsPerSecond: 6_000_000,
    })
    const chunks: Blob[] = []
    recorder.ondataavailable = e => { if(e.data?.size > 0) chunks.push(e.data) }

    // ── Start recorder, wait for it to initialise, then play ─────────────────
    recorder.start(200)
    await new Promise(r => setTimeout(r, 150))

    // RAF render loop
    let rafId = 0
    const loop = () => {
      drawFrame()
      const elapsed = vid.currentTime - startTime
      setProgress(Math.round(Math.min(elapsed / segDuration * 100, 99)))
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    await vid.play()

    // ── Wait for end ─────────────────────────────────────────────────────────
    await new Promise<void>(resolve => {
      const check = setInterval(() => {
        if(vid.currentTime >= endTime - 0.08 || vid.ended || vid.paused){
          clearInterval(check)
          cancelAnimationFrame(rafId)
          vid.pause()
          recorder.requestData()
          setTimeout(() => recorder.stop(), 400)
        }
      }, 50)

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: mimeType || 'video/webm' })
        console.log(`Recorded: ${blob.size} bytes, chunks: ${chunks.length}`)
        if(blob.size < 1000){
          alert('Файл пустой или слишком маленький. Убедись что используешь Chrome или Edge, и нажми Play перед экспортом.')
        } else {
          const a = document.createElement('a')
          a.href = URL.createObjectURL(blob)
          a.download = filename
          document.body.appendChild(a)
          a.click()
          setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(a.href) }, 1000)
        }
        setProgress(100)
        resolve()
      }
    })
  }

  // ── EXPORT CROP ──────────────────────────────────────────────────────────────
  async function exportCrop(){
    const vid = videoRef.current!
    if(!vid.src) return
    if(typeof MediaRecorder === 'undefined'){
      alert('Твой браузер не поддерживает запись видео. Используй Chrome или Edge.')
      return
    }
    setProcessing(true); setProgress(0)
    setStatusMsg('Воспроизвожу видео и записываю...')
    const out = document.createElement('canvas')
    out.width = ratio.w; out.height = ratio.h
    try {
      await recordSegment(0, vid.duration, out, `crop-${ratio.label.split(' ')[0]}.webm`)
    } finally {
      setProcessing(false); setStatusMsg('')
    }
  }

  // ── EXPORT SPLIT ─────────────────────────────────────────────────────────────
  async function exportSplit(){
    if(!paid){setShowPay(true);return}
    const vid = videoRef.current!
    const segs = [0, ...splitPoints, vid.duration].sort((a,b)=>a-b)
    const total = segs.length - 1
    setProcessing(true)
    for(let i=0; i<total; i++){
      setStatusMsg(`Часть ${i+1} из ${total}...`)
      setProgress(0)
      const out = document.createElement('canvas')
      out.width = ratio.w; out.height = ratio.h
      await recordSegment(segs[i], segs[i+1], out, `часть-${i+1}-из-${total}.webm`)
      await new Promise(r=>setTimeout(r,500))
    }
    setProcessing(false); setStatusMsg('')
  }

  return (
    <div className="min-h-screen bg-bg">

      {showPay&&(
        <PaywallModal product="crop-pro" features={CROP_FEATURES}
          onClose={()=>setShowPay(false)} onPaid={()=>setShowPay(false)}/>
      )}

      {/* VIDEO always in DOM */}
      <video ref={videoRef} className="hidden" playsInline/>

      <nav className="sticky top-0 z-40 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse2"/>БлогерКит
        </Link>
        <div className="text-muted text-xs">✂️ Видеоредактор</div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8 pb-16">
        <div className="text-center mb-6">
          <h1 className="font-heading text-3xl font-black mb-1">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Видеоредактор</span> для Shorts
          </h1>
          <p className="text-muted text-sm">Кроп · Нарезка · Субтитры · Фильтры</p>
        </div>

        {/* MODE TABS */}
        <div className="flex gap-2 justify-center mb-6 flex-wrap">
          {([
            ['crop','✂️ Кроп',false],
            ['split','🔪 Нарезка',true],
            ['filters','🎨 Фильтры',false],
          ] as [Mode,string,boolean][]).map(([m,label,isPro])=>(
            <button key={m}
              onClick={()=>{if(isPro&&!paid)setShowPay(true);else setMode(m)}}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${mode===m?'bg-purple-500 border-purple-500 text-white':'border-border text-muted hover:text-white bg-transparent'}`}>
              {label}
              {isPro&&<span className="px-1.5 py-0.5 bg-yellow-400/20 text-yellow-400 rounded text-xs">Pro</span>}
            </button>
          ))}
        </div>

        {/* UPLOAD */}
        {!loaded&&(
          <div onDrop={e=>{e.preventDefault();const f=e.dataTransfer.files[0];if(f)handleFile(f)}}
            onDragOver={e=>e.preventDefault()}
            onClick={()=>fileRef.current?.click()}
            className="border-2 border-dashed border-border rounded-2xl p-12 text-center cursor-pointer hover:border-purple-400/50 transition-colors mb-6">
            <div className="text-5xl mb-3">🎬</div>
            <div className="font-bold mb-1">Перетащи видео или нажми для выбора</div>
            <p className="text-muted text-sm">MP4, MOV, AVI, WebM · до 500 МБ</p>
            <input ref={fileRef} type="file" accept="video/*" className="hidden"
              onChange={e=>e.target.files?.[0]&&handleFile(e.target.files[0])}/>
          </div>
        )}

        {loaded&&(
          <div className="grid lg:grid-cols-[1fr_220px] gap-5">
            <div>
              {/* CANVAS */}
              <div className="relative bg-black rounded-xl overflow-hidden mb-3" style={{aspectRatio:`${vidW}/${vidH}`}}>
                <canvas ref={mainCanvasRef} className="w-full h-full cursor-move"
                  onMouseDown={onMouseDown} onMouseMove={onMouseMove}
                  onMouseUp={onMouseUp} onMouseLeave={onMouseUp}/>
              </div>

              {/* TIMELINE */}
              <div className="bg-card border border-border rounded-xl p-3 mb-3">
                <div className="flex items-center gap-3 mb-2">
                  <button onClick={()=>{const v=videoRef.current!;v.paused?v.play():v.pause()}}
                    className="w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg text-purple-400 text-sm hover:bg-purple-500/30">
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                  <div className="text-muted text-xs">{fmtT(currentTime)} / {isFinite(duration) && duration > 0 ? fmtT(duration) : '...'}</div>
                  {mode==='split'&&(
                    <button onClick={()=>setSplitPoints(prev=>[...prev,currentTime].sort((a,b)=>a-b))}
                      className="ml-auto px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-lg border border-red-500/30 hover:bg-red-500/30">
                      + Точка разреза
                    </button>
                  )}
                </div>
                <div className="relative h-8 bg-surface rounded-lg overflow-hidden cursor-pointer"
                  onClick={e=>{
                    if(!isFinite(duration) || duration <= 0) return
                    const rect=e.currentTarget.getBoundingClientRect()
                    const pct=(e.clientX-rect.left)/rect.width
                    if(videoRef.current) videoRef.current.currentTime=pct*duration
                  }}>
                  <div className="h-full bg-purple-500/30 rounded-lg" style={{width:`${isFinite(duration) && duration > 0 ? (currentTime/duration)*100 : 0}%`}}/>
                  {splitPoints.map((p,i)=>(
                    <div key={i} className="absolute top-0 h-full w-0.5 bg-red-400" style={{left:`${(p/duration)*100}%`}}>
                      <div className="absolute -top-1 -translate-x-1/2 text-red-400 text-xs">✂</div>
                    </div>
                  ))}

                </div>
              </div>

              {/* PANELS */}
              {mode==='crop'&&(
                <div className="bg-card border border-border rounded-xl p-4">
                  <div className="text-muted text-xs uppercase tracking-widest mb-3">Соотношение сторон</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {RATIOS.map(r=>(
                      <button key={r.label} onClick={()=>setRatio(r)}
                        className={`py-2 px-3 text-xs rounded-xl border font-bold cursor-pointer transition-all ${ratio.label===r.label?'bg-purple-500 border-purple-500 text-white':'border-border text-muted hover:text-white bg-transparent'}`}>
                        {r.label}
                      </button>
                    ))}
                  </div>
                  <div className="text-muted text-xs uppercase tracking-widest mb-2">Snap-позиции</div>
                  <div className="grid grid-cols-3 gap-1 w-28 mb-2">
                    {SNAP.map(p=>(
                      <button key={p} onClick={()=>snapCrop(p)}
                        className="w-8 h-8 bg-surface border border-border rounded hover:bg-purple-500/20 hover:border-purple-400 transition-all"/>
                    ))}
                  </div>
                  <p className="text-muted text-xs">Перетащи рамку на видео</p>
                </div>
              )}

              {mode==='split'&&(
                <div className="bg-card border border-border rounded-xl p-4">
                  <div className="text-muted text-xs uppercase tracking-widest mb-3">Нарезка · Pro</div>
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <label className="text-muted text-xs">Кол-во частей:</label>
                    <input type="number" min={2} max={20} value={splitCount}
                      onChange={e=>setSplitCount(Number(e.target.value))}
                      className="w-16 px-2 py-1 bg-surface border border-border rounded text-sm text-center outline-none"/>
                    <button onClick={()=>{
                      if(!isFinite(duration) || duration <= 0) return
                      const pts=Array.from({length:splitCount-1},(_,i)=>(i+1)*duration/splitCount)
                      setSplitPoints(pts)
                    }} className="px-3 py-1.5 bg-purple-500/20 text-purple-400 text-xs rounded-lg border border-purple-500/30 hover:bg-purple-500/30 disabled:opacity-40"
                      disabled={!isFinite(duration) || duration <= 0}>
                      Разбить равномерно
                    </button>
                    <button onClick={()=>setSplitPoints([])}
                      className="px-3 py-1.5 bg-red-500/10 text-red-400 text-xs rounded-lg border border-red-500/20">Сбросить</button>
                  </div>
                  {splitPoints.length>0&&(
                    <div className="text-muted text-xs mb-2">Точки: {splitPoints.map(p=>fmtT(p)).join(' · ')}</div>
                  )}
                  <div className="p-3 bg-yellow-400/5 border border-yellow-400/20 rounded-lg text-xs text-yellow-400/80">
                    ⏱ Экспорт идёт в реальном времени — видео будет воспроизводиться во время записи
                  </div>
                </div>
              )}


              {mode==='filters'&&(
                <div className="bg-card border border-border rounded-xl p-4">
                  <div className="text-muted text-xs uppercase tracking-widest mb-3">Видеофильтры</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {FILTERS.map(f=>(
                      <button key={f.id} onClick={()=>setFilter(f)}
                        className={`py-2 px-3 text-xs rounded-xl border font-bold cursor-pointer transition-all ${filter.id===f.id?'bg-purple-500 border-purple-500 text-white':'border-border text-muted hover:text-white bg-transparent'}`}>
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="flex flex-col gap-4">
              <div className="bg-card border border-border rounded-xl p-3">
                <div className="text-muted text-xs uppercase tracking-widest mb-2">Предпросмотр</div>
                <canvas ref={previewRef} className="w-full rounded-lg bg-black"/>
                <div className="text-muted text-xs mt-1 text-center">{ratio.label}</div>
              </div>

              <div className="bg-card border border-border rounded-xl p-3">
                <div className="text-muted text-xs mb-1 truncate">📁 {fileName}</div>
                <div className="text-muted text-xs">{fmtT(duration)} · {ratio.w}×{ratio.h}</div>
              </div>

              {processing?(
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-purple-400 font-bold text-sm mb-1">{progress}%</div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-purple-500 rounded-full transition-all" style={{width:`${progress}%`}}/>
                  </div>
                  <div className="text-muted text-xs">{statusMsg||'Записываю...'}</div>
                  <div className="text-muted text-xs mt-1">Не закрывай страницу</div>
                </div>
              ):(
                <div className="flex flex-col gap-2">
                  <button onClick={exportCrop}
                    className="w-full py-3 bg-purple-500 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-all">
                    ⬇ Скачать обрезанное
                  </button>
                  {mode==='split'&&(
                    <button onClick={exportSplit}
                      className="w-full py-2.5 bg-card border border-purple-500/30 text-purple-400 font-bold text-xs rounded-xl hover:bg-purple-500/10">
                      🔪 Нарезать и скачать (Pro)
                    </button>
                  )}
                  <button onClick={()=>{setLoaded(false);cancelAnimationFrame(rafRef.current)}}
                    className="w-full py-2 border border-border text-muted text-xs rounded-xl hover:border-white/20 hover:text-white transition-colors">
                    Загрузить другое видео
                  </button>
                </div>
              )}

              {!paid&&(
                <button onClick={()=>setShowPay(true)}
                  className="p-3 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl text-center hover:border-yellow-400/40 transition-colors">
                  <div className="text-yellow-400 font-bold text-xs mb-0.5">✨ Pro · 149 ₽</div>
                  <div className="text-muted text-xs">Нарезка · Субтитры · Фильтры</div>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
