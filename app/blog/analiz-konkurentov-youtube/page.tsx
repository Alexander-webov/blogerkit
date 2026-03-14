import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как анализировать конкурентов на YouTube — пошаговое руководство 2025',
  description: 'Как правильно анализировать конкурентов на YouTube: какие метрики смотреть, как найти слабые места конкурентов и использовать это для роста своего канала.',
  keywords: ['анализ конкурентов youtube', 'как найти конкурентов youtube', 'метрики youtube канала', 'конкурентный анализ youtube 2025'],
  alternates: { canonical: 'https://blogerkit.ru/blog/analiz-konkurentov-youtube' },
  openGraph: {
    title: 'Анализ конкурентов YouTube — руководство 2025',
    description: 'Какие метрики смотреть и как использовать слабости конкурентов для роста.',
    url: 'https://blogerkit.ru/blog/analiz-konkurentov-youtube',
  },
}

export default function ArticleAnalysis() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent3 animate-pulse2" />
          БлогерКит
        </Link>
        <Link href="/blog" className="text-muted text-xs hover:text-white transition-colors">← Все статьи</Link>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-xs mb-4">
          <span>🔍 Стратегия</span><span>·</span><span>10 мин чтения</span><span>·</span>
          <time dateTime="2025-01-20">Январь 2025</time>
        </div>

        <h1 className="font-heading text-3xl font-black leading-tight mb-4">
          Как анализировать конкурентов на YouTube и использовать это для роста
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          Анализ конкурентов — самый быстрый способ понять что работает в твоей нише прямо сейчас. Не нужно изобретать колесо: смотри на лидеров, учись у их успехов и ошибок.
        </p>

        <div className="p-4 bg-cyan-400/8 border border-cyan-400/20 rounded-xl mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm mb-0.5">Проверь конкурентов прямо сейчас</div>
            <div className="text-muted text-xs">Реальные данные YouTube API · 29 ₽ за запрос</div>
          </div>
          <Link href="/analyze" className="px-4 py-2 bg-cyan-500 text-black text-xs font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">
            Анализировать →
          </Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Зачем анализировать конкурентов</h2>
          <p className="text-muted">YouTube показывает видео которые люди смотрят до конца. Если конкурент набирает миллионы просмотров — алгоритм уже подтвердил что его подход работает. Твоя задача — понять почему и сделать лучше.</p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 1 — Найди топ конкурентов в нише</h2>
          <p className="text-muted">Введи в поиске YouTube 3–5 ключевых запросов по своей теме. Запиши каналы которые появляются в топе. Это твои главные конкуренты. Обычно хватает 5–10 каналов для полной картины.</p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 2 — Что анализировать</h2>
          <div className="space-y-3">
            {[
              { title: 'Просмотры и их динамика', body: 'Смотри не только общее число просмотров но и на каких видео оно выше. Это покажет какие темы работают лучше всего.' },
              { title: 'CTR (кликабельность)', body: 'Прямого доступа к чужому CTR нет, но его можно оценить косвенно: много просмотров при небольшой аудитории = высокий CTR.' },
              { title: 'Удержание просмотров (AVD)', body: 'Длинные видео с хорошим удержанием YouTube продвигает активнее. Ищи видео где зрители досматривают до конца — анализируй их структуру.' },
              { title: 'Вовлечённость (лайки + комменты)', body: 'Норма — 2–5% от просмотров. Если у конкурента выше — смотри что он делает для стимуляции реакций.' },
              { title: 'Заголовки и обложки', body: 'Какие слова повторяются? Какой стиль обложек? Числа в заголовках? Эмоциональные слова? Это золото для твоей стратегии.' },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-3 bg-card border border-border rounded-xl p-4">
                <div className="font-heading text-lg font-black text-accent/40 w-8 flex-shrink-0">0{i+1}</div>
                <div>
                  <div className="font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-muted text-xs">{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 3 — Ищи «дыры» в контенте конкурентов</h2>
          <p className="text-muted">Самый недооценённый приём: читай комментарии под видео конкурентов. Люди пишут чего им не хватает, что непонятно, о чём хотят видео. Это готовые идеи для тебя.</p>
          <div className="p-4 bg-surface border border-border rounded-xl">
            <p className="text-muted text-xs">Примеры того что искать в комментариях: «а можно видео про...», «почему не рассказал о...», «это не работает потому что...» — всё это незакрытые потребности аудитории.</p>
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 4 — Строй таблицу конкурентов</h2>
          <p className="text-muted">Записывай данные системно. Минимальная таблица:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {['Канал','Подписчики','Топ тема','Ср. просмотры','Вовлечённость'].map(h => (
                    <th key={h} className="text-left text-muted py-2 pr-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[['Конкурент 1','120K','Обзоры авто','180K','3.2%'],
                  ['Конкурент 2','45K','Тест-драйвы','95K','5.1%'],
                  ['Твой канал','—','?','—','—']].map(row => (
                  <tr key={row[0]} className="border-b border-white/4">
                    {row.map((cell, i) => (
                      <td key={i} className={`py-2 pr-4 ${row[0]==='Твой канал'?'text-accent':''}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Автоматизируй анализ</h2>
          <p className="text-muted">Ручной анализ занимает часы. Инструмент анализа конкурентов БлогерКит загружает топ-10 видео по любой нише с реальными данными за секунды: просмотры, лайки, комментарии, паттерны заголовков.</p>
          <Link href="/analyze" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-bold rounded-xl hover:bg-cyan-500/15 transition-colors">
            Попробовать анализ конкурентов →
          </Link>

        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-cyan-400/8 to-transparent border border-cyan-400/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Проанализируй конкурентов за 29 ₽</div>
          <p className="text-muted text-xs mb-4">Реальные данные YouTube · Топ-10 видео по нише · Паттерны заголовков</p>
          <Link href="/analyze" className="inline-block px-6 py-3 bg-cyan-500 text-black font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">
            Начать анализ →
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-xs uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[
              ['/blog/kak-sdelat-oblozhku-youtube', '🎨 Как сделать обложку для YouTube'],
              ['/blog/skolko-stoit-reklama-u-blogera', '💰 Сколько стоит реклама у блогера'],
              ['/trends', '🔥 Тренды YouTube прямо сейчас'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors">
                <span>{label}</span><span className="text-accent">→</span>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как анализировать конкурентов на YouTube в 2025 году',
        author: { '@type': 'Organization', name: 'БлогерКит' },
        publisher: { '@type': 'Organization', name: 'БлогерКит', url: 'https://blogerkit.ru' },
        datePublished: '2025-01-20',
        mainEntityOfPage: 'https://blogerkit.ru/blog/analiz-konkurentov-youtube',
      })}} />
    </div>
  )
}
