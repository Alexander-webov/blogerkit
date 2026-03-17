import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = { title: 'Медиакит для VK-блогера — как создать и что включить в 2025', description: 'Как создать профессиональный медиакит для рекламодателей ВКонтакте и Rutube: метрики, форматы, цены. Шаблон и советы по переговорам.', keywords: ['медиакит для vk блогера', 'медиакит вконтакте', 'медиакит для рекламодателей vk', 'медиакит блогер россия'], alternates: { canonical: 'https://blogerkit.ru/blog/mediakit-dlya-vk-blogerov' }, openGraph: { title: 'Медиакит для VK-блогера — как создать и что включить в 2025', description: 'Как создать профессиональный медиакит для рекламодателей ВКонтакте и Rutube: метрики, форматы, цены. Шаблон и советы по переговорам.', url: 'https://blogerkit.ru/blog/mediakit-dlya-vk-blogerov' } }
export default function Article() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-border">
        <Link href="/" className="font-heading text-sm font-black flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />БлогерКит</Link>
        <Link href="/blog" className="text-muted text-sm hover:text-white transition-colors">← Все статьи</Link>
      </nav>
      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-2 text-muted text-sm mb-4 flex-wrap">
          <span>📄 Монетизация</span><span>·</span><span>8 мин чтения</span><span>·</span><time dateTime="2025-03">Март 2025</time>
        </div>
        <h1 className="font-heading text-3xl font-black leading-tight mb-4">Медиакит для VK-блогера — как создать и что включить в 2025</h1>
        <p className="text-muted text-base leading-relaxed mb-8">Как создать профессиональный медиакит для рекламодателей ВКонтакте и Rutube: метрики, форматы, цены. Шаблон и советы по переговорам.</p>
        <div className="p-4 bg-accent/8 border border-accent/20 rounded-xl mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div><div className="font-bold text-sm mb-0.5">Создай медиакит за 5 минут</div><div className="text-muted text-sm">БлогерКит · Бесплатно</div></div>
          <Link href="/mediakit" className="px-4 py-2 bg-accent text-white text-sm font-bold rounded-xl whitespace-nowrap hover:opacity-85 transition-opacity">Создать медиакит →</Link>
        </div>
        <div className="text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Зачем медиакит нужен VK-блогеру</h2>
            <p className="text-muted mb-3">Рекламодатели получают десятки предложений ежемесячно. Медиакит — твоя визитная карточка которая выделяет тебя и показывает профессиональный подход.</p>
            <p className="text-muted mb-3">Без медиакита каждый разговор начинается с нуля. С медиакитом — сразу обсуждаешь условия. Также помогает обосновать цену: структурированные данные убеждают лучше чем просто цифра подписчиков.</p>
            <p className="text-muted mb-3">Обновляй медиакит каждые 2–3 месяца. Устаревшие данные выглядят непрофессионально.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Какие метрики включать</h2>
            <p className="text-muted mb-3">Основная статистика: подписчики, среднее количество просмотров за 30 дней, охват поста, вовлечённость (лайки + комментарии + репосты ÷ просмотры × 100%).</p>
            <p className="text-muted mb-3">Демография: возраст и пол из статистики сообщества, география (процент российской аудитории важен рекламодателям), интересы аудитории.</p>
            <p className="text-muted mb-3">Для Rutube дополнительно: среднее удержание аудитории — важный показатель качества для рекламодателей.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Форматы и цены</h2>
            <p className="text-muted mb-3">Опиши форматы: упоминание в видео (15–30 сек), нативная интеграция (60–120 сек), рекламный пост в сообществе, посев в сторис VK.</p>
            <p className="text-muted mb-3">Цены для канала 20–50 тыс. подписчиков: интеграция 8 000–20 000 ₽. Называй чуть выше желаемого — будет пространство для переговоров.</p>
            <p className="text-muted mb-3">Добавь раздел «Примеры сотрудничества» если есть опыт — скриншоты статистики прошлых интеграций убеждают лучше слов.</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mt-8 mb-3">Как оформить и отправить</h2>
            <p className="text-muted mb-3">Формат: PDF 1–2 страницы. Оформление в фирменных цветах канала, логотип или аватар в заголовке.</p>
            <p className="text-muted mb-3">Отправляй по email или в Telegram с персонализированным сопроводительным сообщением: кто ты, о чём канал, почему подходишь конкретному рекламодателю.</p>
            <p className="text-muted mb-3">Создай медиакит через инструмент БлогерКит — займёт 5 минут и даст профессиональный PDF со всей нужной статистикой.</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-muted text-sm uppercase tracking-widest mb-3">Читай также</div>
          <div className="flex flex-col gap-2">
            {[['/blog/kak-zarabotat-vk-video','Как заработать на VK Видео'],
['/blog/reklama-u-blogerov-vkontakte','Реклама у блогеров ВКонтакте'],
['/blog/rutube-monetizatsiya-2025','Монетизация на Rutube'],].map(([href,t]) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-white transition-colors border border-border rounded-lg px-4 py-2.5 hover:border-white/20">{t} →</Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}