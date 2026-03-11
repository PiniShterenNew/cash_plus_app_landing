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
    <section id="pricing" className="py-24 md:py-36" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
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
            התוכניות שלנו
          </h2>
          <p
            className="text-[#94A3B8] max-w-md mx-auto"
            style={{ fontSize: "clamp(15px, 2vw, 17px)" }}
          >
            תוכלו לבחור תוכנית אחרי שנשיק. בינתיים — הירשמו בחינם.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto stagger">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal relative bg-white rounded-[24px] p-8 md:p-10 flex flex-col transition-all duration-500 ${
                plan.popular
                  ? "pricing-popular md:scale-[1.05]"
                  : "opacity-80 hover:opacity-100"
              }`}
              style={{
                boxShadow: plan.popular
                  ? undefined
                  : "0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.04)",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-4 right-1/2 translate-x-1/2 rounded-full px-5 py-1.5 text-white font-bold whitespace-nowrap"
                  style={{
                    fontSize: "12px",
                    background: "linear-gradient(to left, #4ECDC4, #38B2AC)",
                  }}
                >
                  מומלץ
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5">
                <span className="text-[11px] font-semibold text-[#94A3B8] tracking-wider uppercase">
                  {plan.nameEn}
                </span>
                <h3
                  className="text-[20px] font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "'Varela Round', sans-serif" }}
                >
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-7">
                <span
                  className="text-[40px] font-bold text-[#1A1A2E]"
                  style={{ fontFamily: "'DM Mono', monospace", lineHeight: 1 }}
                >
                  ₪{plan.price}
                </span>
                <span className="text-[#94A3B8] text-[13px]"> / לחודש</span>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#4ECDC4] mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span className="text-[14px] text-[#64748B]">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                aria-label="הירשמו לרשימת ההמתנה"
                className={`block text-center py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.popular
                    ? "cta-glow text-white"
                    : "border-2 border-[#E8E4DF] text-[#64748B] hover:border-[#4ECDC4] hover:text-[#4ECDC4]"
                }`}
                style={
                  plan.popular
                    ? { background: "linear-gradient(to left, #4ECDC4, #38B2AC)" }
                    : undefined
                }
              >
                הירשמו לרשימת ההמתנה
              </a>
            </div>
          ))}
        </div>

        <p className="reveal text-center mt-10 text-[13px] text-[#94A3B8]">
          * המחירים עשויים להשתנות עד להשקה
        </p>
      </div>
    </section>
  );
}
