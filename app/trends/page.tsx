import type { Metadata } from "next";
import TrendsTool from "./TrendsTool";

export const metadata: Metadata = {
  title: "Тренды YouTube 2026 — что набирает просмотры прямо сейчас",
  description:
    "Смотри какие видео набирают просмотры на YouTube прямо сейчас. Тренды по нишам: авто, финансы, игры, еда, фитнес. Реальные данные каждые 2 часа.",
  keywords: [
    "тренды youtube 2026",
    "популярные видео youtube сейчас",
    "что снимать youtube",
    "тренды youtube россия",
  ],
  alternates: { canonical: "https://blogerkit.ru/trends" },
  openGraph: {
    title: "Тренды YouTube — что набирает просмотры прямо сейчас",
    description: "Реальные тренды по 10 нишам. Обновляется каждые 2 часа.",
    url: "https://blogerkit.ru/trends",
  },
};

export default function TrendsPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Тренды YouTube 2026 — популярные видео по нишам прямо сейчас</h1>
      </div>
      <TrendsTool />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Тренды YouTube — БлогерКит",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
            description:
              "Отслеживание трендовых видео на YouTube по нишам с реальными данными",
          }),
        }}
      />
    </>
  );
}
