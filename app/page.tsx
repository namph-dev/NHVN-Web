import { AboutSection } from "@/components/landing/AboutSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { Footer } from "@/components/landing/Footer";
import { GuideSection } from "@/components/landing/GuideSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { IndustrySection } from "@/components/landing/IndustrySection";
import { Navbar } from "@/components/landing/Navbar";
import { PricingSection } from "@/components/landing/PricingSection";
import { ReviewSection } from "@/components/landing/ReviewSection";
import { WorkflowSection } from "@/components/landing/WorkflowSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <div
          aria-hidden="true"
          className="h-10 w-full border-y border-[#E3E6EC] bg-[#F3F4F7]"
        />
        <FeatureSection />
        <WorkflowSection />
        <IndustrySection />
        <GuideSection />
        <ReviewSection />
        <AboutSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
