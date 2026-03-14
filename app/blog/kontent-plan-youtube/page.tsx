import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Контент-план для YouTube — как составить на месяц вперёд 2025',
  description: 'Как составить контент-план для YouTube канала: выбор тем, частота публикаций, шаблон плана на месяц. Как не выгореть и публиковать стабильно.',
  keywords: ['контент-план youtube', 'контент план для youtube канала', 'план публикаций youtube', 'как планировать видео youtube'],
  alternates: { canonical: 'https://blogerkit.ru/blog/kontent-plan-youtube' },
  openGraph: { title: 'Контент-план для YouTube канала — шаблон на месяц 2025', description: 'Как выбирать темы, планировать публикации и не выгорать. Шаблон контент-плана.', url: 'https://blogerkit.ru/blog/kontent-plan-youtube' },
}

export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← Все статьи</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>📅 Планирование</span><span>·</span><span>9 мин чтения</span><span>·</span><time dateTime="2025-01-18">Январь 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Контент-план для YouTube — как составить на месяц вперёд</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Блогеры которые растут стабильно — планируют контент заранее. Без плана легко выгореть, пропустить публикацию или потратить весь день на поиск идеи. Контент-план решает все эти проблемы.</p>

        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Смотри что сейчас набирает просмотры в твоей нише</div><div className="text-muted text-sm">Тренды YouTube · Бесплатно</div></div>
          <Link href="/trends" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Тренды →</Link>
        </div>

        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Почему контент-план важен</h2>
            <p className="text-muted mb-3">Алгоритм YouTube даёт приоритет каналам которые публикуют регулярно и предсказуемо. Канал который публикует видео каждую пятницу получает лучшее распределение показов чем канал который публикует хаотично — иногда 3 видео за неделю, иногда перерыв на месяц.</p>
            <p className="text-muted mb-3">Кроме алгоритма, регулярность важна для аудитории. Зрители привыкают ждать контент в определённое время. Это повышает процент просмотров от подписчиков в первые 48 часов — а это ключевой период для продвижения алгоритмом.</p>
            <p className="text-muted">Контент-план также помогает избежать творческого выгорания. Когда не нужно каждый раз придумывать тему «прямо сейчас» — снимать становится проще и приятнее.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Источники идей для контент-плана</h2>
            <p className="text-muted mb-3">Поисковые подсказки YouTube: вводи базовые слова своей ниши и смотри автоподсказки. Каждая подсказка — реальный запрос реальных людей. Это готовые идеи для видео которые точно ищут.</p>
            <p className="text-muted mb-3">Вопросы в комментариях: смотри что спрашивают в комментариях у тебя и у конкурентов. Вопросы которые повторяются несколько раз — это тема для отдельного видео. Аудитория буквально просит тебя снять это видео.</p>
            <p className="text-muted mb-3">Тренды ниши: инструмент трендов показывает что сейчас набирает просмотры в твоей нише. Если тема трендовая — делай видео быстро, первые 48–72 часа дают максимальный охват.</p>
            <p className="text-muted">Анализ конкурентов: смотри топ видео конкурентов за последний год. Темы которые собрали больше всего просмотров — потенциально работают и для твоей аудитории. Сделай свою версию с уникальным углом зрения.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Структура контент-плана на месяц</h2>
            <p className="text-muted mb-3">Оптимальная частота для большинства каналов: 1 длинное видео в неделю + 2–3 Shorts. Это реалистично для одного человека и достаточно для стабильного роста. 4 длинных видео в месяц — это ваш базовый план.</p>
            <div className="bg-card border border-border rounded-xl p-4 my-4">
              <div className="text-sm font-bold mb-3">Шаблон контент-плана на месяц</div>
              <div className="space-y-2 text-xs text-muted">
                <div className="flex gap-3"><span className="text-white font-bold w-16 flex-shrink-0">Неделя 1</span><span>Обучающее видео по базовой теме ниши + 2 Shorts с советами</span></div>
                <div className="flex gap-3"><span className="text-white font-bold w-16 flex-shrink-0">Неделя 2</span><span>Видео-ответ на популярный вопрос аудитории + 3 Shorts</span></div>
                <div className="flex gap-3"><span className="text-white font-bold w-16 flex-shrink-0">Неделя 3</span><span>Трендовая тема или актуальное событие в нише + 2 Shorts</span></div>
                <div className="flex gap-3"><span className="text-white font-bold w-16 flex-shrink-0">Неделя 4</span><span>Личная история или кейс + 3 Shorts + анализ месяца</span></div>
              </div>
            </div>
            <p className="text-muted">Чередуй форматы: обучение, история, мнение, обзор. Разнообразие удерживает аудиторию и помогает понять что работает лучше всего для твоего канала.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как не выгореть</h2>
            <p className="text-muted mb-3">Выгорание — главная причина почему блогеры бросают канал. Несколько правил которые помогают снимать стабильно месяцами и годами:</p>
            <p className="text-muted mb-3">Снимай несколько видео за один раз. Когда уже готов к съёмке — сними 2–3 видео подряд. Это экономит время на подготовку и переключение между задачами. Один день съёмки закрывает потребности на 2–3 недели.</p>
            <p className="text-muted mb-3">Не ставь планку слишком высоко в начале. Лучше простое видео которое вышло вовремя, чем идеальное которое откладывается неделями. Аудитория ценит стабильность больше чем перфекционизм.</p>
            <p className="text-muted">Держи «запас» готовых видео. Идеально иметь 2–3 готовых видео в запасе. Тогда болезнь, отпуск или сложная неделя не прерывают расписание канала.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Инструменты для управления контент-планом</h2>
            <p className="text-muted mb-3">Notion: самый популярный инструмент для контент-планов. Можно создать базу данных видео с статусами (идея, в работе, снято, смонтировано, опубликовано), датами и ссылками. Бесплатно.</p>
            <p className="text-muted mb-3">Trello: более простой визуальный инструмент. Каждая карточка — одно видео. Колонки: Идеи → В работе → Готово → Опубликовано. Хорошо видно что на каком этапе.</p>
            <p className="text-muted">Google Таблицы: простейший вариант. Одна строка — одно видео. Колонки: дата публикации, тема, ключевое слово, статус, ссылка. Работает для большинства блогеров без лишней сложности.</p>
          </div>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-accent/8 to-transparent border border-accent/20 rounded-2xl text-center">
          <div className="font-heading text-lg font-black mb-2">Смотри тренды для своей ниши</div>
          <p className="text-muted text-sm mb-4">Что набирает просмотры прямо сейчас · Бесплатно</p>
          <Link href="/trends" className="inline-block px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:opacity-85 transition-opacity">Открыть тренды →</Link>
        </div>

        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/algoritm-youtube-2025','Алгоритм YouTube 2025'],['/blog/kak-nachat-youtube','Как начать YouTube канал с нуля'],['/blog/kak-prodvigat-youtube-kanal','Как продвигать YouTube канал']].map(([href,title]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{title} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
