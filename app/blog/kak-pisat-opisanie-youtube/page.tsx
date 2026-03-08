import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как писать описание к видео на YouTube — гайд 2025',
  description: 'Как правильно писать описание для YouTube видео: структура, ключевые слова, ссылки. Шаблон описания который работает.',
  keywords: ['как писать описание youtube', 'youtube блогер 2025', 'seo'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-pisat-opisanie-youtube' },
  openGraph: {
    title: 'Как писать описание к видео на YouTube — гайд 2025',
    description: 'Как правильно писать описание для YouTube видео: структура, ключевые слова, ссылки. Шаблон описания который работает.',
    url: 'https://blogerkit.ru/blog/kak-pisat-opisanie-youtube',
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
          <span>SEO</span><span>·</span><span>7 мин чтения</span><span>·</span>
          <time dateTime="2025-03-10">10 марта 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как писать описание к видео на YouTube — гайд 2025</h1>
        <p className="text-muted leading-relaxed mb-8">Описание YouTube — недооценённый инструмент SEO. Правильное описание приносит дополнительные тысячи просмотров из поиска.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Изучи описания топовых видео конкурентов</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/analyze" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Анализировать →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Первые 200 символов — самые важные</h2>
            <p className="text-muted">YouTube показывает первые 200 символов без кнопки "показать больше". Это то что видят в поиске. Главное ключевое слово должно быть в самом начале. Объясни суть видео за 2-3 предложения.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Структура идеального описания</h2>
            <p className="text-muted">Блок 1 (200 символов): суть видео + главное ключевое слово. Блок 2 (300 символов): что зритель узнает, тайм-коды. Блок 3: ссылки на соцсети и другие видео. Блок 4: хэштеги (3-5 штук). Общая длина: 300-500 слов.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Тайм-коды увеличивают retention</h2>
            <p className="text-muted">YouTube показывает тайм-коды прямо в поиске как отдельные ссылки. Это дополнительный CTR. Плюс зрители перематывают к нужному моменту вместо того чтобы закрыть видео.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Ключевые слова в описании</h2>
            <p className="text-muted">Используй 3-5 вариаций главного ключевого слова. Не спамь — пиши для людей, а не для роботов. YouTube умный и понимает синонимы. Добавляй слова естественно в текст.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Ссылки и призывы к действию</h2>
            <p className="text-muted">Добавляй ссылку на Telegram или другой канал. Ссылка на похожее видео. Ссылка на партнёрский продукт если есть. Просьба подписаться должна быть один раз, не несколько.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Изучи описания топовых видео конкурентов</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/analyze" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Анализировать →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/youtube-tegi" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🏷️ Теги YouTube — как использовать правильно</span><span className="text-accent">→</span></Link>
            <Link href="/blog/youtube-seo-prodvizhenie" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🔍 YouTube SEO — продвижение в поиске</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-prodvigat-youtube-kanal" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📈 Как продвигать канал</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как писать описание к видео на YouTube — гайд 2025',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-03-10',
        mainEntityOfPage: 'https://blogerkit.ru/blog/kak-pisat-opisanie-youtube',
      })}} />
    </div>
  )
}
