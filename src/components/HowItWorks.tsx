const steps = [
  {
    number: "1",
    title: "מחברים",
    desc: "סנכרון עם הבנק והנהלת החשבונות",
  },
  {
    number: "2",
    title: "רואים",
    desc: "דשבורד תזרים מזומנים חי עם תחזיות",
  },
  {
    number: "3",
    title: "גובים",
    desc: "תזכורות גבייה אוטומטיות ב-WhatsApp",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white">
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
            שלושה צעדים, תמונה ברורה
          </h2>
          <p className="text-slate-500 text-lg">
            מהתחברות לתמונה פיננסית מלאה — בדקות
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Dashed connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-6 right-[22%] left-[22%] h-px"
            style={{
              borderTop: "2px dashed rgba(78,205,196,0.35)",
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal text-center relative"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Number circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                style={{
                  background: "linear-gradient(135deg, #4ECDC4, #2D6A4F)",
                  boxShadow: "0 8px 24px rgba(78,205,196,0.3)",
                }}
              >
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="text-xl font-bold text-ink-900 mb-2"
                style={{ fontFamily: "'Varela Round', sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
