import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как работать с рекламодателями блогеру — полный гайд 2025',
  description: 'Как найти рекламодателей, составить медиакит, провести переговоры и оформить интеграцию. Практическое руководство.',
  keywords: ['как работать с рекламодателями блогеру', 'youtube блогер 2025', 'монетизация'],
  alternates: { canonical: 'https://blogerkit.ru/blog/rabota-s-reklamodatelyami' },
  openGraph: {
    title: 'Как работать с рекламодателями блогеру — полный гайд 2025',
    description: 'Как найти рекламодателей, составить медиакит, провести переговоры и оформить интеграцию. Практическое руководство.',
    url: 'https://blogerkit.ru/blog/rabota-s-reklamodatelyami',
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
          <span>Монетизация</span><span>·</span><span>10 мин чтения</span><span>·</span>
          <time dateTime="2025-04-20">20 апреля 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как работать с рекламодателями блогеру — полный гайд 2025</h1>
        <p className="text-muted leading-relaxed mb-8">Прямые рекламные интеграции — главный доход большинства успешных блогеров. Вот как это работает на практике.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Рассчитай справедливую цену для своего канала</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/calculator" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Открыть калькулятор →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Когда начинать искать рекламодателей</h2>
            <p className="text-muted">С 1,000-5,000 подписчиков уже можно получить первые платные интеграции если вовлечённость высокая. Nano-инфлюенсеры (до 10K) часто интересны малому бизнесу и локальным брендам. Не жди 100K.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Где искать рекламодателей</h2>
            <p className="text-muted">Биржи: GetBlogger, Epicstars, Telega.in для Telegram. Напрямую: пиши брендам которые уже рекламируются у других блогеров в твоей нише — они уже выделили бюджет. Входящие заявки: когда канал растёт, рекламодатели приходят сами.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Медиакит — твоя визитная карточка</h2>
            <p className="text-muted">Медиакит это документ с данными о канале для рекламодателей. Включает: количество подписчиков, охват, вовлечённость, демографию аудитории, примеры прошлых интеграций, прайс-лист. Без медиакита переговоры идут медленнее.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как проводить переговоры</h2>
            <p className="text-muted">Никогда не называй цену первым — узнай бюджет рекламодателя. Называй верхнюю границу своего диапазона. Не соглашайся на бартер если не нужен продукт. Всегда обсуждай что именно входит: хронометраж, правки, согласование.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Оформление и защита</h2>
            <p className="text-muted">Простой договор или счёт обязателен. Предоплата 50% до начала работы. Отдавай видео на согласование за 3-5 дней до публикации. Не публикуй без финального одобрения рекламодателя.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Рассчитай справедливую цену для своего канала</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/calculator" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Открыть калькулятор →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/skolko-stoit-reklama-u-blogera" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>💰 Сколько стоит реклама у блогера</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-zarabotat-na-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🤑 Все способы заработка на YouTube</span><span className="text-accent">→</span></Link>
            <Link href="/blog/monetizaciya-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>💎 Монетизация YouTube</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как работать с рекламодателями блогеру — полный гайд 2025',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-04-20',
        mainEntityOfPage: 'https://blogerkit.ru/blog/rabota-s-reklamodatelyami',
      })}} />
    </div>
  )
}
