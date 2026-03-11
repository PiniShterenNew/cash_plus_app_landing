import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CashPlus — שליטה פיננסית לעסקים חכמים",
  description:
    "CashPlus נותן לעסקים קטנים ובינוניים שליטה מלאה על תזרים המזומנים — עם גבייה חכמה דרך WhatsApp, תחזיות אוטומטיות, והתראות בזמן אמת.",
  keywords: [
    "תזרים מזומנים",
    "ניהול פיננסי",
    "עסקים קטנים",
    "גבייה",
    "WhatsApp",
    "חשבוניות",
  ],
  openGraph: {
    title: "CashPlus — שליטה פיננסית לעסקים חכמים",
    description:
      "שליטה מלאה על תזרים המזומנים עם גבייה חכמה דרך WhatsApp ותחזיות אוטומטיות",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&family=Rubik:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-sand-50 text-ink-900"
        style={{ fontFamily: "'Rubik', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
