import { Check } from "lucide-react";

const plans = [
  {
    name: "חינמי",
    nameEn: "FREE",
    price: "0",
    popular: false,
    features: [
      "עד 5 חשבוניות בחודש",
      "דשבורד בסיסי",
      "התראת תזרים אחת",
    ],
  },
  {
    name: "סטארטר",
    nameEn: "STARTER",
    price: "79",
    popular: true,
    features: [
      "חשבוניות ללא הגבלה",
      "גבייה ב-WhatsApp",
      "תחזיות ל-30 יום",
      "3 התראות חכמות",
    ],
  },
  {
    name: "פרו",
    nameEn: "PRO",
    price: "179",
    popular: false,
    features: [
      "כל מה שב-Starter",
      "תחזיות ל-90 יום",
      "אינטגרציות מתקדמות",
      "ייצוא דוחות",
      "תמיכה מועדפת",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-4 reveal">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink-900 mb-3"
            style={{
              fontFamily: "'Varela Round', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            התוכניות שלנו
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto">
            תוכלו לבחור תוכנית אחרי שנשיק. בינתיים — הירשמו בחינם.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mt-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal relative bg-white rounded-card p-7 flex flex-col transition-all ${
                plan.popular
                  ? "pricing-popular md:scale-[1.04]"
                  : "shadow-card opacity-[0.88]"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-mint-400 text-white text-xs font-bold px-4 py-1.5 rounded-badge whitespace-nowrap">
                  מומלץ
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5">
                <span className="text-xs text-slate-400 tracking-wider uppercase">
                  {plan.nameEn}
                </span>
                <h3
                  className="text-xl font-bold text-ink-900"
                  style={{ fontFamily: "'Varela Round', sans-serif" }}
                >
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className="text-4xl font-bold text-ink-900"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  ₪{plan.price}
                </span>
                <span className="text-slate-400 text-sm"> / לחודש</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                    <Check className="w-4 h-4 text-mint-400 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA — always points to waitlist */}
              <a
                href="#waitlist"
                aria-label="הירשמו לרשימת ההמתנה"
                className={`block text-center py-3 rounded-btn font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.popular
                    ? "bg-mint-400 text-white hover:bg-mint-500 shadow-mint"
                    : "border-2 border-mint-400 text-mint-400 hover:bg-mint-400/5"
                }`}
              >
                הירשמו לרשימת ההמתנה
              </a>
            </div>
          ))}
        </div>

        <p className="reveal text-center mt-8 text-xs text-slate-400">
          * המחירים עשויים להשתנות עד להשקה
        </p>
      </div>
    </section>
  );
}
