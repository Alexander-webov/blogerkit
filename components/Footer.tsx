import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "БлогерКит — инструменты для Ютуб блогеров, бесплатно",
  description:
    "Анализ Ютуб канала, медиакит PDF, кроп видео для Shorts, генератор заголовков. Без регистрации. Бесплатные и Pro инструменты для блогеров.",
  alternates: { canonical: "https://blogerkit.ru" },
};

const faqs = [
  {
    q: "На сколько дается доступ к платной услуги? ",
    a: "Доступ дается только на ту услугу, которую вы оплатили и только на один раз. Мы не гарантируем но в отдельных случаях услуга будет работать до момента закрытия вкладки браузера. Если вы закрыли вкладку и не воспользовались услугой, мы не делаем возврат средств.",
  },
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
    a: "Официальный Ютуб Data API v3 — те же данные что в Ютуб Studio. Актуальные и достоверные.",
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
            Лучшее
          </Link>
          <Link
            href="/covers"
            className="text-sm text-muted hover:text-white transition-colors hidden sm:block"
          >
            Превью
          </Link>
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-white transition-colors hidden md:block "
          >
            Блог
          </Link>
          <Link
            href="/faq"
            className="text-sm text-muted hover:text-white transition-colors hidden md:block "
          >
            FAQ
          </Link>
          <Link
            href="/channel-analysis"
            className="px-3 py-1.5 bg-accent text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Попробовать →
          </Link>
        </div>
      </nav>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 mt-20">
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

      {/* HERO */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-14 px-4 sm:px-6 text-center max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/covers"
            className="px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity text-center"
          >
            Создать Превью →
          </Link>
          <Link
            href="/mediakit"
            className="px-6 py-3 bg-surface border border-border text-white text-sm font-medium rounded-xl hover:border-white/30 transition-colors text-center"
          >
            Создать медиакит
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface px-4 sm:px-6 py-8 sm:py-10 text-center">
        <div className="font-heading text-sm font-black mb-2">БлогерКит</div>
        <p className="text-muted text-sm mb-5">
          Инструменты для блогеров · ИНН 575106298345 · 2025
        </p>
        <div className="flex justify-center gap-4 sm:gap-6 text-sm text-muted flex-wrap">
          {[
            ["/channel-analysis", "Анализ канала"],
            ["/mediakit", "Медиакит"],
            ["/crop", "Видеоредактор"],
            ["/titles", "AI-заголовки"],
            ["/covers", "Обложки"],
            ["/blog", "Блог"],
            ["/contacts", "Контакты"],
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
    </main>
  );
}
