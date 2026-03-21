import type { Metadata } from "next";
import TrendsTool from "./TrendsTool";

export const metadata: Metadata = {
  title: "Ютуб лучшее — что набирает просмотры прямо сейчас по нишам",
  description:
    "Смотри какие видео набирают просмотры на Ютуб  прямо сейчас. Тренды по 10 нишам: авто, финансы, игры, еда, фитнес, технологии. Реальные данные, обновляется каждые 2 часа.",
  keywords: [
    "Ютуб лучшее",
    "трендовые видео ютуб",
    "что смотрят на ютуб",
    "популярные видео Ютуб ",
    "тренды ютуб",
  ],
  alternates: { canonical: "https://blogerkit.ru/trends" },
  openGraph: {
    title: "Ютуб лучшее — что набирает просмотры прямо сейчас",
    description: "Реальные тренды по 10 нишам. Обновляется каждые 2 часа.",
    url: "https://blogerkit.ru/trends",
  },
};

export default function TrendsPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Ютуб лучшее — актуальные видео по нишам в реальном времени</h1>
      </div>
      <TrendsTool />

      <section className="max-w-3xl mx-auto px-4 py-12 text-sm text-muted space-y-4">
        <h2 className="text-white font-bold text-base">
          Как использовать Ютуб лучшее для роста канала?
        </h2>
        <p>
          Ютуб лучшее показывают что аудитория хочет смотреть прямо сейчас. Если
          ты публикуешь видео на трендовую тему в первые 24–72 часа — алгоритм
          Ютуб активнее продвигает его в рекомендации. Смотри тренды своей ниши
          каждый день и ищи темы которые ещё не закрыты конкурентами.
        </p>
        <h2 className="text-white font-bold text-base">
          Как часто обновляются данные?
        </h2>
        <p>
          Данные о трендах обновляются каждые 2 часа через Ютуб Data API. Это
          означает что ты видишь актуальную картину без задержки — в отличие от
          ручного поиска по Ютуб где алгоритм показывает персонализированный
          контент.
        </p>
        <h2 className="text-white font-bold text-base">
          По каким нишам доступны тренды?
        </h2>
        <p>
          Инструмент покрывает 10 популярных ниш: авто и мото, финансы и
          инвестиции, игры, еда и кулинария, фитнес и спорт, технологии, бьюти и
          мода, путешествия, бизнес и предпринимательство, развлечения. Каждая
          ниша анализируется отдельно для точных результатов.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Ютуб лучшее — БлогерКит",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
            description:
              "Отслеживание Ютуб лучшее по нишам с реальными данными.",
          }),
        }}
      />
    </>
  );
}
