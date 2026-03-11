"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "יתרונות", href: "#features" },
    { label: "תמחור", href: "#pricing" },
    { label: "שאלות נפוצות", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-[14px] flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ background: "linear-gradient(135deg, #4ECDC4, #2D6A4F)" }}
          >
            C+
          </div>
          <span
            className="text-xl font-bold text-[#1A1A2E]"
            style={{ fontFamily: "'Varela Round', sans-serif" }}
          >
            CashPlus
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[14px] text-[#64748B] hover:text-[#1A1A2E] transition-colors duration-200 pb-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            aria-label="הצטרפו ל-Beta"
            className="cta-glow rounded-full px-7 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
            style={{
              background: "linear-gradient(to left, #4ECDC4, #38B2AC)",
            }}
          >
            הצטרפו ל-Beta
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 flex flex-col gap-[5px]"
          aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-[22px] h-[2px] bg-[#1A1A2E] rounded-full transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#1A1A2E] rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#1A1A2E] rounded-full transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden px-4 transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100 pb-3" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="rounded-[20px] px-5 py-4 flex flex-col gap-1"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-[14px] text-[#64748B] hover:text-[#1A1A2E] transition-colors py-3 border-b border-[#F5F0EA] last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            aria-label="הצטרפו ל-Beta"
            className="mt-3 text-center rounded-full px-7 py-3 text-[14px] font-semibold text-white"
            style={{ background: "linear-gradient(to left, #4ECDC4, #38B2AC)" }}
          >
            הצטרפו ל-Beta
          </a>
        </div>
      </div>
    </nav>
  );
}
