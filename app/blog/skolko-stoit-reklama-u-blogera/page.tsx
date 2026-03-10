import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Сколько стоит реклама у блогера в 2026 — цены и калькулятор",
  description:
    "Актуальные цены на рекламу у блогеров в 2026 году: YouTube, TikTok, Telegram, Instagram. Формулы расчёта, средние ставки CPM и как правильно договориться о цене.",
  keywords: [
    "сколько стоит реклама у блогера",
    "цена рекламы youtube блогер",
    "стоимость интеграции блогер 2026",
    "CPM реклама youtube",
  ],
  alternates: {
    canonical: "https://blogerkit.ru/blog/skolko-stoit-reklama-u-blogera",
  },
  openGraph: {
    title: "Сколько стоит реклама у блогера 2026 — реальные цены",
    description: "Цены, формулы расчёта и советы по переговорам.",
    url: "https://blogerkit.ru/blog/skolko-stoit-reklama-u-blogera",
  },
};

const PRICE_TABLE = [
  {
    platform: "YouTube",
    size: "до 10K подп.",
    mention: "1–3K ₽",
    native: "3–8K ₽",
    dedicated: "10–25K ₽",
  },
  {
    platform: "YouTube",
    size: "10–100K подп.",
    mention: "3–15K ₽",
    native: "8–40K ₽",
    dedicated: "25–120K ₽",
  },
  {
    platform: "YouTube",
    size: "100K+ подп.",
    mention: "15–50K ₽",
    native: "40–150K ₽",
    dedicated: "120K+ ₽",
  },
  {
    platform: "Telegram",
    size: "1–5K подп.",
    mention: "—",
    native: "1–5K ₽",
    dedicated: "3–10K ₽",
  },
  {
    platform: "Telegram",
    size: "5–50K подп.",
    mention: "2–10K ₽",
    native: "5–30K ₽",
    dedicated: "10–80K ₽",
  },
  {
    platform: "TikTok",
    size: "10–100K подп.",
    mention: "2–10K ₽",
    native: "5–25K ₽",
    dedicated: "15–60K ₽",
  },
  {
    platform: "Instagram",
    size: "10–100K подп.",
    mention: "3–12K ₽",
    native: "8–35K ₽",
    dedicated: "20–80K ₽",
  },
];

export default function ArticleAdPrice() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-6 border-b border-border">
        <Link
          href="/"
          className="font-heading text-sm font-black flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-accent2 animate-pulse2" />
          БлогерКит
        </Link>
        <Link
          href="/blog"
          className="text-muted text-lg hover:text-white transition-colors"
        >
          ← Все статьи
        </Link>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-lg mb-4">
          <span>💰 Монетизация</span>
          <span>·</span>
          <span>7 мин чтения</span>
          <span>·</span>
          <time dateTime="2026-02-01">Февраль 2026</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">
          Сколько стоит реклама у блогера в 2026 году
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          Цены на рекламу у блогеров выросли на 20–40% за последние два года.
          Разбираемся как формируется цена, что влияет на стоимость и как
          правильно называть цену рекламодателю.
        </p>

        <div className="p-4 bg-accent2/8 border border-accent2/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Рассчитай свою цену</div>
            <div className="text-muted text-lg">
              Калькулятор с учётом ниши, платформы и вовлечённости
            </div>
          </div>
          <Link
            href="/calculator"
            className="px-4 py-2 bg-accent2 text-black text-lg font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            Рассчитать →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <h2 className="font-heading text-xl font-bold mt-8 mb-3">
            Формула расчёта цены рекламы
          </h2>
          <p className="text-muted">
            Базовая формула которую используют профессиональные медиабайеры:
          </p>
          <div className="bg-card border border-border rounded-xl p-4 font-mono text-sm text-center">
            <div className="text-accent2 font-bold mb-1">
              Цена = Просмотры × CPM × Нишевой коэффициент
            </div>
            <div className="text-muted text-lg">
              где CPM = цена за 1000 просмотров (зависит от платформы)
            </div>
          </div>
          <p className="text-muted">
            Например: 50 000 просмотров × 120 ₽ CPM × 1.5 (ниша авто) ={" "}
            <strong className="text-white">9 000 ₽</strong>
          </p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">
            Актуальные цены по платформам 2026
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-lg border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {[
                    "Платформа",
                    "Размер канала",
                    "Упоминание",
                    "Нативка",
                    "Спецвыпуск",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left text-muted py-2 pr-3 font-semibold whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICE_TABLE.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/4 hover:bg-white/2 transition-colors"
                  >
                    <td className="py-2 pr-3 font-bold text-accent2">
                      {row.platform}
                    </td>
                    <td className="py-2 pr-3 text-muted">{row.size}</td>
                    <td className="py-2 pr-3">{row.mention}</td>
                    <td className="py-2 pr-3 font-semibold text-white">
                      {row.native}
                    </td>
                    <td className="py-2 pr-3 font-bold text-yellow-400">
                      {row.dedicated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted text-lg">
            * Цены ориентировочные. Финансовая, крипто и IT-ниши платят в 2–3
            раза больше.
          </p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">
            Что влияет на цену помимо просмотров
          </h2>
          <div className="space-y-2">
            {[
              [
                "🎯 Нишевой коэффициент",
                "Финансы и IT — ×2.5. Развлечения — ×1.0. Разница в 2.5 раза при одинаковых просмотрах.",
              ],
              [
                "❤️ Вовлечённость",
                "Канал с 10% вовлечённостью стоит втрое дороже канала с 2% при одинаковой аудитории.",
              ],
              [
                "🎬 Эксклюзивность",
                "Если ты не рекламируешь конкурентов рекламодателя — можешь просить +20-30%.",
              ],
              [
                "📊 Медиакит",
                "Наличие красивого медиакита с демографией аудитории повышает доверие и цену.",
              ],
              [
                "⏰ Срок размещения",
                "Нативная реклама в начале видео стоит дороже чем в конце или середине.",
              ],
            ].map(([title, body]) => (
              <div
                key={title as string}
                className="flex gap-3 p-3 bg-card border border-border rounded-lg"
              >
                <div className="text-sm font-bold w-44 flex-shrink-0">
                  {title}
                </div>
                <div className="text-muted text-lg">{body}</div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">
            Как правильно называть цену
          </h2>
          <div className="space-y-3">
            {[
              {
                n: "01",
                tip: "Называй верхний порог диапазона",
                body: "Если калькулятор показал 8 000–12 000 ₽ — называй 12 000. Рекламодатель начнёт торговаться и вы сойдётесь на 9 000–10 000.",
              },
              {
                n: "02",
                tip: "Никогда не называй цену первым",
                body: "Спроси «какой у вас бюджет на интеграцию?». Часто рекламодатель называет больше чем ты планировал просить.",
              },
              {
                n: "03",
                tip: "Ссылайся на предыдущие интеграции",
                body: "Даже одна удачная интеграция — это кейс. «Для Бренд X мы получили X кликов» работает лучше любых цифр.",
              },
              {
                n: "04",
                tip: "Не снижай цену — меняй формат",
                body: "Вместо скидки предложи более короткую интеграцию. 3 000 ₽ за упоминание вместо 8 000 за нативку — выгодней для обоих.",
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-3">
                <div className="font-heading text-xl font-black text-accent2/30 w-8 flex-shrink-0">
                  {item.n}
                </div>
                <div>
                  <div className="font-bold mb-1">{item.tip}</div>
                  <div className="text-muted text-lg">{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">
            Где искать рекламодателей
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              [
                "GetBlogger",
                "Для YouTube и Instagram. Есть автоматические заявки.",
              ],
              ["Telega.in", "Крупнейшая биржа Telegram-каналов."],
              [
                "Маркет-платформа ВК",
                "Официальная платформа ВКонтакте от 1000 подп.",
              ],
              ["Epicstars", "Мультиплатформенная биржа, есть YouTube."],
            ].map(([name, desc]) => (
              <div
                key={name}
                className="bg-card border border-border rounded-xl p-3"
              >
                <div className="font-bold text-sm mb-1">{name}</div>
                <div className="text-muted text-lg">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent2/8 to-transparent border border-accent2/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">
            Рассчитай точную цену для своего канала
          </div>
          <p className="text-muted text-lg mb-4">
            Учитывает нишу, платформу, вовлечённость и тип интеграции
          </p>
          <Link
            href="/calculator"
            className="inline-block px-6 py-3 bg-accent2 text-black font-bold text-sm rounded-xl hover:opacity-85 transition-opacity"
          >
            Открыть калькулятор →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-lg uppercase tracking-widest mb-3">
            Читай также
          </div>
          <div className="flex flex-col gap-2">
            {[
              [
                "/blog/kak-sdelat-oblozhku-youtube",
                "🎨 Как сделать обложку для YouTube",
              ],
              [
                "/blog/analiz-konkurentov-youtube",
                "🔍 Как анализировать конкурентов на YouTube",
              ],
              ["/trends", "🔥 Тренды YouTube прямо сейчас"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
              >
                <span>{label}</span>
                <span className="text-accent">→</span>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Сколько стоит реклама у блогера в 2026 году",
            author: { "@type": "Organization", name: "БлогерКит" },
            publisher: {
              "@type": "Organization",
              name: "БлогерКит",
              url: "https://blogerkit.ru",
            },
            datePublished: "2026-02-01",
            mainEntityOfPage:
              "https://blogerkit.ru/blog/skolko-stoit-reklama-u-blogera",
          }),
        }}
      />
    </div>
  );
}
