import { lazy, Suspense } from "react";
import HeroSection from "@/components/landing/HeroSection";

// Lazy load sections below the fold for better LCP
const OpportunitySection = lazy(() => import("@/components/landing/OpportunitySection"));
const RoutesSection = lazy(() => import("@/components/landing/RoutesSection"));
const ProfileSection = lazy(() => import("@/components/landing/ProfileSection"));
const BenefitsSection = lazy(() => import("@/components/landing/BenefitsSection"));
const ObjectionSection = lazy(() => import("@/components/landing/ObjectionSection"));
const ResultsSection = lazy(() => import("@/components/landing/ResultsSection"));
const MentorSection = lazy(() => import("@/components/landing/MentorSection"));
const FinalCTASection = lazy(() => import("@/components/landing/FinalCTASection"));
const Footer = lazy(() => import("@/components/landing/Footer"));

// Minimal loading fallback
const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero loads immediately - critical for LCP */}
      <HeroSection />
      
      {/* All other sections lazy loaded */}
      <Suspense fallback={<SectionFallback />}>
        <OpportunitySection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <RoutesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProfileSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BenefitsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ObjectionSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ResultsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <MentorSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FinalCTASection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
