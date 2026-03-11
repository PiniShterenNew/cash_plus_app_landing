import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-36 px-6" style={{ background: "#FFFFFF" }}>
      <div
        className="max-w-[680px] mx-auto rounded-[32px] py-16 md:py-24 px-8 md:px-20 text-center reveal"
        style={{
          background:
            "linear-gradient(145deg, #FFFFFF 0%, #FFFFFF 60%, rgba(78,205,196,0.04) 100%)",
          border: "1px solid rgba(232,228,223,0.5)",
          boxShadow:
            "0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)",
        }}
      >
        <h2
          className="font-bold text-[#1A1A2E] mb-4"
          style={{
            fontFamily: "'Varela Round', sans-serif",
            fontSize: "clamp(30px, 4vw, 40px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          מוכנים להתחיל?
        </h2>
        <p
          className="text-[#64748B] mb-10 max-w-[400px] mx-auto"
          style={{ fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}
        >
          הצטרפו לרשימת ההמתנה וקבלו גישה מוקדמת — בחינם.
        </p>

        <WaitlistForm />

        <p className="mt-6 text-[13px] text-[#94A3B8]">
          🔒 לא נשלח ספאם, מבטיחים.
        </p>
      </div>
    </section>
  );
}
