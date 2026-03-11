"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "יתרונות", href: "#features" },
    { label: "תמחור", href: "#pricing" },
    { label: "שאלות נפוצות", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-glass shadow-nav"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-[10px] flex items-center justify-center text-white font-bold text-sm"
            style={{
              background: "linear-gradient(135deg, #4ECDC4, #2D6A4F)",
            }}
          >
            C+
          </div>
          <span
            className="text-xl font-bold text-forest-600"
            style={{ fontFamily: "'Varela Round', sans-serif" }}
          >
            CashPlus
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-underline text-sm text-ink-900/65 hover:text-forest-600 transition-colors duration-200 pb-0.5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="bg-mint-400 text-white px-5 py-2 rounded-btn text-sm font-medium hover:bg-mint-500 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-mint animate-glow-pulse"
            aria-label="הצטרפו ל-Beta"
          >
            הצטרפו ל-Beta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-[22px] h-[2px] bg-ink-900 rounded-full transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-ink-900 rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-ink-900 rounded-full transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-white/30 px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-ink-900/70 hover:text-forest-600 transition-colors py-3 text-sm border-b border-sand-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="bg-mint-400 text-white px-5 py-3 rounded-btn text-center font-medium text-sm mt-3 hover:bg-mint-500 transition-colors"
            aria-label="הצטרפו ל-Beta"
          >
            הצטרפו ל-Beta
          </a>
        </div>
      </div>
    </nav>
  );
}
