import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как сделать Shorts из обычного видео — пошаговая инструкция 2025',
  description: 'Как превратить горизонтальное видео в YouTube Shorts 9:16: кроп, монтаж, субтитры, музыка. Бесплатные инструменты и пошаговая инструкция для начинающих.',
  keywords: ['как сделать shorts из видео', 'создать youtube shorts', 'обрезать видео для shorts', 'конвертировать видео в shorts'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-sdelat-shorts' },
  openGraph: { title: 'Как сделать YouTube Shorts из обычного видео — 2025', description: 'Кроп 9:16, монтаж, субтитры — пошаговая инструкция с бесплатными инструментами.', url: 'https://blogerkit.ru/blog/kak-sdelat-shorts' },
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
          <span>✂️ Shorts</span><span>·</span><span>8 мин чтения</span><span>·</span><time dateTime="2025-02-08">Февраль 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как сделать Shorts из обычного видео — пошаговая инструкция 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">YouTube Shorts требует вертикальный формат 9:16. Если у тебя уже есть горизонтальные видео — их можно адаптировать под Shorts без переснимки. В этой инструкции разбираем весь процесс от начала до конца.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Обрежь видео под 9:16 прямо в браузере</div><div className="text-muted text-sm">Без загрузки на сервер · Без водяных знаков · Бесплатно</div></div>
          <Link href="/crop" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Обрезать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 1. Выбери подходящий фрагмент</h2>
            <p className="text-muted mb-3">Не каждый фрагмент длинного видео подойдёт для Shorts. Хороший фрагмент для Shorts должен быть самодостаточным — понятным без контекста остального видео, содержать одну идею или историю, иметь чёткое начало и конец, и быть длиной 30–60 секунд.</p>
            <p className="text-muted mb-3">Что искать в своём видео: яркий момент с эмоцией или неожиданным поворотом, полезный совет который работает отдельно, впечатляющий визуальный момент, или ключевой тезис который хочется выделить.</p>
            <p className="text-muted">Чего избегать: фрагменты которые непонятны без предыстории («как я уже говорил в начале...»), слишком длинные объяснения, и моменты с плохим звуком или освещением.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 2. Кроп видео под формат 9:16</h2>
            <p className="text-muted mb-3">YouTube Shorts требует соотношение сторон 9:16 (вертикальное). Оптимальное разрешение — 1080×1920 пикселей. Горизонтальное видео 16:9 нужно обрезать — выбрать ту часть кадра которую хочешь оставить.</p>
            <p className="text-muted mb-3">Важно: не конвертируй горизонтальное видео добавляя чёрные полосы сверху и снизу. YouTube не запрещает это, но такой формат показывает хуже — зрители чаще скипают видео с чёрными полосами чем с правильным кропом.</p>
            <div className="bg-card border border-border rounded-xl p-4 my-4">
              <div className="text-sm font-bold mb-2">Как сделать кроп без программ</div>
              <p className="text-muted text-sm mb-3">Видеоредактор для Shorts работает прямо в браузере — загружаешь видео, перетаскиваешь рамку 9:16 на нужную часть кадра, скачиваешь готовый файл. Видео не уходит на сервер — всё обрабатывается локально.</p>
              <Link href="/crop" className="text-accent text-sm font-bold hover:underline">Открыть видеоредактор →</Link>
            </div>
            <p className="text-muted">При выборе области кропа: центрируй лицо говорящего в верхней трети кадра — там зритель смотрит в первую очередь. Нижняя треть хорошо подходит для субтитров.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 3. Добавь субтитры</h2>
            <p className="text-muted mb-3">По статистике 60–80% Shorts просматриваются без звука — в метро, в очереди, в общественных местах. Субтитры увеличивают досматриваемость на 20–40% и делают контент доступнее.</p>
            <p className="text-muted mb-3">Правила субтитров для Shorts: крупный шрифт (хорошо читается на маленьком экране), высококонтрастный цвет (белый текст с тёмной обводкой или тёмным фоном), 3–5 слов в строке максимум, расположение в нижней трети экрана.</p>
            <p className="text-muted">CapCut автоматически распознаёт речь и добавляет субтитры за 30 секунд. Проверь и исправь ошибки распознавания — особенно имена, термины и числа.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 4. Музыка и звук</h2>
            <p className="text-muted mb-3">Фоновая музыка увеличивает вовлечённость Shorts если подобрана правильно. Используй только музыку без авторских прав — иначе YouTube заблокирует монетизацию видео или вовсе удалит его.</p>
            <p className="text-muted mb-3">Где брать музыку: YouTube Audio Library (бесплатно, встроен в YouTube Studio), Epidemic Sound (платная подписка, профессиональное качество), Artlist (платная, популярна у блогеров). Убедись что громкость музыки не перекрывает речь — фоновая музыка должна быть тихой (30–40% от основного звука).</p>
            <p className="text-muted">Если в исходном видео есть шум — почисти звук в CapCut или DaVinci Resolve. Плохой звук заставляет зрителей выключить видео даже если контент хороший.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 5. Оформление и публикация</h2>
            <p className="text-muted mb-3">Заголовок Shorts: 50–60 символов, включи ключевое слово. Не повторяй то что уже видно на экране — дополняй. Описание: 2–3 предложения с ключевыми словами + ссылка на полное видео если есть. Хэштеги: #Shorts обязателен + 3–4 тематических.</p>
            <p className="text-muted mb-3">Обложка для Shorts: YouTube автоматически выбирает кадр. Ты можешь указать конкретный момент — выбери самый яркий или эмоциональный кадр. Обложка влияет на CTR в разделе «Подписки» и поиске.</p>
            <p className="text-muted">Когда публиковать: вечер (19:00–22:00 МСК) в будни и утро (10:00–13:00) в выходные показывают лучшие результаты. Но через 2–3 недели регулярных публикаций проверяй свою аналитику — у каждой аудитории своё время активности.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Инструменты для создания Shorts</h2>
            <p className="text-muted mb-3">CapCut (бесплатно, телефон и компьютер): самый популярный инструмент для Shorts. Автосубтитры, эффекты, шаблоны. Идеален для начинающих. DaVinci Resolve (бесплатно, компьютер): профессиональный монтаж. Более сложный но даёт максимальный контроль над результатом.</p>
            <p className="text-muted mb-3">InShot (бесплатно/платно, телефон): удобен для монтажа прямо на телефоне. Хорошо работает для простых Shorts без сложного монтажа. Видеоредактор БлогерКит (браузер): специально для кропа под 9:16 без загрузки файлов на сервер. Удобен если нужно только обрезать кадр.</p>
            <p className="text-muted">Выбор инструмента зависит от задачи: если нужно только обрезать кадр — используй браузерный редактор. Если нужен монтаж, субтитры и музыка — CapCut закроет все потребности.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Обрежь видео под Shorts прямо сейчас</div>
          <p className="text-muted text-sm mb-4">Кроп 9:16 · Нарезка · Субтитры · Фильтры</p>
          <Link href="/crop" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Открыть видеоредактор →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/youtube-shorts-prosmotr','Как набрать просмотры в YouTube Shorts'],['/blog/algoritm-youtube-2025','Алгоритм YouTube 2025'],['/blog/kak-prodvigat-youtube-kanal','Как продвигать YouTube канал']].map(([href,title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
