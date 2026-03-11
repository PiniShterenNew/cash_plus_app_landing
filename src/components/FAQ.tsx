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
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-[680px] mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink-900"
            style={{
              fontFamily: "'Varela Round', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            שאלות ותשובות
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="reveal rounded-card overflow-hidden transition-all duration-300"
                style={{
                  transitionDelay: `${i * 50}ms`,
                  background: isOpen ? "rgba(78,205,196,0.04)" : "#FFFFFF",
                  border: "1px solid",
                  borderColor: isOpen ? "rgba(78,205,196,0.2)" : "rgba(0,0,0,0.06)",
                  boxShadow: isOpen ? "none" : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-right"
                  aria-expanded={isOpen}
                  role="button"
                  aria-label={faq.q}
                >
                  <span
                    className="font-medium text-ink-900 text-sm"
                    style={{ fontFamily: "'Varela Round', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 mr-3 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
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
