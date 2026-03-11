"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "מה זה CashPlus?",
    a: "פלטפורמה שעוזרת לעסקים קטנים בישראל לנהל תזרים מזומנים, לשלוח תזכורות גבייה ב-WhatsApp, ולקבל תחזיות פיננסיות — הכל ממקום אחד.",
  },
  {
    q: "מתי זה יושק?",
    a: "אנחנו בשלבי פיתוח ומתכננים להשיק גרסת Beta בקרוב. הירשמו לרשימת ההמתנה וקבלו גישה ראשונים.",
  },
  {
    q: "כמה זה עולה?",
    a: "נציע תוכנית חינמית לתמיד ותוכניות בתשלום מ-₪79/חודש. הנרשמים הראשונים יקבלו הטבה מיוחדת.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-36" style={{ background: "#FAFAF8" }}>
      <div className="max-w-[640px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <h2
            className="font-bold text-[#1A1A2E]"
            style={{
              fontFamily: "'Varela Round', sans-serif",
              fontSize: "clamp(30px, 4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            שאלות ותשובות
          </h2>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="reveal rounded-[20px] bg-white overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: isOpen
                    ? "0 4px 16px rgba(0,0,0,0.06)"
                    : "0 2px 8px rgba(0,0,0,0.03)",
                  border: "1px solid",
                  borderColor: isOpen
                    ? "rgba(78,205,196,0.18)"
                    : "rgba(232,228,223,0.6)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-right"
                  aria-expanded={isOpen}
                  role="button"
                  aria-label={faq.q}
                >
                  <span
                    className="text-[16px] font-semibold text-[#1A1A2E]"
                    style={{ fontFamily: "'Varela Round', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 text-[#94A3B8] shrink-0 mr-4 transition-transform duration-500"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    strokeWidth={2}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease",
                  }}
                >
                  <p
                    className="px-6 pb-6 text-[#64748B]"
                    style={{ fontSize: "14px", lineHeight: 1.8 }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
