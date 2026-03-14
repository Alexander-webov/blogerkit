'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ── TYPES ──────────────────────────────────────────────────────
interface Video {
  id: string
  title: string
  channel: string
  views: number
  likes: number
  comments: number
  duration: string
  age: string
  thumb: string
  url: string
}

// ── HELPERS ────────────────────────────────────────────────────
function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000)     return (n / 1_000).toFixed(0) + 'K'
  return String(n)
}

const HINTS = ['авто обзор','похудение','криптовалюта','рецепты','игры','путешествия','макияж','инвестиции']

// ── PAYWALL COMPONENT ──────────────────────────────────────────
function Paywall({ query, videos, onSuccess, onClose }: {
  query: string
  videos: Video[]
  onSuccess: () => void
  onClose: () => void
}) {
  const [state, setState] = useState<'offer'|'card'|'processing'>('offer')
  const [card, setCard] = useState({ num: '', exp: '', cvv: '', email: '' })
  const [step, setStep] = useState(0)

  function formatCardNum(v: string) {
    return v.replace(/\D/g,'').substring(0,16).match(/.{1,4}/g)?.join(' ') || ''
  }
  function formatExp(v: string) {
    const d = v.replace(/\D/g,'')
    return d.length >= 2 ? d.substring(0,2) + '/' + d.substring(2,4) : d
  }

  function pay() {
    if (card.num.replace(/\s/g,'').length < 16 || card.exp.length < 5 || card.cvv.length < 3) {
      alert('Заполни все поля карты')
      return
    }
    setState('processing')
    let i = 0
    const iv = setInterval(() => {
      i++
      setStep(i)
      if (i >= 3) {
        clearInterval(iv)
        setTimeout(onSuccess, 600)
      }
    }, 900)
  }

  const steps = ['Проверка карты...','Авторизация платежа...','Загрузка результатов...']
  const doneSteps = ['✓ Карта проверена','✓ Платёж авторизован','✓ Результаты загружены']

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
         onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-surface border border-border rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center"
           onClick={(e) => e.stopPropagation()}>

        {/* OFFER */}
        {state === 'offer' && (
          <div className="animate-fadeUp">
            <div className="text-4xl mb-3">🔍</div>
            <div className="font-heading text-lg font-black mb-2">
              Результаты <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">готовы!</span>
            </div>
            <p className="text-muted text-xs leading-relaxed mb-4">
              Нашли реальные видео конкурентов с YouTube.<br/>Получи полный отчёт за один платёж.
            </p>
            <div className="inline-block px-3 py-1 rounded-lg border border-accent/25 bg-accent/10 text-accent text-xs font-semibold mb-4">
              🔎 {query}
            </div>
            <div className="font-heading text-5xl font-black text-yellow-400 leading-none mb-1">29 ₽</div>
            <div className="text-muted text-xs mb-5">разовый платёж · результат сразу</div>

            <div className="flex flex-col gap-2 mb-5 text-left bg-white/3 border border-border rounded-xl p-4">
              {['Топ-10 реальных видео конкурентов','Просмотры, лайки, комментарии','Инсайты и паттерны заголовков','Анализ цветов обложек','Лучшее время публикации'].map(f => (
                <div key={f} className="flex items-center gap-2 text-xs">
                  <span className="text-green-400 text-xs font-black">✓</span> {f}
                </div>
              ))}
            </div>
            <button onClick={() => setState('card')}
              className="w-full py-3 bg-gradient-to-r from-accent2 to-orange-600 text-black font-black text-sm rounded-xl mb-2 hover:opacity-90 transition-all hover:-translate-y-0.5">
              Оплатить 29 ₽ →
            </button>
            <button onClick={onClose} className="w-full py-2 border border-border text-muted text-xs rounded-xl hover:text-white transition-colors">
              Отмена
            </button>
          </div>
        )}

        {/* CARD FORM */}
        {state === 'card' && (
          <div className="animate-fadeUp text-left">
            <button onClick={() => setState('offer')} className="text-muted text-xs mb-4 flex items-center gap-1 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
              ← Назад
            </button>
            <div className="font-heading text-sm font-bold text-center mb-5">💳 Оплата</div>
            <div className="mb-3">
              <label className="text-muted text-xs uppercase tracking-widest block mb-1">Номер карты</label>
              <input className="w-full px-3 py-2.5 bg-bg border border-border rounded-lg text-sm outline-none focus:border-accent2 transition-colors"
                placeholder="0000 0000 0000 0000" maxLength={19}
                value={card.num} onChange={e => setCard({...card, num: formatCardNum(e.target.value)})} />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-muted text-xs uppercase tracking-widest block mb-1">Срок</label>
                <input className="w-full px-3 py-2.5 bg-bg border border-border rounded-lg text-sm outline-none focus:border-accent2 transition-colors"
                  placeholder="ММ/ГГ" maxLength={5}
                  value={card.exp} onChange={e => setCard({...card, exp: formatExp(e.target.value)})} />
              </div>
              <div>
                <label className="text-muted text-xs uppercase tracking-widest block mb-1">CVV</label>
                <input type="password" className="w-full px-3 py-2.5 bg-bg border border-border rounded-lg text-sm outline-none focus:border-accent2 transition-colors"
                  placeholder="•••" maxLength={3}
                  value={card.cvv} onChange={e => setCard({...card, cvv: e.target.value})} />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-muted text-xs uppercase tracking-widest block mb-1">Email для чека</label>
              <input type="email" className="w-full px-3 py-2.5 bg-bg border border-border rounded-lg text-sm outline-none focus:border-accent2 transition-colors"
                placeholder="your@email.com"
                value={card.email} onChange={e => setCard({...card, email: e.target.value})} />
            </div>
            <div className="text-center text-muted text-xs mb-4 flex items-center justify-center gap-1">
              🔒 Демо-режим · реальных списаний нет
            </div>
            <button onClick={pay}
              className="w-full py-3 bg-gradient-to-r from-accent2 to-orange-600 text-black font-black text-sm rounded-xl mb-2 hover:opacity-90 transition-all">
              Оплатить 29 ₽ →
            </button>
            <button onClick={() => setState('offer')} className="w-full py-2 border border-border text-muted text-xs rounded-xl hover:text-white transition-colors">
              Отмена
            </button>
          </div>
        )}

        {/* PROCESSING */}
        {state === 'processing' && (
          <div className="animate-fadeUp py-4">
            <div className="w-11 h-11 border-[3px] border-border border-t-accent2 rounded-full animate-spin mx-auto mb-4" />
            <div className="font-heading text-sm font-bold mb-1">Обрабатываем платёж...</div>
            <div className="text-muted text-xs mb-6">Не закрывай страницу</div>
            <div className="flex flex-col gap-2 text-left">
              {steps.map((s, i) => (
                <div key={s} className={`flex items-center gap-2 text-xs transition-colors ${step > i ? 'text-green-400' : 'text-muted'}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  {step > i ? doneSteps[i] : s}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ── MAIN COMPONENT ─────────────────────────────────────────────
export default function AnalyzeTool() {
  const [query,    setQuery]    = useState('')
  const [status,   setStatus]   = useState<'idle'|'loading'|'paywall'|'results'>('idle')
  const [videos,   setVideos]   = useState<Video[]>([])
  const [error,    setError]    = useState('')
  const [sort,     setSort]     = useState('views')
  const [paywallQ, setPaywallQ] = useState('')
  const [paywallV, setPaywallV] = useState<Video[]>([])
  const [unlocked, setUnlocked] = useState(false)

  async function search() {
    const q = query.trim()
    if (!q) return
    setStatus('loading')
    setError('')
    try {
      const res  = await fetch(`/api/youtube?q=${encodeURIComponent(q)}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Ошибка API')
      setPaywallQ(q)
      setPaywallV(data.videos)
      setStatus('paywall')
    } catch(e: any) {
      setError(e.message)
      setStatus('idle')
    }
  }

  function onPaySuccess() {
    setVideos(paywallV)
    setUnlocked(true)
    setStatus('results')
  }

  const sorted = [...videos].sort((a, b) => {
    if (sort === 'views')      return b.views - a.views
    if (sort === 'engagement') return (b.likes + b.comments) - (a.likes + a.comments)
    return 0
  })

  const totalViews = videos.reduce((s, v) => s + v.views, 0)
  const avgViews   = videos.length ? Math.round(totalViews / videos.length) : 0

  return (
    <>
      {/* PAYWALL */}
      {status === 'paywall' && (
        <Paywall
          query={paywallQ}
          videos={paywallV}
          onSuccess={onPaySuccess}
          onClose={() => setStatus('idle')}
        />
      )}

      <div className="min-h-screen bg-bg">
        {/* NAV */}
        <nav className="sticky top-0 z-40 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
          <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
            БлогерКит
          </Link>
          <div className="text-muted text-xs">🔍 Анализ конкурентов · YouTube</div>
        </nav>

        {/* HERO + SEARCH */}
        <div className="relative overflow-hidden pt-12 pb-8 px-6 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(0,212,255,0.06)_0%,transparent_70%)]" />
          <div className="relative max-w-xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-black tracking-tight leading-tight mb-3">
              Анализ <span className="bg-gradient-to-r from-accent3 to-green-400 bg-clip-text text-transparent">конкурентов</span>
            </h1>
            <p className="text-muted text-sm mb-6">Реальные данные с YouTube · 29 ₽ за запрос</p>

            {/* SEARCH BAR */}
            <div className="flex gap-2 max-w-lg mx-auto mb-4">
              <input
                className="flex-1 px-4 py-3 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent3 transition-colors placeholder:text-muted"
                placeholder="Введи нишу: авто, фитнес, кулинария..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && search()}
              />
              <button onClick={search}
                className="px-5 py-3 bg-accent text-white text-sm font-bold rounded-xl hover:opacity-85 transition-all whitespace-nowrap">
                Анализировать →
              </button>
            </div>

            {/* HINTS */}
            <div className="flex flex-wrap gap-2 justify-center">
              {HINTS.map(h => (
                <button key={h} onClick={() => { setQuery(h); }}
                  className="px-3 py-1 text-xs border border-border rounded-full text-muted hover:text-white hover:border-white/20 transition-colors bg-transparent cursor-pointer">
                  {h}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16">

          {/* LOADING */}
          {status === 'loading' && (
            <div className="text-center py-20">
              <div className="w-10 h-10 border-[3px] border-border border-t-accent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted text-sm">Загружаем реальные данные с YouTube...</p>
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="max-w-md mx-auto py-10 text-center">
              <div className="text-4xl mb-3">⚠️</div>
              <div className="font-bold text-sm mb-2">Ошибка загрузки</div>
              <div className="text-muted text-xs">{error}</div>
            </div>
          )}

          {/* IDLE */}
          {status === 'idle' && !error && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <div className="font-heading text-lg font-bold mb-2">Введи нишу чтобы начать</div>
              <div className="text-muted text-sm">Например "авто обзор" или "фитнес для начинающих"</div>
            </div>
          )}

          {/* RESULTS */}
          {status === 'results' && videos.length > 0 && (
            <div className="animate-fadeUp">
              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: 'Всего просмотров', val: fmt(totalViews) },
                  { label: 'Средние просмотры', val: fmt(avgViews) },
                  { label: 'Видео найдено', val: String(videos.length) },
                  { label: 'Конкуренция', val: avgViews > 1_500_000 ? 'Высокая' : avgViews > 500_000 ? 'Средняя' : 'Низкая' },
                ].map(s => (
                  <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                    <div className="font-heading text-xl font-black text-accent">{s.val}</div>
                    <div className="text-muted text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* SORT */}
              <div className="flex gap-2 mb-4">
                {[['views','По просмотрам'],['engagement','По вовлечённости']].map(([v,l]) => (
                  <button key={v} onClick={() => setSort(v)}
                    className={`px-3 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${sort===v ? 'bg-accent/10 border-accent/30 text-accent' : 'border-border text-muted hover:text-white bg-transparent'}`}>
                    {l}
                  </button>
                ))}
              </div>

              {/* VIDEOS */}
              <div className="flex flex-col gap-3">
                {sorted.map((v, i) => (
                  <a key={v.id} href={v.url} target="_blank" rel="noopener noreferrer"
                    className="bg-card border border-border rounded-xl overflow-hidden flex gap-4 p-3 hover:border-white/15 transition-all group">
                    <div className="relative flex-shrink-0 w-36 h-20 rounded-lg overflow-hidden bg-black">
                      <Image src={v.thumb} alt={v.title} fill className="object-cover" sizes="144px" />
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">{v.duration}</div>
                      <div className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${i===0?'bg-yellow-400 text-black':i===1?'bg-gray-400 text-black':i===2?'bg-orange-500 text-black':'bg-black/60 text-white'}`}>
                        {i+1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm leading-snug mb-1 line-clamp-2 group-hover:text-accent3 transition-colors">{v.title}</div>
                      <div className="text-muted text-xs mb-2">{v.channel} · {v.age}</div>
                      <div className="flex gap-4 text-xs">
                        <span className="text-accent font-bold">{fmt(v.views)} просмотров</span>
                        <span className="text-muted">{fmt(v.likes)} лайков</span>
                        <span className="text-muted">{fmt(v.comments)} комментов</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
