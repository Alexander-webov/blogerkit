import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как сделать Shorts из обычного видео — пошаговая инструкция',
  description: 'Как нарезать горизонтальное видео для YouTube Shorts и TikTok: обрезка до 9:16, субтитры, монтаж. Бесплатные инструменты.',
  keywords: ['как сделать shorts из видео', 'youtube блогер 2025', 'shorts'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-sdelat-shorts' },
  openGraph: {
    title: 'Как сделать Shorts из обычного видео — пошаговая инструкция',
    description: 'Как нарезать горизонтальное видео для YouTube Shorts и TikTok: обрезка до 9:16, субтитры, монтаж. Бесплатные инструменты.',
    url: 'https://blogerkit.ru/blog/kak-sdelat-shorts',
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
          <span>Shorts</span><span>·</span><span>6 мин чтения</span><span>·</span>
          <time dateTime="2025-04-01">1 апреля 2025 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как сделать Shorts из обычного видео — пошаговая инструкция</h1>
        <p className="text-muted leading-relaxed mb-8">Shorts из длинных видео — это бесплатный контент. Уже снятое видео даёт дополнительный охват без лишних съёмок.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Обрежь своё видео до формата 9:16 прямо сейчас</div>
            <div className="text-muted text-xs">БлогерКит · Бесплатно</div>
          </div>
          <Link href="/crop" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Открыть инструмент кропа →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Какие моменты выбирать для Shorts</h2>
            <p className="text-muted">Лучшие кандидаты: самый ценный совет из видео, смешной или неожиданный момент, шокирующий факт, крутая трансформация, спорное утверждение. Момент должен работать без контекста — зрители Shorts не смотрели твоё длинное видео.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Обрезка до формата 9:16</h2>
            <p className="text-muted">Горизонтальное видео нужно обрезать до вертикального. Главное правило: лицо говорящего должно быть в верхней трети кадра. Нижняя треть — для субтитров. Используй инструмент кропа БлогерКит прямо в браузере.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Субтитры обязательны</h2>
            <p className="text-muted">60% смотрят Shorts без звука. Субтитры увеличивают досмотр на 40%. Добавляй их через CapCut (бесплатно, авторасстановка) или через YouTube Studio автоматически.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Добавь крючок в начало</h2>
            <p className="text-muted">Вырезанный момент часто начинается "из середины". Добавь 2-3 секунды в начало с текстом на экране: о чём это видео. Например: "Почему 90% блогеров не зарабатывают — объясню за 30 секунд".</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Публикация Shorts</h2>
            <p className="text-muted">Загружай вертикальное видео до 60 секунд с хэштегом #Shorts. Публикуй Shorts в другое время чем длинные видео — они привлекают разную аудиторию. Норма: 3-5 Shorts в неделю.</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Обрежь своё видео до формата 9:16 прямо сейчас</div>
          <p className="text-muted text-xs mb-4">БлогерКит · Бесплатно</p>
          <Link href="/crop" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Открыть инструмент кропа →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            <Link href="/blog/youtube-shorts-prosmotr" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📱 Как набрать просмотры на Shorts</span><span className="text-accent">→</span></Link>
            <Link href="/blog/algoritm-youtube-2025" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>⚙️ Алгоритм YouTube 2025</span><span className="text-accent">→</span></Link>
            <Link href="/blog/kak-prodvigat-youtube-kanal" className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"><span>📈 Как продвигать канал</span><span className="text-accent">→</span></Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как сделать Shorts из обычного видео — пошаговая инструкция',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-04-01',
        mainEntityOfPage: 'https://blogerkit.ru/blog/kak-sdelat-shorts',
      })}} />
    </div>
  )
}
