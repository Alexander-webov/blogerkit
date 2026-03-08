# БлогерКит — Next.js

## 🚀 Быстрый старт

```bash
# 1. Установить зависимости
npm install

# 2. Создать .env.local (уже создан, просто проверь)
# YOUTUBE_API_KEY=твой_ключ

# 3. Запустить локально
npm run dev
# → http://localhost:3000
```

## 📦 Деплой на Vercel (бесплатно)

```bash
# 1. Установить Vercel CLI
npm i -g vercel

# 2. Задеплоить
vercel

# 3. Добавить переменные окружения в Vercel Dashboard:
# YOUTUBE_API_KEY = AIzaSy...
# NEXT_PUBLIC_SITE_URL = https://blogerkit.ru
```

## 🗂 Структура проекта

```
app/
├── page.tsx              ← Главная (лендинг)
├── analyze/
│   ├── page.tsx          ← SEO обёртка
│   └── AnalyzeTool.tsx   ← Client component с UI
├── covers/page.tsx       ← Конструктор обложек
├── calculator/page.tsx   ← Калькулятор рекламы
├── tips/page.tsx         ← Советы по продвижению
├── crop/page.tsx         ← Кроп для Shorts
├── api/
│   └── youtube/route.ts  ← YouTube API (ключ скрыт!)
├── sitemap.ts            ← Автосайтмап для Google
└── robots.ts             ← robots.txt
```

## 🔍 SEO

Каждая страница имеет:
- `<title>` с ключевыми словами
- `<meta description>`
- `<canonical>` URL
- OpenGraph теги
- JSON-LD структурированные данные
- Автоматический sitemap.xml

**Целевые запросы:**
- "анализ конкурентов youtube" — 3 200/мес
- "конструктор обложек youtube" — 8 900/мес
- "сколько стоит реклама у блогера" — 2 100/мес
- "кроп видео для shorts онлайн" — 1 800/мес

## 💳 Подключение реальных платежей (ЮКасса)

1. Зарегистрировать ИП
2. Подключить ЮКасса → получить `SHOP_ID` и `SECRET_KEY`
3. Добавить в `.env.local`
4. Реализовать `app/api/payment/route.ts`

## 🔑 Защита YouTube API ключа

В Google Console → Credentials → твой ключ → Application restrictions:
- HTTP referrers → добавить `blogerkit.ru/*`
- API restrictions → YouTube Data API v3
