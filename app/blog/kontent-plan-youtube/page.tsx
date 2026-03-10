import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контент-план для YouTube — как составить на месяц вперёд",
  description:
    "Как составить контент-план для YouTube канала: шаблон, частота публикаций, выбор тем. Готовый план на месяц.",
  keywords: ["контент план youtube", "youtube блогер 2026", "стратегия"],
  alternates: { canonical: "https://blogerkit.ru/blog/kontent-plan-youtube" },
  openGraph: {
    title: "Контент-план для YouTube — как составить на месяц вперёд",
    description:
      "Как составить контент-план для YouTube канала: шаблон, частота публикаций, выбор тем. Готовый план на месяц.",
    url: "https://blogerkit.ru/blog/kontent-plan-youtube",
  },
};

export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-6 border-b border-border">
        <Link
          href="/"
          className="font-heading text-sm font-black flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
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
          <span>Стратегия</span>
          <span>·</span>
          <span>8 мин чтения</span>
          <span>·</span>
          <time dateTime="2026-04-15">15 апреля 2026 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">
          Контент-план для YouTube — как составить на месяц вперёд
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          Блогеры без контент-плана выгорают через 2-3 месяца. С планом — держат
          регулярность годами. Вот как составить.
        </p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">
              Узнай какие темы сейчас в тренде в твоей нише
            </div>
            <div className="text-muted text-lg">БлогерКит · Бесплатно</div>
          </div>
          <Link
            href="/trends"
            className="px-4 py-2 bg-accent text-white text-lg font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            Смотреть тренды →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Зачем нужен контент-план
            </h2>
            <p className="text-muted">
              Без плана ты думаешь о теме для видео в день съёмки. Это стресс и
              плохой контент. С планом — тема готова заранее, ты думаешь только
              о качестве исполнения. Плюс план помогает видеть стратегию на
              месяц вперёд.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Как выбирать темы
            </h2>
            <p className="text-muted">
              Три источника: поисковые запросы (что люди ищут), тренды (что
              сейчас популярно), проблемы аудитории (комментарии и вопросы).
              Лучшие темы находятся на пересечении всех трёх.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Форматы для разных недель
            </h2>
            <p className="text-muted">
              Неделя 1: обучающее видео по запросу (SEO). Неделя 2:
              развлекательный или личный контент. Неделя 3: разбор случая или
              кейса. Неделя 4: трендовая тема или коллаборация. Это обеспечивает
              разнообразие.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Шаблон контент-плана
            </h2>
            <p className="text-muted">
              Для каждого видео: дата публикации, тема, ключевое слово, тип
              видео (обзор/обучение/влог), статус
              (идея/снимается/монтаж/готово). Веди в Notion или простой Google
              таблице.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Буфер контента — защита от выгорания
            </h2>
            <p className="text-muted">
              Старайся всегда иметь 2-3 готовых видео в запасе. Это снимает
              давление дедлайна. Снял 4 видео за выходные — у тебя месяц
              спокойной публикации.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">
            Узнай какие темы сейчас в тренде в твоей нише
          </div>
          <p className="text-muted text-lg mb-4">БлогерКит · Бесплатно</p>
          <Link
            href="/trends"
            className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity"
          >
            Смотреть тренды →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-lg uppercase tracking-widest mb-3">
            Читай также
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/blog/kak-prodvigat-youtube-kanal"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>📈 Как продвигать канал</span>
              <span className="text-accent">→</span>
            </Link>
            <Link
              href="/blog/luchshee-vremya-youtube"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>⏰ Лучшее время для публикации</span>
              <span className="text-accent">→</span>
            </Link>
            <Link
              href="/blog/kak-sdelat-viral-video"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>🔥 Как сделать вирусное видео</span>
              <span className="text-accent">→</span>
            </Link>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Контент-план для YouTube — как составить на месяц вперёд",
            author: { "@type": "Organization", name: "БлогерКит" },
            publisher: {
              "@type": "Organization",
              name: "БлогерКит",
              url: "https://blogerkit.ru",
            },
            datePublished: "2026-04-15",
            mainEntityOfPage: "https://blogerkit.ru/blog/kontent-plan-youtube",
          }),
        }}
      />
    </div>
  );
}
