"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

// Tiny client wrapper — keeps page.tsx as a Server Component while
// still running the IntersectionObserver for .reveal animations.
export default function ScrollRevealWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useScrollReveal();
  return <div ref={ref}>{children}</div>;
}
