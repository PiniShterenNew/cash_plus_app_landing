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
    <p className="text-[13px] text-[#94A3B8] text-center mt-4">
      הצטרפו ל-{count.toLocaleString("he-IL")} בעלי עסקים שכבר נרשמו
    </p>
  );
}

export default function Hero() {
  return (
    <section
      id="waitlist"
      className="relative min-h-[100dvh] flex items-center pt-[76px] overflow-hidden"
      style={{ background: "#FAFAF8" }}
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-1" style={{ top: "10%", left: "5%" }} />
        <div className="orb orb-2" style={{ bottom: "15%", right: "0%" }} />
        <div className="orb orb-3" style={{ top: "45%", left: "50%" }} />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center">
        {/* hero-stagger wraps all children for staggered entrance */}
        <div className="hero-stagger flex flex-col items-center w-full gap-0">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 text-[#2D6A4F] text-[12px] font-semibold px-5 py-2 rounded-full mb-8"
            style={{
              background: "rgba(78,205,196,0.1)",
              border: "1px solid rgba(78,205,196,0.22)",
            }}
          >
            <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
            🚀 גרסת Beta בקרוב
          </div>

          {/* H1 */}
          <h1
            className="font-bold text-[#1A1A2E] max-w-2xl mb-6"
            style={{
              fontFamily: "'Varela Round', sans-serif",
              fontSize: "clamp(40px, 7vw, 64px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            ניהול תזרים מזומנים
            <br />
            <span
              style={{
                background: "linear-gradient(to left, #4ECDC4, #2D6A4F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              פשוט כמו שצריך
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-[#64748B] max-w-[540px] mx-auto mb-10"
            style={{
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.7,
            }}
          >
            CashPlus עוזר לעסקים קטנים בישראל לעקוב אחרי הכסף,
            לגבות חובות בקלות דרך WhatsApp, ולדעת מה הולך לקרות — לפני שזה קורה.
          </p>

          {/* Form */}
          <div className="w-full">
            <WaitlistForm />
            <WaitlistCount />
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-[13px] text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#4ECDC4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              ללא כרטיס אשראי
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#4ECDC4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              בחינם לנרשמים הראשונים
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
