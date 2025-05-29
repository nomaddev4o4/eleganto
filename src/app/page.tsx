import BultWith from "@/components/BultWith";
import CommunityUseCases from "@/components/CommunityUseCases";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <BultWith />
      <CommunityUseCases />
      <TestimonialSection />
      <PricingSection />
      <Footer />
    </>
  );
}
