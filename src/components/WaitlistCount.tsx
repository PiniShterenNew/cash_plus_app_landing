"use client";

import { useEffect, useState } from "react";

// Separate client component so Hero.tsx can remain a Server Component.
export default function WaitlistCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist-count")
      .then((r) => r.json())
      .then((d) => setCount(d.count ?? 0))
      .catch(() => {});
  }, []);

  if (count === null || count < 10) return null;

  return (
    <p className="text-[13px] text-[#94A3B8] text-center mt-4">
      הצטרפו ל-{count.toLocaleString("he-IL")} בעלי עסקים שכבר נרשמו
    </p>
  );
}
