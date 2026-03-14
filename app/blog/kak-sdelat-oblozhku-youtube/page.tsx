import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как сделать обложку для YouTube — полное руководство 2025',
  description: 'Пошаговое руководство как сделать кликабельную обложку для YouTube. Размеры, правила дизайна, бесплатные инструменты. Увеличь CTR на 40%.',
  keywords: ['как сделать обложку для youtube', 'обложка youtube размер', 'красивая обложка youtube бесплатно', 'CTR youtube обложка'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kak-sdelat-oblozhku-youtube' },
  openGraph: {
    title: 'Как сделать обложку для YouTube — руководство 2025',
    description: 'Размеры, правила дизайна, ошибки и бесплатные инструменты для создания обложек.',
    url: 'https://blogerkit.ru/blog/kak-sdelat-oblozhku-youtube',
  },
}

export default function ArticleCover() {
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

        {/* META */}
        <div className="flex items-center gap-2 text-muted text-xs mb-4">
          <span>📚 Гайд</span>
          <span>·</span>
          <span>8 мин чтения</span>
          <span>·</span>
          <time dateTime="2025-01-15">Январь 2025</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">
          Как сделать обложку для YouTube которая реально кликают
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          Обложка отвечает за 60% CTR видео. Плохая обложка = мало просмотров, даже если контент отличный. В этом руководстве — всё что нужно знать в 2025 году.
        </p>

        {/* CTA TOP */}
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Попробуй сразу</div>
            <div className="text-muted text-xs">25+ шаблонов, редактор в браузере, бесплатно</div>
          </div>
          <Link href="/covers" className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Создать обложку →
          </Link>
        </div>

        <div className="prose prose-invert max-w-none text-sm leading-relaxed space-y-6">

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Размеры обложки YouTube в 2025</h2>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                ['Размер', '1280 × 720 пикселей'],
                ['Соотношение сторон', '16:9'],
                ['Минимальная ширина', '640 пикселей'],
                ['Макс. размер файла', '2 МБ'],
                ['Форматы', 'JPG, PNG, GIF, BMP'],
                ['Рекомендуемый формат', 'JPG (меньше весит)'],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col">
                  <span className="text-muted">{k}</span>
                  <span className="font-bold text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">5 правил кликабельной обложки</h2>

          <div className="space-y-4">
            {[
              { n: '01', title: 'Одно крупное лицо с эмоцией', body: 'Обложки с лицами получают на 38% больше кликов. Лицо должно занимать минимум треть обложки. Эмоция — удивление, шок, радость. Нейтральное выражение не работает.' },
              { n: '02', title: 'Максимум 5–6 слов текста', body: 'Люди смотрят обложку 2–3 секунды в ленте. Короткие тексты читаются быстро. Избегай длинных предложений — используй ключевые слова которые цепляют.' },
              { n: '03', title: 'Высококонтрастные цвета', body: 'Жёлтый на чёрном, белый на красном, яркие неоновые акценты. YouTube — тёмный сайт. Обложка должна буквально выпрыгивать из ленты.' },
              { n: '04', title: 'Читаемость на телефоне', body: 'Более 70% просмотров YouTube идёт с мобильных. Проверь как обложка выглядит уменьшенной до 120×70 пикселей. Если текст нечитаем — переделай.' },
              { n: '05', title: 'Единый стиль канала', body: 'Когда все твои обложки выглядят похоже — зрители узнают тебя в ленте. Выбери 2–3 цвета бренда, один шрифт и придерживайся их.' },
            ].map(item => (
              <div key={item.n} className="flex gap-4">
                <div className="font-heading text-2xl font-black text-accent/30 flex-shrink-0 w-10">{item.n}</div>
                <div>
                  <div className="font-bold mb-1">{item.title}</div>
                  <div className="text-muted">{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Частые ошибки которые убивают CTR</h2>
          <div className="space-y-2">
            {[
              ['❌', 'Слишком много элементов на обложке — взгляд не знает куда смотреть'],
              ['❌', 'Мелкий неконтрастный текст — нечитаем на маленьком экране'],
              ['❌', 'Стоковые фото без обработки — выглядят дёшево и не привлекают'],
              ['❌', 'Кликбейт который не соответствует контенту — убивает доверие'],
              ['❌', 'Разный стиль в каждом видео — не формируешь узнаваемость'],
            ].map(([icon, text]) => (
              <div key={text} className="flex gap-2 text-sm">
                <span>{icon}</span>
                <span className="text-muted">{text}</span>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как проанализировать обложки конкурентов</h2>
          <p className="text-muted">Перед созданием обложки изучи топ-10 видео по своей теме. Обрати внимание:</p>
          <ul className="space-y-1 text-muted list-none">
            {['Какие цвета доминируют в нише?','Используют ли конкуренты лица или только текст?','Какой размер текста?','Есть ли общие паттерны в заголовках?'].map(item => (
              <li key={item} className="flex gap-2"><span className="text-accent">→</span>{item}</li>
            ))}
          </ul>

          <div className="p-4 bg-surface border border-border rounded-xl">
            <div className="font-bold text-sm mb-1">Совет профи</div>
            <p className="text-muted text-xs">Используй инструмент анализа конкурентов БлогерКит — он покажет топ видео по твоей нише с реальными данными просмотров и позволит изучить что работает прямо сейчас.</p>
            <Link href="/analyze" className="inline-block mt-2 text-accent text-xs hover:underline">
              Анализировать конкурентов →
            </Link>
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Итог</h2>
          <p className="text-muted">Хорошая обложка это не про красоту — это про клики. Один час потраченный на обложку возвращается тысячами дополнительных просмотров. Начни с анализа конкурентов, выбери стиль и придерживайся его.</p>
        </div>

        {/* CTA BOTTOM */}
        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Создай обложку прямо сейчас</div>
          <p className="text-muted text-xs mb-4">25+ шаблонов для YouTube · Редактор в браузере · Бесплатно</p>
          <Link href="/covers" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Открыть конструктор обложек →
          </Link>
        </div>

        {/* RELATED */}
        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[
              ['/blog/analiz-konkurentov-youtube', '🔍 Как анализировать конкурентов на YouTube'],
              ['/blog/skolko-stoit-reklama-u-blogera', '💰 Сколько стоит реклама у блогера в 2025'],
              ['/trends', '🔥 Тренды YouTube — что набирает просмотры сейчас'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors">
                <span>{label}</span>
                <span className="text-accent">→</span>
              </Link>
            ))}
          </div>
        </div>

      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как сделать обложку для YouTube которая реально кликают',
        description: 'Пошаговое руководство по созданию кликабельных обложек для YouTube в 2025 году',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-01-15',
        dateModified: '2025-01-15',
        mainEntityOfPage: 'https://blogerkit.ru/blog/kak-sdelat-oblozhku-youtube',
      })}} />
    </div>
  )
}
