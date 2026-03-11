"use client";

import { useEffect, useState } from "react";
import WaitlistForm from "./WaitlistForm";

function WaitlistCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist-count")
      .then((r) => r.json())
      .then((d) => setCount(d.count ?? 0))
      .catch(() => {});
  }, []);

  if (count === null || count < 10) return null;

  return (
    <p className="mt-3 text-xs text-slate-400 text-center">
      הצטרפו ל-{count.toLocaleString("he-IL")} בעלי עסקים שכבר נרשמו
    </p>
  );
}

export default function Hero() {
  return (
    <section
      id="waitlist"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(78,205,196,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 20%, rgba(45,106,79,0.05) 0%, transparent 50%), radial-gradient(ellipse 50% 80% at 50% 80%, rgba(78,205,196,0.04) 0%, transparent 60%), #FAFAF8",
      }}
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[15%] left-[10%] w-[340px] h-[340px] rounded-full opacity-[0.12] animate-float"
          style={{
            background: "radial-gradient(circle, #4ECDC4 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[20%] right-[8%] w-[420px] h-[420px] rounded-full opacity-[0.07] animate-float2"
          style={{
            background: "radial-gradient(circle, #2D6A4F 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[50%] left-[55%] w-[260px] h-[260px] rounded-full opacity-[0.09] animate-float3"
          style={{
            background: "radial-gradient(circle, #4ECDC4 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-forest-600 text-xs font-medium px-4 py-2 rounded-badge mb-8"
          style={{
            background: "rgba(78,205,196,0.1)",
            border: "1px solid rgba(78,205,196,0.2)",
          }}
        >
          <span className="w-2 h-2 bg-mint-400 rounded-full animate-pulse" />
          🚀 גרסת Beta בקרוב
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-[56px] font-bold mb-5 text-ink-900 max-w-2xl"
          style={{
            fontFamily: "'Varela Round', sans-serif",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          }}
        >
          ניהול תזרים מזומנים
          <br />
          <span className="text-forest-600">פשוט כמו שצריך</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg text-slate-500 leading-relaxed mb-10 max-w-[520px]"
        >
          CashPlus עוזר לעסקים קטנים בישראל לעקוב אחרי הכסף,
          לגבות חובות בקלות דרך WhatsApp, ולדעת מה הולך לקרות — לפני שזה קורה.
        </p>

        {/* Waitlist Form */}
        <div className="w-full max-w-lg">
          <WaitlistForm />
        </div>

        {/* Dynamic count */}
        <WaitlistCount />

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-5 mt-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-mint-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            ללא כרטיס אשראי
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-mint-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            בחינם לנרשמים הראשונים
          </span>
        </div>
      </div>
    </section>
  );
}
