'use client'

import { useState } from 'react'
import Link from 'next/link'

// ── DATA ──────────────────────────────────────────────────────
const PLATFORMS = [
  { id: 'YouTube',    icon: '▶️', mult: 1.0 },
  { id: 'Telegram',   icon: '✈️', mult: 1.3 },
  { id: 'Instagram',  icon: '📸', mult: 1.1 },
  { id: 'TikTok',     icon: '🎵', mult: 0.8 },
  { id: 'ВКонтакте',  icon: '🔵', mult: 0.7 },
]

const NICHES = [
  { id: 'finance',       label: 'Финансы / Бизнес',   mult: 2.5 },
  { id: 'tech',          label: 'Технологии / IT',     mult: 2.0 },
  { id: 'education',     label: 'Образование',          mult: 1.7 },
  { id: 'auto',          label: 'Авто',                 mult: 1.5 },
  { id: 'beauty',        label: 'Красота / Мода',       mult: 1.4 },
  { id: 'sport',         label: 'Спорт / Фитнес',       mult: 1.3 },
  { id: 'travel',        label: 'Путешествия',          mult: 1.2 },
  { id: 'food',          label: 'Еда / Кулинария',      mult: 1.1 },
  { id: 'gaming',        label: 'Игры',                 mult: 1.1 },
  { id: 'entertainment', label: 'Развлечения / Влог',   mult: 1.0 },
]

const TYPES = [
  { id: 'mention',   label: 'Упоминание (15–30 сек)',    mult: 0.6 },
  { id: 'native',    label: 'Нативная реклама (1–3 мин)', mult: 1.0 },
  { id: 'dedicated', label: 'Посвящённое видео / пост',   mult: 2.2 },
  { id: 'pin',       label: 'Пин в шапке / закреп',       mult: 0.4 },
  { id: 'stories',   label: 'Stories / Клипы',            mult: 0.5 },
]

const ENGAGEMENTS = [
  { id: 'low',  label: 'Низкая — менее 2%', mult: 0.75 },
  { id: 'mid',  label: 'Средняя — 2–5%',    mult: 1.0  },
  { id: 'high', label: 'Высокая — более 5%', mult: 1.35 },
]

const CPM_TABLE = [
  { name: '▶️ YouTube',    range: '80–200 ₽' },
  { name: '✈️ Telegram',   range: '100–250 ₽' },
  { name: '📸 Instagram',  range: '70–180 ₽' },
  { name: '🎵 TikTok',     range: '60–150 ₽' },
  { name: '🔵 ВКонтакте',  range: '50–130 ₽' },
]

const NICHE_MULTS = [
  { name: 'Финансы / Бизнес', mult: '×2.5', color: 'text-green-400' },
  { name: 'Технологии / IT',  mult: '×2.0', color: 'text-green-400' },
  { name: 'Образование',       mult: '×1.7', color: 'text-green-400' },
  { name: 'Авто',              mult: '×1.5', color: 'text-yellow-400' },
  { name: 'Красота / Мода',    mult: '×1.4', color: 'text-yellow-400' },
  { name: 'Спорт / Фитнес',    mult: '×1.3', color: 'text-yellow-400' },
  { name: 'Путешествия',       mult: '×1.2', color: 'text-yellow-400' },
  { name: 'Еда / Игры',        mult: '×1.1', color: 'text-muted' },
  { name: 'Развлечения',       mult: '×1.0', color: 'text-muted' },
]

const FAQS = [
  { q: 'Как называть цену рекламодателю?', a: 'Называй верхнюю границу диапазона. Рекламодатель начнёт торговаться — у тебя будет пространство.' },
  { q: 'Когда можно начинать брать рекламу?', a: 'Практически — рекламодатели начинают интересоваться от 1 000–5 000 подписчиков если хорошая вовлечённость.' },
  { q: 'Где искать рекламодателей?', a: 'ВКонтакте: Маркет-платформа. Telegram: Telega.in, TGStat. YouTube: Напрямую писать брендам. Универсально: GetBlogger, Epicstars.' },
  { q: 'Что включить в медиакит?', a: 'Количество подписчиков, охват поста/видео, вовлечённость, демография аудитории, примеры прошлых интеграций и цены.' },
]

// ── HELPERS ───────────────────────────────────────────────────
function fmtRub(n: number) { return Math.round(n / 100) * 100 }
function fmtPrice(n: number) { return n.toLocaleString('ru') + ' ₽' }

interface Result {
  min: number; max: number; cpm: number
  typeName: string; platform: string; nicheName: string
  nicheM: number
  tips: { icon: string; text: string }[]
}

// ── COMPONENT ─────────────────────────────────────────────────
export default function CalculatorTool() {
  const [platform,   setPlatform]   = useState('YouTube')
  const [subs,       setSubs]       = useState('')
  const [views,      setViews]      = useState('')
  const [niche,      setNiche]      = useState('entertainment')
  const [adType,     setAdType]     = useState('native')
  const [engagement, setEngagement] = useState('mid')
  const [result,     setResult]     = useState<Result | null>(null)
  const [openFaq,    setOpenFaq]    = useState<number | null>(null)

  function calculate() {
    const s = parseInt(subs)  || 0
    const v = parseInt(views) || 0
    if (!s || !v) return

    const pm  = PLATFORMS.find(p => p.id === platform)?.mult || 1
    const nm  = NICHES.find(n => n.id === niche)?.mult || 1
    const tm  = TYPES.find(t => t.id === adType)?.mult || 1
    const em  = ENGAGEMENTS.find(e => e.id === engagement)?.mult || 1
    const base = v * 0.09 * nm * pm * tm * em
    const min  = fmtRub(base * 0.8)
    const max  = fmtRub(base * 1.3)
    const cpm  = Math.round((base / v) * 1000)

    const tips: { icon: string; text: string }[] = []
    if (s > 0 && v / s < 0.05) tips.push({ icon: '⚠️', text: 'Вовлечённость ниже среднего — учти это при переговорах.' })
    if (s > 0 && v / s >= 0.15) tips.push({ icon: '🔥', text: 'Отличная вовлечённость! Можешь просить на 20–30% больше.' })
    if (s >= 100000) tips.push({ icon: '💎', text: 'Канал 100k+ — создай медиакит, рекламодатели сами будут писать.' })
    if (s < 5000) tips.push({ icon: '💡', text: 'Первым рекламодателям сделай скидку 20–30% в обмен на отзыв.' })
    tips.push({ icon: '📋', text: 'Называй верхнюю границу при переговорах — рекламодатель всё равно поторгуется.' })

    setResult({
      min, max, cpm,
      typeName: TYPES.find(t => t.id === adType)?.label || '',
      platform,
      nicheName: NICHES.find(n => n.id === niche)?.label || '',
      nicheM: nm,
      tips,
    })
    setTimeout(() => document.getElementById('result')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100)
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* NAV */}
      <nav className="sticky top-0 z-40 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent2 animate-pulse2" />
          БлогерКит
        </Link>
        <div className="text-muted text-xs">💰 Калькулятор рекламы</div>
      </nav>

      {/* HERO */}
      <div className="relative overflow-hidden pt-12 pb-8 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(255,149,0,0.07)_0%,transparent_70%)]" />
        <div className="relative max-w-xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-black tracking-tight mb-3">
            Сколько стоит реклама<br />
            <span className="bg-gradient-to-r from-accent2 to-yellow-400 bg-clip-text text-transparent">на твоём канале?</span>
          </h1>
          <p className="text-muted text-sm">Введи данные канала — получи рекомендуемую цену для рекламодателей</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-[1fr_300px] gap-5 items-start">

        {/* FORM */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="font-heading text-sm font-bold mb-5">💰 Данные канала</div>

          {/* PLATFORM */}
          <div className="mb-4">
            <label className="text-muted text-xs uppercase tracking-widest block mb-2">Платформа</label>
            <div className="grid grid-cols-5 gap-2">
              {PLATFORMS.map(p => (
                <button key={p.id} onClick={() => setPlatform(p.id)}
                  className={`py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${platform === p.id ? 'bg-accent/10 border-accent/40 text-accent' : 'border-border text-muted hover:text-white bg-transparent'}`}>
                  <div className="text-lg mb-0.5">{p.icon}</div>
                  {p.id}
                </button>
              ))}
            </div>
          </div>

          {/* SUBS + VIEWS */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-muted text-xs uppercase tracking-widest block mb-1.5">Подписчики</label>
              <input type="number" placeholder="10 000" value={subs} onChange={e => setSubs(e.target.value)}
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent2 transition-colors" />
            </div>
            <div>
              <label className="text-muted text-xs uppercase tracking-widest block mb-1.5">Средние просмотры</label>
              <input type="number" placeholder="5 000" value={views} onChange={e => setViews(e.target.value)}
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent2 transition-colors" />
            </div>
          </div>

          {/* NICHE + TYPE */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-muted text-xs uppercase tracking-widest block mb-1.5">Тематика</label>
              <select value={niche} onChange={e => setNiche(e.target.value)}
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent2 transition-colors text-white">
                {NICHES.map(n => <option key={n.id} value={n.id}>{n.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-muted text-xs uppercase tracking-widest block mb-1.5">Тип интеграции</label>
              <select value={adType} onChange={e => setAdType(e.target.value)}
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent2 transition-colors text-white">
                {TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
              </select>
            </div>
          </div>

          {/* ENGAGEMENT */}
          <div className="mb-5">
            <label className="text-muted text-xs uppercase tracking-widest block mb-1.5">Вовлечённость</label>
            <select value={engagement} onChange={e => setEngagement(e.target.value)}
              className="w-full px-3 py-2.5 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent2 transition-colors text-white">
              {ENGAGEMENTS.map(e => <option key={e.id} value={e.id}>{e.label}</option>)}
            </select>
          </div>

          <button onClick={calculate}
            className="w-full py-3 bg-gradient-to-r from-accent2 to-orange-600 text-black font-black text-sm rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5">
            Рассчитать стоимость →
          </button>

          {/* RESULT */}
          {result && (
            <div id="result" className="mt-4 p-5 bg-gradient-to-br from-accent2/8 to-accent/6 border border-accent2/25 rounded-xl animate-fadeUp">
              <div className="text-muted text-xs uppercase tracking-widest mb-1">Рекомендуемая цена рекламы</div>
              <div className="font-heading text-3xl font-black text-yellow-400 mb-1">
                {fmtPrice(result.min)} — {fmtPrice(result.max)}
              </div>
              <div className="text-muted text-xs mb-4">{result.typeName} · {result.platform} · {result.nicheName}</div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { label: 'Минимум', val: fmtPrice(result.min), color: 'text-green-400' },
                  { label: 'Максимум', val: fmtPrice(result.max), color: 'text-yellow-400' },
                  { label: 'CPM', val: fmtPrice(result.cpm), color: 'text-white' },
                  { label: 'Коэфф. ниши', val: `×${result.nicheM}`, color: 'text-white' },
                ].map(item => (
                  <div key={item.label} className="bg-white/4 rounded-xl p-3">
                    <div className="text-muted text-xs mb-1">{item.label}</div>
                    <div className={`font-bold text-sm ${item.color}`}>{item.val}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {result.tips.map((tip, i) => (
                  <div key={i} className="flex gap-2 text-xs text-muted p-2 bg-white/3 rounded-lg border-l-2 border-accent2">
                    <span>{tip.icon}</span>
                    <span>{tip.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="flex flex-col gap-4">

          {/* CPM TABLE */}
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="font-heading text-xs font-bold mb-3">📊 Ставки CPM</div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-muted text-xs pb-2">Платформа</th>
                  <th className="text-right text-muted text-xs pb-2">CPM</th>
                </tr>
              </thead>
              <tbody>
                {CPM_TABLE.map(row => (
                  <tr key={row.name} className="border-t border-white/4">
                    <td className="py-2 text-xs">{row.name}</td>
                    <td className="py-2 text-right font-heading text-xs font-bold text-yellow-400">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* NICHE MULTIPLIERS */}
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="font-heading text-xs font-bold mb-3">🎯 Коэффициент ниши</div>
            {NICHE_MULTS.map(n => (
              <div key={n.name} className="flex items-center justify-between py-1.5 border-b border-white/4 last:border-0">
                <span className="text-muted text-xs">{n.name}</span>
                <span className={`font-bold text-xs ${n.color}`}>{n.mult}</span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="font-heading text-xs font-bold mb-3">❓ Вопросы</div>
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-white/4 last:border-0">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-2.5 text-left bg-transparent border-none cursor-pointer">
                  <span className="text-xs font-semibold pr-2">{faq.q}</span>
                  <span className={`text-muted text-xs transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === i && <p className="text-muted text-xs pb-3 leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
