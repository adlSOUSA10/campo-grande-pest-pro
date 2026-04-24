import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
