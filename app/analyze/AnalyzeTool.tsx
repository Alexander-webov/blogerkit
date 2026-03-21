"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePayment, saveStateBeforePayment } from "@/lib/usePayment";
import PaymentSuccessToast from "@/components/PaymentSuccessToast";

interface Video {
  id: string;
  title: string;
  channel: string;
  channelId: string;
  views: number;
  likes: number;
  comments: number;
  likeRate: number;
  duration: string;
  durationSec: number;
  isShort: boolean;
  format: string;
  publishedAt: string;
  age: string;
  publishDate: string;
  tags: string[];
  thumb: string;
  url: string;
}
interface Meta {
  totalVideos: number;
  totalViews: number;
  avgViews: number;
  avgLikeRate: number;
  shortsCount: number;
  longCount: number;
  competition: string;
  topWords: { word: string; count: number }[];
}

function fmt(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return String(n);
}

const HINTS = [
  "авто обзор",
  "похудение",
  "криптовалюта",
  "рецепты",
  "игры",
  "путешествия",
  "макияж",
  "инвестиции",
  "психология",
  "фитнес",
];
const PERIODS = [
  { id: "week", label: "Неделя" },
  { id: "month", label: "Месяц" },
  { id: "year", label: "Год" },
];

// ── PAYWALL ───────────────────────────────────────────────────────────────────
function Paywall({ query, onClose }: { query: string; onClose: () => void }) {
  const { startPayment, loading, error } = usePayment("analyze");
  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-surface border border-border rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center">
        <div className="text-4xl mb-3">🔍</div>
        <div className="font-heading text-lg font-black mb-1">
          Результаты готовы!
        </div>
        <p className="text-muted text-xs mb-4">
          Топ видео по запросу{" "}
          <span className="text-white font-semibold">«{query}»</span> с тегами,
          паттернами и рекомендациями.
        </p>
        <div className="font-heading text-5xl font-black text-yellow-400 mb-1">
          149 ₽
        </div>
        <div className="text-muted text-xs mb-5">
          разовый платёж · доступ навсегда
        </div>
        <div className="grid grid-cols-2 gap-2 mb-5 text-left text-xs">
          {[
            "Топ-15 видео полная статистика",
            "Теги каждого видео",
            "Паттерны заголовков",
            "Shorts или полное видео",
            "Дата и длина видео",
            "Рекомендации по нише",
            "Уровень конкуренции",
            "Фильтр: неделя/месяц/год",
          ].map((f) => (
            <div key={f} className="flex items-start gap-1.5">
              <span className="text-green-400 flex-shrink-0">✓</span>
              <span className="text-muted">{f}</span>
            </div>
          ))}
        </div>
        {error && (
          <div className="text-red-400 text-xs mb-3 p-2 bg-red-500/10 rounded-lg">
            {error}
          </div>
        )}
        <button
          onClick={startPayment}
          disabled={loading}
          className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-sm rounded-xl mb-2 hover:opacity-90 transition-all disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Перенаправляю...
            </span>
          ) : (
            "💳 Оплатить 149 ₽ → Получить доступ"
          )}
        </button>
        <button
          onClick={onClose}
          className="w-full py-2 border border-border text-muted text-xs rounded-xl hover:text-white transition-colors"
        >
          Отмена
        </button>
      </div>
    </div>
  );
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function AnalyzeTool() {
  const [query, setQuery] = useState("");
  const [period, setPeriod] = useState("month");
  const [videos, setVideos] = useState<Video[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [error, setError] = useState("");
  const [sort, setSort] = useState("views");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showPay, setShowPay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const { paid, justPaid, info, verifying } = usePayment("analyze");

  // Сохранённый запрос — пережил редирект на ЮКасса
  const savedQueryRef = useRef<string>("");

  useEffect(() => {
    try {
      const q = localStorage.getItem("bk_analyze_query") || "";
      if (q) {
        setQuery(q);
        savedQueryRef.current = q;
      }
    } catch {}
  }, []);

  // Когда оплата подтверждена — автоматически запускаем поиск
  useEffect(() => {
    if (!paid) return;
    setShowPay(false);
    const q = savedQueryRef.current || query;
    if (q && videos.length === 0) {
      doSearch(q);
    }
  }, [paid]);

  async function doSearch(q: string, p?: string) {
    if (!q.trim()) {
      console.log("[analyze] doSearch called with empty query");
      return;
    }
    const activePeriod = p || period;
    console.log(
      "[analyze] doSearch start, paid=",
      paid,
      "q=",
      q,
      "period=",
      activePeriod,
    );
    setLoading(true);
    setError("");
    setShowResults(false);
    try {
      const url = `/api/youtube?q=${encodeURIComponent(q)}&period=${activePeriod}`;
      console.log("[analyze] fetching:", url);
      const res = await fetch(url);
      const data = await res.json();
      console.log(
        "[analyze] API response:",
        res.status,
        "videos:",
        data.videos?.length,
        "error:",
        data.error,
      );
      if (!res.ok) throw new Error(data.error || `Ошибка API (${res.status})`);
      if (!data.videos?.length)
        throw new Error(
          "YouTube не вернул видео по этому запросу. Попробуй другую нишу или период.",
        );
      // API может не возвращать meta — вычисляем на клиенте
      const vids = data.videos;
      const metaObj: Meta =
        data.meta ||
        (() => {
          const totalViews = vids.reduce(
            (s: number, v: any) => s + (v.views || 0),
            0,
          );
          const avgViews = vids.length
            ? Math.round(totalViews / vids.length)
            : 0;
          const shortsCount = vids.filter(
            (v: any) => v.isShort || (v.durationSec > 0 && v.durationSec <= 60),
          ).length;
          const avgLikeRate = vids.length
            ? +(
                vids.reduce((s: number, v: any) => s + (v.likeRate || 0), 0) /
                vids.length
              ).toFixed(2)
            : 0;
          // title word frequency
          const stop = new Set([
            "и",
            "в",
            "на",
            "с",
            "по",
            "за",
            "для",
            "из",
            "от",
            "до",
            "как",
            "что",
            "это",
            "или",
            "но",
            "а",
            "не",
            "все",
            "мой",
            "моя",
            "я",
            "он",
            "она",
            "они",
            "его",
            "её",
            "их",
          ]);
          const freq: Record<string, number> = {};
          vids.forEach((v: any) => {
            (v.title || "")
              .toLowerCase()
              .replace(/[^а-яёa-z0-9\s]/gi, " ")
              .split(/\s+/)
              .filter((w: string) => w.length > 2 && !stop.has(w))
              .forEach((w: string) => {
                freq[w] = (freq[w] || 0) + 1;
              });
          });
          const topWords = Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 20)
            .map(([word, count]) => ({ word, count }));
          return {
            totalVideos: vids.length,
            totalViews,
            avgViews,
            avgLikeRate,
            shortsCount,
            longCount: vids.length - shortsCount,
            competition:
              avgViews > 1_500_000
                ? "Высокая"
                : avgViews > 300_000
                  ? "Средняя"
                  : "Низкая",
            topWords,
          };
        })();
      console.log(
        "[analyze] setting videos:",
        vids.length,
        "meta computed:",
        !!metaObj,
      );
      setVideos(vids);
      setMeta(metaObj);
      setShowResults(true);
      try {
        localStorage.removeItem("bk_analyze_query");
      } catch {}
    } catch (e: any) {
      console.error("[analyze] doSearch error:", e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    const q = query.trim();
    console.log(
      "[analyze] handleSearch, q=",
      q,
      "paid=",
      paid,
      "verifying=",
      verifying,
    );
    if (!q) return;
    if (!paid) {
      try {
        localStorage.setItem("bk_analyze_query", q);
      } catch {}
      savedQueryRef.current = q;
      saveStateBeforePayment("analyze", { query: q });
      setShowPay(true);
      return;
    }
    doSearch(q);
  }

  // showResults управляется явно чтобы избежать race condition с meta

  const sorted = [...videos].sort((a, b) =>
    sort === "views"
      ? b.views - a.views
      : sort === "likes"
        ? b.likeRate - a.likeRate
        : sort === "date"
          ? new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          : b.comments - a.comments,
  );

  return (
    <>
      <PaymentSuccessToast show={justPaid} productName={info.name} />
      {showPay && <Paywall query={query} onClose={() => setShowPay(false)} />}

      <div className="min-h-screen bg-bg">
        <nav className="sticky top-0 z-40 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
          <Link
            href="/"
            className="font-heading text-sm font-black flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
            БлогерКит
          </Link>
          <div className="text-muted text-xs">
            {verifying ? (
              <span className="text-yellow-400 flex items-center gap-1.5">
                <span className="w-3 h-3 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin inline-block" />
                Проверяем оплату...
              </span>
            ) : (
              "🔍 Анализ конкурентов · 149 ₽"
            )}
          </div>
        </nav>

        {/* HERO */}
        <div className="relative overflow-hidden pt-10 pb-6 px-6 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(0,212,255,0.06)_0%,transparent_70%)]" />
          <div className="relative max-w-2xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-black tracking-tight leading-tight mb-2">
              Анализ{" "}
              <span className="bg-gradient-to-r from-accent3 to-green-400 bg-clip-text text-transparent">
                конкурентов
              </span>
            </h1>
            <p className="text-muted text-sm mb-6">
              Топ видео, теги, паттерны заголовков ·{" "}
              <span className="text-yellow-400 font-semibold">
                149 ₽ за запрос
              </span>
            </p>

            {/* PERIOD */}
            <div className="flex justify-center gap-2 mb-4">
              {PERIODS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPeriod(p.id);
                    // Если уже есть результаты — перезапускаем поиск с новым периодом
                    if (showResults && query.trim() && paid)
                      doSearch(query.trim(), p.id);
                  }}
                  className={`px-4 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer font-semibold
                    ${period === p.id ? "bg-accent/15 border-accent/40 text-accent" : "border-border text-muted hover:text-white bg-transparent"}`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* SEARCH */}
            <div className="flex gap-2 max-w-xl mx-auto mb-4">
              <input
                className="flex-1 px-4 py-3 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent3 transition-colors placeholder:text-muted"
                placeholder="Введи нишу: авто, фитнес, кулинария..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                disabled={verifying}
                className="px-5 py-3 bg-accent text-white text-sm font-bold rounded-xl hover:opacity-85 transition-all whitespace-nowrap disabled:opacity-50"
              >
                {verifying ? "⟳" : "Анализировать →"}
              </button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {HINTS.map((h) => (
                <button
                  key={h}
                  onClick={() => setQuery(h)}
                  className="px-3 py-1 text-xs border border-border rounded-full text-muted hover:text-white hover:border-white/20 transition-colors bg-transparent cursor-pointer"
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-20">
          {/* VERIFYING BANNER */}
          {verifying && (
            <div className="text-center py-12">
              <div className="w-10 h-10 border-[3px] border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-yellow-400 font-semibold text-sm">
                Проверяем оплату...
              </p>
              <p className="text-muted text-xs mt-1">
                Секунду, запускаем анализ автоматически
              </p>
            </div>
          )}

          {/* LOADING */}
          {loading && !verifying && (
            <div className="text-center py-20">
              <div className="w-10 h-10 border-[3px] border-border border-t-accent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted text-sm">
                Загружаем данные с YouTube...
              </p>
            </div>
          )}

          {/* ERROR */}
          {!!error && (
            <div className="max-w-md mx-auto py-10 text-center">
              <div className="text-4xl mb-3">⚠️</div>
              <div className="text-muted text-xs">{error}</div>
            </div>
          )}

          {/* IDLE */}
          {!loading && !showResults && !error && !verifying && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <div className="font-heading text-xl font-bold mb-2">
                Введи нишу чтобы начать
              </div>
              <div className="text-muted text-sm max-w-sm mx-auto">
                Топ видео с тегами, паттернами заголовков и рекомендациями
              </div>
            </div>
          )}

          {/* RESULTS */}
          {showResults && meta && (
            <div className="animate-fadeUp space-y-6">
              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    label: "Всего просмотров",
                    val: fmt(meta.totalViews),
                    sub: `${meta.totalVideos} видео`,
                  },
                  {
                    label: "Средние просмотры",
                    val: fmt(meta.avgViews),
                    sub: "на видео",
                  },
                  {
                    label: "Конкуренция",
                    val: meta.competition,
                    sub:
                      meta.avgViews > 1_500_000
                        ? "высокий порог"
                        : meta.avgViews > 300_000
                          ? "можно зайти"
                          : "легко войти",
                  },
                  {
                    label: "Средний лайк-рейт",
                    val: meta.avgLikeRate + "%",
                    sub: "вовлечённость",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-card border border-border rounded-xl p-4 text-center"
                  >
                    <div className="font-heading text-xl font-black text-accent">
                      {s.val}
                    </div>
                    <div className="text-white text-xs font-semibold mt-0.5">
                      {s.label}
                    </div>
                    <div className="text-muted text-xs mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* FORMAT + WORDS */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="text-xs text-muted uppercase tracking-widest mb-4">
                    Формат видео
                  </div>
                  <div className="flex items-center gap-6 mb-3">
                    <div className="text-center">
                      <div className="font-heading text-3xl font-black text-red-400">
                        {meta.shortsCount}
                      </div>
                      <div className="text-xs text-muted mt-1">📱 Shorts</div>
                    </div>
                    <div className="flex-1 h-3 bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full"
                        style={{
                          width: `${meta.totalVideos ? (meta.shortsCount / meta.totalVideos) * 100 : 0}%`,
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-3xl font-black text-blue-400">
                        {meta.longCount}
                      </div>
                      <div className="text-xs text-muted mt-1">🎬 Полные</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted">
                    {meta.shortsCount > meta.longCount
                      ? "💡 Ниша живёт в Shorts — короткий формат доминирует"
                      : "💡 Аудитория предпочитает длинный контент"}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="text-xs text-muted uppercase tracking-widest mb-4">
                    Паттерны заголовков / ТЕГИ
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {meta.topWords.slice(0, 16).map(({ word, count }) => {
                      const max = meta.topWords[0]?.count || 1;
                      const pct = count / max;
                      const size =
                        pct > 0.7
                          ? "text-base font-black"
                          : pct > 0.4
                            ? "text-sm font-bold"
                            : "text-xs font-semibold";
                      const color =
                        pct > 0.7
                          ? "text-yellow-400 bg-yellow-400/10 border-yellow-400/30"
                          : pct > 0.4
                            ? "text-accent bg-accent/10 border-accent/30"
                            : "text-muted bg-surface border-border";
                      return (
                        <span
                          key={word}
                          className={`px-2.5 py-1 rounded-lg border ${size} ${color}`}
                        >
                          {word}
                        </span>
                      );
                    })}
                  </div>
                  <div className="text-xs text-muted mt-3">
                    Используй эти слова в своих заголовках
                  </div>
                </div>
              </div>

              {/* VIDEOS */}
              <div>
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="font-heading text-base font-black">
                    Топ {videos.length} видео
                  </div>
                  <div className="flex gap-2">
                    {[
                      ["views", "Просмотры"],
                      ["likes", "Лайк-рейт"],
                      ["date", "Дата"],
                      ["comments", "Комменты"],
                    ].map(([v, l]) => (
                      <button
                        key={v}
                        onClick={() => setSort(v)}
                        className={`px-3 py-1 text-xs rounded-lg border transition-colors cursor-pointer ${sort === v ? "bg-accent/10 border-accent/30 text-accent" : "border-border text-muted hover:text-white bg-transparent"}`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {sorted.map((v, i) => (
                    <div
                      key={v.id}
                      className="bg-card border border-border rounded-xl overflow-hidden hover:border-white/15 transition-all"
                    >
                      <div className="flex gap-4 p-3">
                        <div
                          className="relative flex-shrink-0 w-40 rounded-lg overflow-hidden bg-black"
                          style={{ height: "88px" }}
                        >
                          <Image
                            src={v.thumb}
                            alt={v.title}
                            fill
                            className="object-cover"
                            sizes="160px"
                          />
                          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-mono">
                            {v.duration}
                          </div>
                          <div
                            className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-xs font-black ${v.isShort ? "bg-red-500 text-white" : "bg-blue-600 text-white"}`}
                          >
                            {v.isShort ? "📱 Short" : "🎬"}
                          </div>
                          <div
                            className={`absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${i === 0 ? "bg-yellow-400 text-black" : i === 1 ? "bg-gray-300 text-black" : i === 2 ? "bg-orange-500 text-white" : "bg-black/60 text-white"}`}
                          >
                            {i + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <a
                            href={v.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sm leading-snug line-clamp-2 hover:text-accent3 transition-colors block mb-1"
                          >
                            {v.title}
                          </a>
                          <div className="text-muted text-xs mb-2">
                            {v.channel} · {v.publishDate}
                          </div>
                          <div className="flex flex-wrap gap-3 text-xs">
                            <span className="text-accent font-bold">
                              👁 {fmt(v.views)}
                            </span>
                            <span className="text-green-400">
                              👍 {fmt(v.likes)}{" "}
                              <span className="text-muted">
                                ({v.likeRate}%)
                              </span>
                            </span>
                            <span className="text-muted">
                              💬 {fmt(v.comments)}
                            </span>
                            <span
                              className={`font-semibold ${v.isShort ? "text-red-400" : "text-blue-400"}`}
                            >
                              {v.format}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setExpanded(expanded === v.id ? null : v.id)
                          }
                          className="flex-shrink-0 self-center w-8 h-8 flex items-center justify-center text-muted hover:text-white transition-colors text-sm"
                        >
                          {expanded === v.id ? "Инфо" : "Скрыть"}
                        </button>
                      </div>

                      {expanded === v.id && (
                        <div className="border-t border-border px-4 py-3 bg-black/20 space-y-3">
                          {v.tags.length > 0 && (
                            <div>
                              <div className="text-xs text-muted uppercase tracking-widest mb-2">
                                Теги
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {v.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-0.5 bg-surface border border-border rounded text-xs text-muted"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          <div>
                            <div className="text-xs text-muted uppercase tracking-widest mb-2">
                              Рекомендации
                            </div>
                            <div className="space-y-1 text-xs text-muted">
                              {v.likeRate > 5 && (
                                <div className="flex gap-2">
                                  <span className="text-green-400">✓</span>
                                  <span>
                                    Высокая вовлечённость ({v.likeRate}%) — тема
                                    горячая, аудитория реагирует
                                  </span>
                                </div>
                              )}
                              {v.likeRate < 1 && (
                                <div className="flex gap-2">
                                  <span className="text-yellow-400">⚠</span>
                                  <span>
                                    Низкий лайк-рейт — возможно кликбейт или
                                    холодная аудитория
                                  </span>
                                </div>
                              )}
                              {v.isShort && (
                                <div className="flex gap-2">
                                  <span className="text-blue-400">💡</span>
                                  <span>
                                    Shorts — алгоритм активно продвигает,
                                    попробуй этот формат
                                  </span>
                                </div>
                              )}
                              {!v.isShort && v.durationSec > 1200 && (
                                <div className="flex gap-2">
                                  <span className="text-blue-400">💡</span>
                                  <span>
                                    Длинное видео ({v.duration}) набирает
                                    просмотры — аудитория смотрит до конца
                                  </span>
                                </div>
                              )}
                              {v.comments > v.likes * 0.1 && (
                                <div className="flex gap-2">
                                  <span className="text-purple-400">💬</span>
                                  <span>
                                    Много комментариев — тема вызывает
                                    дискуссию, хороший сигнал для алгоритма
                                  </span>
                                </div>
                              )}
                              <div className="flex gap-2">
                                <span className="text-accent">📅</span>
                                <span>
                                  Опубликовано {v.age} · {v.publishDate}
                                </span>
                              </div>
                              {v.tags.length > 0 && (
                                <div className="flex gap-2">
                                  <span className="text-yellow-400">🏷</span>
                                  <span>
                                    Теги для вдохновения:{" "}
                                    <span className="text-white">
                                      {v.tags.slice(0, 5).join(", ")}
                                    </span>
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  onClick={() => {
                    setVideos([]);
                    setMeta(null);
                    setError("");
                    setShowResults(false);
                  }}
                  className="px-6 py-2.5 border border-border text-muted text-sm rounded-xl hover:text-white hover:border-white/20 transition-colors"
                >
                  ← Новый поиск
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
