import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как сделать вирусное видео на YouTube — формулы и примеры",
  description:
    "Разбор формул вирусных видео на YouTube: структура, заголовки, эмоции, паттерны которые работают в 2026 году.",
  keywords: [
    "как сделать вирусное видео youtube",
    "youtube блогер 2026",
    "контент",
  ],
  alternates: { canonical: "https://blogerkit.ru/blog/kak-sdelat-viral-video" },
  openGraph: {
    title: "Как сделать вирусное видео на YouTube — формулы и примеры",
    description:
      "Разбор формул вирусных видео на YouTube: структура, заголовки, эмоции, паттерны которые работают в 2026 году.",
    url: "https://blogerkit.ru/blog/kak-sdelat-viral-video",
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
          <span>Контент</span>
          <span>·</span>
          <span>10 мин чтения</span>
          <span>·</span>
          <time dateTime="2026-03-01">1 марта 2026 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">
          Как сделать вирусное видео на YouTube — формулы и примеры
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          Вирусность — не случайность. Топ каналы используют проверенные
          формулы. Разбираем каждую из них.
        </p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">
              Изучи формулы заголовков топовых видео в твоей нише
            </div>
            <div className="text-muted text-lg">БлогерКит · Бесплатно</div>
          </div>
          <Link
            href="/analyze"
            className="px-4 py-2 bg-accent text-white text-lg font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            Анализировать конкурентов →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Формула 1: Противоречие ожиданиям
            </h2>
            <p className="text-muted">
              Заголовки вида "Я сделал X и вот что случилось" вирусны потому что
              создают разрыв между ожиданием и реальностью. Зритель хочет узнать
              чем всё закончилось. Пример: "Я не спал 72 часа и снял об этом
              видео".
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Формула 2: Трансформация
            </h2>
            <p className="text-muted">
              "До и после" — один из самых мощных форматов. Похудение, ремонт,
              обучение, бизнес. Люди хотят видеть процесс и результат. Показывай
              не только финал но и путь.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Формула 3: Ставки
            </h2>
            <p className="text-muted">
              Видео где что-то реально на кону смотрят лучше. "Я поставил
              100,000 рублей на...", "Если проиграю — удаляю канал". Реальные
              ставки создают напряжение которое удерживает до конца.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Структура вирусного видео
            </h2>
            <p className="text-muted">
              Крючок (0-30 сек): обещай главную ценность. Тизер (30-60 сек):
              покажи лучший момент из видео. Основа: выполни обещание. Финал:
              призыв к действию + тизер следующего видео.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Эмоция важнее информации
            </h2>
            <p className="text-muted">
              Видео которые вызывают сильные эмоции (удивление, радость, гнев,
              вдохновение) шерят в 4 раза чаще. Задай себе вопрос: какую эмоцию
              зритель испытает в конце видео?
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">
            Изучи формулы заголовков топовых видео в твоей нише
          </div>
          <p className="text-muted text-lg mb-4">БлогерКит · Бесплатно</p>
          <Link
            href="/analyze"
            className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity"
          >
            Анализировать конкурентов →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-lg uppercase tracking-widest mb-3">
            Читай также
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/blog/algoritm-youtube-2026"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>⚙️ Алгоритм YouTube 2026</span>
              <span className="text-accent">→</span>
            </Link>
            <Link
              href="/blog/kak-prodvigat-youtube-kanal"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>📈 Как продвигать канал</span>
              <span className="text-accent">→</span>
            </Link>
            <Link
              href="/blog/kak-sdelat-oblozhku-youtube"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>🎨 Как сделать кликабельную обложку</span>
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
              "Как сделать вирусное видео на YouTube — формулы и примеры",
            author: { "@type": "Organization", name: "БлогерКит" },
            publisher: {
              "@type": "Organization",
              name: "БлогерКит",
              url: "https://blogerkit.ru",
            },
            datePublished: "2026-03-01",
            mainEntityOfPage:
              "https://blogerkit.ru/blog/kak-sdelat-viral-video",
          }),
        }}
      />
    </div>
  );
}
