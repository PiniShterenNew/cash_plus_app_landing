import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div
        className="max-w-[680px] mx-auto rounded-card-lg px-8 py-14 md:px-14 md:py-16 text-center"
        style={{
          background:
            "linear-gradient(145deg, #FAFAF8 0%, rgba(78,205,196,0.06) 60%, rgba(45,106,79,0.04) 100%)",
          border: "1px solid rgba(78,205,196,0.15)",
          boxShadow: "0 4px 32px rgba(78,205,196,0.08)",
        }}
      >
        <div className="reveal">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink-900 mb-4"
            style={{
              fontFamily: "'Varela Round', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            מוכנים להתחיל?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            הצטרפו לרשימת ההמתנה וקבלו גישה מוקדמת — בחינם.
          </p>

          <div className="flex justify-center">
            <WaitlistForm />
          </div>

          <p className="mt-5 text-xs text-slate-400">
            🔒 לא נשלח ספאם, מבטיחים.
          </p>
        </div>
      </div>
    </section>
  );
}
