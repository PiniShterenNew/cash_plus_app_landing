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
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 reveal">
          <h2
            className="font-bold text-[#1A1A2E] mb-4"
            style={{
              fontFamily: "'Varela Round', sans-serif",
              fontSize: "clamp(30px, 4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            מה CashPlus יעשה בשבילכם?
          </h2>
          <p
            className="text-[#94A3B8] max-w-lg mx-auto"
            style={{ fontSize: "clamp(15px, 2vw, 17px)" }}
          >
            כלים פיננסיים חכמים שתוכנתו במיוחד לעסקים קטנים
          </p>
        </div>

        {/* Cards grid with stagger */}
        <div className="grid md:grid-cols-2 gap-6 stagger">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="reveal group bg-white rounded-[24px] p-8 md:p-10 transition-all duration-500"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)",
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.08), 0 20px 60px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(78,205,196,0.15) 0%, rgba(78,205,196,0.05) 100%)",
                  }}
                >
                  <Icon className="w-7 h-7 text-[#4ECDC4]" strokeWidth={1.5} />
                </div>

                <h3
                  className="text-[18px] font-bold text-[#1A1A2E] mb-2"
                  style={{ fontFamily: "'Varela Round', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#64748B]"
                  style={{ fontSize: "14px", lineHeight: 1.7 }}
                >
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
