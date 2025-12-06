import HeroSection from "@/components/landing/HeroSection";
import OpportunitySection from "@/components/landing/OpportunitySection";
import RoutesSection from "@/components/landing/RoutesSection";
import ProfileSection from "@/components/landing/ProfileSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ObjectionSection from "@/components/landing/ObjectionSection";
import ResultsSection from "@/components/landing/ResultsSection";
import MentorSection from "@/components/landing/MentorSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OpportunitySection />
      <RoutesSection />
      <ProfileSection />
      <BenefitsSection />
      <ObjectionSection />
      <ResultsSection />
      <MentorSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
