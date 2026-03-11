// Server Component — no "use client".
// Hover effects are pure CSS via the .feature-card class in globals.css.
import { BarChart3, MessageCircle, Bell, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "דשבורד תזרים חכם",
    desc: "תמונה ברורה של הכנסות, הוצאות ויתרת מזומנים — בזמן אמת",
  },
  {
    icon: MessageCircle,
    title: "גבייה ב-WhatsApp",
    desc: "שליחת תזכורות חשבוניות ישירות ללקוחות, בלחיצת כפתור",
  },
  {
    icon: Bell,
    title: "התראות חכמות",
    desc: "התרעה לפני שהתזרים נכנס לאדום",
  },
  {
    icon: TrendingUp,
    title: "תחזיות אוטומטיות",
    desc: "חיזוי תזרים ל-30, 60 ו-90 יום קדימה",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-36" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 reveal">
          <h2
            className="font-bold text-[#1A1A2E] mb-4"
            style={{
              fontFamily: "var(--font-varela-round), sans-serif",
              fontSize: "clamp(30px, 4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            מה CashPlus יעשה בשבילכם?
          </h2>
          <p className="text-[#94A3B8]" style={{ fontSize: "clamp(15px, 2vw, 17px)" }}>
            כלים פיננסיים חכמים שתוכנתו במיוחד לעסקים קטנים
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 stagger">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="reveal feature-card bg-white rounded-[24px] p-8 md:p-10"
              >
                <div className="feature-card-icon w-14 h-14 rounded-[16px] flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#4ECDC4]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-[18px] font-bold text-[#1A1A2E] mb-2"
                  style={{ fontFamily: "var(--font-varela-round), sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#64748B]" style={{ fontSize: "14px", lineHeight: 1.7 }}>
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
