import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как сделать трейлер YouTube канала который конвертирует подписчиков',
  description: 'Как снять трейлер YouTube канала: структура, длина, что говорить. Шаблон сценария который увеличивает конверсию в подписку.',
  keywords: ['трейлер youtube канала', 'youtube блогер 2025', 'контент'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kanalnyj-trejler' },
  openGraph: {
    title: 'Как сделать трейлер YouTube канала который конвертирует подписчиков',
    description: 'Как снять трейлер YouTube канала: структура, длина, что говорить. Шаблон сценария который увеличивает конверсию в подписку.',
    url: 'https://blogerkit.ru/blog/kanalnyj-trejler',
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
          <span>Контент</span><span>·</span><span>6 мин чтения</span><span>·</span>
          <time dateTime="2025-04-10">10 апреля 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как сделать трейлер YouTube канала который конвертирует подписчиков</h1>
        <p className="text-muted leading-relaxed mb-8">Трейлер канала — это автоматический продавец. Каждый новый зритель видит его первым. Сделай его правильно.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Создай профессиональную обложку для канала</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/covers" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Конструктор обложек →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Длина трейлера: 45-90 секунд</h2>
            <p className="text-muted">Меньше — не успеешь убедить. Больше — потеряешь внимание. 60 секунд — золотой стандарт. YouTube показывает трейлер только незнакомым зрителям, не подписчикам.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Структура трейлера</h2>
            <p className="text-muted">Секунды 0-5: кто ты и о чём канал. Секунды 5-30: лучшие моменты канала (нарезка). Секунды 30-50: что зритель получит подписавшись. Секунды 50-60: прямой призыв подписаться.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Говори о зрителе, не о себе</h2>
            <p className="text-muted">Ошибка большинства: "Меня зовут Иван, я снимаю видео о финансах". Правильно: "Если ты хочешь выйти на пассивный доход — ты попал на нужный канал". Фокус на боли и желаниях зрителя.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Покажи лучшие моменты</h2>
            <p className="text-muted">Нарежь 5-10 самых ярких моментов с канала. Быстрый монтаж, динамика, эмоции. Это социальное доказательство — зритель видит что у тебя уже есть крутой контент.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Обнови трейлер раз в полгода</h2>
            <p className="text-muted">Канал развивается — качество растёт. Старый трейлер может отпугивать новых зрителей если он снят 2 года назад. Обновляй каждые 6-12 месяцев.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Создай профессиональную обложку для канала</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/covers" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Конструктор обложек →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/kak-uvelichit-podpischikov" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📈 Как увеличить подписчиков</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-prodvigat-youtube-kanal" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🚀 Как продвигать канал</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-sdelat-oblozhku-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🎨 Как сделать обложку</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как сделать трейлер YouTube канала который конвертирует подписчиков',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-04-10',
        mainEntityOfPage: 'https://blogerkit.ru/blog/kanalnyj-trejler',
      })}} />
    </div>
  )
}
