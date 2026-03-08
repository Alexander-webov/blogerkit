import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как увеличить подписчиков на YouTube — 15 рабочих способов 2025',
  description: 'Проверенные способы как быстро набрать подписчиков на YouTube в 2025: коллаборации, Shorts, SEO, призывы к действию.',
  keywords: ['как увеличить подписчиков youtube', 'youtube блогер 2025', 'рост'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-uvelichit-podpischikov' },
  openGraph: {
    title: 'Как увеличить подписчиков на YouTube — 15 рабочих способов 2025',
    description: 'Проверенные способы как быстро набрать подписчиков на YouTube в 2025: коллаборации, Shorts, SEO, призывы к действию.',
    url: 'https://blogerkit.ru/blog/kak-uvelichit-podpischikov',
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
          <span>Рост</span><span>·</span><span>9 мин чтения</span><span>·</span>
          <time dateTime="2025-03-20">20 марта 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как увеличить подписчиков на YouTube — 15 рабочих способов 2025</h1>
        <p className="text-muted leading-relaxed mb-8">Подписчики — лишь одна из метрик. Но их рост говорит о том что контент работает. Вот что реально помогает.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Посмотри что снимают растущие каналы в твоей нише</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/trends" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Открыть тренды →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Коллаборации — самый быстрый рост</h2>
            <p className="text-muted">Совместные видео с блогерами смежной тематики дают мгновенный доступ к чужой аудитории. Ищи каналы сопоставимого или немного большего размера. Предлагай формат выгодный обоим: интервью, совместный эксперимент, разбор.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Shorts конвертируют в подписчиков</h2>
            <p className="text-muted">Сделай Shorts которые заканчиваются фразой "полная версия на канале". Зрители Shorts легко подписываются если контент попал в интересы. Один вирусный Short может дать тысячи подписчиков.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Призыв к подписке в нужный момент</h2>
            <p className="text-muted">Не проси подписаться в начале видео — зритель ещё не знает стоит ли. Лучший момент: сразу после того как ты дал главную ценность. "Если это было полезно — подпишись, выхожу такой контент каждую неделю".</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Серийный контент держит аудиторию</h2>
            <p className="text-muted">"Часть 2", серии, продолжения — заставляют подписаться чтобы не пропустить. Анонсируй следующую часть в конце видео. Создавай напряжение: "в следующем видео расскажу что из этого вышло".</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Оптимизируй страницу канала</h2>
            <p className="text-muted">Шапка канала, аватар, трейлер канала — первое что видит незнакомый зритель. Трейлер должен за 60 секунд объяснить о чём канал и почему стоит подписаться. Закрепи лучшее видео для незнакомых зрителей.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Посмотри что снимают растущие каналы в твоей нише</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/trends" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Открыть тренды →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/kak-prodvigat-youtube-kanal" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📈 Как продвигать канал</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-sdelat-viral-video" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🔥 Как сделать вирусное видео</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kanalnyj-trejler" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🎬 Как сделать трейлер канала</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как увеличить подписчиков на YouTube — 15 рабочих способов 2025',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-03-20',
        mainEntityOfPage: 'https://blogerkit.ru/blog/kak-uvelichit-podpischikov',
      })}} />
    </div>
  )
}
