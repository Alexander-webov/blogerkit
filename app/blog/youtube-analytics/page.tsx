import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Analytics — как читать статистику и принимать решения',
  description: 'Разбор YouTube Analytics: какие метрики важны, что означает каждый показатель и как использовать данные для роста канала.',
  keywords: ['youtube analytics как читать', 'youtube блогер 2025', 'аналитика'],
  alternates: { canonical: 'https://blogerkit.ru/blog/youtube-analytics' },
  openGraph: {
    title: 'YouTube Analytics — как читать статистику и принимать решения',
    description: 'Разбор YouTube Analytics: какие метрики важны, что означает каждый показатель и как использовать данные для роста канала.',
    url: 'https://blogerkit.ru/blog/youtube-analytics',
  },
}

export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
          БлогерКит
        </Link>
        <Link href="/blog" className="text-muted text-xs hover:text-white transition-colors">← Все статьи</Link>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-xs mb-4">
          <span>Аналитика</span><span>·</span><span>9 мин чтения</span><span>·</span>
          <time dateTime="2025-05-01">1 мая 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube Analytics — как читать статистику и принимать решения</h1>
        <p className="text-muted leading-relaxed mb-8">YouTube Studio показывает десятки метрик. Большинство из них — шум. Вот 6 которые реально важны.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Сравни свои показатели с конкурентами</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/analyze" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Анализировать конкурентов →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">CTR — первая метрика которую смотреть</h2>
            <p className="text-muted">Impression Click-Through Rate. Норма: 4-8%. Ниже 4% — проблема с обложкой или заголовком. Выше 8% — отличный результат, масштабируй формат. Смотри CTR по каждому видео, не только общий.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">AVD — средняя длительность просмотра</h2>
            <p className="text-muted">Average View Duration. Показывает насколько зрители смотрят твои видео. Сравнивай не в процентах а в минутах — длинные видео с 40% удержанием лучше коротких с 70%. YouTube продвигает видео с большим абсолютным временем просмотра.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Удержание аудитории</h2>
            <p className="text-muted">График удержания показывает где именно зрители уходят. Резкое падение в начале = плохой крючок. Плавное снижение = нормально. Пики = зрители перематывают к интересным моментам. Исправляй конкретные проблемные места.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Источники трафика</h2>
            <p className="text-muted">Откуда приходят зрители: поиск YouTube, главная страница, похожие видео, внешние источники. Если 80% трафика с одного источника — это риск. Диверсифицируй.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Демография аудитории</h2>
            <p className="text-muted">Возраст, пол, география. Это важно для переговоров с рекламодателями — они платят за нужную им аудиторию. Если твоя аудитория не совпадает с тем что ты думал — пересмотри контент-стратегию.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Сравни свои показатели с конкурентами</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/analyze" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Анализировать конкурентов →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/algoritm-youtube-2025" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>⚙️ Алгоритм YouTube 2025</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-sdelat-thumbnail-abtest" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🔬 A/B тест обложек</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-prodvigat-youtube-kanal" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📈 Как продвигать канал</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'YouTube Analytics — как читать статистику и принимать решения',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-05-01',
        mainEntityOfPage: 'https://blogerkit.ru/blog/youtube-analytics',
      })}} />
    </div>
  )
}
