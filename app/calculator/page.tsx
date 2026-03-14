import type { Metadata } from 'next'
import CalculatorTool from './CalculatorTool'

export const metadata: Metadata = {
  title: 'Калькулятор стоимости рекламы у блогера 2025 — сколько стоит интеграция',
  description: 'Рассчитай сколько стоит реклама на YouTube, TikTok или Telegram канале. Учитывает нишу, охват, вовлечённость и тип интеграции. Бесплатно, без регистрации.',
  keywords: ['сколько стоит реклама у блогера', 'калькулятор рекламы блогер', 'стоимость рекламы youtube', 'цена рекламы у блогера', 'реклама у блогера 2025'],
  alternates: { canonical: 'https://blogerkit.ru/calculator' },
  openGraph: {
    title: 'Калькулятор рекламы у блогера — рассчитай стоимость интеграции',
    description: 'Рассчитай цену рекламы у блогера с учётом ниши, платформы и вовлечённости.',
    url: 'https://blogerkit.ru/calculator',
  },
}

export default function CalculatorPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Калькулятор стоимости рекламы у блогера — YouTube, TikTok, Telegram</h1>
      </div>
      <CalculatorTool />

      <section className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted space-y-4">
        <h2 className="text-white font-bold text-base">Как рассчитать стоимость рекламы у блогера?</h2>
        <p>Стоимость рекламы у блогера зависит от трёх факторов: количества подписчиков, средних просмотров на видео (охват) и ниши. Блогеры в бизнес-нише или нише инвестиций берут значительно больше чем блогеры в развлекательной нише при одинаковой аудитории. Наш калькулятор учитывает все эти параметры.</p>
        <h2 className="text-white font-bold text-base">Какие типы рекламных интеграций бывают?</h2>
        <p>Три основных формата: преролл (15–30 секунд в начале видео), интеграция в середине видео (60–120 секунд с нативной подачей), и отдельный рекламный видеообзор. Интеграция в середине стоит дороже всего, так как её досматривают больше зрителей.</p>
        <h2 className="text-white font-bold text-base">Сколько стоит реклама у блогера с 100 000 подписчиков?</h2>
        <p>В среднем по рынку 2025 года: преролл — 15 000–25 000 ₽, интеграция — 30 000–60 000 ₽, отдельный обзор — 60 000–120 000 ₽. Точная цена зависит от ниши и реального охвата — используй калькулятор для точного расчёта.</p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Калькулятор рекламы у блогера — БлогерКит',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
        description: 'Рассчитай стоимость рекламной интеграции у блогера с учётом платформы, ниши и вовлечённости.',
      })}} />
    </>
  )
}
