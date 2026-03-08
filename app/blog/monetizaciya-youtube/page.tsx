import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Монетизация YouTube с нуля — полный гайд 2025',
  description: 'Как подключить монетизацию на YouTube: требования, сколько платят, как увеличить доход. Всё что нужно знать в 2025.',
  keywords: ['монетизация youtube с нуля', 'youtube блогер 2025', 'монетизация'],
  alternates: { canonical: 'https://blogerkit.ru/blog/monetizaciya-youtube' },
  openGraph: {
    title: 'Монетизация YouTube с нуля — полный гайд 2025',
    description: 'Как подключить монетизацию на YouTube: требования, сколько платят, как увеличить доход. Всё что нужно знать в 2025.',
    url: 'https://blogerkit.ru/blog/monetizaciya-youtube',
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
          <span>Монетизация</span><span>·</span><span>8 мин чтения</span><span>·</span>
          <time dateTime="2025-03-25">25 марта 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Монетизация YouTube с нуля — полный гайд 2025</h1>
        <p className="text-muted leading-relaxed mb-8">Монетизация YouTube — мечта большинства блогеров. Разбираем требования, ставки и как максимизировать доход.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Рассчитай сколько ты можешь заработать на рекламе</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/calculator" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Открыть калькулятор →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Требования для монетизации в 2025</h2>
            <p className="text-muted">1000 подписчиков И 4000 часов просмотра за последние 12 месяцев — для длинных видео. ИЛИ 500 подписчиков + 3000 часов + 3 публикации за 90 дней — для участия в программе без AdSense. После подачи заявки YouTube проверяет канал в течение 1 месяца.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Сколько платит YouTube в России</h2>
            <p className="text-muted">RPM (доход с 1000 просмотров) в России: развлечения — 50-150 рублей, образование — 150-400 рублей, финансы/IT — 400-1200 рублей. При 100K просмотров в месяц это 5,000-120,000 рублей в зависимости от ниши.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как увеличить доход от AdSense</h2>
            <p className="text-muted">Снимай более длинные видео (8+ минут) — они вмещают больше рекламных блоков. Работай в высокодоходных нишах. Таргетируй аудиторию с высокой покупательной способностью. Включи все форматы рекламы в настройках.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Super Thanks и членство</h2>
            <p className="text-muted">Super Thanks — зрители платят за выделенный комментарий (150-10,000 рублей). Членство в канале — подписка от 99 рублей/месяц за эксклюзивный контент. Эти инструменты доступны при 500+ подписчиках.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Мерч и Покупки</h2>
            <p className="text-muted">YouTube интегрируется с Merch by Amazon и другими платформами. Ты можешь продавать физические товары прямо под видео. Работает лучше для каналов с лояльной аудиторией 10K+.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Рассчитай сколько ты можешь заработать на рекламе</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/calculator" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Открыть калькулятор →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/kak-zarabotat-na-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>💰 Все способы заработка на YouTube</span><span className="text-accent">→</span></Link>
            <Link href="/blog/skolko-stoit-reklama-u-blogera" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📊 Сколько стоит реклама у блогера</span><span className="text-accent">→</span></Link>
            <Link href="/blog/rabota-s-reklamodatelyami" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🤝 Как работать с рекламодателями</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Монетизация YouTube с нуля — полный гайд 2025',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-03-25',
        mainEntityOfPage: 'https://blogerkit.ru/blog/monetizaciya-youtube',
      })}} />
    </div>
  )
}
