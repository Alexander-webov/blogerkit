import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Какой микрофон купить для YouTube — обзор вариантов 2025',
  description: 'Обзор микрофонов для YouTube блогеров: петличные, конденсаторные, USB, беспроводные. Что выбрать для съёмки дома, на улице и для Shorts.',
  keywords: ['микрофон для youtube', 'какой микрофон купить youtube', 'петличный микрофон youtube', 'usb микрофон для ютуба', 'лучший микрофон блогер'],
  alternates: { canonical: 'https://blogerkit.ru/blog/mikrofon-dlya-youtube' },
  openGraph: {
    title: 'Какой микрофон купить для YouTube в 2025 году',
    description: 'Петличные, USB, беспроводные — какой микрофон выбрать для своего формата.',
    url: 'https://blogerkit.ru/blog/mikrofon-dlya-youtube',
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
          <span>🎙 Оборудование</span><span>·</span><span>9 мин чтения</span><span>·</span>
          <time dateTime="2025-03-08">Март 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Какой микрофон купить для YouTube — обзор вариантов 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Плохой звук — главная причина по которой зрители покидают видео. Хорошая новость: решить проблему можно за 500–3000 рублей. Разбираем все типы микрофонов для YouTube и помогаем выбрать правильный под твой формат.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-bold text-sm mb-0.5">Обрежь видео для Shorts в браузере</div>
            <div className="text-muted text-sm">Без загрузки на сервер · Бесплатно</div>
          </div>
          <Link href="/crop" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Открыть →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Почему встроенный микрофон телефона не подходит</h2>
            <p className="text-muted mb-3">Встроенный микрофон смартфона или ноутбука записывает всё что происходит в комнате — твой голос, фоновый шум, эхо от стен, звук кондиционера. Он не умеет отделять нужный звук от ненужного.</p>
            <p className="text-muted mb-3">Кроме того, встроенный микрофон находится далеко от рта — обычно 30–60 сантиметров или дальше. Чем дальше микрофон от источника звука, тем больше фонового шума в записи относительно голоса.</p>
            <p className="text-muted">Любой внешний микрофон — даже самый дешёвый петличный за 500 рублей — даст заметно лучший результат. Это первый апгрейд который должен сделать каждый YouTube блогер.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Петличный микрофон — лучший старт</h2>
            <p className="text-muted mb-3">Петличный (lavalier) микрофон крепится на одежду в 15–25 сантиметрах от рта. Он всегда на одном расстоянии от источника звука — это даёт стабильный качественный результат независимо от того двигаешься ты или нет.</p>
            <p className="text-muted mb-3">Бюджетный вариант (500–1500 ₽): проводные петлички с разъёмом 3.5mm, Lightning (iPhone) или USB-C (Android/компьютер). Для съёмки дома — более чем достаточно. Подключается напрямую в телефон или ноутбук без дополнительного оборудования.</p>
            <p className="text-muted mb-3">Средний вариант (2000–5000 ₽): петлички Rode SmartLav+, DJI Mic Mini (проводной). Лучшее качество звука, более надёжное крепление, меньше шума от трения одежды о микрофон.</p>
            <p className="text-muted">Для кого: все кто снимает лицом к камере, туториалы, влоги, интервью. Петличка — универсальный выбор для большинства YouTube форматов.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Беспроводная петличка — свобода движения</h2>
            <p className="text-muted mb-3">Беспроводные петлички передают звук по Bluetooth или специальному радиочастотному каналу. Это даёт свободу движения — можно отойти от камеры на 10–30 метров без потери качества звука.</p>
            <p className="text-muted mb-3">Популярные варианты в 2025 году: Hollyland Lark M2 (3500–5000 ₽) — отличное соотношение цены и качества для начинающих. DJI Mic Mini (8000–10 000 ₽) — компактный профессиональный вариант. Rode Wireless ME (12 000–15 000 ₽) — профессиональное качество.</p>
            <p className="text-muted">Важный нюанс: беспроводные петлички подвержены интерференции в местах с большим количеством Wi-Fi и Bluetooth устройств (конференции, торговые центры). В таких условиях проводная петличка надёжнее.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">USB микрофон для записи за компьютером</h2>
            <p className="text-muted mb-3">Если снимаешь за компьютером — обзоры программ, запись экрана, подкасты, онлайн-интервью — USB конденсаторный микрофон это лучший выбор. Подключается напрямую в USB порт без дополнительного оборудования.</p>
            <p className="text-muted mb-3">Популярные варианты: Blue Yeti (8000–12 000 ₽) — классика жанра, отличный звук, несколько режимов записи. HyperX QuadCast (7000–10 000 ₽) — хорошая альтернатива Blue Yeti. Fifine K670 (2500–4000 ₽) — бюджетный вариант с хорошим качеством для цены.</p>
            <p className="text-muted">Правило использования: USB микрофон нужно держать в 15–30 сантиметрах от рта. Слишком близко — звук будет «бочкообразным». Слишком далеко — появится эхо и фоновый шум. Поставь микрофон на стол перед собой на штативе.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Накамерный микрофон для съёмки в движении</h2>
            <p className="text-muted mb-3">Накамерный (shotgun) микрофон крепится на камеру или телефон через специальный крепёж. Он направленный — записывает звук спереди и отсекает боковые шумы. Хорошо работает для съёмки на улице и в движении.</p>
            <p className="text-muted mb-3">Бюджетные варианты: Rode VideoMicro (4000–6000 ₽) — компактный, отличное качество для цены, подходит для телефонов и небольших камер. Movo VXR10 (2000–3000 ₽) — хороший бюджетный вариант.</p>
            <p className="text-muted">Ограничение: работает хуже всего в помещениях с эхом — звук будет «пустым». В таких условиях лучше петличка.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как выбрать: схема принятия решения</h2>
            <div className="bg-card border border-border rounded-xl p-4 my-4 space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold flex-shrink-0">Бюджет до 1500 ₽</span>
                <span className="text-muted">→ Проводная петличка с нужным разъёмом для телефона/ноутбука</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold flex-shrink-0">Снимаешь за ПК</span>
                <span className="text-muted">→ USB микрофон (Blue Yeti / Fifine K670)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold flex-shrink-0">Много двигаешься</span>
                <span className="text-muted">→ Беспроводная петличка (Hollyland Lark M2)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold flex-shrink-0">Снимаешь на улице</span>
                <span className="text-muted">→ Накамерный Rode VideoMicro + ветрозащита</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold flex-shrink-0">Универсальный</span>
                <span className="text-muted">→ Беспроводная петличка DJI Mic Mini</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Советы по улучшению звука без нового микрофона</h2>
            <p className="text-muted mb-3">Если микрофона пока нет: снимай в комнате с мягкими поверхностями — ковёр, шторы, диван поглощают эхо. Закрой окна и выключи кондиционер на время записи. Говори чётко и достаточно громко.</p>
            <p className="text-muted mb-3">Обработка звука в монтаже: CapCut и DaVinci Resolve имеют функцию шумоподавления. Она убирает фоновый шум но не делает плохой микрофон хорошим. Лучше записать хороший звук изначально чем чистить плохой.</p>
            <p className="text-muted">Проверяй звук перед съёмкой: запиши тест на 30 секунд и прослушай в наушниках. Это займёт 2 минуты и сэкономит часы на переснимку из-за проблем со звуком которые ты не заметил во время съёмки.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Сгенерируй заголовки для видео</div>
          <p className="text-muted text-sm mb-4">8 кликабельных вариантов за секунду · Бесплатно</p>
          <Link href="/titles" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Генерировать →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[
              ['/blog/kak-snyat-video-youtube-telefon', 'Как снять видео для YouTube на телефон'],
              ['/blog/osveshenie-dlya-semki-video', 'Освещение для съёмки видео дома'],
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
