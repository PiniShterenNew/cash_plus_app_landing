import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CashPlus — ניהול תזרים מזומנים לעסקים קטנים",
  description:
    "CashPlus עוזר לעסקים קטנים בישראל לעקוב אחרי הכסף, לגבות חובות בקלות דרך WhatsApp, ולדעת מה הולך לקרות — לפני שזה קורה.",
  keywords: [
    "תזרים מזומנים",
    "ניהול פיננסי",
    "עסקים קטנים",
    "גבייה",
    "WhatsApp",
    "חשבוניות",
    "Beta",
  ],
  openGraph: {
    title: "CashPlus — ניהול תזרים מזומנים פשוט כמו שצריך",
    description:
      "CashPlus עוזר לעסקים קטנים בישראל לעקוב אחרי הכסף, לגבות דרך WhatsApp, ולקבל תחזיות — הכל ממקום אחד.",
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
          href="https://fonts.googleapis.com/css2?family=Varela+Round&family=Rubik:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#4ECDC4" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
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
