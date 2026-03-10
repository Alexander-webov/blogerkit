"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PaywallModal from "@/components/PaywallModal";
import { usePayment } from "@/lib/usePayment";

function fmt(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return String(n);
}
function daysAgo(iso: string) {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (d === 0) return "сегодня";
  if (d === 1) return "вчера";
  return `${d} дн назад`;
}

interface ChannelData {
  channel: {
    id: string;
    name: string;
    description: string;
    avatar: string;
    subs: number;
    views: number;
    videoCount: number;
    createdAt: string;
    country: string;
  };
  stats: { avgViews: number; engRate: number; growthRate: number };
  videos: any[];
  topVideo: any;
  worstVideo: any;
}

const FEATURES = [
  "Подписчики, просмотры, вовлечённость",
  "Топ и слабые видео за последний месяц",
  "Сравнение с нормой для твоей ниши",
  "Персональные AI-советы по росту",
  "История роста канала",
];

export default function ChannelAnalysisTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ChannelData | null>(null);
  const [error, setError] = useState("");

  const { paid, showPay, setShowPay } = usePayment("channel-analysis");

  async function analyze() {
    if (!url.trim()) return;
    if (!paid) {
      setShowPay(true);
      return;
    }
    setLoading(true);
    setError("");
    setData(null);
    try {
      const res = await fetch(`/api/channel?url=${encodeURIComponent(url)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Ошибка");
      setData(json);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // Auto-analyze if returned from payment
  useEffect(() => {
    if (paid && url) analyze();
  }, [paid]);

  function scoreEngagement(r: number) {
    if (r >= 5) return { label: "Отличная", color: "text-green-400", pct: 100 };
    if (r >= 2) return { label: "Средняя", color: "text-yellow-400", pct: 60 };
    return { label: "Низкая", color: "text-red-400", pct: 25 };
  }
  function scoreGrowth(r: number) {
    if (r >= 15) return { label: "Высокий охват", color: "text-green-400" };
    if (r >= 5) return { label: "Средний охват", color: "text-yellow-400" };
    return { label: "Низкий охват", color: "text-red-400" };
  }

  function generateAdvice(d: ChannelData) {
    const tips: { icon: string; text: string }[] = [];
    const { stats, videos, topVideo, worstVideo } = d;
    if (stats.engRate < 2)
      tips.push({
        icon: "⚠️",
        text: "Вовлечённость ниже 2% — добавляй призывы к лайку и комментарию в конце каждого видео.",
      });
    if (stats.engRate >= 5)
      tips.push({
        icon: "🔥",
        text: "Отличная вовлечённость! Можно просить за рекламу на 20–30% выше средней цены по нише.",
      });
    if (stats.growthRate < 5)
      tips.push({
        icon: "📉",
        text: "Просмотры сильно ниже числа подписчиков — обнови обложки старых видео и улучши заголовки.",
      });
    if (topVideo)
      tips.push({
        icon: "💡",
        text: `Лучшее видео «${topVideo.title.slice(0, 45)}…» набрало ${fmt(topVideo.views)} просм. Сними продолжение или похожее видео.`,
      });
    if (worstVideo && topVideo && worstVideo.views < topVideo.views * 0.1)
      tips.push({
        icon: "🗑️",
        text: `Видео «${worstVideo.title.slice(0, 40)}…» слабое (${fmt(worstVideo.views)} просм). Обнови обложку или удали.`,
      });
    const avgLen =
      videos.reduce((s, v) => s + (v.title?.length || 0), 0) /
      (videos.length || 1);
    if (avgLen < 40)
      tips.push({
        icon: "📝",
        text: "Заголовки короткие — добавляй больше ключевых слов. Оптимум 55–70 символов.",
      });
    if (avgLen > 75)
      tips.push({
        icon: "✂️",
        text: "Заголовки слишком длинные — YouTube обрезает их. Укладывайся в 60–70 символов.",
      });
    return tips;
  }

  return (
    <div className="min-h-screen bg-bg">
      {showPay && (
        <PaywallModal
          product="channel-analysis"
          features={FEATURES}
          onClose={() => setShowPay(false)}
          onPaid={() => {
            setShowPay(false);
            analyze();
          }}
        />
      )}

      <nav className="sticky top-0 z-40 h-14 flex items-center justify-between px-6 bg-bg/95 backdrop-blur border-b border-border">
        <Link
          href="/"
          className="font-heading text-sm font-black flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse2" />
          БлогерКит
        </Link>
        <div className="text-muted text-lg">📡 Анализ канала</div>
      </nav>

      <div className="relative overflow-hidden pt-10 pb-6 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(255,61,90,0.07)_0%,transparent_70%)]" />
        <div className="relative max-w-xl mx-auto">
          <h1 className="font-heading text-3xl font-black tracking-tight mb-2">
            Анализ{" "}
            <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">
              YouTube канала
            </span>
          </h1>
          <p className="text-muted text-sm">
            Вставь ссылку — полная аналитика и AI-советы ·{" "}
            <span className="text-yellow-400 font-bold">49 ₽</span>
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="flex gap-2 mb-8">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && analyze()}
            placeholder="https://youtube.com/@channel или youtube.com/channel/UC..."
            className="flex-1 px-4 py-3 bg-card border border-border rounded-xl text-sm outline-none focus:border-accent/60 transition-colors placeholder:text-muted"
          />
          <button
            onClick={analyze}
            disabled={loading || !url.trim()}
            className="px-5 py-3 bg-accent text-white font-bold text-sm rounded-xl disabled:opacity-40 hover:opacity-90 transition-all whitespace-nowrap"
          >
            {loading ? "..." : paid ? "Анализировать" : "🔒 49 ₽ →"}
          </button>
        </div>

        {/* NOT PAID — show teaser */}
        {!paid && !data && (
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">📡</div>
            <h2 className="font-heading text-xl font-black mb-3">
              Что ты получишь
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-6 text-left">
              {FEATURES.map((f) => (
                <div key={f} className="flex gap-2 text-sm">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-muted">{f}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowPay(true)}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-sm rounded-xl hover:opacity-90 transition-all"
            >
              💳 Получить анализ · 49 ₽
            </button>
            <p className="text-muted text-lg mt-3">
              Оплата картой или СБП · мгновенный доступ
            </p>
          </div>
        )}

        {loading && (
          <div className="text-center py-12">
            <div className="w-10 h-10 border-[3px] border-border border-t-accent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-muted text-sm">Загружаем данные канала...</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {data && (
          <div className="animate-fadeUp space-y-4">
            {/* CHANNEL HEADER */}
            <div className="bg-card border border-border rounded-2xl p-5 flex gap-4">
              {data.channel.avatar && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-surface">
                  <Image
                    src={data.channel.avatar}
                    alt={data.channel.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                    unoptimized
                  />
                </div>
              )}
              <div>
                <div className="font-heading text-xl font-black mb-1">
                  {data.channel.name}
                </div>
                <div className="flex flex-wrap gap-3 text-lg text-muted">
                  <span>
                    📅 Создан {new Date(data.channel.createdAt).getFullYear()}
                  </span>
                  {data.channel.country && (
                    <span>🌍 {data.channel.country}</span>
                  )}
                </div>
                {data.channel.description && (
                  <div className="text-muted text-lg mt-2 line-clamp-2">
                    {data.channel.description}
                  </div>
                )}
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  label: "Подписчики",
                  val: fmt(data.channel.subs),
                  sub: "всего",
                },
                {
                  label: "Просмотры",
                  val: fmt(data.channel.views),
                  sub: "за всё время",
                },
                {
                  label: "Ср. просмотры",
                  val: fmt(data.stats.avgViews),
                  sub: "за видео",
                },
                {
                  label: "Видео",
                  val: String(data.channel.videoCount),
                  sub: "опубликовано",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-card border border-border rounded-xl p-4 text-center"
                >
                  <div className="font-heading text-xl font-black text-accent mb-0.5">
                    {s.val}
                  </div>
                  <div className="text-lg font-semibold mb-0.5">{s.label}</div>
                  <div className="text-muted text-lg">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* ENGAGEMENT */}
            <div className="grid sm:grid-cols-2 gap-3">
              {(() => {
                const eng = scoreEngagement(data.stats.engRate);
                const gr = scoreGrowth(data.stats.growthRate);
                return (
                  <>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <div className="text-muted text-lg uppercase tracking-widest mb-2">
                        Вовлечённость
                      </div>
                      <div
                        className={`font-heading text-3xl font-black mb-1 ${eng.color}`}
                      >
                        {data.stats.engRate}%
                      </div>
                      <div className={`text-sm font-bold ${eng.color} mb-2`}>
                        {eng.label}
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${eng.pct}%`,
                            background: eng.color.includes("green")
                              ? "#10b981"
                              : eng.color.includes("yellow")
                                ? "#fbbf24"
                                : "#ef4444",
                          }}
                        />
                      </div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5">
                      <div className="text-muted text-lg uppercase tracking-widest mb-2">
                        Охват аудитории
                      </div>
                      <div
                        className={`font-heading text-3xl font-black mb-1 ${gr.color}`}
                      >
                        {data.stats.growthRate}%
                      </div>
                      <div className={`text-sm font-bold ${gr.color}`}>
                        {gr.label}
                      </div>
                      <div className="text-muted text-lg mt-1">
                        просмотры / подписчики
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>

            {/* TOP + WORST */}
            {data.topVideo && (
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    label: "🏆 Лучшее видео",
                    v: data.topVideo,
                    border: "border-green-400/20 bg-green-400/5",
                  },
                  {
                    label: "📉 Слабое видео",
                    v: data.worstVideo,
                    border: "border-red-400/20 bg-red-400/5",
                  },
                ].map(
                  ({ label, v, border }) =>
                    v && (
                      <a
                        key={label}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${border} border rounded-xl p-4 hover:opacity-80 transition-opacity`}
                      >
                        <div className="text-lg text-muted mb-2">{label}</div>
                        <div className="flex gap-3">
                          {v.thumb && (
                            <div className="relative w-20 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                              <Image
                                src={v.thumb}
                                alt={v.title}
                                fill
                                className="object-cover"
                                sizes="80px"
                                unoptimized
                              />
                            </div>
                          )}
                          <div>
                            <div className="font-semibold text-lg line-clamp-2 mb-1">
                              {v.title}
                            </div>
                            <div className="text-muted text-lg">
                              {fmt(v.views)} просм · {daysAgo(v.publishedAt)}
                            </div>
                          </div>
                        </div>
                      </a>
                    ),
                )}
              </div>
            )}

            {/* AI ADVICE */}
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="font-heading text-sm font-bold mb-3">
                🤖 AI-советы
              </div>
              <div className="space-y-2">
                {generateAdvice(data).map((tip, i) => (
                  <div
                    key={i}
                    className="flex gap-2 text-lg p-2.5 bg-white/3 rounded-lg border-l-2 border-accent/40"
                  >
                    <span>{tip.icon}</span>
                    <span className="text-muted">{tip.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* VIDEOS LIST */}
            <div>
              <div className="text-muted text-lg uppercase tracking-widest mb-3">
                Последние {data.videos.length} видео
              </div>
              <div className="flex flex-col gap-2">
                {data.videos.slice(0, 10).map((v, i) => (
                  <a
                    key={v.id}
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-card border border-border rounded-xl p-3 hover:border-white/15 transition-all group"
                  >
                    <div className="text-muted font-mono text-lg w-5 text-center">
                      {i + 1}
                    </div>
                    {v.thumb && (
                      <div className="relative w-20 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                        <Image
                          src={v.thumb}
                          alt={v.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-lg line-clamp-1 group-hover:text-white/80 mb-0.5">
                        {v.title}
                      </div>
                      <div className="text-muted text-lg">
                        {fmt(v.views)} просм · {daysAgo(v.publishedAt)}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
