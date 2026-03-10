"use client";

import { useState } from "react";
import Link from "next/link";

// ── DATA ──────────────────────────────────────────────────────
const PLATFORMS = [
  {
    id: "yt",
    label: "YouTube",
    icon: "▶️",
    color: "from-red-600 to-red-800",
    border: "border-red-500/40",
    activeBg: "bg-red-500/10",
  },
  {
    id: "tt",
    label: "TikTok",
    icon: "🎵",
    color: "from-gray-900 to-gray-800",
    border: "border-cyan-400/40",
    activeBg: "bg-cyan-400/10",
  },
  {
    id: "vk",
    label: "ВКонтакте",
    icon: "🔵",
    color: "from-blue-600 to-blue-800",
    border: "border-blue-500/40",
    activeBg: "bg-blue-500/10",
  },
  {
    id: "tg",
    label: "Telegram",
    icon: "✈️",
    color: "from-sky-500 to-sky-700",
    border: "border-sky-400/40",
    activeBg: "bg-sky-400/10",
  },
];

const TIPS: Record<
  string,
  { title: string; desc: string; tag: string; tagColor: string }[]
> = {
  yt: [
    {
      title: "Первые 30 секунд решают всё",
      desc: "YouTube смотрит удержание первые 30 сек. Начни с крючка — вопрос, шок, обещание результата.",
      tag: "Критично",
      tagColor: "bg-red-500/15 text-red-400",
    },
    {
      title: "Обложка + заголовок = 70% успеха",
      desc: "A/B тестируй обложки. Меняй их на старых видео если CTR ниже 4%.",
      tag: "CTR",
      tagColor: "bg-orange-500/15 text-orange-400",
    },
    {
      title: "Shorts ведут на длинные видео",
      desc: "Делай Shorts из длинных видео и добавляй призыв смотреть полную версию. Трафик растёт.",
      tag: "Рост",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "Лучшее время: вт–чт 15–19 ч",
      desc: "Для русскоязычной аудитории вторник–четверг 15:00–19:00 МСК — пик активности.",
      tag: "Алгоритм",
      tagColor: "bg-blue-500/15 text-blue-400",
    },
    {
      title: "Комментарии в первый час",
      desc: "Отвечай на все комментарии в первые 60 минут после публикации. Алгоритм это замечает.",
      tag: "Важно",
      tagColor: "bg-yellow-500/15 text-yellow-400",
    },
    {
      title: "Длина видео 8–15 минут оптимальна",
      desc: "Именно эта длина даёт максимальный RPM и вовлечённость для большинства ниш.",
      tag: "Монетизация",
      tagColor: "bg-purple-500/15 text-purple-400",
    },
    {
      title: "SEO в описании — это органика",
      desc: "Первые 3 строки описания видны в поиске. Добавь ключевые слова и тайм-коды.",
      tag: "SEO",
      tagColor: "bg-cyan-500/15 text-cyan-400",
    },
    {
      title: "Плейлисты увеличивают время",
      desc: "Каждое видео должно быть в плейлисте — это увеличивает время просмотра на канале на 40%.",
      tag: "Удержание",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "Конечные заставки обязательны",
      desc: "Добавляй конечную заставку с подпиской и рекомендованным видео за последние 20 секунд.",
      tag: "Рост",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "CTR + AVD = приоритет алгоритма",
      desc: "Отслеживай CTR (норма 4–8%) и AVD (средняя длительность просмотра). Это главные метрики.",
      tag: "Аналитика",
      tagColor: "bg-orange-500/15 text-orange-400",
    },
    {
      title: "Коллаборации дают новую аудиторию",
      desc: "Снимай видео с блогерами смежной ниши — это самый быстрый способ получить новых подписчиков.",
      tag: "Рост",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "Монетизация с 1000 подписчиков",
      desc: "Подавай заявку на монетизацию как только наберёшь 1000 подписчиков и 4000 часов просмотра.",
      tag: "Монетизация",
      tagColor: "bg-purple-500/15 text-purple-400",
    },
  ],
  tt: [
    {
      title: "Первые 3 секунды — всё",
      desc: "Пользователь решает остаться или скроллить за 3 секунды. Начни с максимально цепляющего кадра.",
      tag: "Критично",
      tagColor: "bg-red-500/15 text-red-400",
    },
    {
      title: "Публикуй 1–3 видео в день",
      desc: "TikTok любит частоту. Лучше 2 коротких чем 1 длинное раз в неделю.",
      tag: "Алгоритм",
      tagColor: "bg-blue-500/15 text-blue-400",
    },
    {
      title: "Трендовые звуки дают буст",
      desc: "Используй звуки из топа — алгоритм продвигает видео с популярными треками активнее.",
      tag: "Охват",
      tagColor: "bg-cyan-500/15 text-cyan-400",
    },
    {
      title: "Субтитры обязательны",
      desc: "60% смотрят без звука. Субтитры увеличивают досмотр на 40%.",
      tag: "Важно",
      tagColor: "bg-yellow-500/15 text-yellow-400",
    },
    {
      title: "Длина 15–60 секунд оптимальна",
      desc: "Короткие видео охватывают больше. Для обучающего контента — до 3 минут.",
      tag: "Формат",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "Дуэты и Стич дают охват",
      desc: "Реагируй на вирусные видео через дуэт — алгоритм показывает твоё видео аудитории оригинала.",
      tag: "Вирусность",
      tagColor: "bg-pink-500/15 text-pink-400",
    },
    {
      title: "Петля видео увеличивает досмотр",
      desc: "Создавай видео которые хочется пересмотреть — петля засчитывается алгоритмом как новый просмотр.",
      tag: "Алгоритм",
      tagColor: "bg-blue-500/15 text-blue-400",
    },
    {
      title: "Лучшее время: 7–9 и 19–23 ч",
      desc: "Утро и вечер по МСК — пики активности TikTok аудитории в России.",
      tag: "Время",
      tagColor: "bg-orange-500/15 text-orange-400",
    },
    {
      title: "3–5 хэштегов — оптимум",
      desc: "Больше не значит лучше. 3–5 релевантных хэштегов работают лучше 20 случайных.",
      tag: "Охват",
      tagColor: "bg-cyan-500/15 text-cyan-400",
    },
    {
      title: "Текстовые оверлеи удерживают",
      desc: "Текст на экране с первых кадров удерживает внимание тех кто смотрит без звука.",
      tag: "Удержание",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "Серии строят аудиторию",
      desc: '"Часть 2" и серийный контент заставляют подписываться чтобы не пропустить продолжение.',
      tag: "Рост",
      tagColor: "bg-green-500/15 text-green-400",
    },
  ],
  vk: [
    {
      title: "Клипы — главный инструмент роста",
      desc: "Алгоритм ВКонтакте активно продвигает Клипы. Короткие вертикальные видео дают органику в 2026.",
      tag: "Критично",
      tagColor: "bg-red-500/15 text-red-400",
    },
    {
      title: "Нативное видео вместо ссылок",
      desc: "Нативное видео продвигается в 3–5 раз лучше чем ссылки на YouTube. Загружай напрямую.",
      tag: "Алгоритм",
      tagColor: "bg-blue-500/15 text-blue-400",
    },
    {
      title: "Опросы увеличивают охват",
      desc: "Посты с опросами алгоритм показывает чаще. Добавляй простой опрос к каждому посту.",
      tag: "Охват",
      tagColor: "bg-cyan-500/15 text-cyan-400",
    },
    {
      title: "Stories каждый день",
      desc: "Ежедневные Stories держат тебя в топе ленты подписчиков. Достаточно 1–2 в день.",
      tag: "Видимость",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "Публикуй в 19–21 ч по МСК",
      desc: "Вечер пятницы и субботы — пик активности аудитории ВКонтакте.",
      tag: "Время",
      tagColor: "bg-orange-500/15 text-orange-400",
    },
    {
      title: "Маркет-платформа для рекламы",
      desc: "Для поиска рекламодателей используй официальную Маркет-платформу ВКонтакте от 1000 подписчиков.",
      tag: "Монетизация",
      tagColor: "bg-purple-500/15 text-purple-400",
    },
    {
      title: "Первые 2 строки — крючок",
      desc: 'В ленте видны только первые строки поста. Они должны заставить нажать "показать полностью".',
      tag: "Важно",
      tagColor: "bg-yellow-500/15 text-yellow-400",
    },
    {
      title: "Репостный контент множит охват",
      desc: "Создавай контент который хочется репостнуть — полезное, смешное, резонирующее.",
      tag: "Вирусность",
      tagColor: "bg-pink-500/15 text-pink-400",
    },
    {
      title: "Отвечай с упоминанием автора",
      desc: "Упоминай @пользователей в ответах на комментарии — они получают уведомление и возвращаются.",
      tag: "Удержание",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "Мероприятия для анонсов",
      desc: "Создавай мероприятия ВКонтакте для важных анонсов — отдельный охват у подписчиков мероприятий.",
      tag: "Рост",
      tagColor: "bg-green-500/15 text-green-400",
    },
  ],
  tg: [
    {
      title: "Раз в день — золотой стандарт",
      desc: "Telegram-аудитория отписывается от спама быстро. 1 пост в день — оптимум для роста.",
      tag: "Критично",
      tagColor: "bg-red-500/15 text-red-400",
    },
    {
      title: "Первые 2 строки — крючок",
      desc: 'В ленте видны только первые строки. Они должны заставить нажать "читать далее".',
      tag: "Важно",
      tagColor: "bg-yellow-500/15 text-yellow-400",
    },
    {
      title: "Взаимопиар — лучший бесплатный рост",
      desc: "Обмен рекламными постами с каналами похожей тематики — самый эффективный способ расти.",
      tag: "Рост",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "Реакции важны для алгоритма",
      desc: "Добавляй кнопку реакций к каждому посту. Это сигнал для рекомендательного алгоритма.",
      tag: "Алгоритм",
      tagColor: "bg-blue-500/15 text-blue-400",
    },
    {
      title: "Лучшее время: 9–11 и 20–22 ч",
      desc: "Утром по дороге на работу и вечером — пиковые часы чтения Telegram в России.",
      tag: "Время",
      tagColor: "bg-orange-500/15 text-orange-400",
    },
    {
      title: "Нативное видео × 3 просмотра",
      desc: "Нативное видео смотрят в 3 раза чаще чем внешние ссылки на YouTube.",
      tag: "Форматы",
      tagColor: "bg-cyan-500/15 text-cyan-400",
    },
    {
      title: "Форматирование увеличивает дочитывание",
      desc: "Используй **жирный**, _курсив_ и абзацы. Структура текста увеличивает дочитываемость.",
      tag: "Контент",
      tagColor: "bg-green-500/15 text-green-400",
    },
    {
      title: "Закреп — твоя визитка",
      desc: "Закреплённый пост видит каждый новый подписчик. Сделай его максимально продающим.",
      tag: "Важно",
      tagColor: "bg-yellow-500/15 text-yellow-400",
    },
    {
      title: "Опросы поднимают вовлечённость",
      desc: 'Простые опросы ("А вы как считаете?") резко поднимают вовлечённость и удержание.',
      tag: "Вовлечённость",
      tagColor: "bg-pink-500/15 text-pink-400",
    },
    {
      title: "Монетизация с 1000 подписчиков",
      desc: "С 1000 подписчиков можно подключить рекламную биржу TGStat для автоматического размещения рекламы.",
      tag: "Монетизация",
      tagColor: "bg-purple-500/15 text-purple-400",
    },
  ],
};

const CHECKS: Record<string, { text: string; why: string }[]> = {
  yt: [
    {
      text: "Обложка яркая, читается на маленьком экране",
      why: "CTR зависит от обложки на 60%",
    },
    {
      text: "Заголовок содержит ключевое слово",
      why: "YouTube ищет по словам в заголовке",
    },
    {
      text: "Первые 30 секунд — цепляющий крючок",
      why: "Удержание в начале критично для алгоритма",
    },
    {
      text: "Описание заполнено (минимум 200 слов)",
      why: "Больше ключевых слов = больше органики",
    },
    {
      text: "Добавлены теги (10–15 штук)",
      why: "Помогает YouTube понять тему видео",
    },
    {
      text: "Указаны тайм-коды в описании",
      why: "Улучшает поведенческие факторы",
    },
    {
      text: "Добавлена конечная заставка с подпиской",
      why: "Бесплатный трафик на другие видео",
    },
    {
      text: "Видео добавлено в нужный плейлист",
      why: "Увеличивает время на канале",
    },
    {
      text: "Поделился в Telegram/ВКонтакте Stories",
      why: "Первые просмотры разгоняют алгоритм",
    },
    {
      text: "Буду онлайн первый час после публикации",
      why: "Ответы на комментарии = сигнал алгоритму",
    },
  ],
  tt: [
    {
      text: "Первые 3 секунды максимально цепляющие",
      why: "Решение скроллить принимается за 3 сек",
    },
    { text: "Добавлены субтитры", why: "60% смотрят без звука" },
    {
      text: "Используется трендовый звук",
      why: "Алгоритм бустит видео с популярными треками",
    },
    {
      text: "Добавлены 3–5 релевантных хэштега",
      why: "Помогает попасть к нужной аудитории",
    },
    {
      text: "Длина видео до 60 секунд",
      why: "Короткие видео охватывают больше",
    },
    {
      text: "Есть текстовый крючок на экране в начале",
      why: "Удерживает внимание зрителя",
    },
    {
      text: "Есть призыв к действию в конце",
      why: "Подписка, лайк, комментарий",
    },
    {
      text: "Обложка (превью) выбрана вручную",
      why: "Обложка видна в профиле и в поиске",
    },
  ],
  vk: [
    {
      text: "Видео загружено нативно (не ссылка)",
      why: "Нативное видео продвигается в 3–5x лучше",
    },
    {
      text: "Первые 2 строки поста — крючок",
      why: "В ленте видны только первые строки",
    },
    {
      text: "Добавлен опрос к посту",
      why: "Опросы увеличивают органический охват",
    },
    {
      text: "Обложка видео яркая и читаемая",
      why: "Обложка влияет на CTR в ленте",
    },
    {
      text: "Добавлены ключевые слова в описание",
      why: "ВКонтакте индексирует описания",
    },
    {
      text: "Запланированы Stories на сегодня",
      why: "Ежедневные Stories держат в топе ленты",
    },
    {
      text: "Отмечены все причастные люди/сообщества",
      why: "Они получают уведомление и могут репостнуть",
    },
    {
      text: "Публикация в оптимальное время 19–21 ч",
      why: "Пик активности аудитории ВКонтакте",
    },
  ],
  tg: [
    {
      text: "Первые 2 строки создают сильный крючок",
      why: "В ленте видны только первые строки",
    },
    {
      text: "Добавлены кнопки реакций",
      why: "Реакции — сигнал для рекомендательного алгоритма",
    },
    {
      text: "Текст отформатирован: заголовки, абзацы",
      why: "Структура увеличивает дочитываемость",
    },
    {
      text: "Добавлен визуал (фото, видео, GIF)",
      why: "Посты с медиа получают больше просмотров",
    },
    {
      text: "Видео загружено нативно (не ссылка)",
      why: "Нативное видео воспроизводится автоматически",
    },
    {
      text: "Нет лишних внешних ссылок в тексте",
      why: "Telegram снижает охват постов с многими ссылками",
    },
    {
      text: "Время публикации оптимальное (9–11 или 20–22)",
      why: "Пиковые часы активности в Telegram",
    },
    {
      text: "Добавлено в нужную папку/рубрику канала",
      why: "Навигация по темам удерживает подписчиков",
    },
  ],
};

// ── COMPONENT ─────────────────────────────────────────────────
export default function TipsTool() {
  const [activePf, setActivePf] = useState("yt");
  const [checked, setChecked] = useState<
    Record<string, Record<number, boolean>>
  >({});

  const pf = PLATFORMS.find((p) => p.id === activePf)!;
  const tips = TIPS[activePf] || [];
  const checks = CHECKS[activePf] || [];

  function toggle(pid: string, i: number) {
    setChecked((prev) => ({
      ...prev,
      [pid]: { ...(prev[pid] || {}), [i]: !prev[pid]?.[i] },
    }));
  }

  const done = checks.filter((_, i) => checked[activePf]?.[i]).length;
  const total = checks.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-bg">
      {/* NAV */}
      <nav className="sticky top-0 z-40 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
        <Link
          href="/"
          className="font-heading text-sm font-black flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-green animate-pulse2" />
          БлогерКит
        </Link>
        <div className="text-muted text-lg">📈 Советы по продвижению</div>
      </nav>

      {/* HERO */}
      <div className="relative overflow-hidden pt-12 pb-8 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(16,185,129,0.06)_0%,transparent_70%)]" />
        <div className="relative max-w-xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl font-black tracking-tight mb-3">
            Советы по{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              продвижению
            </span>
          </h1>
          <p className="text-muted text-sm">
            Актуально 2026 · Чеклисты перед публикацией
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* PLATFORM TABS */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePf(p.id)}
              className={`py-3 rounded-xl border text-lg font-bold transition-all cursor-pointer ${
                activePf === p.id
                  ? `${p.activeBg} ${p.border} text-white`
                  : "border-border text-muted hover:text-white bg-transparent"
              }`}
            >
              <div className="text-xl mb-1">{p.icon}</div>
              {p.label}
            </button>
          ))}
        </div>

        {/* TIPS GRID */}
        <h2 className="font-heading text-sm font-bold mb-4">
          🔑 Ключевые советы — {pf.label}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-4 hover:border-white/15 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="font-heading text-lg text-muted">
                  0{i < 9 ? "0" : ""}
                  {i + 1}
                </div>
                <span
                  className={`text-lg px-2 py-0.5 rounded-full font-semibold ${tip.tagColor}`}
                >
                  {tip.tag}
                </span>
              </div>
              <div className="font-bold text-sm mb-1">{tip.title}</div>
              <div className="text-muted text-lg leading-relaxed">
                {tip.desc}
              </div>
            </div>
          ))}
        </div>

        {/* CHECKLIST */}
        <h2 className="font-heading text-sm font-bold mb-2">
          ✅ Чеклист перед публикацией
        </h2>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-lg text-muted whitespace-nowrap">
            {done} / {total} · {pct}%
          </span>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          {checks.map((item, i) => {
            const isDone = checked[activePf]?.[i];
            return (
              <div
                key={i}
                onClick={() => toggle(activePf, i)}
                className={`flex items-start gap-3 p-4 border-b border-white/5 last:border-0 cursor-pointer transition-colors ${isDone ? "opacity-60" : "hover:bg-white/2"}`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border transition-all ${isDone ? "bg-green-400 border-green-400 text-black" : "border-border"}`}
                >
                  {isDone && <span className="text-lg font-black">✓</span>}
                </div>
                <div>
                  <div
                    className={`text-sm font-medium ${isDone ? "line-through" : ""}`}
                  >
                    {item.text}
                  </div>
                  <div className="text-muted text-lg mt-0.5">💡 {item.why}</div>
                </div>
              </div>
            );
          })}
        </div>

        {pct === 100 && (
          <div className="mt-4 p-4 bg-green-400/10 border border-green-400/25 rounded-xl text-center animate-fadeUp">
            <div className="text-2xl mb-1">🎉</div>
            <div className="font-bold text-sm text-green-400">
              Всё готово! Можно публиковать
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
