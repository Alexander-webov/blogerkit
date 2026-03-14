import type { Metadata } from 'next'
import CoversTool from './CoversTool'

export const metadata: Metadata = {
  title: 'Конструктор обложек YouTube бесплатно — 25+ шаблонов, без регистрации',
  description: 'Создай кликабельную обложку для YouTube за 2 минуты. 25+ готовых шаблонов, редактор текста и фильтров прямо в браузере. Подходит для TikTok и Instagram. Без регистрации.',
  keywords: ['конструктор обложек youtube', 'обложка для youtube бесплатно', 'сделать обложку youtube онлайн', 'шаблоны обложек youtube', 'превью для youtube'],
  alternates: { canonical: 'https://blogerkit.ru/covers' },
  openGraph: {
    title: 'Конструктор обложек YouTube — 25+ шаблонов бесплатно',
    description: '25+ шаблонов обложек для YouTube, TikTok, Instagram. Редактор в браузере, без регистрации.',
    url: 'https://blogerkit.ru/covers',
  },
}

export default function CoversPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Конструктор обложек для YouTube — бесплатные шаблоны онлайн</h1>
      </div>
      <CoversTool />

      <section className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted space-y-4">
        <h2 className="text-white font-bold text-base">Какой размер обложки для YouTube?</h2>
        <p>Стандартный размер обложки (превью) для YouTube — 1280×720 пикселей при соотношении сторон 16:9. Минимальный размер — 640×360 пикселей. Все шаблоны в конструкторе уже настроены на правильные размеры — тебе не нужно ничего считать вручную.</p>
        <h2 className="text-white font-bold text-base">Как сделать кликабельную обложку?</h2>
        <p>Кликабельная обложка содержит крупный заголовок (3–5 слов), эмоциональное лицо или яркий объект, и контрастный фон. Наши шаблоны уже следуют этим принципам — просто выбери подходящий стиль и замени текст.</p>
        <h2 className="text-white font-bold text-base">Можно ли использовать обложки для других платформ?</h2>
        <p>Да. В конструкторе есть пресеты для YouTube (16:9), Instagram (1:1 и 4:5), и TikTok (9:16). Одну и ту же обложку можно быстро адаптировать под любую платформу.</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Конструктор обложек YouTube — БлогерКит',
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
        description: 'Создай обложку для YouTube за 2 минуты. 25+ шаблонов, редактор в браузере.',
      })}} />
    </>
  )
}
