import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Продвижение на российских видеоплатформах — стратегия 2025', description: 'Комплексная стратегия продвижения для российских блогеров: VK Видео, Rutube, YouTube, Telegram. Как выстроить присутствие без лишних усилий.', keywords: ['продвижение российские платформы', 'блогинг россия 2025', 'vk rutube youtube telegram стратегия', 'российские видеоблогеры продвижение'], alternates: { canonical: 'https://blogerkit.ru/blog/prodvizhenie-na-russkih-platformah' }, openGraph: { title: 'Продвижение на российских видеоплатформах — стратегия 2025', description: 'Комплексная стратегия продвижения для российских блогеров: VK Видео, Rutube, YouTube, Telegram. Как выстроить присутствие без лишних усилий.', url: 'https://blogerkit.ru/blog/prodvizhenie-na-russkih-platformah' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← Все статьи</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>📊 Стратегия</span><span>·</span><span>10 мин чтения</span><span>·</span><time dateTime="2025-03">Март 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Продвижение на российских видеоплатформах — стратегия 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Комплексная стратегия продвижения для российских блогеров: VK Видео, Rutube, YouTube, Telegram. Как выстроить присутствие без лишних усилий.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Анализируй конкурентов в своей нише</div><div className="text-muted text-sm">БлогерКит · Бесплатно</div></div>
          <Link href="/analyze" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Анализировать →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Новая карта российского видеоблогинга</h2>
            <p className="text-muted mb-3">В 2025 году успешные блогеры присутствуют на 2–3 платформах: VK Видео (41 млн в день), YouTube (28,9 млн), Rutube (80 млн в месяц), Telegram (90,5 млн в месяц).</p>
            <p className="text-muted mb-3">Главный принцип: одна идея — несколько форматов — несколько платформ. Снял длинное видео → нарезал клипы для VK и Shorts, написал пост в Telegram, опубликовал на Rutube.</p>
            <p className="text-muted mb-3">Это не означает создание отдельного контента для каждой платформы — это умная переупаковка.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Роль каждой платформы</h2>
            <p className="text-muted mb-3">YouTube: долгосрочный поисковый трафик. Видео работают месяцами и годами. Инвестируй в качество и SEO.</p>
            <p className="text-muted mb-3">VK Видео + Клипы: максимальный охват российской аудитории прямо сейчас. VK Клипы — быстрый рост, длинные видео — стабильное присутствие.</p>
            <p className="text-muted mb-3">Rutube: дополнительная аудитория с минимальной конкуренцией. Публикуй те же видео что на YouTube — дополнительные просмотры без дополнительной работы. Telegram: база лояльной аудитории, мультипликатор эффекта от всего контента.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как не утонуть в публикациях</h2>
            <p className="text-muted mb-3">Batching: один день съёмки — 1 длинное видео + 3–5 клипов. Одна загрузка на несколько платформ занимает 20–30 минут при отлаженном процессе.</p>
            <p className="text-muted mb-3">Чеклист для каждой публикации: YouTube → VK Видео → Rutube → Telegram. Входит в привычку за 2–3 недели.</p>
            <p className="text-muted mb-3">Правило 80/20: 80% времени — создание контента, 20% — его распределение по платформам.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Аналитика и оптимизация</h2>
            <p className="text-muted mb-3">Следи за показателями каждой платформы отдельно. Одно видео может набрать 50 000 просмотров на YouTube и 200 000 на VK — алгоритмы разные.</p>
            <p className="text-muted mb-3">Главный вопрос: на какой платформе при тех же усилиях больший охват? Туда и инвестируй больше времени.</p>
            <p className="text-muted mb-3">Инструмент анализа конкурентов БлогерКит помогает увидеть что работает в твоей нише на YouTube — адаптируй те же темы для VK и Rutube.</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/vk-vs-youtube-gde-nachat','VK vs YouTube — где начинать'],
['/blog/kak-prodvigatsya-vk-video','Как продвигаться в VK Видео'],
['/blog/rutube-kak-nabrat-prosmotry','Как набрать просмотры на Rutube'],].map(([href,t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}