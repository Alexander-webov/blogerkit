import type { Metadata } from 'next'
import CropTool from './CropTool'

export const metadata: Metadata = {
  title: 'Кроп видео для YouTube Shorts онлайн — 9:16 бесплатно, без загрузки на сервер',
  description: 'Обрежь горизонтальное видео в вертикальное 9:16 для YouTube Shorts и TikTok прямо в браузере. Без загрузки на сервер, без регистрации, без водяных знаков. Нарезка, субтитры, фильтры.',
  keywords: ['кроп видео для shorts', 'обрезать видео 9:16 онлайн', 'конвертер видео для youtube shorts', 'вертикальное видео онлайн', 'shorts видео сделать онлайн'],
  alternates: { canonical: 'https://blogerkit.ru/crop' },
  openGraph: {
    title: 'Кроп видео для YouTube Shorts — 9:16 онлайн, без регистрации',
    description: 'Обрежь видео под Shorts прямо в браузере. Без загрузки на сервер, без водяных знаков.',
    url: 'https://blogerkit.ru/crop',
  },
}

export default function CropPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Кроп видео для YouTube Shorts онлайн — 9:16 бесплатно в браузере</h1>
      </div>
      <CropTool />

      <section className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted space-y-4">
        <h2 className="text-white font-bold text-base">Как обрезать видео для YouTube Shorts?</h2>
        <p>YouTube Shorts требует вертикальный формат 9:16 (1080×1920 пикселей). Если у тебя горизонтальное видео — нужно обрезать его: выбрать нужную часть кадра и экспортировать в вертикальном формате. В нашем редакторе это делается перетаскиванием рамки прямо в браузере — без установки программ.</p>
        <h2 className="text-white font-bold text-base">Чем этот инструмент лучше Clideo и online-video-cutter?</h2>
        <p>Главное отличие — видео не загружается на сервер. Всё обрабатывается прямо в твоём браузере. Это означает: мгновенный старт без ожидания загрузки, полная конфиденциальность, нет ограничений по размеру файла и нет водяных знаков на готовом видео.</p>
        <h2 className="text-white font-bold text-base">Какие форматы поддерживаются?</h2>
        <p>На вход принимаются MP4, MOV, AVI и WebM. На выход — WebM который отлично подходит для загрузки на YouTube, TikTok и Instagram Reels. Поддерживаются пресеты: 9:16 для Shorts, 1:1 для Instagram, 4:5 для Instagram Feed, 16:9 для YouTube.</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Кроп видео для Shorts — БлогерКит',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
        description: 'Обрежь видео под YouTube Shorts 9:16 прямо в браузере. Без загрузки на сервер.',
      })}} />
    </>
  )
}
