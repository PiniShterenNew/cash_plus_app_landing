import { Check } from "lucide-react";

const plans = [
  {
    name: "חינמי",
    nameEn: "FREE",
    price: "0",
    period: "לחודש",
    popular: false,
    features: [
      "עד 5 חשבוניות בחודש",
      "דשבורד בסיסי",
      "התראת תזרים אחת",
    ],
    cta: "התחילו בחינם",
    ctaStyle: "outlined" as const,
  },
  {
    name: "סטארטר",
    nameEn: "STARTER",
    price: "79",
    period: "לחודש",
    popular: true,
    features: [
      "חשבוניות ללא הגבלה",
      "גבייה ב-WhatsApp",
      "תחזיות ל-30 יום",
      "3 התראות חכמות",
    ],
    cta: "הצטרפו לרשימת ההמתנה",
    ctaStyle: "solid" as const,
  },
  {
    name: "פרו",
    nameEn: "PRO",
    price: "179",
    period: "לחודש",
    popular: false,
    features: [
      "כל מה שב-Starter",
      "תחזיות ל-90 יום",
      "אינטגרציות מתקדמות",
      "ייצוא דוחות",
      "תמיכה מועדפת",
    ],
    cta: "הצטרפו לרשימת ההמתנה",
    ctaStyle: "solid" as const,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink-900 mb-3"
            style={{ fontFamily: "'Varela Round', sans-serif" }}
          >
            תוכניות ומחירים
          </h2>
          <p className="text-gray-500 text-lg">
            מתחילים בחינם. משדרגים כשגדלים.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal relative bg-white rounded-card p-7 flex flex-col ${
                plan.popular
                  ? "pricing-popular scale-[1.02] md:scale-105"
                  : "shadow-card"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-mint-400 text-white text-xs font-bold px-4 py-1 rounded-badge">
                  הכי פופולרי
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5">
                <span className="text-xs text-gray-400 tracking-wider uppercase">
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
                <span className="text-gray-400 text-sm"> / {plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-mint-400 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                className={`block text-center py-3 rounded-btn font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  plan.ctaStyle === "solid"
                    ? "bg-mint-400 text-white hover:bg-mint-500"
                    : "border-2 border-mint-400 text-mint-400 hover:bg-mint-400/5"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="reveal text-center mt-10 text-gray-500 text-sm">
          צריכים פתרון מותאם?{" "}
          <a
            href="mailto:hello@cashplus.co.il"
            className="text-forest-600 font-medium hover:underline"
          >
            דברו איתנו ←
          </a>
        </div>

        {/* VAT note */}
        <p className="text-center mt-4 text-xs text-gray-400">
          * המחירים אינם כוללים מע&quot;מ (17%)
        </p>
      </div>
    </section>
  );
}
