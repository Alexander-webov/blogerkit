import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Алгоритм YouTube 2026 — как он работает и что изменилось",
  description:
    "Подробный разбор алгоритма YouTube в 2026: какие факторы влияют на продвижение, что изменилось и как адаптировать контент.",
  keywords: ["алгоритм youtube 2026", "youtube блогер 2026", "алгоритм"],
  alternates: { canonical: "https://blogerkit.ru/blog/algoritm-youtube-2026" },
  openGraph: {
    title: "Алгоритм YouTube 2026 — как он работает и что изменилось",
    description:
      "Подробный разбор алгоритма YouTube в 2026: какие факторы влияют на продвижение, что изменилось и как адаптировать контент.",
    url: "https://blogerkit.ru/blog/algoritm-youtube-2026",
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
          <span>9 мин чтения</span>
          <span>·</span>
          <time dateTime="2026-02-15">15 февраля 2026 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">
          Алгоритм YouTube 2026 — как он работает и что изменилось
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          Алгоритм YouTube — самое важное что нужно понять блогеру. Он решает
          кому показывать твоё видео и будет ли оно вирусным.
        </p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">
              Смотри что набирает просмотры в твоей нише прямо сейчас
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
              Три места где YouTube продвигает видео
            </h2>
            <p className="text-muted">
              Главная страница — самый большой источник просмотров для
              большинства каналов. Похожие видео — показываются справа от видео
              конкурентов. Поиск — работает как Google, важны ключевые слова.
              Каждое место требует разной оптимизации.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              CTR: первый фильтр алгоритма
            </h2>
            <p className="text-muted">
              CTR (click-through rate) — процент людей которые кликнули на твоё
              видео увидев его в ленте. Норма: 4-8%. Если ниже — YouTube
              перестаёт показывать видео. Если выше — начинает показывать всё
              большей аудитории. Обложка и заголовок полностью определяют CTR.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              AVD: второй фильтр алгоритма
            </h2>
            <p className="text-muted">
              AVD (average view duration) — сколько минут в среднем смотрят твоё
              видео. YouTube сравнивает это с другими видео той же длины. Видео
              с высоким AVD получают буст. Первые 30 секунд критичны — именно
              здесь теряют большинство зрителей.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Что изменилось в 2026 году
            </h2>
            <p className="text-muted">
              Shorts теперь имеют отдельный алгоритм от длинных видео.
              Комментарии стали важнее лайков — YouTube видит их как признак
              глубокой вовлечённости. Алгоритм начал активнее продвигать новых
              авторов в нишах с низкой конкуренцией.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Как использовать аналитику YouTube
            </h2>
            <p className="text-muted">
              YouTube Studio показывает все ключевые метрики. Смотри: Охват
              (impression CTR), Время просмотра, Удержание аудитории. Если
              удержание резко падает в какой-то момент видео — именно там
              проблема с контентом.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">
            Смотри что набирает просмотры в твоей нише прямо сейчас
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
              href="/blog/kak-prodvigat-youtube-kanal"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>📈 Как продвигать YouTube канал</span>
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
              href="/blog/youtube-analytics"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>📊 YouTube Analytics — как читать статистику</span>
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
              "Алгоритм YouTube 2026 — как он работает и что изменилось",
            author: { "@type": "Organization", name: "БлогерКит" },
            publisher: {
              "@type": "Organization",
              name: "БлогерКит",
              url: "https://blogerkit.ru",
            },
            datePublished: "2026-02-15",
            mainEntityOfPage: "https://blogerkit.ru/blog/algoritm-youtube-2026",
          }),
        }}
      />
    </div>
  );
}
