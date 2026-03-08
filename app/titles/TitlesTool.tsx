'use client'

import { useState } from 'react'
import Link from 'next/link'

const STYLES = [
  { id: 'viral',    label: '🔥 Вирусный',  desc: 'Шок, эмоция, максимальный CTR' },
  { id: 'seo',      label: '🔍 SEO',        desc: 'Ключевые слова для поиска' },
  { id: 'story',    label: '📖 История',    desc: 'Личная история, трансформация' },
  { id: 'listicle', label: '📋 Список',     desc: 'ТОП-5, 10 способов, 7 причин' },
  { id: 'question', label: '❓ Вопрос',     desc: 'Провокационный вопрос-крючок' },
]

const NICHES = ['Авто','Финансы','Игры','Фитнес','Кулинария','Путешествия','Технологии','Образование','Красота','Мотивация','Другое']
const EXAMPLES = ['Как я похудел на 20 кг', 'Обзор новой Tesla', 'Лучший ноутбук 2025', 'Рецепт пасты', 'Инвестиции с нуля']

interface TitleResult { title: string; score: number; why: string }

export default function TitlesTool() {
  const [topic,   setTopic]   = useState('')
  const [style,   setStyle]   = useState('viral')
  const [niche,   setNiche]   = useState('Авто')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<TitleResult[]>([])
  const [error,   setError]   = useState('')
  const [copied,  setCopied]  = useState<number | null>(null)

  async function generate() {
    if (!topic.trim()) return
    setLoading(true); setError(''); setResults([])

    const styleDesc = STYLES.find(s => s.id === style)?.desc || ''
    const prompt = `Ты эксперт по YouTube. Придумай 8 заголовков для видео.

Тема: "${topic}"
Ниша: ${niche}
Стиль: ${style} (${styleDesc})

Правила: русский язык, до 70 символов, цепляют внимание.

Ответ ТОЛЬКО JSON массив, без markdown, без пояснений вне массива:
[{"title":"заголовок","score":85,"why":"почему работает за 1 предложение"}]`

    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1500,
          messages: [{ role: 'user', content: prompt }],
        }),
      })

      const data = await res.json()

      // Handle API-level errors
      if (data.error) {
        const msg = data.error.message || JSON.stringify(data.error)
        throw new Error(msg)
      }

      const text = (data.content ?? [])
        .filter((b: any) => b.type === 'text')
        .map((b: any) => b.text)
        .join('')

      if (!text) throw new Error('Пустой ответ от AI')

      // Robustly extract JSON array
      const match = text.match(/\[[\s\S]*?\]/)
      if (!match) throw new Error('AI вернул неожиданный формат')

      const parsed: TitleResult[] = JSON.parse(match[0])
      if (!Array.isArray(parsed) || parsed.length === 0) throw new Error('Нет результатов')

      setResults(parsed.sort((a, b) => b.score - a.score))
    } catch (e: any) {
      // Show a clean error, log full error for debugging
      console.error('[TitlesTool] error:', e)
      const msg = e.message || 'Ошибка генерации'
      // Common friendly translations
      if (msg.includes('API key') || msg.includes('api_key') || msg.includes('auth')) {
        setError('Не настроен API ключ. Добавь ANTHROPIC_API_KEY в .env.local')
      } else if (msg.includes('overloaded') || msg.includes('529')) {
        setError('AI перегружен, подожди 10 секунд и попробуй снова')
      } else {
        setError(msg)
      }
    } finally {
      setLoading(false)
    }
  }

  function copy(i: number, text: string) {
    navigator.clipboard.writeText(text)
    setCopied(i)
    setTimeout(() => setCopied(null), 2000)
  }

  function scoreColor(s: number) {
    if (s >= 88) return 'text-green-400'
    if (s >= 75) return 'text-yellow-400'
    return 'text-muted'
  }

  return (
    <div className="min-h-screen bg-bg">
      <nav className="sticky top-0 z-40 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse2" />
          БлогерКит
        </Link>
        <div className="text-muted text-xs">🤖 AI-генератор заголовков</div>
      </nav>

      {/* HERO */}
      <div className="relative overflow-hidden pt-10 pb-6 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(167,139,250,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-muted mb-4">
            ✨ Бесплатно · Claude AI · 8 вариантов
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-black tracking-tight mb-2">
            AI придумает<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">заголовок за секунды</span>
          </h1>
          <p className="text-muted text-sm">8 вариантов · с оценкой CTR · бесплатно</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-16">

        {/* FORM */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <div className="mb-4">
            <label className="text-muted text-xs uppercase tracking-widest block mb-2">Тема видео</label>
            <input
              value={topic}
              onChange={e => setTopic(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !loading && generate()}
              placeholder="Например: как я похудел на 20 кг за 3 месяца"
              className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm outline-none focus:border-purple-400/60 transition-colors placeholder:text-muted"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {EXAMPLES.map(e => (
              <button key={e} onClick={() => setTopic(e)}
                className="px-2.5 py-1 text-xs border border-border rounded-full text-muted hover:text-white hover:border-white/20 transition-colors bg-transparent cursor-pointer">
                {e}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-muted text-xs uppercase tracking-widest block mb-1.5">Ниша</label>
              <select value={niche} onChange={e => setNiche(e.target.value)}
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-xl text-sm outline-none focus:border-purple-400/60 text-white">
                {NICHES.map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className="text-muted text-xs uppercase tracking-widest block mb-1.5">Стиль</label>
              <select value={style} onChange={e => setStyle(e.target.value)}
                className="w-full px-3 py-2.5 bg-surface border border-border rounded-xl text-sm outline-none focus:border-purple-400/60 text-white">
                {STYLES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </div>
          </div>

          <button onClick={generate} disabled={loading || !topic.trim()}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-sm rounded-xl disabled:opacity-40 hover:opacity-90 transition-all hover:-translate-y-0.5 cursor-pointer">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Генерирую...
              </span>
            ) : '✨ Генерировать заголовки'}
          </button>
          <p className="text-center text-muted text-xs mt-2">Полностью бесплатно · без регистрации</p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl mb-4">
            <div className="text-red-400 text-sm font-semibold mb-1">⚠️ Ошибка</div>
            <div className="text-red-300 text-xs">{error}</div>
            {error.includes('ANTHROPIC_API_KEY') && (
              <div className="mt-2 text-xs text-muted">
                Открой <code className="bg-white/10 px-1 rounded">.env.local</code> и добавь:<br />
                <code className="bg-white/10 px-1 rounded mt-1 block">ANTHROPIC_API_KEY=sk-ant-...</code>
              </div>
            )}
          </div>
        )}

        {/* RESULTS */}
        {results.length > 0 && (
          <div className="animate-fadeUp">
            <div className="text-muted text-xs uppercase tracking-widest mb-3">
              {results.length} заголовков · «{topic}»
            </div>
            <div className="flex flex-col gap-3">
              {results.map((r, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 hover:border-white/15 transition-all">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="font-semibold text-sm leading-snug flex-1">{r.title}</div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className={`font-heading font-black text-sm ${scoreColor(r.score)}`}>{r.score}%</div>
                      <button onClick={() => copy(i, r.title)}
                        className="px-2.5 py-1 bg-white/5 border border-border rounded-lg text-xs hover:bg-white/10 transition-colors cursor-pointer">
                        {copied === i ? '✓' : 'Копировать'}
                      </button>
                    </div>
                  </div>
                  <div className="text-muted text-xs">💡 {r.why}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all"
                        style={{ width: `${r.score}%`, background: r.score >= 88 ? '#10b981' : r.score >= 75 ? '#fbbf24' : '#6b7280' }} />
                    </div>
                    <span className="text-muted text-xs">CTR</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 bg-card border border-border rounded-2xl text-center">
              <div className="font-heading text-sm font-bold mb-1">Хочешь проверить конкурентов?</div>
              <p className="text-muted text-xs mb-3">Посмотри какие заголовки набирают просмотры в твоей нише</p>
              <div className="flex gap-2 justify-center">
                <Link href="/analyze"
                  className="px-4 py-2 bg-accent text-white font-bold text-xs rounded-xl hover:opacity-85 transition-opacity">
                  Анализ конкурентов →
                </Link>
                <Link href="/trends"
                  className="px-4 py-2 border border-border text-xs rounded-xl hover:border-white/20 transition-colors">
                  Тренды YouTube
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
