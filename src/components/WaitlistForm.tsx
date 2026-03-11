"use client";

import { useState } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    const referrer = typeof window !== "undefined" ? window.location.href : undefined;
    const result = await joinWaitlist(email, referrer);
    if (result.success) {
      setStatus("success");
      setMessage(result.message);
      setEmail("");
    } else if (!result.success && result.duplicate) {
      setStatus("duplicate");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-[20px] px-6 py-4 text-center w-full max-w-[480px] mx-auto"
        style={{
          background: "rgba(78,205,196,0.08)",
          border: "1px solid rgba(78,205,196,0.25)",
        }}
      >
        <p className="text-[#2D6A4F] font-semibold text-[14px]">✅ {message}</p>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div
        className="rounded-[20px] px-6 py-4 text-center w-full max-w-[480px] mx-auto"
        style={{
          background: "rgba(78,205,196,0.06)",
          border: "1px solid rgba(78,205,196,0.18)",
        }}
      >
        <p className="text-[#2D6A4F] font-medium text-[14px]">{message}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[480px] mx-auto" data-event="waitlist_submit">
      {/* Pill-inside-pill — desktop */}
      <form
        onSubmit={handleSubmit}
        className="hidden sm:flex items-center rounded-full p-2"
        style={{
          background: "#FFFFFF",
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="כתובת האימייל שלכם"
          required
          dir="rtl"
          aria-label="כתובת אימייל"
          className="flex-1 bg-transparent border-0 px-5 py-2.5 text-[15px] text-[#1A1A2E] placeholder:text-[#94A3B8] focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="אני רוצה גישה מוקדמת"
          className="cta-glow rounded-full px-7 py-3 text-[14px] font-semibold text-white shrink-0 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-60"
          style={{
            background: "linear-gradient(to left, #4ECDC4, #38B2AC)",
          }}
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              שולח...
            </span>
          ) : (
            "אני רוצה גישה מוקדמת"
          )}
        </button>
      </form>

      {/* Stacked — mobile */}
      <form
        onSubmit={handleSubmit}
        className="flex sm:hidden flex-col gap-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="כתובת האימייל שלכם"
          required
          dir="rtl"
          aria-label="כתובת אימייל"
          className="w-full rounded-[20px] px-6 py-3.5 text-[15px] text-[#1A1A2E] placeholder:text-[#94A3B8] border border-[#E8E4DF] bg-white focus:outline-none focus:border-[#4ECDC4] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="אני רוצה גישה מוקדמת"
          className="w-full cta-glow rounded-full py-3.5 text-[14px] font-semibold text-white transition-all duration-200 active:scale-[0.97] disabled:opacity-60"
          style={{
            background: "linear-gradient(to left, #4ECDC4, #38B2AC)",
          }}
        >
          {status === "loading" ? "שולח..." : "אני רוצה גישה מוקדמת"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-2 text-center text-xs text-red-500">{message}</p>
      )}
    </div>
  );
}
