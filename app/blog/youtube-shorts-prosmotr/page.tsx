import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Shorts — как набрать просмотры в 2025 году',
  description: 'Как набирать просмотры на YouTube Shorts: алгоритм, форматы, длина видео, хэштеги. Что реально работает в 2025.',
  keywords: ['youtube shorts как набрать просмотры', 'youtube блогер 2025', 'shorts'],
  alternates: { canonical: 'https://blogerkit.ru/blog/youtube-shorts-prosmotr' },
  openGraph: {
    title: 'YouTube Shorts — как набрать просмотры в 2025 году',
    description: 'Как набирать просмотры на YouTube Shorts: алгоритм, форматы, длина видео, хэштеги. Что реально работает в 2025.',
    url: 'https://blogerkit.ru/blog/youtube-shorts-prosmotr',
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
          <span>Shorts</span><span>·</span><span>8 мин чтения</span><span>·</span>
          <time dateTime="2025-02-25">25 февраля 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube Shorts — как набрать просмотры в 2025 году</h1>
        <p className="text-muted leading-relaxed mb-8">Shorts — самый быстрый способ вырасти на YouTube в 2025. Алгоритм активно продвигает новых авторов. Но нужно знать правила.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Сделай горизонтальное видео вертикальным для Shorts прямо сейчас</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/crop" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Кроп видео →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Длина Shorts: оптимум 15-60 секунд</h2>
            <p className="text-muted">Shorts до 60 секунд получают максимальный буст от алгоритма. Видео 15-30 секунд показывают лучший retention. Не делай Shorts длиннее 3 минут — это убивает досмотр.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Первые 3 секунды — всё решают</h2>
            <p className="text-muted">Пользователь TikTok и Shorts листает ленту пальцем. Если первые 3 секунды не захватили внимание — он уходит. Начинай с вопроса, шокирующего факта или обещания результата.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Петля видео увеличивает досмотр</h2>
            <p className="text-muted">Создавай видео так чтобы конец плавно переходил в начало. YouTube считает повторные просмотры — это положительный сигнал алгоритму. Финал должен заставлять пересмотреть.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Shorts как воронка для длинных видео</h2>
            <p className="text-muted">Снимай Shorts из лучших моментов длинных видео. В конце добавляй призыв посмотреть полную версию. Так Shorts приносят подписчиков которые смотрят и длинный контент.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Хэштег #Shorts обязателен</h2>
            <p className="text-muted">Добавляй #Shorts в описание — это сигнал YouTube что видео нужно показывать в отдельной ленте Shorts. Дополнительно используй 2-3 тематических хэштега.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Сделай горизонтальное видео вертикальным для Shorts прямо сейчас</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/crop" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Кроп видео →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/kak-sdelat-shorts" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>✂️ Как сделать Shorts из обычного видео</span><span className="text-accent">→</span></Link>
            <Link href="/blog/algoritm-youtube-2025" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>⚙️ Алгоритм YouTube 2025</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-sdelat-viral-video" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>🔥 Как сделать вирусное видео</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'YouTube Shorts — как набрать просмотры в 2025 году',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-02-25',
        mainEntityOfPage: 'https://blogerkit.ru/blog/youtube-shorts-prosmotr',
      })}} />
    </div>
  )
}
