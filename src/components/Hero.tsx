import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section
      id="waitlist"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 animate-float"
          style={{
            background:
              "radial-gradient(circle, #4ECDC4 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #2D6A4F 0%, transparent 70%)",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #4ECDC4 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-mint-400/10 text-forest-600 text-xs font-medium px-4 py-1.5 rounded-badge mb-6">
            <span className="w-2 h-2 bg-mint-400 rounded-full animate-pulse" />
            גרסת Beta בקרוב — הירשמו עכשיו
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-ink-900"
            style={{ fontFamily: "'Varela Round', sans-serif" }}
          >
            תזרים המזומנים שלך,
            <br />
            <span className="text-forest-600">סוף סוף ברור</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-xl">
            CashPlus נותן לעסקים קטנים ובינוניים שליטה מלאה על תזרים המזומנים —
            עם גבייה חכמה דרך WhatsApp, תחזיות אוטומטיות, והתראות בזמן אמת.
          </p>

          {/* Waitlist Form */}
          <WaitlistForm />

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-4 mt-5 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-mint-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              ללא כרטיס אשראי
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-mint-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              גישה מוקדמת בחינם
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 text-mint-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              300+ עסקים ברשימה
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
