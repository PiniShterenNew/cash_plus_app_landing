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
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink-900 mb-3"
            style={{
              fontFamily: "'Varela Round', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            מה CashPlus יעשה בשבילכם?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            כלים פיננסיים חכמים שתוכנתו במיוחד לעסקים קטנים
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="reveal bg-white rounded-card p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                  style={{
                    background: "rgba(78,205,196,0.1)",
                    transition: "background 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(78,205,196,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(78,205,196,0.1)";
                  }}
                >
                  <Icon className="w-5 h-5 text-mint-400" />
                </div>
                <h3
                  className="text-lg font-bold text-ink-900 mb-2"
                  style={{ fontFamily: "'Varela Round', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
