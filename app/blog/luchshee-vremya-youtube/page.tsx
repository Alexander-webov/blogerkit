import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Лучшее время для публикации видео на YouTube — данные 2026",
  description:
    "Когда лучше публиковать видео на YouTube: по дням недели, часам и нишам. Данные исследований и практические советы.",
  keywords: [
    "лучшее время публикации youtube",
    "youtube блогер 2026",
    "алгоритм",
  ],
  alternates: {
    canonical: "https://blogerkit.ru/blog/luchshee-vremya-youtube",
  },
  openGraph: {
    title: "Лучшее время для публикации видео на YouTube — данные 2026",
    description:
      "Когда лучше публиковать видео на YouTube: по дням недели, часам и нишам. Данные исследований и практические советы.",
    url: "https://blogerkit.ru/blog/luchshee-vremya-youtube",
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
          <span>Алгоритм</span>
          <span>·</span>
          <span>6 мин чтения</span>
          <span>·</span>
          <time dateTime="2026-03-05">5 марта 2026 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">
          Лучшее время для публикации видео на YouTube — данные 2026
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          Время публикации влияет на первые 48 часов видео — самый важный период
          для алгоритма. Вот когда публиковать.
        </p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">
              Посмотри когда публикуют топовые видео в твоей нише
            </div>
            <div className="text-muted text-lg">БлогерКит · Бесплатно</div>
          </div>
          <Link
            href="/trends"
            className="px-4 py-2 bg-accent text-white text-lg font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            Открыть тренды →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Лучшие дни недели
            </h2>
            <p className="text-muted">
              Вторник, среда и четверг — пик активности YouTube аудитории в
              России. Пятница и суббота тоже хорошо работают для
              развлекательного контента. Понедельник и воскресенье — наименее
              эффективны для публикации.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Лучшее время по часам (МСК)
            </h2>
            <p className="text-muted">
              Утро 8-10 часов: люди едут на работу и смотрят в телефон. День
              13-14 часов: обеденный перерыв. Вечер 18-21 час: пик активности,
              лучшее время для большинства ниш. После 22 часов: только если твоя
              аудитория — ночные совы.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Время зависит от ниши
            </h2>
            <p className="text-muted">
              Финансы и бизнес: рано утром (7-9 часов), деловая аудитория.
              Развлечения: вечер и выходные. Образование: воскресенье 12-16
              часов. Игры: вечер в будни и весь день в выходные.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Как найти своё идеальное время
            </h2>
            <p className="text-muted">
              В YouTube Analytics → Аудитория → Когда зрители на YouTube. Это
              покажет когда твои конкретные подписчики онлайн. Публикуй за 1-2
              часа до пика активности — видео успеет набрать первые просмотры к
              нужному моменту.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Главное правило
            </h2>
            <p className="text-muted">
              Регулярность важнее идеального времени. Если ты публикуешь каждый
              вторник в 18:00 — подписчики привыкают и ждут. Это дополнительные
              просмотры в первые часы, которые разгоняют алгоритм.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">
            Посмотри когда публикуют топовые видео в твоей нише
          </div>
          <p className="text-muted text-lg mb-4">БлогерКит · Бесплатно</p>
          <Link
            href="/trends"
            className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity"
          >
            Открыть тренды →
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
              href="/blog/kontent-plan-youtube"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>📅 Контент-план для YouTube</span>
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
              "Лучшее время для публикации видео на YouTube — данные 2026",
            author: { "@type": "Organization", name: "БлогерКит" },
            publisher: {
              "@type": "Organization",
              name: "БлогерКит",
              url: "https://blogerkit.ru",
            },
            datePublished: "2026-03-05",
            mainEntityOfPage:
              "https://blogerkit.ru/blog/luchshee-vremya-youtube",
          }),
        }}
      />
    </div>
  );
}
