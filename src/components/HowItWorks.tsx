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
    <section className="py-24 md:py-36" style={{ background: "#FAFAF8" }}>
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
            שלושה צעדים, תמונה ברורה
          </h2>
          <p
            className="text-[#94A3B8]"
            style={{ fontSize: "clamp(15px, 2vw, 17px)" }}
          >
            מהתחברות לתמונה פיננסית מלאה — בדקות
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-12 relative stagger">
          {/* Dashed line (desktop) */}
          <div
            className="hidden md:block absolute top-8 right-[27%] left-[27%]"
            style={{
              borderTop: "2px dashed rgba(232,228,223,0.8)",
              top: "32px",
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal text-center flex flex-col items-center"
            >
              {/* Number circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10"
                style={{
                  background: "linear-gradient(135deg, #4ECDC4 0%, #2D6A4F 100%)",
                  boxShadow: "0 8px 24px rgba(78,205,196,0.3)",
                }}
              >
                <span
                  className="text-white text-[22px] font-bold"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="text-[18px] font-bold text-[#1A1A2E] mb-2"
                style={{ fontFamily: "'Varela Round', sans-serif" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#94A3B8] max-w-[200px]"
                style={{ fontSize: "14px", lineHeight: 1.7 }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
