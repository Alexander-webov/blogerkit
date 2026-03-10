import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube SEO — как продвигаться в поиске YouTube и Google 2026",
  description:
    "Полное руководство по YouTube SEO: ключевые слова, оптимизация заголовков, описаний и тегов. Как попасть в топ поиска.",
  keywords: ["youtube seo продвижение", "youtube блогер 2026", "seo"],
  alternates: {
    canonical: "https://blogerkit.ru/blog/youtube-seo-prodvizhenie",
  },
  openGraph: {
    title: "YouTube SEO — как продвигаться в поиске YouTube и Google 2026",
    description:
      "Полное руководство по YouTube SEO: ключевые слова, оптимизация заголовков, описаний и тегов. Как попасть в топ поиска.",
    url: "https://blogerkit.ru/blog/youtube-seo-prodvizhenie",
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
          <span>SEO</span>
          <span>·</span>
          <span>10 мин чтения</span>
          <span>·</span>
          <time dateTime="2026-05-15">15 мая 2026 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">
          YouTube SEO — как продвигаться в поиске YouTube и Google 2026
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          YouTube — вторая по размеру поисковая система в мире. SEO здесь
          работает иначе чем в Google, но так же эффективно.
        </p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">
              Проанализируй SEO конкурентов в своей нише
            </div>
            <div className="text-muted text-lg">БлогерКит · Бесплатно</div>
          </div>
          <Link
            href="/analyze"
            className="px-4 py-2 bg-accent text-white text-lg font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            Анализировать →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Исследование ключевых слов для YouTube
            </h2>
            <p className="text-muted">
              Используй поисковые подсказки YouTube: начни вводить тему и смотри
              что предлагает автодополнение. Это реальные запросы реальных
              пользователей. Google Trends покажет сезонность. TubeBuddy и VidIQ
              — профессиональные инструменты для SEO.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Оптимизация заголовка
            </h2>
            <p className="text-muted">
              Главное ключевое слово в первых 60 символах заголовка. Заголовок
              должен описывать видео точно — кликбейт без соответствия убивает
              retention. Длина: 60-70 символов оптимально.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              YouTube видео в поиске Google
            </h2>
            <p className="text-muted">
              Google показывает YouTube видео в обычном поиске для определённых
              запросов: "как сделать X", обзоры, туториалы. Для таких тем
              YouTube-видео конкурирует напрямую с текстовыми статьями. И часто
              выигрывает.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Оптимизация описания для SEO
            </h2>
            <p className="text-muted">
              Первые 150-200 символов — ключевые слова и суть. Затем: подробное
              описание контента, тайм-коды, ссылки. YouTube и Google индексируют
              описание. Не оставляй его пустым — это потеря бесплатного трафика.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Закрытые субтитры улучшают SEO
            </h2>
            <p className="text-muted">
              YouTube индексирует текст субтитров. Добавляй точные субтитры —
              это дополнительный текстовый контент для поисковика. Особенно
              важно для образовательного контента с терминами.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">
            Проанализируй SEO конкурентов в своей нише
          </div>
          <p className="text-muted text-lg mb-4">БлогерКит · Бесплатно</p>
          <Link
            href="/analyze"
            className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity"
          >
            Анализировать →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-lg uppercase tracking-widest mb-3">
            Читай также
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/blog/kak-pisat-opisanie-youtube"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>📝 Как писать описание к видео</span>
              <span className="text-accent">→</span>
            </Link>
            <Link
              href="/blog/youtube-tegi"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>🏷️ Теги YouTube как использовать</span>
              <span className="text-accent">→</span>
            </Link>
            <Link
              href="/blog/algoritm-youtube-2026"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>⚙️ Алгоритм YouTube 2026</span>
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
              "YouTube SEO — как продвигаться в поиске YouTube и Google 2026",
            author: { "@type": "Organization", name: "БлогерКит" },
            publisher: {
              "@type": "Organization",
              name: "БлогерКит",
              url: "https://blogerkit.ru",
            },
            datePublished: "2026-05-15",
            mainEntityOfPage:
              "https://blogerkit.ru/blog/youtube-seo-prodvizhenie",
          }),
        }}
      />
    </div>
  );
}
