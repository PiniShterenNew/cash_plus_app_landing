import WaitlistForm from "./WaitlistForm";
import { Shield } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #FAF8F5 0%, rgba(78, 205, 196, 0.08) 50%, rgba(45, 106, 79, 0.05) 100%)",
        }}
      />

      <div className="relative max-w-[600px] mx-auto px-6 text-center">
        <div className="reveal">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink-900 mb-4"
            style={{ fontFamily: "'Varela Round', sans-serif" }}
          >
            מוכנים לשלוט בתזרים?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            הצטרפו לרשימת ההמתנה וקבלו גישה מוקדמת — בחינם.
          </p>

          <div className="flex justify-center">
            <WaitlistForm />
          </div>

          <p className="flex items-center justify-center gap-1.5 mt-5 text-xs text-gray-400">
            <Shield className="w-3.5 h-3.5" />
            פרטיותכם חשובה לנו. לא נשלח ספאם, מבטיחים.
          </p>
        </div>
      </div>
    </section>
  );
}
