import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как оформить YouTube канал с нуля — баннер, аватар, описание 2025',
  description: 'Полное руководство по оформлению YouTube канала: размеры баннера и аватара, как написать описание, правильное название, ссылки в шапке. Чеклист оформления.',
  keywords: ['как оформить youtube канал', 'оформление youtube канала', 'баннер youtube размер', 'аватар youtube', 'описание youtube канала'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-oformit-youtube-kanal' },
  openGraph: {
    title: 'Как оформить YouTube канал с нуля — руководство 2025',
    description: 'Баннер, аватар, описание, трейлер — полный чеклист оформления канала.',
    url: 'https://blogerkit.ru/blog/kak-oformit-youtube-kanal',
  },
}

export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит
        </Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← Все статьи</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>🎨 Оформление</span><span>·</span><span>9 мин чтения</span><span>·</span>
          <time dateTime="2025-03-05">Март 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Как оформить YouTube канал с нуля — баннер, аватар, описание 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Первое впечатление о канале формируется за секунды. Зритель который пришёл на твой канал смотрит на аватар, баннер и описание прежде чем решить подписаться. Правильное оформление увеличивает конверсию в подписчиков на 15–25%.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-bold text-sm mb-0.5">Создай обложку в фирменном стиле канала</div>
            <div className="text-muted text-sm">25+ шаблонов · Бесплатно</div>
          </div>
          <Link href="/covers" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Создать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Название канала — основа бренда</h2>
            <p className="text-muted mb-3">Хорошее название канала: короткое (1–3 слова), легко произносится вслух, запоминается с первого раза, отражает тематику или личность блогера, уникальное (проверь что его нет на YouTube и в других соцсетях).</p>
            <p className="text-muted mb-3">Два подхода к названию: личный бренд (своё имя или псевдоним) и тематический бренд (название отражает нишу). Личный бренд даёт больше гибкости — можно менять тематику. Тематический бренд лучше работает для SEO и сразу объясняет о чём канал.</p>
            <p className="text-muted">Как изменить название: YouTube Studio → Настройки → Канал → Базовые данные. Можно менять до 3 раз за 90 дней. После изменения URL канала остаётся прежним если не запрашивать кастомный URL.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Аватар канала — правила и размеры</h2>
            <p className="text-muted mb-3">Размер аватара: загружай изображение минимум 800×800 пикселей, квадратное. YouTube отображает его в круглом формате. Убедись что ключевой элемент (лицо или логотип) находится в центре и не обрезается при скруглении.</p>
            <p className="text-muted mb-3">Для личного бренда: чёткая фотография лица, нейтральный или однотонный фон, взгляд направлен на зрителя, хорошее освещение. Аватар должен хорошо смотреться в маленьком размере — его показывают иконкой 36–88 пикселей в большинстве мест.</p>
            <p className="text-muted">Для тематического бренда: логотип или иллюстрация которая читается маленькой. Избегай мелких деталей — они сливаются при уменьшении. 2–3 цвета максимум. Тот же аватар используй во всех соцсетях для узнаваемости бренда.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Баннер канала — размеры и дизайн</h2>
            <p className="text-muted mb-3">Размер баннера: загружай изображение 2560×1440 пикселей. Это максимальный размер для телевизора. На разных устройствах отображается по-разному: телевизор — полный размер, компьютер — центральные 1546×423 пикселей, мобильный — центральные 1280×360 пикселей.</p>
            <p className="text-muted mb-3">Безопасная зона: размещай весь важный текст и изображения в центральных 1235×338 пикселях. Это гарантирует что контент виден на всех устройствах. Края баннера видны только на большом экране.</p>
            <p className="text-muted mb-3">Что должно быть на баннере: название канала крупным читаемым шрифтом, краткое описание или слоган (1 строчка), расписание выхода видео («Новое видео каждую пятницу»), опционально — твоё фото или иллюстрация.</p>
            <p className="text-muted">Инструменты для создания баннера: Canva (много готовых шаблонов для YouTube баннера), Figma (для тех кто умеет работать с дизайном), Adobe Express (бесплатная версия Photoshop для простых задач).</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Описание канала — SEO и конверсия</h2>
            <p className="text-muted mb-3">Описание канала видно в разделе «О канале» и частично в поиске YouTube. Первые 150 символов показываются в результатах поиска — это самая важная часть.</p>
            <p className="text-muted mb-3">Структура хорошего описания канала: первое предложение — кому канал и что получит зритель подписавшись (используй ключевые слова ниши). Второе предложение — расписание выхода видео. Далее — краткое представление себя или команды. В конце — призыв подписаться и ссылки на другие соцсети.</p>
            <p className="text-muted">Пример: «Рассказываю как инвестировать с нуля и выйти на пассивный доход. Новое видео каждый четверг. Финансовый аналитик с 10-летним опытом. Подпишись чтобы не пропустить следующий гайд.»</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Ссылки в шапке канала</h2>
            <p className="text-muted mb-3">YouTube позволяет добавить до 5 ссылок которые отображаются на баннере канала. Это важный инструмент для перевода аудитории в другие каналы коммуникации.</p>
            <p className="text-muted mb-3">Что добавлять: Telegram канал (для самой лояльной аудитории), ВКонтакте или другая соцсеть, сайт или лендинг, email для деловых предложений. Ссылки на Boosty или другую платформу монетизации если она есть.</p>
            <p className="text-muted">Как добавить: YouTube Studio → Настройки → Канал → Ссылки. Первая ссылка в списке отображается поверх баннера на всех устройствах — поставь туда самое важное (обычно Telegram).</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Трейлер канала</h2>
            <p className="text-muted mb-3">Трейлер — видео которое автоматически воспроизводится для новых посетителей страницы. Это твой главный инструмент конвертации случайных зрителей в подписчиков.</p>
            <p className="text-muted">Оптимальная длина 60–90 секунд. Структура: яркий крючок в первые 5 секунд, объяснение для кого канал и какую проблему решает, лучшие моменты канала нарезкой, призыв подписаться. Как установить: YouTube Studio → Настройка канала → Оформление → Трейлер для новых посетителей.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Разделы и плейлисты на главной канала</h2>
            <p className="text-muted mb-3">Главная страница канала можно настроить под себя через разделы. Грамотно организованная главная страница увеличивает время просмотра — зритель видит рекомендованный контент и переходит от одного видео к другому.</p>
            <p className="text-muted mb-3">Рекомендуемая структура разделов: «Популярные видео» или «Топ этой недели» в самом верху, плейлисты по темам («Для начинающих», «Продвинутый уровень»), «Последнее видео».</p>
            <p className="text-muted">Создай плейлисты прежде чем настраивать разделы. Минимум 3–4 видео в каждом плейлисте для нормального отображения.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Чеклист оформления YouTube канала</h2>
            <p className="text-muted mb-3">Базовое (обязательно): название канала выбрано, аватар загружен (минимум 800×800), баннер создан (2560×1440), описание канала написано (первые 150 символов с ключевыми словами), ссылки добавлены.</p>
            <p className="text-muted">Расширенное (рекомендуется): трейлер канала снят и установлен, разделы на главной настроены, первые плейлисты созданы, водяной знак добавлен в YouTube Studio, URL канала кастомизирован (доступно после 100 подписчиков).</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Создай обложки в едином стиле канала</div>
          <p className="text-muted text-sm mb-4">25+ шаблонов · Редактор в браузере · Бесплатно</p>
          <Link href="/covers" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Открыть конструктор →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[
              ['/blog/kak-nachat-youtube', 'Как начать YouTube канал с нуля'],
              ['/blog/kanalnyj-trejler', 'Как сделать трейлер канала'],
              ['/blog/kak-sdelat-oblozhku-youtube', 'Как сделать кликабельную обложку'],
            ].map(([href, title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
