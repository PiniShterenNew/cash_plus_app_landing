import { Link2, LayoutDashboard, Send } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "מחברים את החשבון",
    desc: "סנכרון אוטומטי עם הבנק והנהלת החשבונות",
  },
  {
    icon: LayoutDashboard,
    number: "02",
    title: "מקבלים תמונת מצב",
    desc: "דשבורד תזרים מזומנים חי עם תחזיות",
  },
  {
    icon: Send,
    number: "03",
    title: "גובים בקליק",
    desc: "שולחים תזכורות ב-WhatsApp ומקבלים תשלומים מהר יותר",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink-900 mb-3"
            style={{ fontFamily: "'Varela Round', sans-serif" }}
          >
            איך זה עובד?
          </h2>
          <p className="text-gray-500 text-lg">שלושה צעדים פשוטים לשליטה מלאה</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 right-[20%] left-[20%] h-px bg-sand-200" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="reveal text-center relative"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step number circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 rounded-full bg-mint-400/10 flex items-center justify-center mx-auto relative z-10 border-4 border-sand-50 md:border-white">
                    <Icon className="w-7 h-7 text-mint-400" />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-forest-600 text-white text-xs font-bold flex items-center justify-center z-20"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-ink-900 mb-2"
                  style={{ fontFamily: "'Varela Round', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
