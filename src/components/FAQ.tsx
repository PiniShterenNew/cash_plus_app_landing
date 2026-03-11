"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "מה זה CashPlus?",
    a: "CashPlus היא פלטפורמה לניהול תזרים מזומנים לעסקים קטנים ובינוניים בישראל. אנחנו עוזרים לכם לראות את התמונה הפיננסית המלאה, לחזות בעיות מראש, ולגבות חובות בקלות דרך WhatsApp.",
  },
  {
    q: "האם המערכת מאובטחת?",
    a: "בהחלט. אנחנו משתמשים בהצפנה מקצה לקצה, שרתים מאובטחים, ועומדים בתקנות אבטחת מידע. הנתונים שלכם לא נשמרים על המכשיר ולא משותפים עם צדדים שלישיים.",
  },
  {
    q: "מתי CashPlus יושק?",
    a: "אנחנו בשלבי פיתוח מתקדמים ומתכננים להשיק גרסת Beta בקרוב. הירשמו לרשימת ההמתנה כדי לקבל גישה מוקדמת.",
  },
  {
    q: "האם אפשר לבטל בכל שלב?",
    a: "כמובן. אין התחייבות, אין דמי ביטול. אתם יכולים לשנות או לבטל את התוכנית שלכם בכל רגע.",
  },
  {
    q: "איך הגבייה ב-WhatsApp עובדת?",
    a: "המערכת שולחת הודעות מותאמות אישית ללקוחות שלכם ישירות ב-WhatsApp עם פרטי החשבונית וקישור לתשלום. אתם שולטים בתזמון, בתוכן ובתדירות.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink-900 mb-3"
            style={{ fontFamily: "'Varela Round', sans-serif" }}
          >
            שאלות נפוצות
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="reveal bg-sand-50 rounded-card overflow-hidden transition-all"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-right"
                >
                  <span
                    className="font-medium text-ink-900"
                    style={{ fontFamily: "'Varela Round', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 mr-3 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
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
