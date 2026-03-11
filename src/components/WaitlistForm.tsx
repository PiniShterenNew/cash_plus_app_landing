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
        className="rounded-card p-5 text-center animate-fade-in"
        style={{ background: "rgba(78,205,196,0.08)", border: "1px solid rgba(78,205,196,0.3)" }}
      >
        <p className="text-forest-600 font-medium text-sm">
          ✅ {message}
        </p>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div
        className="rounded-card p-5 text-center animate-fade-in"
        style={{ background: "rgba(78,205,196,0.06)", border: "1px solid rgba(78,205,196,0.2)" }}
      >
        <p className="text-forest-600 font-medium text-sm">{message}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto"
        data-event="waitlist_submit"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="כתובת האימייל שלכם"
          required
          dir="rtl"
          aria-label="כתובת אימייל"
          className="flex-1 px-4 py-3.5 rounded-sm border border-sand-200 bg-white text-ink-900 placeholder:text-slate-400 text-sm focus:border-mint-400 transition-colors shadow-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="הצטרפו לרשימת ההמתנה"
          className="bg-mint-400 text-white px-7 py-3.5 rounded-btn font-medium text-sm hover:bg-mint-500 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap shadow-mint animate-glow-pulse"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
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
      {status === "error" && (
        <p className="mt-2 text-center text-xs text-red-500">{message}</p>
      )}
    </div>
  );
}
