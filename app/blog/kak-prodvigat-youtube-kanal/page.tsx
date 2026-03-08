import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как продвигать YouTube канал в 2025 году — полное руководство',
  description: 'Пошаговое руководство по продвижению YouTube канала: алгоритмы, SEO, обложки, регулярность публикаций и работа с аудиторией.',
  keywords: ['как продвигать youtube канал', 'youtube блогер 2025', 'продвижение'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-prodvigat-youtube-kanal' },
  openGraph: {
    title: 'Как продвигать YouTube канал в 2025 году — полное руководство',
    description: 'Пошаговое руководство по продвижению YouTube канала: алгоритмы, SEO, обложки, регулярность публикаций и работа с аудиторией.',
    url: 'https://blogerkit.ru/blog/kak-prodvigat-youtube-kanal',
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
          <span>Продвижение</span><span>·</span><span>12 мин чтения</span><span>·</span>
          <time dateTime="2025-02-10">10 февраля 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как продвигать YouTube канал в 2025 году — полное руководство</h1>
        <p className="text-muted leading-relaxed mb-8">Продвижение YouTube канала в 2025 году — это не про удачу. Это про систему: правильный контент, SEO, обложки и понимание алгоритма.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Проанализируй конкурентов в своей нише</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/analyze" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Начать анализ →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как работает алгоритм YouTube в 2025</h2>
            <p className="text-muted">YouTube продвигает видео которые зрители досматривают до конца и после которых продолжают смотреть другие видео на платформе. Ключевые метрики: CTR (кликабельность обложки), AVD (средняя длительность просмотра), удержание аудитории и сессионное время. Работай над всеми четырьмя одновременно.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">SEO для YouTube: ключевые слова в заголовке</h2>
            <p className="text-muted">Добавляй главное ключевое слово в первые 60 символов заголовка. YouTube использует заголовок для определения темы видео и показа в поиске. Используй Google Trends и поисковые подсказки YouTube чтобы найти запросы с высоким спросом.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Регулярность важнее частоты</h2>
            <p className="text-muted">1 видео в неделю каждую неделю работает лучше чем 5 видео за месяц и потом пауза на 2 месяца. Алгоритм любит предсказуемые каналы. Выбери частоту которую сможешь удерживать минимум полгода.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Первые 48 часов решают всё</h2>
            <p className="text-muted">YouTube активно продвигает видео в первые 48 часов после публикации. В это время важно: ответить на все комментарии, поделиться в соцсетях, попросить аудиторию поставить лайк и написать комментарий. Это разгоняет алгоритм.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Плейлисты увеличивают время просмотра</h2>
            <p className="text-muted">Организуй видео в тематические плейлисты. YouTube автоматически включает следующее видео из плейлиста, увеличивая сессионное время на 30-40%. Это сильно влияет на продвижение.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Проанализируй конкурентов в своей нише</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/analyze" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Начать анализ →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/algoritm-youtube-2025" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>⚙️ Алгоритм YouTube 2025 — как он работает</span><span className="text-accent">→</span></Link>
            <Link href="/blog/luchshee-vremya-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>⏰ Лучшее время для публикации на YouTube</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-sdelat-oblozhku-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🎨 Как сделать кликабельную обложку</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как продвигать YouTube канал в 2025 году — полное руководство',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-02-10',
        mainEntityOfPage: 'https://blogerkit.ru/blog/kak-prodvigat-youtube-kanal',
      })}} />
    </div>
  )
}
