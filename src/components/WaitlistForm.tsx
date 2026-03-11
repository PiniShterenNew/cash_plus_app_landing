"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call — replace with real endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setEmail("");

    setTimeout(() => setStatus("idle"), 4000);
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-card p-4 text-center animate-fade-in">
        <p className="text-emerald-700 font-medium">
          🎉 נרשמתם בהצלחה! נעדכן אתכם ברגע שהגישה המוקדמת תיפתח.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="הזינו את המייל שלכם"
        required
        dir="rtl"
        className="flex-1 px-4 py-3 rounded-btn border border-sand-200 bg-white text-ink-900 placeholder:text-gray-400 text-sm focus:border-mint-400 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-mint-400 text-white px-6 py-3 rounded-btn font-medium text-sm hover:bg-mint-500 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            שולח...
          </span>
        ) : (
          "אני רוצה גישה מוקדמת"
        )}
      </button>
    </form>
  );
}
