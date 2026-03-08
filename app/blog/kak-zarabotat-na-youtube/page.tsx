import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как заработать на YouTube в 2025 году — все способы монетизации',
  description: 'Полный гайд по монетизации YouTube канала: AdSense, спонсорство, партнёрки, мерч, курсы. Сколько реально можно заработать.',
  keywords: ['как заработать на youtube', 'youtube блогер 2025', 'монетизация'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-zarabotat-na-youtube' },
  openGraph: {
    title: 'Как заработать на YouTube в 2025 году — все способы монетизации',
    description: 'Полный гайд по монетизации YouTube канала: AdSense, спонсорство, партнёрки, мерч, курсы. Сколько реально можно заработать.',
    url: 'https://blogerkit.ru/blog/kak-zarabotat-na-youtube',
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
          <span>Монетизация</span><span>·</span><span>11 мин чтения</span><span>·</span>
          <time dateTime="2025-02-20">20 февраля 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как заработать на YouTube в 2025 году — все способы монетизации</h1>
        <p className="text-muted leading-relaxed mb-8">YouTube может быть основным источником дохода. Но большинство блогеров зарабатывают не на рекламе Google, а на других источниках.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Рассчитай сколько стоит реклама на твоём канале</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/calculator" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Открыть калькулятор →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">AdSense — базовая монетизация</h2>
            <p className="text-muted">Подключается при 1000 подписчиков и 4000 часов просмотра (или 10 млн просмотров Shorts). Средний RPM в России: 100-300 рублей за 1000 просмотров. При 100K просмотров в месяц это 10,000-30,000 рублей. Финансовые и IT-ниши платят в 3-5 раз больше.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Реклама у блогеров — главный доход</h2>
            <p className="text-muted">Прямые интеграции с брендами приносят в 3-10 раз больше чем AdSense. При 50K просмотрах за видео цена нативной интеграции — от 8,000 до 40,000 рублей в зависимости от ниши. Искать рекламодателей: GetBlogger, Epicstars, или напрямую.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Партнёрские программы</h2>
            <p className="text-muted">Рекомендуй продукты за комиссию от продаж. Ozon, Wildberries, Яндекс Маркет — у всех есть партнёрки. Для технической ниши: хостинги платят 30-50% от первой оплаты клиента. Добавляй партнёрские ссылки в описание каждого видео.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Собственные продукты — максимальный доход</h2>
            <p className="text-muted">Курсы, гайды, шаблоны, консультации — это 60-80% маржа против 3-15% у партнёрок. Аудитория YouTube доверяет автору. При 10K подписчиках можно зарабатывать на курсах больше чем крупные каналы на рекламе.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Boosty и подписки</h2>
            <p className="text-muted">Российский аналог Patreon. Подходит для самозанятых. Эксклюзивный контент, ранний доступ, общение с автором. Средний доход: 100-500 рублей с подписчика в месяц.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Рассчитай сколько стоит реклама на твоём канале</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/calculator" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Открыть калькулятор →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/skolko-stoit-reklama-u-blogera" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>💰 Сколько стоит реклама у блогера</span><span className="text-accent">→</span></Link>
            <Link href="/blog/rabota-s-reklamodatelyami" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🤝 Как работать с рекламодателями</span><span className="text-accent">→</span></Link>
            <Link href="/blog/monetizaciya-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>💎 Монетизация YouTube с нуля</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как заработать на YouTube в 2025 году — все способы монетизации',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-02-20',
        mainEntityOfPage: 'https://blogerkit.ru/blog/kak-zarabotat-na-youtube',
      })}} />
    </div>
  )
}
