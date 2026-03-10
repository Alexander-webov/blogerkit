import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "БлогерКит — бесплатные инструменты для блогеров 2026",
  description:
    "Конструктор обложек YouTube, анализ конкурентов, калькулятор стоимости рекламы и советы по продвижению. Всё бесплатно для блогеров.",
  alternates: { canonical: "https://blogerkit.ru" },
};

const tools = [
  {
    icon: "🔥",
    name: "Тренды YouTube",
    desc: "Что набирает просмотры прямо сейчас — по 10 нишам. Обновляется каждые 2 часа.",
    features: [
      "Реальные данные YouTube API",
      "10 ниш: авто, финансы, игры...",
      "Анализ заголовков и паттернов",
    ],
    href: "/trends",
    badge: "Бесплатно",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
    gradient: "from-red-500 to-orange-400",
  },
  {
    icon: "🔍",
    name: "Анализ конкурентов",
    desc: "Реальные данные с YouTube API. Топ видео, просмотры, лайки, паттерны заголовков.",
    features: [
      "Реальные данные YouTube",
      "Паттерны топ-видео",
      "Советы по нише",
    ],
    href: "/analyze",
    badge: "29 ₽",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: "🤖",
    name: "AI-генератор заголовков",
    desc: "Claude AI придумает 8 кликабельных заголовков по теме видео с оценкой CTR.",
    features: [
      "8 вариантов за секунду",
      "Оценка CTR каждого",
      "5 стилей: вирусный, SEO, список...",
    ],
    href: "/titles",
    badge: "Pro",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "📡",
    name: "Анализ своего канала",
    desc: "Вставь ссылку на канал — получи полную статистику и персональные советы.",
    features: [
      "Просмотры, вовлечённость, рост",
      "Лучшее и худшее видео",
      "AI-советы по улучшению",
    ],
    href: "/channel-analysis",
    badge: "Pro",
    badgeColor: "text-red-400 bg-red-400/10 border-red-400/20",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: "📄",
    name: "Медиакит PDF",
    desc: "Профессиональный медиакит для рекламодателей за 5 минут — скачай PDF.",
    features: [
      "Данные, цены, контакты",
      "Темный дизайн с брендингом",
      "Скачивание в 1 клик",
    ],
    href: "/mediakit",
    badge: "Pro",
    badgeColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    icon: "🎨",
    name: "Конструктор обложек",
    desc: "25+ шаблонов для YouTube, TikTok, Instagram. Редактор прямо в браузере.",
    features: ["YouTube, TikTok, Instagram", "25+ шаблонов", "Бесплатно"],
    href: "/covers",
    badge: "Бесплатно",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
    gradient: "from-pink-500 to-orange-400",
  },
  {
    icon: "💰",
    name: "Калькулятор рекламы",
    desc: "Узнай сколько стоит реклама на твоём канале с учётом ниши и платформы.",
    features: [
      "YouTube, TikTok, Telegram, VK",
      "Учитывает нишу и охват",
      "Диапазон min–max",
    ],
    href: "/calculator",
    badge: "Бесплатно",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
    gradient: "from-orange-400 to-yellow-400",
  },
  {
    icon: "✂️",
    name: "Кроп для Shorts",
    desc: "Загрузи горизонтальное видео — скачай вертикальное 9:16 для Shorts и TikTok.",
    features: [
      "16:9 → 9:16, 1:1, 4:5",
      "Прямо в браузере",
      "Без установки программ",
    ],
    href: "/crop",
    badge: "Бесплатно",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "📬",
    name: "Советы на почту",
    desc: "Еженедельная рассылка: тренды, алгоритм YouTube, монетизация — только полезное.",
    features: ["Каждый вторник", "Персонализация по нише", "Отписка в 1 клик"],
    href: "/subscribe",
    badge: "Бесплатно",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
    gradient: "from-green-400 to-teal-400",
  },
];

const faqs = [
  {
    q: "Сколько стоит БлогерКит?",
    a: "Базовые инструменты бесплатны: тренды, обложки, калькулятор, кроп видео, советы, рассылка. Pro-подписка (149 ₽/мес) открывает: AI-генератор заголовков, анализ своего канала, медиакит PDF и безлимитный анализ конкурентов.",
  },
  {
    q: "Какие данные используются в анализе?",
    a: "Мы используем официальный YouTube Data API v3. Все данные реальные и актуальные — просмотры, лайки, комментарии.",
  },
  {
    q: "Нужно ли регистрироваться?",
    a: "Нет. Все инструменты работают без регистрации прямо в браузере. Pro активируется разовым платежом.",
  },
  {
    q: "Как подключить Pro?",
    a: 'Нажми "Pro" в любом платном инструменте. Оплата через Prodamus — карта или СБП. Без автосписания, отмена в любой момент.',
  },
  {
    q: "Работает ли калькулятор для Telegram?",
    a: "Да, калькулятор учитывает специфику каждой платформы: YouTube, TikTok, Telegram, ВКонтакте и Instagram с разными коэффициентами.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* NAV */}
      <nav className="sticky top-0 z-50 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
        <div className="font-heading text-xl font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
          БлогерКит
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/trends"
            className="text-lg text-muted hover:text-white transition-colors"
          >
            Тренды
          </Link>
          <Link
            href="/analyze"
            className="text-lg text-muted hover:text-white transition-colors"
          >
            Анализ
          </Link>
          <Link
            href="/covers"
            className="text-lg text-muted hover:text-white transition-colors"
          >
            Обложки
          </Link>
          <Link
            href="/blog"
            className="text-lg text-muted hover:text-white transition-colors"
          >
            Блог
          </Link>
          <Link
            href="/analyze"
            className="px-3 py-1.5 bg-accent text-white text-lg font-bold rounded-lg hover:opacity-85 transition-opacity"
          >
            Анализ →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,61,90,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-lg text-muted mb-6">
            🚀 Актуально на 2026 год
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Все инструменты блогера
            <br />
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              в одном месте
            </span>
          </h1>
          <p className="text-muted text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Конструктор обложек, анализ конкурентов, калькулятор рекламы и
            советы по продвижению. Бесплатно для YouTube, TikTok, ВКонтакте и
            Telegram.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/analyze"
              className="px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-all hover:-translate-y-0.5"
            >
              Анализировать конкурентов →
            </Link>
            <Link
              href="/covers"
              className="px-6 py-3 border border-border text-sm rounded-xl hover:border-white/20 transition-colors"
            >
              Создать обложку
            </Link>
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20" id="tools">
        <h2 className="font-heading text-xl font-bold text-center mb-2">
          Инструменты
        </h2>
        <p className="text-muted text-sm text-center mb-10">
          9 инструментов · бесплатно и Pro · без регистрации
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block bg-card border border-border rounded-2xl p-5 hover:border-white/15 transition-all hover:-translate-y-1"
            >
              <div
                className={`w-full h-0.5 rounded-full bg-gradient-to-r ${tool.gradient} mb-4 opacity-70 group-hover:opacity-100 transition-opacity`}
              />
              <div className="text-3xl mb-3">{tool.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-sm">{tool.name}</h3>
                <span
                  className={`text-lg px-2 py-0.5 rounded border font-bold ${tool.badgeColor}`}
                >
                  {tool.badge}
                </span>
              </div>
              <p className="text-muted text-lg leading-relaxed mb-3">
                {tool.desc}
              </p>
              <ul className="flex flex-col gap-1">
                {tool.features.map((f) => (
                  <li
                    key={f}
                    className="text-lg text-muted flex items-center gap-1.5"
                  >
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-lg text-accent font-bold group-hover:underline">
                Открыть →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO CONTENT — важно для Google */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="font-heading text-xl font-bold text-center mb-10">
          Для кого БлогерКит?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "🎬",
              title: "YouTube блогеры",
              desc: "Анализируй конкурентов, создавай кликабельные обложки и публикуй в лучшее время",
            },
            {
              icon: "🎵",
              title: "TikTok авторы",
              desc: "Советы по алгоритму, кроп видео в формат 9:16 и анализ трендовых ниш",
            },
            {
              icon: "✈️",
              title: "Telegram каналы",
              desc: "Рассчитай стоимость рекламы и узнай как правильно расти в Telegram в 2026",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-5"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-muted text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — важно для SEO */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="font-heading text-xl font-bold text-center mb-8">
          Частые вопросы
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-card border border-border rounded-xl p-4"
            >
              <h3 className="font-bold text-sm mb-2">{faq.q}</h3>
              <p className="text-muted text-lg leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-8 text-center">
        <div className="font-heading text-sm font-black mb-2">БлогерКит</div>
        <p className="text-muted text-lg mb-4">
          Инструменты для блогеров · Бесплатно · 2026
        </p>
        <div className="flex justify-center gap-6 text-lg text-muted">
          <Link href="/covers" className="hover:text-white transition-colors">
            Обложки
          </Link>
          <Link href="/analyze" className="hover:text-white transition-colors">
            Анализ
          </Link>
          <Link
            href="/calculator"
            className="hover:text-white transition-colors"
          >
            Калькулятор
          </Link>
          <Link href="/tips" className="hover:text-white transition-colors">
            Советы
          </Link>
          <Link href="/crop" className="hover:text-white transition-colors">
            Кроп
          </Link>
        </div>
      </footer>

      {/* JSON-LD structured data для Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "БлогерКит",
            url: "https://blogerkit.ru",
            description:
              "Бесплатные инструменты для блогеров YouTube, TikTok, Telegram",
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
