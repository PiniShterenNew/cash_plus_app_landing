import {
  BarChart3,
  MessageCircle,
  Bell,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "דשבורד תזרים חכם",
    desc: "תמונה ברורה של הכנסות, הוצאות ויתרת מזומנים — בזמן אמת, בלי אקסלים",
  },
  {
    icon: MessageCircle,
    title: "גבייה אוטומטית ב-WhatsApp",
    desc: "שליחת תזכורות חשבוניות ישירות ללקוחות דרך וואטסאפ, בלחיצת כפתור",
  },
  {
    icon: Bell,
    title: "התראות חכמות",
    desc: "קבלו התרעה לפני שהתזרים נכנס לאדום — כדי שתמיד תהיו צעד אחד קדימה",
  },
  {
    icon: TrendingUp,
    title: "תחזיות אוטומטיות",
    desc: "חיזוי תזרים ל-30, 60 ו-90 יום קדימה על בסיס ההיסטוריה העסקית שלכם",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink-900 mb-3"
            style={{ fontFamily: "'Varela Round', sans-serif" }}
          >
            הכל במקום אחד. סוף סוף.
          </h2>
          <p className="text-gray-500 text-lg">
            למה עסקים בוחרים ב-CashPlus
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="reveal bg-white rounded-card p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-mint-400/10 flex items-center justify-center mb-4 group-hover:bg-mint-400/20 transition-colors">
                  <Icon className="w-6 h-6 text-mint-400" />
                </div>
                <h3
                  className="text-lg font-bold text-ink-900 mb-2"
                  style={{ fontFamily: "'Varela Round', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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
