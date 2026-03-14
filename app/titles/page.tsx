import type { Metadata } from 'next'
import TitlesTool from './TitlesTool'

export const metadata: Metadata = {
  title: 'AI-генератор заголовков для YouTube — 8 вариантов за секунду, бесплатно',
  description: 'Генератор заголовков для YouTube на основе Claude AI. Введи тему видео — получи 8 кликабельных заголовков с оценкой CTR. Без регистрации, бесплатно.',
  keywords: ['генератор заголовков youtube', 'заголовок для youtube ai', 'кликабельные заголовки youtube', 'как назвать видео youtube', 'заголовок видео youtube'],
  alternates: { canonical: 'https://blogerkit.ru/titles' },
  openGraph: {
    title: 'AI-генератор заголовков YouTube — 8 вариантов бесплатно',
    description: 'Введи тему — получи 8 кликабельных заголовков с оценкой CTR. Claude AI, без регистрации.',
    url: 'https://blogerkit.ru/titles',
  },
}

export default function TitlesPage() {
  return (
    <>
      <div className="sr-only">
        <h1>AI-генератор заголовков для YouTube — кликабельные названия видео за секунду</h1>
      </div>
      <TitlesTool />

      <section className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted space-y-4">
        <h2 className="text-white font-bold text-base">Почему заголовок видео так важен для YouTube?</h2>
        <p>Заголовок — один из главных факторов CTR (кликабельности). По данным YouTube, разница между слабым и сильным заголовком может давать 2–3x разницу в кликах при одинаковой обложке. Хороший заголовок содержит конкретную пользу или интригу, ключевое слово для поиска, и умещается в 60 символов.</p>
        <h2 className="text-white font-bold text-base">Как AI генерирует заголовки?</h2>
        <p>Инструмент использует Claude AI от Anthropic — одну из самых мощных языковых моделей. Ты описываешь тему видео, AI анализирует что работает в данной нише и генерирует 8 разных вариантов заголовка: с вопросом, с числом, с интригой, с пользой. Каждый вариант оценивается по предполагаемому CTR.</p>
        <h2 className="text-white font-bold text-base">Как выбрать лучший заголовок?</h2>
        <p>Смотри на оценку CTR и выбирай заголовок который точнее всего описывает твоё видео. Заголовки с числами (топ-10, 5 способов) и заголовки с вопросом обычно работают лучше всего. Также важно чтобы заголовок соответствовал обложке — вместе они должны рассказывать одну историю.</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'AI-генератор заголовков YouTube — БлогерКит',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
        description: 'Генератор кликабельных заголовков для YouTube на основе Claude AI.',
      })}} />
    </>
  )
}
