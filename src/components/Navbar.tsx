"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
          ? "bg-sand-50/80 backdrop-blur-lg shadow-nav"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
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
              className="text-sm text-ink-900/70 hover:text-forest-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="bg-mint-400 text-white px-5 py-2 rounded-btn text-sm font-medium hover:bg-mint-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            הצטרפו לרשימת ההמתנה
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="תפריט"
        >
          <span
            className={`block w-5 h-0.5 bg-ink-900 transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-ink-900 transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-ink-900 transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-sand-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-ink-900/70 hover:text-forest-600 transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="bg-mint-400 text-white px-5 py-3 rounded-btn text-center font-medium"
          >
            הצטרפו לרשימת ההמתנה
          </a>
        </div>
      )}
    </nav>
  );
}
