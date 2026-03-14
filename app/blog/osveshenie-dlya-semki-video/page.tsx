import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Освещение для съёмки видео дома — как правильно настроить 2025',
  description: 'Как организовать освещение для съёмки YouTube видео дома: естественный свет, кольцевая лампа, трёхточечное освещение. Бюджетные решения для хорошей картинки.',
  keywords: ['освещение для съёмки видео', 'свет для youtube видео', 'кольцевая лампа youtube', 'как настроить свет для видео дома', 'освещение блогера'],
  alternates: { canonical: 'https://blogerkit.ru/blog/osveshenie-dlya-semki-video' },
  openGraph: {
    title: 'Освещение для съёмки видео дома — руководство 2025',
    description: 'Естественный свет, кольцевая лампа, трёхточечное освещение — бюджетные решения.',
    url: 'https://blogerkit.ru/blog/osveshenie-dlya-semki-video',
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
          <span>💡 Съёмка</span><span>·</span><span>8 мин чтения</span><span>·</span>
          <time dateTime="2025-03-10">Март 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Освещение для съёмки видео дома — как правильно настроить 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Освещение влияет на качество видео сильнее чем камера. Снятое при плохом свете видео с дорогой камерой выглядит хуже чем видео с телефоном при хорошем освещении. Хорошая новость: правильный свет можно организовать бесплатно или за 1000–3000 рублей.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-bold text-sm mb-0.5">Создай яркую обложку для видео</div>
            <div className="text-muted text-sm">25+ шаблонов для YouTube · Бесплатно</div>
          </div>
          <Link href="/covers" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Создать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Главное правило освещения: свет перед тобой</h2>
            <p className="text-muted mb-3">Источник света должен находиться перед тобой или сбоку — никогда сзади. Если свет сзади (окно за спиной) — камера видит ярко освещённый фон и тёмное лицо. Автоматика камеры выравнивает экспозицию по яркому фону и лицо становится силуэтом.</p>
            <p className="text-muted mb-3">Правильная позиция: ты сидишь между источником света и камерой. Свет падает на лицо спереди или под углом 45 градусов сбоку. Камера направлена на тебя, спиной к источнику света.</p>
            <p className="text-muted">Проверка: сделай тестовый снимок. Если на лице есть чёткие тени — свет слишком сбоку или снизу. Если лицо плоское без теней — свет слишком прямой. Лёгкие мягкие тени создают объём — это правильно.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Естественный свет — бесплатное решение</h2>
            <p className="text-muted mb-3">Дневной свет из окна — лучший источник освещения для видео. Он мягкий, рассеянный и создаёт красивые тени. Правило: снимай лицом к окну. Расположись так чтобы окно было перед тобой или под углом 45 градусов.</p>
            <p className="text-muted mb-3">Лучшее время для съёмки при естественном свете: утро и первая половина дня. Прямые солнечные лучи во второй половине дня создают жёсткие тени и могут засвечивать кадр. Пасмурный день даёт идеально мягкий равномерный свет.</p>
            <p className="text-muted mb-3">Проблема естественного света: он меняется в течение дня и непредсказуем. Если снимаешь серию видео — условия каждый раз разные. Облако закрыло солнце — яркость резко упала. Для стабильного результата нужен искусственный свет.</p>
            <p className="text-muted">Лайфхак: повесь на окно белую тюлевую занавеску. Она рассеивает жёсткий солнечный свет и превращает его в мягкий студийный. Бесплатное улучшение качества картинки.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Кольцевая лампа — простое и доступное решение</h2>
            <p className="text-muted mb-3">Кольцевая лампа — самый популярный инструмент освещения для YouTube блогеров. Стоит 800–2000 рублей, устанавливается за 5 минут, даёт равномерный мягкий свет который хорошо выглядит на видео.</p>
            <p className="text-muted mb-3">Как использовать: поставь кольцевую лампу прямо перед собой так чтобы лицо находилось в центре кольца. Расстояние от лампы до лица — 50–80 сантиметров. Регулируй яркость и цветовую температуру под условия съёмки.</p>
            <p className="text-muted mb-3">Цветовая температура: тёплый свет (2700–3000K) выглядит уютно, хорошо для лайфстайл контента. Нейтральный дневной свет (5000–5500K) выглядит профессионально, хорошо для обучающего контента и бизнес-темы. Многие кольцевые лампы имеют регулировку — начни с нейтрального и корректируй под свой вкус.</p>
            <p className="text-muted">Недостаток кольцевой лампы: характерный круглый отблеск в глазах. Это «выдаёт» кольцевую лампу. Большинству зрителей это не мешает, но если хочешь более естественный вид — используй прямоугольный панельный прожектор.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Панельный LED прожектор — профессиональный результат</h2>
            <p className="text-muted mb-3">Прямоугольный LED панель — следующий шаг после кольцевой лампы. Стоит 2000–8000 рублей, даёт более естественный мягкий свет без характерного «отблеска». Используется в профессиональных видеостудиях.</p>
            <p className="text-muted mb-3">Популярные варианты: Godox SL60W (5000–7000 ₽), Elgato Key Light (8000–12 000 ₽), Neewer 660 LED (3000–5000 ₽). Elgato Key Light удобен для стримеров — управляется с компьютера через приложение.</p>
            <p className="text-muted">Установка: поставь прожектор сбоку от камеры под углом 45 градусов. Это создаёт «живые» тени которые придают объём лицу. На расстоянии 1–1.5 метра от тебя.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Трёхточечное освещение — студийный стандарт</h2>
            <p className="text-muted mb-3">Профессиональное освещение для видео строится по схеме трёх точек. Это система которую используют в кино и телевидении десятилетиями.</p>
            <p className="text-muted mb-3">Ключевой свет (Key Light): главный источник света, стоит под углом 45° спереди-сбоку. Самый яркий. Формирует основное освещение и тени на лице. Заполняющий свет (Fill Light): стоит с противоположной стороны от ключевого. Вдвое менее яркий. Смягчает тени от ключевого света.</p>
            <p className="text-muted mb-3">Контровой свет (Back Light / Rim Light): стоит сзади и сбоку. Создаёт светящийся контур вокруг головы и плеч. Отделяет тебя от фона. Делает картинку «кинематографичной».</p>
            <p className="text-muted">Для большинства YouTube видео достаточно двух точек — ключевой и заполняющий. Контровой свет добавляет профессиональный вид но не обязателен.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Бюджетные решения</h2>
            <p className="text-muted mb-3">Вариант за 0 рублей: снимай у окна в первой половине дня лицом к свету. Добавь отражатель из белого картона или пенополистирола с противоположной стороны чтобы смягчить тени. Результат лучше чем у многих кольцевых ламп.</p>
            <p className="text-muted mb-3">Вариант за 1000–2000 ₽: кольцевая лампа 26–36 сантиметров с регулировкой яркости и цветовой температуры. Достаточно для большинства YouTube форматов.</p>
            <p className="text-muted">Вариант за 3000–6000 ₽: два LED панельных прожектора. Один ключевой, один заполняющий. Профессиональный результат который выглядит лучше кольцевой лампы.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Типичные ошибки освещения</h2>
            <p className="text-muted mb-3">Окно за спиной: классическая ошибка новичков. Лицо в тени, фон засвечен. Решение — развернись лицом к окну. Смешение цветовых температур: одновременно используешь тёплый искусственный свет и холодный дневной. Лицо приобретает неестественный оттенок. Решение — закрой окна или выключи искусственный свет, используй что-то одно.</p>
            <p className="text-muted mb-3">Свет снизу (эффект хоррора): настольная лампа стоит ниже лица и светит снизу вверх. Создаёт пугающие тени. Источник света всегда должен быть выше уровня глаз. Слишком яркий свет в упор: пересветленное лицо теряет детали. Яркость нужно регулировать или увеличить расстояние от источника до лица.</p>
            <p className="text-muted">Одна лампа без отражателя: жёсткие тени от одного источника выглядят непрофессионально. Добавь отражатель или второй источник с противоположной стороны.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Создай яркую обложку для видео</div>
          <p className="text-muted text-sm mb-4">25+ шаблонов специально для YouTube · Бесплатно</p>
          <Link href="/covers" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Открыть конструктор →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[
              ['/blog/kak-snyat-video-youtube-telefon', 'Как снять видео для YouTube на телефон'],
              ['/blog/mikrofon-dlya-youtube', 'Какой микрофон купить для YouTube'],
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
