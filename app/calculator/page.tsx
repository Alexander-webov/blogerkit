import type { Metadata } from "next";
import CalculatorTool from "./CalculatorTool";

export const metadata: Metadata = {
  title: "Калькулятор стоимости рекламы у блогера 2026 — БлогерКит",
  description:
    "Рассчитай сколько стоит реклама на твоём YouTube, TikTok или Telegram канале. Учитывает нишу, охват и тип интеграции.",
  keywords: [
    "сколько стоит реклама у блогера",
    "калькулятор рекламы youtube",
    "цена рекламы блогер 2026",
  ],
  alternates: { canonical: "https://blogerkit.ru/calculator" },
  openGraph: {
    title: "Калькулятор рекламы у блогера — БлогерКит",
    description: "Рассчитай цену рекламы с учётом ниши, платформы и охвата.",
    url: "https://blogerkit.ru/calculator",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <div className="sr-only">
        <h1>
          Калькулятор стоимости рекламы у блогера — YouTube, TikTok, Telegram
          2026
        </h1>
      </div>
      <CalculatorTool />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Калькулятор рекламы у блогера — БлогерКит",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
            description:
              "Рассчитай стоимость рекламной интеграции с учётом платформы, ниши и вовлечённости.",
          }),
        }}
      />
    </>
  );
}
