import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { DailyReportPreview } from "@/components/DailyReportPreview";
import { OwnerSection } from "@/components/OwnerSection";
import { SitterSection } from "@/components/SitterSection";
import { SafetySection } from "@/components/SafetySection";
import { EarlyAccess } from "@/components/EarlyAccess";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { WhatsAppSection } from "@/components/WhatsAppSection";
import { siteConfig } from "@/config/site";
import { faqData } from "@/data/faqData";
import { initAnalytics, trackEvent } from "@/services/analyticsService";

const title = "CatCare Egypt | Cat Sitting & Cat Care";
const description = siteConfig.description;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteConfig.siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: siteConfig.siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  useEffect(() => {
    initAnalytics();
    trackEvent("page_view", { page: "landing" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <DailyReportPreview />
        <OwnerSection />
        <SitterSection />
        <SafetySection />
        <EarlyAccess />
        <FAQ />
        <WhatsAppSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCta />
      <div className="h-20 md:hidden" aria-hidden="true" />
    </div>
  );
}
