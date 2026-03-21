'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePayment, saveStateBeforePayment, restoreStateAfterPayment } from '@/lib/usePayment'
import PaymentSuccessToast from '@/components/PaymentSuccessToast'

interface Video {
  id: string; title: string; channel: string; channelId: string
  views: number; likes: number; comments: number; likeRate: number
  duration: string; durationSec: number; isShort: boolean; format: string
  publishedAt: string; age: string; publishDate: string
  tags: string[]; thumb: string; url: string
}
interface Meta {
  totalVideos: number; totalViews: number; avgViews: number; avgLikeRate: number
  shortsCount: number; longCount: number; competition: string
  topWords: { word: string; count: number }[]
}

function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000)     return (n / 1_000).toFixed(0) + 'K'
  return String(n)
}

const HINTS = ['авто обзор', 'похудение', 'криптовалюта', 'рецепты', 'игры', 'путешествия', 'макияж', 'инвестиции', 'психология', 'фитнес']
const PERIODS = [
  { id: 'week',  label: 'Неделя' },
  { id: 'month', label: 'Месяц' },
  { id: 'year',  label: 'Год' },
]

// ── PAYWALL ──────────────────────────────────────────────────────────────────
function Paywall({ query, onSuccess, onClose }: { query: string; onSuccess: () => void; onClose: () => void }) {
  const { startPayment, loading, error, paid } = usePayment('analyze')
  if (paid) { onSuccess(); return null }
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
         onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-surface border border-border rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center">
        <div className="text-4xl mb-3">🔍</div>
        <div className="font-heading text-lg font-black mb-1">Результаты готовы!</div>
        <p className="text-muted text-xs mb-4">Топ видео по запросу <span className="text-white font-semibold">«{query}»</span> — полный анализ с тегами, паттернами и рекомендациями.</p>
        <div className="font-heading text-5xl font-black text-yellow-400 mb-1">149 ₽</div>
        <div className="text-muted text-xs mb-5">разовый платёж · доступ сохраняется навсегда</div>
        <div className="grid grid-cols-2 gap-2 mb-5 text-left text-xs">
          {['Топ-15 видео с полной статистикой','Теги каждого видео','Паттерны заголовков (топ слова)','Формат: Shorts или полное','Дата публикации и длина','Рекомендации по нише','Уровень конкуренции','Фильтр: неделя / месяц / год'].map(f => (
            <div key={f} className="flex items-start gap-1.5">
              <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
              <span className="text-muted">{f}</span>
            </div>
          ))}
        </div>
        {error && <div className="text-red-400 text-xs mb-3 p-2 bg-red-500/10 rounded-lg">{error}</div>}
        <button onClick={startPayment} disabled={loading}
          className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-sm rounded-xl mb-2 hover:opacity-90 transition-all disabled:opacity-50">
          {loading ? <span className="flex items-center justify-center gap-2"><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"/>Перенаправляю...</span> : '💳 Оплатить 149 ₽'}
        </button>
        <button onClick={onClose} className="w-full py-2 border border-border text-muted text-xs rounded-xl hover:text-white transition-colors">Отмена</button>
      </div>
    </div>
  )
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function AnalyzeTool() {
  const [query,    setQuery]    = useState('')
  const [period,   setPeriod]   = useState('month')
  const [status,   setStatus]   = useState<'idle'|'loading'|'paywall'|'results'>('idle')
  const [videos,   setVideos]   = useState<Video[]>([])
  const [meta,     setMeta]     = useState<Meta | null>(null)
  const [error,    setError]    = useState('')
  const [sort,     setSort]     = useState('views')
  const [paywallQ, setPaywallQ] = useState('')
  const [paywallV, setPaywallV] = useState<Video[]>([])
  const [paywallM, setPaywallM] = useState<Meta | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  const { paid, justPaid, info } = usePayment('analyze')

  useEffect(() => {
    const saved = restoreStateAfterPayment<{ query: string; videos: Video[]; meta: Meta }>('analyze')
    if (saved?.videos?.length) {
      setQuery(saved.query); setVideos(saved.videos); setMeta(saved.meta); setStatus('results')
    }
  }, [])

  async function search() {
    const q = query.trim(); if (!q) return
    setStatus('loading'); setError('')
    try {
      const res  = await fetch(`/api/youtube?q=${encodeURIComponent(q)}&period=${period}`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Ошибка API')
      setPaywallQ(q); setPaywallV(data.videos); setPaywallM(data.meta)
      if (paid) { setVideos(data.videos); setMeta(data.meta); setStatus('results') }
      else { saveStateBeforePayment('analyze', { query: q, videos: data.videos, meta: data.meta }); setStatus('paywall') }
    } catch (e: any) { setError(e.message); setStatus('idle') }
  }

  const sorted = [...videos].sort((a, b) =>
    sort === 'views' ? b.views - a.views :
    sort === 'likes' ? b.likeRate - a.likeRate :
    sort === 'date'  ? new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime() :
    b.comments - a.comments
  )

  return (
    <>
      <PaymentSuccessToast show={justPaid} productName={info.name} />
      {status === 'paywall' && <Paywall query={paywallQ} onSuccess={() => { setVideos(paywallV); setMeta(paywallM); setStatus('results') }} onClose={() => setStatus('idle')} />}

      <div className="min-h-screen bg-bg">
        <nav className="sticky top-0 z-40 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
          <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse2"/>БлогерКит
          </Link>
          <div className="text-muted text-xs">🔍 Анализ конкурентов · 149 ₽</div>
        </nav>

        {/* HERO */}
        <div className="relative overflow-hidden pt-10 pb-6 px-6 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(0,212,255,0.06)_0%,transparent_70%)]"/>
          <div className="relative max-w-2xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-black tracking-tight leading-tight mb-2">
              Анализ <span className="bg-gradient-to-r from-accent3 to-green-400 bg-clip-text text-transparent">конкурентов</span>
            </h1>
            <p className="text-muted text-sm mb-6">Топ видео, теги, паттерны заголовков, уровень конкуренции · <span className="text-yellow-400 font-semibold">149 ₽ за запрос</span></p>

            {/* PERIOD */}
            <div className="flex justify-center gap-2 mb-4">
              {PERIODS.map(p => (
                <button key={p.id} onClick={() => setPeriod(p.id)}
                  className={`px-4 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer font-semibold
                    ${period === p.id ? 'bg-accent/15 border-accent/40 text-accent' : 'border-border text-muted hover:text-white bg-transparent'}`}>
                  {p.label}
                </button>
              ))}
            </div>

            {/* SEARCH */}
            <div className="flex gap-2 max-w-xl mx-auto mb-4">
              <input className="flex-1 px-4 py-3 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent3 transition-colors placeholder:text-muted"
                placeholder="Введи нишу: авто, фитнес, кулинария..."
                value={query} onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && search()}/>
              <button onClick={search} className="px-5 py-3 bg-accent text-white text-sm font-bold rounded-xl hover:opacity-85 transition-all whitespace-nowrap">
                Анализировать →
              </button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {HINTS.map(h => (
                <button key={h} onClick={() => setQuery(h)}
                  className="px-3 py-1 text-xs border border-border rounded-full text-muted hover:text-white hover:border-white/20 transition-colors bg-transparent cursor-pointer">
                  {h}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-20">

          {/* LOADING */}
          {status === 'loading' && (
            <div className="text-center py-20">
              <div className="w-10 h-10 border-[3px] border-border border-t-accent rounded-full animate-spin mx-auto mb-4"/>
              <p className="text-muted text-sm">Загружаем данные с YouTube...</p>
            </div>
          )}

          {/* ERROR */}
          {error && <div className="max-w-md mx-auto py-10 text-center"><div className="text-4xl mb-3">⚠️</div><div className="text-muted text-xs">{error}</div></div>}

          {/* IDLE */}
          {status === 'idle' && !error && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <div className="font-heading text-xl font-bold mb-2">Введи нишу чтобы начать</div>
              <div className="text-muted text-sm max-w-sm mx-auto">Получи топ видео с тегами, паттернами заголовков и рекомендациями по нише</div>
            </div>
          )}

          {/* RESULTS */}
          {status === 'results' && meta && (
            <div className="animate-fadeUp space-y-6">

              {/* STATS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Всего просмотров',   val: fmt(meta.totalViews),  sub: `${meta.totalVideos} видео` },
                  { label: 'Средние просмотры',  val: fmt(meta.avgViews),    sub: 'на видео' },
                  { label: 'Конкуренция',        val: meta.competition,      sub: meta.avgViews > 1_500_000 ? 'высокий порог входа' : meta.avgViews > 300_000 ? 'можно зайти' : 'легко войти' },
                  { label: 'Средний лайк-рейт',  val: meta.avgLikeRate + '%', sub: 'вовлечённость' },
                ].map(s => (
                  <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
                    <div className="font-heading text-xl font-black text-accent">{s.val}</div>
                    <div className="text-white text-xs font-semibold mt-0.5">{s.label}</div>
                    <div className="text-muted text-xs mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* FORMAT + WORDS ROW */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* FORMAT PIE */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="text-xs text-muted uppercase tracking-widest mb-4">Формат видео</div>
                  <div className="flex items-center gap-6 mb-4">
                    <div className="text-center">
                      <div className="font-heading text-3xl font-black text-red-400">{meta.shortsCount}</div>
                      <div className="text-xs text-muted mt-1">📱 Shorts</div>
                    </div>
                    <div className="flex-1 h-3 bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full transition-all"
                        style={{ width: `${meta.totalVideos ? (meta.shortsCount / meta.totalVideos) * 100 : 0}%` }}/>
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-3xl font-black text-blue-400">{meta.longCount}</div>
                      <div className="text-xs text-muted mt-1">🎬 Полные</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted">
                    {meta.shortsCount > meta.longCount
                      ? '💡 Ниша живёт в Shorts — короткий формат доминирует'
                      : meta.longCount > meta.shortsCount
                      ? '💡 Ниша предпочитает длинный контент — глубокие видео работают лучше'
                      : '💡 Форматы примерно одинаковы — можно пробовать оба'}
                  </div>
                </div>

                {/* TOP WORDS */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="text-xs text-muted uppercase tracking-widest mb-4">Паттерны заголовков — топ слова</div>
                  <div className="flex flex-wrap gap-1.5">
                    {meta.topWords.slice(0, 16).map(({ word, count }) => {
                      const max = meta.topWords[0]?.count || 1
                      const pct = count / max
                      const size = pct > 0.7 ? 'text-base font-black' : pct > 0.4 ? 'text-sm font-bold' : 'text-xs font-semibold'
                      const color = pct > 0.7 ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
                        : pct > 0.4 ? 'text-accent bg-accent/10 border-accent/30'
                        : 'text-muted bg-surface border-border'
                      return (
                        <span key={word} className={`px-2.5 py-1 rounded-lg border ${size} ${color}`} title={`встречается ${count} раз`}>
                          {word}
                        </span>
                      )
                    })}
                  </div>
                  <div className="text-xs text-muted mt-3">Используй эти слова в своих заголовках — они работают в нише</div>
                </div>
              </div>

              {/* VIDEO LIST */}
              <div>
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="font-heading text-base font-black">Топ {videos.length} видео</div>
                  <div className="flex gap-2">
                    {[['views','Просмотры'],['likes','Лайк-рейт'],['date','Дата'],['comments','Комменты']].map(([v,l]) => (
                      <button key={v} onClick={() => setSort(v)}
                        className={`px-3 py-1 text-xs rounded-lg border transition-colors cursor-pointer ${sort === v ? 'bg-accent/10 border-accent/30 text-accent' : 'border-border text-muted hover:text-white bg-transparent'}`}>
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {sorted.map((v, i) => (
                    <div key={v.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-white/15 transition-all">
                      {/* MAIN ROW */}
                      <div className="flex gap-4 p-3">
                        <div className="relative flex-shrink-0 w-40 h-22 rounded-lg overflow-hidden bg-black" style={{height:'88px'}}>
                          <Image src={v.thumb} alt={v.title} fill className="object-cover" sizes="160px"/>
                          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-mono">{v.duration}</div>
                          <div className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-xs font-black ${v.isShort ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}>
                            {v.isShort ? '📱 Short' : '🎬'}
                          </div>
                          <div className={`absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black
                            ${i===0?'bg-yellow-400 text-black':i===1?'bg-gray-300 text-black':i===2?'bg-orange-500 text-white':'bg-black/60 text-white'}`}>
                            {i+1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <a href={v.url} target="_blank" rel="noopener noreferrer"
                            className="font-semibold text-sm leading-snug line-clamp-2 hover:text-accent3 transition-colors block mb-1">{v.title}</a>
                          <div className="text-muted text-xs mb-2">{v.channel} · {v.publishDate}</div>
                          <div className="flex flex-wrap gap-3 text-xs">
                            <span className="text-accent font-bold">👁 {fmt(v.views)}</span>
                            <span className="text-green-400">👍 {fmt(v.likes)} <span className="text-muted">({v.likeRate}%)</span></span>
                            <span className="text-muted">💬 {fmt(v.comments)}</span>
                            <span className={`font-semibold ${v.isShort ? 'text-red-400' : 'text-blue-400'}`}>{v.format}</span>
                          </div>
                        </div>
                        <button onClick={() => setExpanded(expanded === v.id ? null : v.id)}
                          className="flex-shrink-0 self-center w-8 h-8 flex items-center justify-center text-muted hover:text-white transition-colors">
                          {expanded === v.id ? '▲' : '▼'}
                        </button>
                      </div>

                      {/* EXPANDED */}
                      {expanded === v.id && (
                        <div className="border-t border-border px-4 py-3 bg-black/20 space-y-3">
                          {/* TAGS */}
                          {v.tags.length > 0 && (
                            <div>
                              <div className="text-xs text-muted uppercase tracking-widest mb-2">Теги</div>
                              <div className="flex flex-wrap gap-1.5">
                                {v.tags.map(tag => (
                                  <span key={tag} className="px-2 py-0.5 bg-surface border border-border rounded text-xs text-muted">{tag}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* RECOMMENDATIONS */}
                          <div>
                            <div className="text-xs text-muted uppercase tracking-widest mb-2">Выводы и рекомендации</div>
                            <div className="space-y-1 text-xs text-muted">
                              {v.likeRate > 5 && <div className="flex gap-2"><span className="text-green-400">✓</span><span>Высокая вовлечённость ({v.likeRate}%) — аудитория горячая, тема работает</span></div>}
                              {v.likeRate < 1 && <div className="flex gap-2"><span className="text-yellow-400">⚠</span><span>Низкий лайк-рейт — возможно кликбейт или холодный трафик</span></div>}
                              {v.isShort && <div className="flex gap-2"><span className="text-blue-400">💡</span><span>Shorts формат — попробуй снять похожее короткое видео, алгоритм активно продвигает</span></div>}
                              {!v.isShort && v.durationSec > 1200 && <div className="flex gap-2"><span className="text-blue-400">💡</span><span>Длинное видео ({v.duration}) с большими просмотрами — аудитория готова смотреть глубокий контент</span></div>}
                              {v.comments > v.likes * 0.1 && <div className="flex gap-2"><span className="text-purple-400">💬</span><span>Много комментариев — тема вызывает дискуссию, отличный сигнал для алгоритма</span></div>}
                              <div className="flex gap-2"><span className="text-accent">📅</span><span>Опубликовано {v.age} · {v.publishDate}</span></div>
                              {v.tags.length > 0 && <div className="flex gap-2"><span className="text-yellow-400">🏷</span><span>Используй теги: <span className="text-white">{v.tags.slice(0,5).join(', ')}</span></span></div>}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM CTA */}
              <div className="text-center pt-4 pb-2">
                <button onClick={() => { setStatus('idle'); setVideos([]); setMeta(null) }}
                  className="px-6 py-2.5 border border-border text-muted text-sm rounded-xl hover:text-white hover:border-white/20 transition-colors">
                  ← Новый поиск
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
