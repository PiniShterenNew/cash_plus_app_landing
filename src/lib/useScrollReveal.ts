"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once visible, stop observing — no re-triggering needed
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        // Positive bottom margin: trigger 150px BEFORE element enters viewport.
        // At typical scroll speed the animation completes before the user's
        // eyes reach the element, so content appears "already there".
        rootMargin: "0px 0px 150px 0px",
      }
    );

    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
