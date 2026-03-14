import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "БлогерКит — инструменты для YouTube блогеров, бесплатно",
  description:
    "Анализ YouTube канала, медиакит PDF, кроп видео для Shorts, генератор заголовков. Без регистрации. Бесплатные и Pro инструменты для блогеров.",
  alternates: { canonical: "https://blogerkit.ru" },
};

const proTools = [
  {
    icon: "📡",
    name: "Анализ своего канала",
    desc: "Статистика, топ видео, AI-советы по развитию. Без регистрации — вставь ссылку и получи результат.",
    href: "/channel-analysis",
    price: "49 ₽",
    features: ["Подписчики и просмотры", "Топ-10 видео", "AI-советы от Claude"],
  },
  {
    icon: "📄",
    name: "Медиакит PDF",
    desc: "Профессиональный документ для рекламодателей за 5 минут. Статистика, цены, контакты.",
    href: "/mediakit",
    price: "149 ₽",
    features: ["Статистика канала", "Форматы и цены", "Скачать PDF"],
  },
  {
    icon: "✂️",
    name: "Видеоредактор Shorts",
    desc: "Кроп 16:9 → 9:16, нарезка, субтитры, фильтры. В браузере без загрузки на сервер.",
    href: "/crop",
    price: "Pro 149 ₽",
    features: ["Кроп бесплатно", "Нарезка на части", "AI-субтитры"],
  },
  {
    icon: "🤖",
    name: "AI-заголовки",
    desc: "8 кликабельных вариантов за секунду с оценкой CTR. Вирусный, SEO, список — 5 стилей.",
    href: "/titles",
    price: "Бесплатно",
    features: ["8 вариантов сразу", "Оценка CTR", "5 стилей"],
    free: true,
  },
];

const freeTools = [
  {
    icon: "🔥",
    name: "Тренды YouTube",
    desc: "Что набирает просмотры прямо сейчас",
    href: "/trends",
  },
  {
    icon: "🔍",
    name: "Анализ конкурентов",
    desc: "Топ видео и паттерны любого канала",
    href: "/analyze",
  },
  {
    icon: "🎨",
    name: "Конструктор обложек",
    desc: "25+ шаблонов для YouTube и соцсетей",
    href: "/covers",
  },
  {
    icon: "💰",
    name: "Калькулятор рекламы",
    desc: "Сколько стоит реклама на твоём канале",
    href: "/calculator",
  },
  {
    icon: "💡",
    name: "Советы блогера",
    desc: "Алгоритм, монетизация, рост канала",
    href: "/tips",
  },
  {
    icon: "📬",
    name: "Рассылка",
    desc: "Тренды и советы каждую неделю",
    href: "/subscribe",
  },
];

const faqs = [
  {
    q: "Нужно ли регистрироваться?",
    a: "Нет. Все инструменты работают без регистрации прямо в браузере. Pro активируется разовым платежом через ЮКасса.",
  },
  {
    q: "Сколько стоит Pro?",
    a: "Разовые платежи — платишь только за нужный инструмент: анализ канала 49 ₽, медиакит PDF 149 ₽, видеоредактор Pro 149 ₽. Без подписок и автосписаний.",
  },
  {
    q: "Откуда берутся данные?",
    a: "Официальный YouTube Data API v3 — те же данные что в YouTube Studio. Актуальные и достоверные.",
  },
  {
    q: "Видео загружается на сервер?",
    a: "Нет. Видеоредактор работает локально в браузере через Canvas API. Никакие файлы никуда не отправляются.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 h-14 flex items-center justify-between px-4 sm:px-6 bg-bg/95 backdrop-blur border-b border-border">
        <div className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
          БлогерКит
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/trends"
            className="text-sm text-muted hover:text-white transition-colors hidden sm:block"
          >
            Тренды
          </Link>
          <Link
            href="/covers"
            className="text-sm text-muted hover:text-white transition-colors hidden sm:block"
          >
            Обложки
          </Link>
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-white transition-colors hidden md:block"
          >
            Блог
          </Link>
          <Link
            href="/channel-analysis"
            className="px-3 py-1.5 bg-accent text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Попробовать →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-14 px-4 sm:px-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-border text-sm text-muted mb-6 sm:mb-8">
          🚀 Работает без регистрации · Данные YouTube API
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 sm:mb-5">
          Инструменты для
          <br />
          <span className="text-accent">YouTube блогеров</span>
        </h1>
        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
          Анализ канала, медиакит для рекламодателей, кроп видео для Shorts и
          AI-заголовки. Бесплатно и без регистрации.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/covers"
            className="px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity text-center"
          >
            Создать Обложку →
          </Link>
          <Link
            href="/mediakit"
            className="px-6 py-3 bg-surface border border-border text-white text-sm font-medium rounded-xl hover:border-white/30 transition-colors text-center"
          >
            Создать медиакит
          </Link>
        </div>
      </section>
      {/* FREE TOOLS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <h2 className="font-heading text-lg font-black">
            Бесплатные инструменты
          </h2>
          <span className="text-sm px-2 py-0.5 bg-green-400/10 text-green-400 rounded border border-green-400/20 font-medium">
            без регистрации
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {freeTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group bg-surface border border-border rounded-xl p-4 hover:border-white/20 hover:bg-white/5 transition-all block"
            >
              <div className="text-xl mb-2">{tool.icon}</div>
              <h3 className="font-bold text-sm text-white mb-1">{tool.name}</h3>
              <p className="text-muted text-sm leading-relaxed">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      {/* PRO TOOLS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <h2 className="font-heading text-lg font-black">
            Основные инструменты
          </h2>
          <span className="text-sm px-2 py-0.5 bg-yellow-400/10 text-yellow-400 rounded border border-yellow-400/20 font-medium">
            платные и Pro
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {proTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group bg-surface border border-border rounded-2xl p-5 sm:p-6 hover:border-white/20 hover:bg-white/5 transition-all block"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <h3 className="font-bold text-base text-white">
                    {tool.name}
                  </h3>
                </div>
                <span
                  className={`text-sm px-2.5 py-1 rounded-lg font-bold whitespace-nowrap ${
                    tool.free
                      ? "bg-green-400/10 text-green-400"
                      : "bg-yellow-400/10 text-yellow-400"
                  }`}
                >
                  {tool.price}
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {tool.desc}
              </p>
              <ul className="flex flex-col gap-1.5 mb-4">
                {tool.features.map((f) => (
                  <li
                    key={f}
                    className="text-sm text-muted flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-border flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="text-sm text-accent font-bold group-hover:underline">
                Открыть →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY NO REG */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          {[
            {
              icon: "⚡",
              title: "Без регистрации",
              desc: "Открыл — сразу работает. Никаких аккаунтов, паролей и подтверждений почты.",
            },
            {
              icon: "🔒",
              title: "Видео не уходит на сервер",
              desc: "Видеоредактор обрабатывает файлы прямо в браузере. Твои данные остаются у тебя.",
            },
            {
              icon: "📊",
              title: "Официальные данные YouTube",
              desc: "Используем YouTube Data API v3 — те же данные что в YouTube Studio.",
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-base text-white mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <h2 className="font-heading text-xl font-black text-center mb-6 sm:mb-8">
          Частые вопросы
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-surface border border-border rounded-xl p-4 sm:p-5"
            >
              <h3 className="font-bold text-base text-white mb-2">{faq.q}</h3>
              <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface px-4 sm:px-6 py-8 sm:py-10 text-center">
        <div className="font-heading text-sm font-black mb-2">БлогерКит</div>
        <p className="text-muted text-sm mb-5">
          Инструменты для YouTube блогеров · 2025
        </p>
        <div className="flex justify-center gap-4 sm:gap-6 text-sm text-muted flex-wrap">
          {[
            ["/channel-analysis", "Анализ канала"],
            ["/mediakit", "Медиакит"],
            ["/crop", "Видеоредактор"],
            ["/titles", "AI-заголовки"],
            ["/covers", "Обложки"],
            ["/blog", "Блог"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "БлогерКит",
            url: "https://blogerkit.ru",
            description:
              "Бесплатные инструменты для YouTube блогеров без регистрации",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://blogerkit.ru/analyze?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </main>
  );
}
