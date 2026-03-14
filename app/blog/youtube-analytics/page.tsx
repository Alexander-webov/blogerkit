import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube Analytics — как читать статистику и принимать решения 2025',
  description: 'Полный гайд по YouTube Analytics: какие метрики важны, как читать CTR, удержание аудитории, источники трафика. Как использовать данные для роста канала.',
  keywords: ['youtube analytics', 'статистика youtube канала', 'youtube аналитика', 'как читать статистику youtube', 'метрики youtube'],
  alternates: { canonical: 'https://blogerkit.ru/blog/youtube-analytics' },
  openGraph: { title: 'YouTube Analytics — как читать статистику канала 2025', description: 'CTR, удержание, источники трафика — как использовать аналитику для роста.', url: 'https://blogerkit.ru/blog/youtube-analytics' },
}

export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← Все статьи</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>📊 Аналитика</span><span>·</span><span>10 мин чтения</span><span>·</span><time dateTime="2025-02-12">Февраль 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube Analytics — как читать статистику и принимать решения в 2025 году</h1>
        <p className="text-muted text-base leading-relaxed mb-8">YouTube Analytics — бесплатный инструмент который показывает всё о твоём канале. Большинство блогеров открывают его только чтобы посмотреть сколько просмотров. Но в данных скрыты ответы на главные вопросы: почему одно видео выстрелило, а другое нет, и что делать дальше.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Анализируй статистику любого YouTube канала</div><div className="text-muted text-sm">Своего или конкурента · 49 ₽</div></div>
          <Link href="/channel-analysis" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Анализировать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Главные метрики YouTube Analytics</h2>
            <p className="text-muted mb-3">Просмотры и время просмотра — базовые метрики. Показывают масштаб, но не качество. Просмотры без контекста ничего не значат — 10 000 просмотров с удержанием 80% лучше чем 100 000 просмотров с удержанием 10%.</p>
            <p className="text-muted mb-3">CTR (Impression click-through rate) — процент людей кликнувших на видео увидев его. Это здоровье обложки и заголовка. Норма: 4–8% для большинства каналов. Ниже 3% — нужно переделывать обложку. Выше 10% — отличный результат, масштабируй этот стиль.</p>
            <p className="text-muted">Среднее время просмотра (AVD) и удержание аудитории — качество контента. Алгоритм сравнивает твои метрики с другими видео той же длины. Цель — быть выше среднего в своей нише.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как читать отчёт удержания аудитории</h2>
            <p className="text-muted mb-3">Отчёт удержания (Audience retention) — самый важный отчёт в Analytics. Он показывает кривую: сколько процентов зрителей остаётся на каждой секунде видео. Нормальная кривая — постепенно убывающая с первой до последней минуты.</p>
            <p className="text-muted mb-3">Что искать в отчёте: резкие падения — это моменты где зрители уходят. Посмотри что происходит в видео именно в этот момент. Возможные причины: затянутая часть, неинтересная тема, технический сбой. Пики — зрители перематывают к этому месту. Значит это интересно — делай больше такого контента.</p>
            <p className="text-muted">Первые 30 секунд критически важны. Если там сильное падение — вступление не работает. Последние 20% видео — нормально терять зрителей. Если там пик — добавляй более ценный контент в конец.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Источники трафика — откуда приходят зрители</h2>
            <p className="text-muted mb-3">Раздел «Источники трафика» показывает как зрители находят твои видео. Основные источники: главная страница YouTube, поиск YouTube, похожие видео, внешние источники (соцсети, сайты), уведомления подписчикам, плейлисты.</p>
            <p className="text-muted mb-3">Если основной трафик с главной страницы — алгоритм рекомендаций тебя продвигает. Это хорошо, но нестабильно — алгоритм может перестать показывать в любой момент. Если основной трафик из поиска — контент хорошо оптимизирован под ключевые слова. Это стабильный трафик который работает месяцами.</p>
            <p className="text-muted">Идеальная ситуация — диверсифицированные источники. Если 80% трафика с одного источника — это риск. Работай над развитием остальных.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Аналитика аудитории</h2>
            <p className="text-muted mb-3">Раздел «Аудитория» показывает демографию твоих зрителей: возраст, пол, география, другие каналы которые они смотрят. Эта информация критически важна для создания контента и для разговора с рекламодателями.</p>
            <p className="text-muted mb-3">Другие каналы которые смотрит твоя аудитория — это прямая подсказка для коллаборации. Если твои зрители смотрят определённые каналы — договорись с ними о совместном видео.</p>
            <p className="text-muted">Активные зрители (когда твоя аудитория онлайн): используй этот график чтобы выбрать оптимальное время публикации. Публикуй за 1–2 часа до пика активности чтобы видео успело набрать просмотры к моменту когда аудитория онлайн.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как использовать Analytics для роста</h2>
            <p className="text-muted mb-3">Правило 80/20 для Analytics: трать 80% времени анализируя свои лучшие видео. Что у них общего? Тема, формат, длина, стиль заголовка? Делай больше таких видео. Не трать много времени на анализ провальных видео — из них сложнее извлечь полезные уроки.</p>
            <p className="text-muted mb-3">Сравнение видео: в Analytics можно сравнить несколько видео по одному параметру. Сравни CTR топ-5 видео против остальных. Скорее всего увидишь паттерн в обложках или заголовках которые работают лучше.</p>
            <p className="text-muted">Частота проверки аналитики: первые 48 часов после публикации — каждый день (это критический период для алгоритма). Далее — раз в неделю для мониторинга трендов. Не смотри аналитику каждый час — это не даёт полезных инсайтов и создаёт тревогу.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Анализируй статистику любого канала</div>
          <p className="text-muted text-sm mb-4">Подписчики, просмотры, топ видео и AI-советы · 49 ₽</p>
          <Link href="/channel-analysis" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Анализировать канал →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/algoritm-youtube-2025','Алгоритм YouTube 2025 — как он работает'],['/blog/kak-uvelichit-podpischikov','Как увеличить подписчиков на YouTube'],['/blog/youtube-seo-prodvizhenie','YouTube SEO — продвижение в поиске']].map(([href,title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
