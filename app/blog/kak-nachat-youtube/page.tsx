import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как начать YouTube канал с нуля в 2025 — пошаговая инструкция',
  description: 'Полная инструкция как создать YouTube канал с нуля: выбор ниши, оборудование, первые видео, продвижение. Без лишних трат.',
  keywords: ['как начать youtube канал с нуля', 'youtube блогер 2025', 'старт'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-nachat-youtube' },
  openGraph: {
    title: 'Как начать YouTube канал с нуля в 2025 — пошаговая инструкция',
    description: 'Полная инструкция как создать YouTube канал с нуля: выбор ниши, оборудование, первые видео, продвижение. Без лишних трат.',
    url: 'https://blogerkit.ru/blog/kak-nachat-youtube',
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
          <span>Старт</span><span>·</span><span>12 мин чтения</span><span>·</span>
          <time dateTime="2025-05-10">10 мая 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как начать YouTube канал с нуля в 2025 — пошаговая инструкция</h1>
        <p className="text-muted leading-relaxed mb-8">Начать YouTube канал проще чем кажется. Сложнее — продолжать. Вот план который реально работает.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Создай первую обложку для своего канала</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/covers" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Конструктор обложек →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Выбор ниши — самый важный шаг</h2>
            <p className="text-muted">Ниша должна соответствовать трём критериям: тебе интересно (не выгоришь), есть аудитория (люди это ищут), есть деньги (рекламодатели платят). Финансы, IT, авто, здоровье — отличные ниши. Слишком широкая тема ("жизнь") — плохо. Слишком узкая (коллекционирование марок) — мало аудитории.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Минимальное оборудование для старта</h2>
            <p className="text-muted">Телефон с хорошей камерой (любой флагман последних 3 лет) + петличный микрофон (1000-3000 рублей). Это всё что нужно. Хороший звук важнее хорошей картинки. Студийный свет (3000-8000 рублей) — следующий шаг когда начнёшь расти.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Первые 10 видео — эксперимент</h2>
            <p className="text-muted">Не жди идеального качества. Сними первые 10 видео как можно быстрее. Это период обучения — ты найдёшь свой стиль, поймёшь что нравится аудитории. Большинство успешных каналов стыдятся своих первых видео. Это нормально.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">SEO с первого видео</h2>
            <p className="text-muted">Даже без подписчиков правильная SEO-оптимизация приносит просмотры из поиска. Ключевое слово в заголовке, описании и тегах. Это бесплатный трафик который работает 24/7.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как не выгореть в первые месяцы</h2>
            <p className="text-muted">Первые 3-6 месяцев — самые сложные. Просмотров мало, рост медленный. Поставь реалистичную цель: 100 подписчиков за 3 месяца. Найди сообщество других блогеров для поддержки. Фокусируйся на качестве контента, а не на цифрах.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Создай первую обложку для своего канала</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/covers" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Конструктор обложек →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/kak-prodvigat-youtube-kanal" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📈 Как продвигать YouTube канал</span><span className="text-accent">→</span></Link>
            <Link href="/blog/algoritm-youtube-2025" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>⚙️ Алгоритм YouTube 2025</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-sdelat-oblozhku-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🎨 Как сделать кликабельную обложку</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как начать YouTube канал с нуля в 2025 — пошаговая инструкция',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-05-10',
        mainEntityOfPage: 'https://blogerkit.ru/blog/kak-nachat-youtube',
      })}} />
    </div>
  )
}
