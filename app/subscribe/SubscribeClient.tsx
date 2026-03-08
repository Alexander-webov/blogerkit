'use client'

import { useState } from 'react'
import Link from 'next/link'

const NICHES = ['Авто', 'Финансы', 'Игры', 'Фитнес', 'Кулинария', 'Путешествия', 'Технологии', 'Красота', 'Мотивация', 'Другое']

const TOPICS = [
  { icon: '⚙️', text: 'Изменения алгоритма YouTube — сразу после выхода' },
  { icon: '📈', text: 'Тренды недели — что набирает просмотры в твоей нише' },
  { icon: '💰', text: 'Монетизация — кейсы и реальные цифры от блогеров' },
  { icon: '🎨', text: 'Советы по обложкам — разбор лучших за неделю' },
  { icon: '🔧', text: 'Новые инструменты БлогерКит — первым узнаёшь' },
]

export default function SubscribeClient() {
  const [email,   setEmail]   = useState('')
  const [niche,   setNiche]   = useState('Авто')
  const [loading, setLoading] = useState(false)
  const [done,    setDone]    = useState(false)
  const [error,   setError]   = useState('')

  async function submit() {
    if (!email.trim() || !email.includes('@')) { setError('Введи корректный email'); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, niche }),
      })
      if (!res.ok) throw new Error('Ошибка')
      setDone(true)
    } catch {
      setError('Что-то пошло не так. Попробуй ещё раз.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
          БлогерКит
        </Link>
      </nav>

      <div className="max-w-lg mx-auto px-6 py-14 text-center">

        {done ? (
          <div className="animate-fadeUp">
            <div className="text-6xl mb-5">🎉</div>
            <h1 className="font-heading text-2xl font-black mb-3">Ты подписан!</h1>
            <p className="text-muted text-sm mb-6">
              Первый выпуск придёт в ближайший вторник. Проверь папку «Промоакции» если письмо не появится.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/" className="px-5 py-2.5 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
                Инструменты →
              </Link>
              <Link href="/blog" className="px-5 py-2.5 border border-border text-sm rounded-xl hover:border-white/20 transition-colors">
                Читать блог
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* HERO */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-muted mb-5">
              📬 Еженедельно · Без спама · Отписка в 1 клик
            </div>
            <h1 className="font-heading text-3xl font-black mb-3">
              Советы для блогеров{' '}
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">каждую неделю</span>
            </h1>
            <p className="text-muted text-sm mb-8">
              Присоединись к блогерам которые уже получают рассылку. Только полезное — без воды.
            </p>

            {/* WHAT'S INSIDE */}
            <div className="bg-card border border-border rounded-2xl p-5 mb-6 text-left">
              <div className="text-xs text-muted uppercase tracking-widest mb-3">Что внутри каждого выпуска</div>
              <div className="space-y-2.5">
                {TOPICS.map(t => (
                  <div key={t.text} className="flex gap-3 text-sm">
                    <span>{t.icon}</span>
                    <span className="text-muted">{t.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="mb-3">
                <label className="text-muted text-xs block mb-1.5">Твоя ниша</label>
                <div className="flex flex-wrap gap-2">
                  {NICHES.map(n => (
                    <button key={n} onClick={() => setNiche(n)}
                      className={`px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${niche === n ? 'border-accent/50 bg-accent/10 text-accent' : 'border-border text-muted hover:text-white bg-transparent'}`}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <input value={email} onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && submit()}
                  type="email" placeholder="твой@email.ru"
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent/60 transition-colors placeholder:text-muted" />
              </div>

              {error && <div className="text-red-400 text-xs mb-3">{error}</div>}

              <button onClick={submit} disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-accent to-red-700 text-white font-black text-sm rounded-xl disabled:opacity-40 hover:opacity-90 transition-all">
                {loading ? 'Подписываюсь...' : 'Подписаться бесплатно →'}
              </button>
              <p className="text-muted text-xs mt-3">Никакого спама. Отписка в 1 клик из любого письма.</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
