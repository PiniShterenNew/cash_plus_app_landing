// Server Component — no "use client" here.
// Only the components that actually need browser APIs
// (Navbar, WaitlistForm, FAQ) carry their own "use client" directive.
// Everything else renders as static HTML, dramatically reducing
// JavaScript sent to the browser and time-to-interactive.
import dynamic from "next/dynamic";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// FAQ has a useState accordion — load its JS in a separate chunk
// (ssr:true keeps the HTML in the initial server payload for SEO/LCP)
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });

export default function Home() {
  return (
    <ScrollRevealWrapper>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </ScrollRevealWrapper>
  );
}
