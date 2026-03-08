import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TikTok vs YouTube — где начинать блогеру в 2025',
  description: 'Сравнение TikTok и YouTube для начинающих блогеров: монетизация, рост, алгоритмы, аудитория. Что выбрать в 2025.',
  keywords: ['tiktok или youtube что лучше', 'youtube блогер 2025', 'стратегия'],
  alternates: { canonical: 'https://blogerkit.ru/blog/tiktok-vs-youtube' },
  openGraph: {
    title: 'TikTok vs YouTube — где начинать блогеру в 2025',
    description: 'Сравнение TikTok и YouTube для начинающих блогеров: монетизация, рост, алгоритмы, аудитория. Что выбрать в 2025.',
    url: 'https://blogerkit.ru/blog/tiktok-vs-youtube',
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
          <span>Стратегия</span><span>·</span><span>8 мин чтения</span><span>·</span>
          <time dateTime="2025-04-05">5 апреля 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">TikTok vs YouTube — где начинать блогеру в 2025</h1>
        <p className="text-muted leading-relaxed mb-8">Самый частый вопрос начинающего блогера: TikTok или YouTube? Честный ответ: зависит от твоих целей.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Смотри тренды на YouTube прямо сейчас</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/trends" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Открыть тренды →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Скорость роста</h2>
            <p className="text-muted">TikTok: вирусность возможна уже с первого видео. Алгоритм показывает контент новых авторов широкой аудитории. YouTube: рост медленнее, нужно минимум 3-6 месяцев до первых результатов. Зато аудитория лояльнее.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Монетизация</h2>
            <p className="text-muted">YouTube платит значительно больше. RPM на YouTube в 3-10 раз выше чем в TikTok. YouTube даёт стабильный пассивный доход от старых видео. TikTok — разовые просмотры без долгосрочного дохода от контента.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Формат контента</h2>
            <p className="text-muted">TikTok: короткие видео, тренды, развлечение, быстрое потребление. YouTube: длинный контент, образование, обзоры, глубокое погружение. Shorts объединяет оба подхода.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Аудитория и доверие</h2>
            <p className="text-muted">YouTube аудитория доверяет автору больше — люди тратят часы на просмотр одного канала. TikTok аудитория более случайная. Для продажи своих продуктов YouTube работает в разы лучше.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Правильный ответ: оба</h2>
            <p className="text-muted">Снимай длинный контент для YouTube. Нарезай лучшие моменты для TikTok и Shorts. Одно производство — два канала распространения. TikTok приводит новую аудиторию, YouTube её удерживает и монетизирует.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Смотри тренды на YouTube прямо сейчас</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/trends" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Открыть тренды →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/youtube-shorts-prosmotr" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📱 YouTube Shorts как набрать просмотры</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-zarabotat-na-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>💰 Как заработать на YouTube</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-nachat-youtube" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🚀 Как начать YouTube канал с нуля</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'TikTok vs YouTube — где начинать блогеру в 2025',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-04-05',
        mainEntityOfPage: 'https://blogerkit.ru/blog/tiktok-vs-youtube',
      })}} />
    </div>
  )
}
