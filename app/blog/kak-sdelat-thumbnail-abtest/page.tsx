import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A/B тестирование обложек YouTube — как увеличить CTR",
  description:
    "Как тестировать обложки на YouTube: встроенный A/B тест, что менять, как читать результаты. Увеличь CTR на 20-50%.",
  keywords: ["ab тест обложки youtube", "youtube блогер 2026", "дизайн"],
  alternates: {
    canonical: "https://blogerkit.ru/blog/kak-sdelat-thumbnail-abtest",
  },
  openGraph: {
    title: "A/B тестирование обложек YouTube — как увеличить CTR",
    description:
      "Как тестировать обложки на YouTube: встроенный A/B тест, что менять, как читать результаты. Увеличь CTR на 20-50%.",
    url: "https://blogerkit.ru/blog/kak-sdelat-thumbnail-abtest",
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
          <span>Дизайн</span>
          <span>·</span>
          <span>7 мин чтения</span>
          <span>·</span>
          <time dateTime="2026-04-25">25 апреля 2026 г.</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">
          A/B тестирование обложек YouTube — как увеличить CTR
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          A/B тест обложек — функция которую используют топ-каналы но о которой
          мало кто знает. Разбираем как это делать.
        </p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">
              Создай новый вариант обложки для теста прямо сейчас
            </div>
            <div className="text-muted text-lg">БлогерКит · Бесплатно</div>
          </div>
          <Link
            href="/covers"
            className="px-4 py-2 bg-accent text-white text-lg font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            Конструктор обложек →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Встроенный A/B тест в YouTube
            </h2>
            <p className="text-muted">
              YouTube Studio → Контент → выбери видео → Тест обложек. Функция
              доступна для каналов в Партнёрской программе. Ты загружаешь 2-3
              обложки, YouTube показывает их разным группам зрителей и через
              неделю говорит какая победила.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Что тестировать
            </h2>
            <p className="text-muted">
              Тестируй один элемент за раз: цвет фона, наличие лица, размер
              текста, наличие числа в тексте, эмоция на лице. Если менять всё
              сразу — не поймёшь что именно сработало.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Как читать результаты
            </h2>
            <p className="text-muted">
              Смотри на CTR (кликабельность) — основная метрика. Разница в 0.5%
              уже значима. Тест нужно проводить минимум 7 дней и минимум 1000
              показов на каждую обложку.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Тестируй старые видео
            </h2>
            <p className="text-muted">
              Прелесть A/B теста — можно улучшить старые видео. Видео которое
              набрало 50K просмотров с CTR 3% может дойти до 200K просто сменой
              обложки. Начни с самых просматриваемых.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">
              Если нет доступа к A/B тесту
            </h2>
            <p className="text-muted">
              Меняй обложку вручную и смотри на CTR в аналитике. Оставь на
              неделю — запиши CTR. Поменяй обложку — запиши CTR. Примитивно но
              работает. Главное — менять по одному видео за раз.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">
            Создай новый вариант обложки для теста прямо сейчас
          </div>
          <p className="text-muted text-lg mb-4">БлогерКит · Бесплатно</p>
          <Link
            href="/covers"
            className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity"
          >
            Конструктор обложек →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-lg uppercase tracking-widest mb-3">
            Читай также
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/blog/kak-sdelat-oblozhku-youtube"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>🎨 Как сделать кликабельную обложку</span>
              <span className="text-accent">→</span>
            </Link>
            <Link
              href="/blog/youtube-analytics"
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <span>📊 YouTube Analytics как читать</span>
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
            headline: "A/B тестирование обложек YouTube — как увеличить CTR",
            author: { "@type": "Organization", name: "БлогерКит" },
            publisher: {
              "@type": "Organization",
              name: "БлогерКит",
              url: "https://blogerkit.ru",
            },
            datePublished: "2026-04-25",
            mainEntityOfPage:
              "https://blogerkit.ru/blog/kak-sdelat-thumbnail-abtest",
          }),
        }}
      />
    </div>
  );
}
