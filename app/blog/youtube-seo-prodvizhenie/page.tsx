import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'YouTube SEO — как продвигаться в поиске YouTube и Google в 2025',
  description: 'Полное руководство по YouTube SEO: ключевые слова, оптимизация заголовка и описания, теги, главы видео, ссылки из Google. Как попасть в топ поиска YouTube.',
  keywords: ['youtube seo', 'продвижение в поиске youtube', 'seo для youtube видео', 'ключевые слова youtube', 'оптимизация youtube видео'],
  alternates: { canonical: 'https://blogerkit.ru/blog/youtube-seo-prodvizhenie' },
  openGraph: {
    title: 'YouTube SEO 2025 — как продвигаться в поиске YouTube и Google',
    description: 'Ключевые слова, заголовки, описание, теги, главы — полное руководство по SEO для YouTube.',
    url: 'https://blogerkit.ru/blog/youtube-seo-prodvizhenie',
  },
}

export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит
        </Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← Все статьи</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>🔍 SEO</span><span>·</span><span>11 мин чтения</span><span>·</span>
          <time dateTime="2025-02-10">Февраль 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">YouTube SEO — как продвигаться в поиске YouTube и Google в 2025 году</h1>
        <p className="text-muted text-base leading-relaxed mb-8">YouTube — второй по размеру поисковик в мире. Ежемесячно миллионы людей ищут там информацию, уроки, обзоры и советы. Правильная SEO-оптимизация видео позволяет получать стабильный поток просмотров из поиска месяцами и годами после публикации.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-bold text-sm mb-0.5">AI-генератор заголовков для YouTube</div>
            <div className="text-muted text-sm">8 SEO-оптимизированных вариантов за секунду · Бесплатно</div>
          </div>
          <Link href="/titles" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Сгенерировать →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как работает поиск на YouTube</h2>
            <p className="text-muted mb-3">YouTube ранжирует видео в поиске на основе нескольких факторов: релевантность (насколько заголовок, описание и теги соответствуют запросу), вовлечённость (CTR, лайки, комментарии, время просмотра), и авторитет канала (история публикаций, вовлечённость аудитории).</p>
            <p className="text-muted">Важно понимать: YouTube SEO отличается от Google SEO. Здесь качество видео (CTR и удержание) важнее количества ключевых слов. Переспамленный ключевыми словами заголовок без интересного контента не даст результата.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 1. Найди правильные ключевые слова</h2>
            <p className="text-muted mb-3">Ключевое слово — это запрос который люди реально вводят в поиске YouTube. Задача: найти запросы с достаточным спросом и не слишком высокой конкуренцией.</p>
            <p className="text-muted mb-3">Метод 1 — автоподсказки YouTube: начни вводить тему в поиск и смотри что предлагает YouTube. Все подсказки — реальные запросы реальных пользователей. Например «как снять» покажет «как снять видео на телефон», «как снять тикток», «как снять shorts» — выбери тот что подходит твоей нише.</p>
            <p className="text-muted mb-3">Метод 2 — анализ конкурентов: найди успешные видео в своей нише и посмотри их заголовки и теги. Какие ключевые слова они используют? Можешь ли ты сделать более качественное видео на ту же тему?</p>
            <p className="text-muted">Метод 3 — Яндекс Wordstat: введи тему и посмотри популярные запросы. YouTube-аудитория ищет похожие вещи что и в Яндексе, поэтому статистика запросов полезна для понимания спроса.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 2. Оптимизируй заголовок видео</h2>
            <p className="text-muted mb-3">Заголовок — самый важный SEO-элемент видео. YouTube придаёт ему наибольший вес при определении темы видео. Правила оптимизированного заголовка: ключевое слово в первых 3–5 словах, длина 50–60 символов (чтобы не обрезалось в поиске), человекочитаемый (не набор ключевых слов).</p>
            <p className="text-muted mb-3">Пример плохого заголовка: «YouTube SEO оптимизация ключевые слова продвижение 2025». Пример хорошего: «YouTube SEO в 2025 — как вывести видео в топ поиска за неделю».</p>
            <p className="text-muted">Добавляй год (2025) к заголовкам информационных видео — это сигнал актуальности для алгоритма и для зрителей, которые ищут свежую информацию.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 3. Напиши сильное описание</h2>
            <p className="text-muted mb-3">Описание видео на YouTube играет важную роль в SEO — YouTube анализирует его для понимания темы. Структура хорошего описания: первые 150 символов (сниппет в поиске) — суть видео с ключевым словом. Далее — развёрнутое описание 200–400 слов с вариациями ключевых слов. Временные метки. Ссылки на другие видео канала.</p>
            <p className="text-muted mb-3">Первые 150 символов особенно важны — они показываются в поиске YouTube до кнопки «ещё». Формула: «[Ключевое слово] — [краткое описание что узнает зритель]. В этом видео: [3–4 пункта содержания]».</p>
            <p className="text-muted">Не копируй описание из одного видео в другое — это сигнал низкого качества для алгоритма. Каждое видео заслуживает уникального описания.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 4. Теги — вспомогательный инструмент</h2>
            <p className="text-muted mb-3">Теги в 2025 году менее важны чем раньше, но всё равно помогают YouTube понять контекст видео. Добавляй 8–12 тегов: основное ключевое слово, его вариации («ютуб SEO», «seo для ютуба», «продвижение видео ютуб»), более широкие темы («youtube продвижение», «как продвигать youtube»).</p>
            <p className="text-muted">Не добавляй теги не связанные с видео — это помечается как «вводящий в заблуждение» контент и может снизить ранжирование. Качество важнее количества.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Шаг 5. Главы видео (временные метки)</h2>
            <p className="text-muted mb-3">Главы видео — это временные метки в описании которые разбивают видео на разделы. В поиске Google иногда показываются отдельные главы видео — это даёт дополнительные точки входа для трафика.</p>
            <p className="text-muted mb-3">Как добавить главы: в описании видео с новой строки пиши временные метки в формате 00:00 Вступление, 01:30 Первый пункт, и так далее. Первая метка обязательно должна быть 00:00.</p>
            <p className="text-muted">Называй главы так чтобы они сами по себе были ключевыми запросами. «03:15 Как найти ключевые слова для YouTube» лучше чем «03:15 Часть 2».</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">YouTube SEO и поиск Google</h2>
            <p className="text-muted mb-3">Google часто показывает YouTube видео в обычном поиске — особенно для запросов «как сделать», «обзор», «урок», «tutorial». Это дополнительный источник трафика который многие игнорируют.</p>
            <p className="text-muted mb-3">Чтобы попасть в Google поиск: используй точные фразы которые люди ищут в Google (а не только в YouTube), добавляй транскрипцию видео в описание (Google индексирует текст), продвигай видео ссылками с других сайтов — это повышает авторитет в глазах Google.</p>
            <p className="text-muted">Проверь: введи тему своего видео в Google и посмотри показывает ли он видео в результатах. Если да — оптимизируй под эти запросы, это быстрый путь к дополнительным просмотрам.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Сгенерируй SEO-оптимизированный заголовок</div>
          <p className="text-muted text-sm mb-4">8 вариантов с оценкой CTR за секунду · Бесплатно</p>
          <Link href="/titles" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Сгенерировать заголовок →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[
              ['/blog/algoritm-youtube-2025', 'Алгоритм YouTube 2025 — как он работает'],
              ['/blog/kak-prodvigat-youtube-kanal', 'Как продвигать YouTube канал — полный гайд'],
              ['/blog/youtube-tegi', 'Теги YouTube — как использовать правильно'],
            ].map(([href, title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
