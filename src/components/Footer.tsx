export default function Footer() {
  return (
    <footer className="border-t border-sand-200 py-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>© 2026 CashPlus</span>
          <a
            href="mailto:hello@cashplus.co.il"
            className="hover:text-forest-600 transition-colors"
            aria-label="שלחו לנו אימייל"
          >
            hello@cashplus.co.il
          </a>
        </div>
      </div>
    </footer>
  );
}
