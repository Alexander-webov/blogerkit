"use client";

import { useState } from "react";
import Link from "next/link";
import PaywallModal from "@/components/PaywallModal";
import { usePayment } from "@/lib/usePayment";

interface MediaKitData {
  channelName: string;
  niche: string;
  subs: string;
  avgViews: string;
  engagement: string;
  ageRange: string;
  genderMale: string;
  geo: string;
  price_mention: string;
  price_native: string;
  price_dedicated: string;
  email: string;
  telegram: string;
  about: string;
}

const EMPTY: MediaKitData = {
  channelName: "",
  niche: "Авто",
  subs: "",
  avgViews: "",
  engagement: "",
  ageRange: "18–34",
  genderMale: "60",
  geo: "Россия — 70%, СНГ — 20%",
  price_mention: "",
  price_native: "",
  price_dedicated: "",
  email: "",
  telegram: "",
  about: "",
};

const NICHES = [
  "Авто",
  "Финансы",
  "Игры",
  "Фитнес",
  "Кулинария",
  "Путешествия",
  "Технологии",
  "Образование",
  "Красота",
  "Мотивация",
];

function fmtK(n: string) {
  const v = parseInt(n);
  if (!v) return "—";
  if (v >= 1000000) return (v / 1000000).toFixed(1) + "M";
  if (v >= 1000) return (v / 1000).toFixed(0) + "K";
  return String(v);
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();
}

function sectionLabel(ctx: CanvasRenderingContext2D, text: string, y: number) {
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 18px Arial";
  ctx.fillText(text, 50, y - 8);
  ctx.fillStyle = "#ff3d5a";
  ctx.fillRect(50, y - 4, 36, 2);
}

async function buildPDF(data: MediaKitData) {
  const W = 794,
    H = 1123;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // BG
  ctx.fillStyle = "#0a0a0f";
  ctx.fillRect(0, 0, W, H);

  // Top bar
  const gr = ctx.createLinearGradient(0, 0, W, 0);
  gr.addColorStop(0, "#ff3d5a");
  gr.addColorStop(1, "#ff8c42");
  ctx.fillStyle = gr;
  ctx.fillRect(0, 0, W, 6);

  // Channel name
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 40px Arial";
  ctx.fillText(data.channelName || "Мой канал", 50, 78);

  // Niche pill
  ctx.fillStyle = "#ff3d5a";
  roundRect(ctx, 50, 90, 110, 28, 8);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 13px Arial";
  ctx.fillText(data.niche, 62, 110);

  // About
  if (data.about) {
    ctx.fillStyle = "#8888aa";
    ctx.font = "14px Arial";
    const words = data.about.split(" ");
    let line = "",
      y = 155;
    for (const w of words) {
      const t = line + w + " ";
      if (ctx.measureText(t).width > W - 100 && line) {
        ctx.fillText(line.trim(), 50, y);
        line = w + " ";
        y += 22;
        if (y > 210) break;
      } else line = t;
    }
    if (line) ctx.fillText(line.trim(), 50, y);
  }

  // STATS
  const sY = 240;
  ctx.fillStyle = "#14141e";
  roundRect(ctx, 30, sY, W - 60, 110, 12);
  [
    { label: "Подписчики", val: fmtK(data.subs) },
    { label: "Ср. просмотры", val: fmtK(data.avgViews) },
    {
      label: "Вовлечённость",
      val: data.engagement ? data.engagement + "%" : "—",
    },
  ].forEach((s, i) => {
    const x = 80 + i * 220;
    ctx.fillStyle = "#ff3d5a";
    ctx.font = "bold 34px Arial";
    ctx.fillText(s.val, x, sY + 58);
    ctx.fillStyle = "#8888aa";
    ctx.font = "13px Arial";
    ctx.fillText(s.label, x, sY + 84);
  });

  // AUDIENCE
  sectionLabel(ctx, "Аудитория", 380);
  ctx.fillStyle = "#14141e";
  roundRect(ctx, 30, 386, W - 60, 86, 10);
  [
    { label: "Возраст", val: data.ageRange },
    {
      label: "Муж / Жен",
      val: `${data.genderMale}% / ${100 - parseInt(data.genderMale || "50")}%`,
    },
    { label: "География", val: data.geo },
  ].forEach((a, i) => {
    const x = 70 + i * 232;
    ctx.fillStyle = "#fff";
    ctx.font = "bold 17px Arial";
    ctx.fillText(a.val, x, 386 + 44);
    ctx.fillStyle = "#8888aa";
    ctx.font = "12px Arial";
    ctx.fillText(a.label, x, 386 + 68);
  });

  // PRICES
  sectionLabel(ctx, "Форматы и цены", 495);
  [
    {
      type: "Упоминание",
      price: data.price_mention,
      desc: "15–30 сек в начале или конце видео",
    },
    {
      type: "Нативная реклама",
      price: data.price_native,
      desc: "Органичная интеграция 1–3 минуты",
    },
    {
      type: "Посвящённый выпуск",
      price: data.price_dedicated,
      desc: "Полное видео о продукте",
    },
  ].forEach((f, i) => {
    const y = 508 + i * 70;
    ctx.fillStyle = "#14141e";
    roundRect(ctx, 30, y, W - 60, 60, 10);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 16px Arial";
    ctx.fillText(f.type, 52, y + 26);
    ctx.fillStyle = "#8888aa";
    ctx.font = "13px Arial";
    ctx.fillText(f.desc, 52, y + 46);
    if (f.price) {
      ctx.fillStyle = "#ff8c42";
      ctx.font = "bold 20px Arial";
      const pw = ctx.measureText(f.price + " ₽").width;
      ctx.fillText(f.price + " ₽", W - 50 - pw, y + 35);
    }
  });

  // CONTACTS
  sectionLabel(ctx, "Контакты", 730);
  ctx.fillStyle = "#14141e";
  roundRect(ctx, 30, 736, W - 60, 68, 10);
  ctx.fillStyle = "#8888aa";
  ctx.font = "15px Arial";
  if (data.email) ctx.fillText("Email: " + data.email, 52, 775);
  if (data.telegram) ctx.fillText("Telegram: " + data.telegram, 52, 797);

  // FOOTER
  ctx.fillStyle = gr;
  ctx.fillRect(0, H - 36, W, 36);
  ctx.fillStyle = "#fff";
  ctx.font = "13px Arial";
  const ft = "Создан на БлогерКит · blogerkit.ru";
  ctx.fillText(ft, (W - ctx.measureText(ft).width) / 2, H - 12);

  // Convert to PDF
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
  document.head.appendChild(script);
  await new Promise((r) => {
    script.onload = r;
  });
  const { jsPDF } = (window as any).jspdf;
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [W, H],
  });
  doc.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, W, H);
  doc.save(`mediakit-${data.channelName || "channel"}.pdf`);
}

const FEATURES = [
  "Красивый PDF с твоим брендингом",
  "Данные канала: подписчики, охват, ER",
  "Таблица форматов с ценами",
  "Контакты для рекламодателей",
  "Тёмный дизайн — выглядит дорого",
];

export default function MediaKitTool() {
  const [data, setData] = useState<MediaKitData>(EMPTY);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const { paid, showPay, setShowPay } = usePayment("mediakit");

  const set =
    (k: keyof MediaKitData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setData((prev) => ({ ...prev, [k]: e.target.value }));

  function canProceed() {
    if (step === 1) return !!(data.channelName && data.subs && data.avgViews);
    if (step === 2) return !!data.price_native;
    return true;
  }

  async function download() {
    if (!paid) {
      setShowPay(true);
      return;
    }
    setLoading(true);
    try {
      await buildPDF(data);
    } finally {
      setLoading(false);
    }
  }

  const inp =
    "w-full px-3 py-2.5 bg-surface border border-border rounded-xl text-sm outline-none focus:border-accent/60 transition-colors placeholder:text-muted";

  return (
    <div className="min-h-screen bg-bg">
      {showPay && (
        <PaywallModal
          product="mediakit"
          features={FEATURES}
          onClose={() => setShowPay(false)}
          onPaid={() => setShowPay(false)}
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
        <div className="text-muted text-lg">📄 Медиакит PDF</div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-10 pb-16">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-black mb-2">
            Медиакит для{" "}
            <span className="bg-gradient-to-r from-accent2 to-yellow-400 bg-clip-text text-transparent">
              рекламодателей
            </span>
          </h1>
          <p className="text-muted text-sm">
            Заполни данные · Скачай PDF ·{" "}
            <span className="text-yellow-400 font-bold">149 ₽</span>
          </p>
        </div>

        {/* STEPS */}
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-1 rounded-full transition-all ${step >= s ? "bg-accent" : "bg-border"}`}
            />
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mb-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="font-heading text-sm font-bold mb-4">
                📊 Данные канала
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-muted text-lg block mb-1.5">
                    Название канала *
                  </label>
                  <input
                    value={data.channelName}
                    onChange={set("channelName")}
                    placeholder="MyCoolChannel"
                    className={inp}
                  />
                </div>
                <div>
                  <label className="text-muted text-lg block mb-1.5">
                    Ниша
                  </label>
                  <select
                    value={data.niche}
                    onChange={set("niche")}
                    className={inp + " text-white"}
                  >
                    {NICHES.map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-muted text-lg block mb-1.5">
                    Подписчики *
                  </label>
                  <input
                    value={data.subs}
                    onChange={set("subs")}
                    placeholder="50000"
                    type="number"
                    className={inp}
                  />
                </div>
                <div>
                  <label className="text-muted text-lg block mb-1.5">
                    Ср. просмотры *
                  </label>
                  <input
                    value={data.avgViews}
                    onChange={set("avgViews")}
                    placeholder="25000"
                    type="number"
                    className={inp}
                  />
                </div>
                <div>
                  <label className="text-muted text-lg block mb-1.5">
                    Вовлечённость %
                  </label>
                  <input
                    value={data.engagement}
                    onChange={set("engagement")}
                    placeholder="4.5"
                    className={inp}
                  />
                </div>
                <div>
                  <label className="text-muted text-lg block mb-1.5">
                    Возраст аудитории
                  </label>
                  <input
                    value={data.ageRange}
                    onChange={set("ageRange")}
                    placeholder="18–34"
                    className={inp}
                  />
                </div>
                <div>
                  <label className="text-muted text-lg block mb-1.5">
                    % мужской аудитории
                  </label>
                  <input
                    value={data.genderMale}
                    onChange={set("genderMale")}
                    placeholder="60"
                    type="number"
                    className={inp}
                  />
                </div>
                <div>
                  <label className="text-muted text-lg block mb-1.5">
                    География
                  </label>
                  <input
                    value={data.geo}
                    onChange={set("geo")}
                    placeholder="Россия 70%"
                    className={inp}
                  />
                </div>
              </div>
              <div>
                <label className="text-muted text-lg block mb-1.5">
                  О канале
                </label>
                <textarea
                  value={data.about}
                  onChange={set("about") as any}
                  rows={3}
                  placeholder="Канал о личных финансах для тех кто хочет выйти на пассивный доход..."
                  className={inp + " resize-none"}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="font-heading text-sm font-bold mb-4">
                💰 Форматы и цены
              </div>
              {[
                {
                  key: "price_mention" as const,
                  label: "Упоминание (15–30 сек)",
                  hint: "~30–50% от нативки",
                },
                {
                  key: "price_native" as const,
                  label: "Нативная реклама (1–3 мин) *",
                  hint: "Основной формат",
                },
                {
                  key: "price_dedicated" as const,
                  label: "Посвящённый выпуск",
                  hint: "В 2–3 раза дороже нативки",
                },
              ].map((f) => (
                <div key={f.key}>
                  <label className="text-muted text-lg block mb-1">
                    {f.label}
                  </label>
                  <div className="relative">
                    <input
                      value={data[f.key]}
                      onChange={set(f.key)}
                      placeholder="10000"
                      type="number"
                      className={inp + " pr-8"}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted text-sm">
                      ₽
                    </span>
                  </div>
                  <div className="text-muted text-lg mt-0.5">{f.hint}</div>
                </div>
              ))}
              <div className="p-3 bg-accent2/8 border border-accent2/20 rounded-xl text-lg text-muted">
                💡 Не знаешь цену?{" "}
                <Link
                  href="/calculator"
                  className="text-accent2 hover:underline"
                >
                  Рассчитай в калькуляторе →
                </Link>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="font-heading text-sm font-bold mb-4">
                📬 Контакты и предпросмотр
              </div>
              <div>
                <label className="text-muted text-lg block mb-1.5">Email</label>
                <input
                  value={data.email}
                  onChange={set("email")}
                  placeholder="ads@mychannel.ru"
                  type="email"
                  className={inp}
                />
              </div>
              <div>
                <label className="text-muted text-lg block mb-1.5">
                  Telegram
                </label>
                <input
                  value={data.telegram}
                  onChange={set("telegram")}
                  placeholder="@username"
                  className={inp}
                />
              </div>

              {/* PREVIEW */}
              <div className="bg-[#0a0a0f] rounded-xl p-4 border border-white/8">
                <div className="h-1 bg-gradient-to-r from-accent to-accent2 rounded mb-3" />
                <div className="font-bold text-base mb-1">
                  {data.channelName || "Название канала"}
                </div>
                <div className="inline-block px-2 py-0.5 bg-accent text-white rounded text-lg mb-3">
                  {data.niche}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    ["Подписчики", fmtK(data.subs)],
                    ["Просмотры", fmtK(data.avgViews)],
                    ["ER", data.engagement ? data.engagement + "%" : "—"],
                  ].map(([l, v]) => (
                    <div key={l} className="bg-white/5 rounded p-2">
                      <div className="text-accent font-bold text-sm">{v}</div>
                      <div className="text-muted text-lg">{l}</div>
                    </div>
                  ))}
                </div>
                {data.price_native && (
                  <div className="text-lg text-muted">
                    Нативка:{" "}
                    <span className="text-accent2 font-bold">
                      {data.price_native} ₽
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          {step > 1 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="flex-1 py-3 border border-border rounded-xl text-sm hover:border-white/20 transition-colors"
            >
              ← Назад
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canProceed()}
              className="flex-1 py-3 bg-accent text-white font-bold text-sm rounded-xl disabled:opacity-40 hover:opacity-90 transition-all"
            >
              Далее →
            </button>
          ) : (
            <button
              onClick={download}
              disabled={loading}
              className="flex-1 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-sm rounded-xl disabled:opacity-40 hover:opacity-90 transition-all"
            >
              {loading
                ? "⏳ Генерирую PDF..."
                : paid
                  ? "⬇ Скачать PDF медиакит"
                  : "💳 Оплатить 149 ₽ и скачать"}
            </button>
          )}
        </div>
        <p className="text-center text-muted text-lg mt-3">
          PDF генерируется в браузере · данные не сохраняются
        </p>
      </div>
    </div>
  );
}
