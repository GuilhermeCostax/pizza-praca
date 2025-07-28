import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <MenuSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
