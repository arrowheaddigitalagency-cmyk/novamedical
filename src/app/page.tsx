import HeroSection from "@/components/sections/HeroSection";
import TrustHighlights from "@/components/sections/TrustHighlights";
import ServicesSection from "@/components/sections/ServicesSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import BillingSection from "@/components/sections/BillingSection";
import ContactSection from "@/components/sections/ContactSection";
import AccreditationSection from "@/components/sections/AccreditationSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustHighlights />
      <ServicesSection />
      <DoctorsSection />
      <BillingSection />
      <ContactSection />
      <AccreditationSection />
    </>
  );
}
