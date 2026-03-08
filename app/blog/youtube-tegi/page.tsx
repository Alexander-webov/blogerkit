import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Теги YouTube — как использовать правильно в 2025 году',
  description: 'Нужны ли теги на YouTube в 2025? Как выбирать теги, сколько добавлять и влияют ли они на продвижение.',
  keywords: ['теги youtube как использовать', 'youtube блогер 2025', 'seo'],
  alternates: { canonical: 'https://blogerkit.ru/blog/youtube-tegi' },
  openGraph: {
    title: 'Теги YouTube — как использовать правильно в 2025 году',
    description: 'Нужны ли теги на YouTube в 2025? Как выбирать теги, сколько добавлять и влияют ли они на продвижение.',
    url: 'https://blogerkit.ru/blog/youtube-tegi',
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
          <span>SEO</span><span>·</span><span>5 мин чтения</span><span>·</span>
          <time dateTime="2025-03-15">15 марта 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Теги YouTube — как использовать правильно в 2025 году</h1>
        <p className="text-muted leading-relaxed mb-8">Споры о тегах YouTube не утихают. Вот что реально работает в 2025 году.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Изучи какие заголовки и теги используют лидеры ниши</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/analyze" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Анализировать конкурентов →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Влияют ли теги на продвижение</h2>
            <p className="text-muted">YouTube официально подтвердил: теги имеют наименьший вес среди факторов ранжирования. Заголовок и описание важнее. Но теги всё ещё помогают в одном случае: когда твоё название канала или видео часто пишут с ошибками.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Сколько тегов добавлять</h2>
            <p className="text-muted">Оптимум: 8-15 тегов. Больше не значит лучше — YouTube может расценить это как спам. Общая длина всех тегов: до 500 символов.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Какие теги добавлять</h2>
            <p className="text-muted">Первый тег — точное ключевое слово из заголовка. Дальше: варианты этого слова, более широкие темы, название своего канала. Не добавляй нерелевантные теги ради трафика — это вредит.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Теги конкурентов</h2>
            <p className="text-muted">YouTube позволяет смотреть теги чужих видео через исходный код страницы. Но копировать теги конкурентов — не лучшая стратегия. Лучше делать уникальный контент по той же теме.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Что важнее тегов</h2>
            <p className="text-muted">Потрать время сэкономленное на тегах на лучший заголовок и обложку. Они дают в 10 раз больший эффект. Теги — последний шаг оптимизации, не первый.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Изучи какие заголовки и теги используют лидеры ниши</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/analyze" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Анализировать конкурентов →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/kak-pisat-opisanie-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📝 Как писать описание к видео</span><span className="text-accent">→</span></Link>
            <Link href="/blog/youtube-seo-prodvizhenie" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🔍 YouTube SEO</span><span className="text-accent">→</span></Link>
            <Link href="/blog/algoritm-youtube-2025" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>⚙️ Алгоритм YouTube 2025</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Теги YouTube — как использовать правильно в 2025 году',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-03-15',
        mainEntityOfPage: 'https://blogerkit.ru/blog/youtube-tegi',
      })}} />
    </div>
  )
}
