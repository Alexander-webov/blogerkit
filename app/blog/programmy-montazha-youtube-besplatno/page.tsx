import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Лучшие программы для монтажа YouTube видео бесплатно в 2025 году',
  description: 'Обзор лучших бесплатных программ для монтажа YouTube видео: DaVinci Resolve, CapCut, iMovie, Shotcut. Что выбрать начинающему блогеру в 2025 году.',
  keywords: ['программы для монтажа youtube', 'бесплатный монтаж видео youtube', 'davinci resolve для youtube', 'capcut для youtube', 'монтаж видео бесплатно'],
  alternates: { canonical: 'https://blogerkit.ru/blog/programmy-montazha-youtube-besplatno' },
  openGraph: {
    title: 'Лучшие бесплатные программы монтажа для YouTube 2025',
    description: 'DaVinci Resolve, CapCut, iMovie — что выбрать начинающему блогеру.',
    url: 'https://blogerkit.ru/blog/programmy-montazha-youtube-besplatno',
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
          <span>🎬 Монтаж</span><span>·</span><span>10 мин чтения</span><span>·</span>
          <time dateTime="2025-03-03">Март 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Лучшие программы для монтажа YouTube видео бесплатно в 2025 году</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Монтаж — обязательный этап создания YouTube видео. Хорошая новость: лучшие инструменты для монтажа бесплатные. Разбираем каждый вариант честно — что умеет, для кого подходит, и каковы реальные ограничения.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-bold text-sm mb-0.5">Обрежь видео под Shorts в браузере</div>
            <div className="text-muted text-sm">Кроп 9:16 · Без загрузки на сервер · Бесплатно</div>
          </div>
          <Link href="/crop" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Открыть редактор →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">CapCut — лучший выбор для начинающих</h2>
            <p className="text-muted mb-3">CapCut от ByteDance (создателей TikTok) — самая популярная программа для монтажа видео в 2025 году. Работает на телефоне (iOS и Android) и компьютере (Windows и Mac). Полностью бесплатная для большинства функций.</p>
            <p className="text-muted mb-3">Что умеет CapCut: базовый монтаж (обрезка, склейка, скорость), автоматические субтитры с распознаванием речи (работает на русском языке), эффекты и переходы, коррекция цвета, удаление фона, стабилизация. Для Shorts — встроенные шаблоны с популярными форматами.</p>
            <p className="text-muted mb-3">Главный плюс CapCut — скорость освоения. Через час ты уже монтируешь готовые видео. Интерфейс интуитивный, много обучающих туториалов на YouTube.</p>
            <p className="text-muted">Ограничения: на экспортированные видео добавляется водяной знак CapCut (убирается в настройках), некоторые эффекты и шаблоны платные. Для сложных проектов не хватает профессиональных инструментов управления цветом и звуком.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">DaVinci Resolve — профессиональный монтаж бесплатно</h2>
            <p className="text-muted mb-3">DaVinci Resolve — профессиональная программа от Blackmagic Design которую используют при создании голливудских фильмов. Бесплатная версия покрывает 95% потребностей YouTube блогеров. Работает на Windows, Mac и Linux.</p>
            <p className="text-muted mb-3">Что умеет бесплатная версия: полноценный нелинейный монтаж, профессиональная цветокоррекция (лучшая в индустрии), обработка звука (Fairlight), эффекты и анимация (Fusion), поддержка 4K и 8K видео. Это больше чем нужно большинству блогеров.</p>
            <p className="text-muted mb-3">Главный минус — высокий порог вхождения. DaVinci Resolve сложнее чем CapCut или iMovie. Первые 2–3 недели придётся активно учиться. Зато потом можно делать монтаж профессионального уровня.</p>
            <p className="text-muted">Требования к компьютеру: для 4K монтажа нужна дискретная видеокарта с 4+ ГБ видеопамяти. На слабых компьютерах 4K видео будет лагать — работай в 1080p или используй прокси файлы.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">iMovie — для пользователей Apple</h2>
            <p className="text-muted mb-3">iMovie — бесплатная программа от Apple для Mac и iPhone. Предустановлена на все устройства Apple. Простая, стабильная, хорошо интегрирована с экосистемой Apple.</p>
            <p className="text-muted mb-3">Что умеет: базовый монтаж, красивые встроенные переходы, работа с музыкой из Apple Music, экспорт в разных форматах. Синхронизация между iPhone и Mac — начни монтировать на телефоне, продолжи на компьютере.</p>
            <p className="text-muted mb-3">Для кого подходит: начинающие блогеры с устройствами Apple которым нужен простой и надёжный инструмент без лишних настроек. iMovie делает хорошие видео при минимальных усилиях.</p>
            <p className="text-muted">Ограничения: только для экосистемы Apple, ограниченные возможности цветокоррекции и звука, нет поддержки многих форматов. Когда перерастёшь iMovie — следующий шаг это Final Cut Pro (платный) или переход на DaVinci Resolve.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Shotcut — кроссплатформенная альтернатива</h2>
            <p className="text-muted mb-3">Shotcut — бесплатная программа с открытым исходным кодом для Windows, Mac и Linux. Хороший средний вариант между простым CapCut и сложным DaVinci Resolve.</p>
            <p className="text-muted mb-3">Что умеет: поддержка большинства форматов видео без конвертации, нелинейный монтаж, базовая цветокоррекция, фильтры и эффекты, работа со звуком. Экспорт без водяных знаков и ограничений.</p>
            <p className="text-muted">Для кого подходит: пользователи Linux, блогеры которым нужно что-то мощнее iMovie но проще DaVinci Resolve, и те кто принципиально предпочитает программы с открытым кодом.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Clipchamp — монтаж прямо в браузере</h2>
            <p className="text-muted mb-3">Clipchamp — онлайн-редактор от Microsoft, встроенный в Windows 11. Работает в браузере, не требует установки. Бесплатная версия позволяет монтировать и экспортировать видео в 1080p.</p>
            <p className="text-muted mb-3">Что умеет: базовый монтаж, стоковые видео и музыка (часть бесплатная), шаблоны для разных форматов включая YouTube и Shorts, субтитры, запись экрана. Интерфейс простой и современный.</p>
            <p className="text-muted">Ограничения: требует постоянного интернет-соединения, большие файлы загружаются медленно, экспорт занимает время. Хороший вариант для простых видео без тяжёлых эффектов.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Что выбрать: сравнительная таблица</h2>
            <div className="bg-card border border-border rounded-xl p-4 my-4">
              <div className="space-y-3 text-xs">
                <div className="grid grid-cols-4 gap-2 font-bold text-white pb-2 border-b border-border">
                  <span>Программа</span><span>Сложность</span><span>Платформа</span><span>Лучше всего для</span>
                </div>
                {[
                  ['CapCut', 'Лёгкая', 'Все', 'Shorts, начинающие'],
                  ['DaVinci Resolve', 'Сложная', 'Win/Mac/Linux', 'Серьёзный монтаж'],
                  ['iMovie', 'Лёгкая', 'Только Apple', 'Пользователи Mac/iPhone'],
                  ['Shotcut', 'Средняя', 'Win/Mac/Linux', 'Linux, открытый код'],
                  ['Clipchamp', 'Лёгкая', 'Браузер/Win', 'Быстрые простые видео'],
                ].map(([name, difficulty, platform, useFor]) => (
                  <div key={name} className="grid grid-cols-4 gap-2 text-muted py-1 border-b border-border/50">
                    <span className="text-white font-medium">{name}</span>
                    <span>{difficulty}</span>
                    <span>{platform}</span>
                    <span>{useFor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Мой совет: с чего начать</h2>
            <p className="text-muted mb-3">Если снимаешь на телефон и делаешь Shorts — начни с CapCut. Он установлен за минуту и через час ты уже монтируешь. Для длинных видео на компьютере — DaVinci Resolve стоит потраченного времени на обучение.</p>
            <p className="text-muted mb-3">Не переключайся между программами каждую неделю в поисках «лучшей». Выбери одну, изучи её глубоко. Хороший монтаж — это навык а не инструмент. Опытный монтажёр сделает отличное видео в любой программе.</p>
            <p className="text-muted">Главное правило монтажа YouTube видео: убирай всё лишнее. Паузы, слова-паразиты, затянутые части. Зритель YouTube ценит своё время — держи его внимание на протяжении всего видео.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Обрежь видео под Shorts в браузере</div>
          <p className="text-muted text-sm mb-4">Без программ · Без загрузки на сервер · Бесплатно</p>
          <Link href="/crop" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Открыть редактор →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[
              ['/blog/kak-snyat-video-youtube-telefon', 'Как снять видео для YouTube на телефон'],
              ['/blog/kak-sdelat-shorts', 'Как сделать Shorts из обычного видео'],
              ['/blog/kak-nachat-youtube', 'Как начать YouTube канал с нуля'],
            ].map(([href, title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
