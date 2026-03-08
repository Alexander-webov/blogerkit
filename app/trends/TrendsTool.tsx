'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ── TYPES ─────────────────────────────────────────────────────
interface Video {
  id: string; title: string; channel: string
  views: number; likes: number; comments: number
  duration: string; publishedAt: string
  thumb: string; url: string; tags: string[]
}

// ── DATA ──────────────────────────────────────────────────────
const NICHES = [
  { id: 'auto',       label: 'Авто',         icon: '🚗', color: '#ff3d5a' },
  { id: 'finance',    label: 'Финансы',       icon: '💰', color: '#fbbf24' },
  { id: 'gaming',     label: 'Игры',          icon: '🎮', color: '#a78bfa' },
  { id: 'food',       label: 'Еда',           icon: '🍕', color: '#fb923c' },
  { id: 'fitness',    label: 'Фитнес',        icon: '💪', color: '#10b981' },
  { id: 'travel',     label: 'Путешествия',   icon: '✈️', color: '#00d4ff' },
  { id: 'beauty',     label: 'Красота',       icon: '💄', color: '#f472b6' },
  { id: 'tech',       label: 'Технологии',    icon: '🤖', color: '#818cf8' },
  { id: 'education',  label: 'Образование',   icon: '📚', color: '#34d399' },
  { id: 'motivation', label: 'Мотивация',     icon: '🔥', color: '#f97316' },
]

// ── HELPERS ───────────────────────────────────────────────────
function fmt(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000)     return (n / 1_000).toFixed(0) + 'K'
  return String(n)
}
function daysAgo(iso: string) {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000)
  if (d === 0) return 'сегодня'
  if (d === 1) return 'вчера'
  return `${d} дн назад`
}
function engagementRate(v: Video) {
  if (!v.views) return 0
  return +((v.likes + v.comments) / v.views * 100).toFixed(1)
}
function trendScore(v: Video) {
  // score = views weighted by recency
  const daysOld = Math.max(1, (Date.now() - new Date(v.publishedAt).getTime()) / 86400000)
  return Math.round(v.views / daysOld)
}

// ── PATTERN ANALYSIS ─────────────────────────────────────────
function analyzePatterns(videos: Video[]) {
  if (!videos.length) return null
  const titles = videos.map(v => v.title.toLowerCase())

  // Title length
  const avgLen = Math.round(titles.reduce((s, t) => s + t.length, 0) / titles.length)

  // Common words (filtered)
  const stopWords = new Set(['и','в','на','я','это','что','как','мне','за','с','по','а','не','то','из','к','для','от','до','из','он','она','они','мы','вы'])
  const wordCount: Record<string, number> = {}
  titles.forEach(t => t.split(/\s+/).forEach(w => {
    if (w.length > 3 && !stopWords.has(w)) wordCount[w] = (wordCount[w] || 0) + 1
  }))
  const topWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]).slice(0, 8)

  // Title patterns
  const hasNumbers = titles.filter(t => /\d/.test(t)).length
  const hasCaps    = titles.filter(t => /[А-ЯЁ]{3,}/.test(t)).length
  const hasEmoji   = titles.filter(t => /\p{Emoji}/u.test(t)).length
  const avgViews   = Math.round(videos.reduce((s, v) => s + v.views, 0) / videos.length)
  const topVideo   = [...videos].sort((a, b) => trendScore(b) - trendScore(a))[0]

  return { avgLen, topWords, hasNumbers, hasCaps, hasEmoji, avgViews, topVideo, total: videos.length }
}

// ── COMPONENT ─────────────────────────────────────────────────
export default function TrendsTool() {
  const [niche,   setNiche]   = useState('auto')
  const [videos,  setVideos]  = useState<Video[]>([])
  const [status,  setStatus]  = useState<'idle'|'loading'|'done'|'error'>('idle')
  const [error,   setError]   = useState('')
  const [sort,    setSort]    = useState<'views'|'trend'|'engagement'>('trend')
  const [query,   setQuery]   = useState('')

  const load = useCallback(async (n: string) => {
    setStatus('loading')
    setError('')
    try {
      const res  = await fetch(`/api/trends?niche=${n}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Ошибка')
      setVideos(data.videos || [])
      setQuery(data.query || '')
      setStatus('done')
    } catch (e: any) {
      setError(e.message)
      setStatus('error')
    }
  }, [])

  useEffect(() => { load(niche) }, [niche, load])

  const activeNiche = NICHES.find(n => n.id === niche)!
  const patterns    = analyzePatterns(videos)

  const sorted = [...videos].sort((a, b) => {
    if (sort === 'views')      return b.views - a.views
    if (sort === 'trend')      return trendScore(b) - trendScore(a)
    if (sort === 'engagement') return engagementRate(b) - engagementRate(a)
    return 0
  })

  return (
    <div className="min-h-screen bg-bg">

      {/* NAV */}
      <nav className="sticky top-0 z-40 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse2" style={{ background: activeNiche.color }} />
          БлогерКит
        </Link>
        <div className="flex items-center gap-2 text-muted text-xs">
          <span className="animate-pulse2">●</span> Данные за последние 7 дней · YouTube
        </div>
      </nav>

      {/* HERO */}
      <div className="relative overflow-hidden pt-12 pb-8 px-6 text-center">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 50% 30% at 50% 0%, ${activeNiche.color}11 0%, transparent 70%)` }} />
        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-muted mb-4">
            🔴 Обновляется каждые 2 часа
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-black tracking-tight mb-3">
            Тренды{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${activeNiche.color}, ${activeNiche.color}88)` }}>
              YouTube
            </span>
          </h1>
          <p className="text-muted text-sm">Что набирает просмотры прямо сейчас · Реальные данные</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">

        {/* NICHE SELECTOR */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {NICHES.map(n => (
            <button key={n.id} onClick={() => setNiche(n.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${niche === n.id ? 'text-black' : 'border-border text-muted hover:text-white bg-transparent'}`}
              style={niche === n.id ? { background: n.color, borderColor: n.color } : {}}>
              {n.icon} {n.label}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {status === 'loading' && (
          <div className="text-center py-20">
            <div className="relative w-12 h-12 mx-auto mb-4">
              <div className="w-12 h-12 rounded-full border-[3px] border-border animate-spin" style={{ borderTopColor: activeNiche.color }} />
            </div>
            <p className="text-muted text-sm">Загружаем тренды {activeNiche.icon} {activeNiche.label}...</p>
          </div>
        )}

        {/* ERROR */}
        {status === 'error' && (
          <div className="max-w-md mx-auto py-10 text-center">
            <div className="text-4xl mb-3">⚠️</div>
            <div className="font-bold text-sm mb-2">Не удалось загрузить</div>
            <div className="text-muted text-xs mb-4">{error}</div>
            <button onClick={() => load(niche)} className="px-4 py-2 border border-border rounded-lg text-sm hover:border-white/20 transition-colors">
              Попробовать снова
            </button>
          </div>
        )}

        {/* RESULTS */}
        {status === 'done' && patterns && (
          <div className="animate-fadeUp">

            {/* PATTERN INSIGHTS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { label: 'Средние просмотры',   val: fmt(patterns.avgViews),    sub: 'за 7 дней' },
                { label: 'Средняя длина загол.',  val: `${patterns.avgLen} симв`, sub: 'оптимум 50–70' },
                { label: 'С числами в заголовке', val: `${Math.round(patterns.hasNumbers / patterns.total * 100)}%`, sub: 'конвертируют лучше' },
                { label: 'С CAPS в заголовке',   val: `${Math.round(patterns.hasCaps    / patterns.total * 100)}%`, sub: 'для шок-контента' },
              ].map(s => (
                <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="font-heading text-xl font-black mb-0.5" style={{ color: activeNiche.color }}>{s.val}</div>
                  <div className="text-white text-xs font-semibold mb-0.5">{s.label}</div>
                  <div className="text-muted text-xs">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* TOP VIDEO HIGHLIGHT */}
            {patterns.topVideo && (
              <a href={patterns.topVideo.url} target="_blank" rel="noopener noreferrer"
                className="flex gap-4 bg-gradient-to-r from-white/4 to-transparent border border-white/10 rounded-2xl p-4 mb-6 hover:border-white/20 transition-all group">
                <div className="relative w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-black">
                  <Image src={patterns.topVideo.thumb} alt={patterns.topVideo.title} fill className="object-cover" sizes="160px" />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-black text-black" style={{ background: activeNiche.color }}>
                    🔥 ТРЕНД
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted mb-1">Самый быстрорастущий за 7 дней</div>
                  <div className="font-bold text-sm leading-snug mb-2 group-hover:text-white/80 transition-colors line-clamp-2">
                    {patterns.topVideo.title}
                  </div>
                  <div className="flex gap-4 text-xs">
                    <span className="font-bold" style={{ color: activeNiche.color }}>{fmt(patterns.topVideo.views)} просмотров</span>
                    <span className="text-muted">{patterns.topVideo.channel}</span>
                    <span className="text-muted">{daysAgo(patterns.topVideo.publishedAt)}</span>
                  </div>
                </div>
              </a>
            )}

            {/* POPULAR WORDS */}
            {patterns.topWords.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-4 mb-6">
                <div className="text-xs text-muted uppercase tracking-widest mb-3">💬 Частые слова в заголовках трендов</div>
                <div className="flex flex-wrap gap-2">
                  {patterns.topWords.map(([word, count]) => (
                    <div key={word} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs">
                      <span className="font-bold">{word}</span>
                      <span className="text-muted">×{count}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted text-xs mt-3">💡 Попробуй добавить эти слова в свои заголовки — они работают прямо сейчас</p>
              </div>
            )}

            {/* SORT */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-muted">Запрос: <span className="text-white">«{query}»</span> · {videos.length} видео</div>
              <div className="flex gap-2">
                {[['trend','🔥 Тренд'],['views','👁 Просмотры'],['engagement','❤️ Вовлечённость']].map(([v, l]) => (
                  <button key={v} onClick={() => setSort(v as any)}
                    className={`px-3 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${sort === v ? 'border-white/20 text-white bg-white/5' : 'border-border text-muted hover:text-white bg-transparent'}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* VIDEO LIST */}
            <div className="flex flex-col gap-3">
              {sorted.map((v, i) => {
                const eng   = engagementRate(v)
                const score = trendScore(v)
                return (
                  <a key={v.id} href={v.url} target="_blank" rel="noopener noreferrer"
                    className="flex gap-4 bg-card border border-border rounded-xl p-3 hover:border-white/15 transition-all group">

                    {/* RANK */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 self-center ${i===0?'text-black':i===1?'text-black':i===2?'text-black':'text-muted bg-white/5'}`}
                      style={i < 3 ? { background: i===0?activeNiche.color : i===1?'#94a3b8':'#cd7c3e' } : {}}>
                      {i + 1}
                    </div>

                    {/* THUMB */}
                    <div className="relative w-32 h-18 rounded-lg overflow-hidden flex-shrink-0 bg-black" style={{ height: '72px', width: '128px' }}>
                      <Image src={v.thumb} alt={v.title} fill className="object-cover" sizes="128px" />
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">{v.duration}</div>
                    </div>

                    {/* INFO */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm leading-snug mb-1 line-clamp-2 group-hover:text-white/80 transition-colors">{v.title}</div>
                      <div className="text-muted text-xs mb-2">{v.channel} · {daysAgo(v.publishedAt)}</div>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="font-bold" style={{ color: activeNiche.color }}>{fmt(v.views)} просм</span>
                        <span className="text-muted">{fmt(v.likes)} ❤️</span>
                        <span className="text-muted">{eng}% вовл.</span>
                        {sort === 'trend' && <span className="text-yellow-400">{fmt(score)}/день</span>}
                      </div>
                      {v.tags.length > 0 && (
                        <div className="flex gap-1 mt-1.5 flex-wrap">
                          {v.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-1.5 py-0.5 bg-white/4 border border-white/8 rounded text-xs text-muted">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 p-5 bg-card border border-border rounded-2xl text-center">
              <div className="font-heading text-sm font-bold mb-2">Хочешь снять видео по этому тренду?</div>
              <p className="text-muted text-xs mb-4">Проанализируй конкурентов подробнее или создай обложку прямо сейчас</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/analyze" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl hover:opacity-85 transition-opacity">
                  🔍 Анализировать конкурентов
                </Link>
                <Link href="/covers" className="px-4 py-2 border border-border text-xs rounded-xl hover:border-white/20 transition-colors">
                  🎨 Создать обложку
                </Link>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
