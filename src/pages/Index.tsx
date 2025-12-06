import { lazy, Suspense, memo } from "react";
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

// Minimal loading fallback - memoized
const SectionFallback = memo(() => (
  <div className="py-20 flex items-center justify-center" aria-busy="true">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
));
SectionFallback.displayName = "SectionFallback";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero loads immediately - critical for LCP */}
      <HeroSection />
      
      {/* Group lazy loaded sections to reduce suspense boundaries */}
      <Suspense fallback={<SectionFallback />}>
        <OpportunitySection />
        <RoutesSection />
        <ProfileSection />
        <BenefitsSection />
        <ObjectionSection />
        <ResultsSection />
        <MentorSection />
        <FinalCTASection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;