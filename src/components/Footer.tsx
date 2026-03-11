export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{ borderTop: "1px solid rgba(232,228,223,0.4)" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-[13px] text-[#94A3B8]">© 2026 CashPlus</span>
          <a
            href="mailto:hello@cashplus.co.il"
            className="text-[13px] text-[#94A3B8] hover:text-[#2D6A4F] transition-colors duration-200"
            aria-label="שלחו לנו אימייל"
          >
            hello@cashplus.co.il
          </a>
        </div>
      </div>
    </footer>
  );
}
