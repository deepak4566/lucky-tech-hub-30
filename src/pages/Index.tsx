import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import LocationBanner from '@/components/landing/LocationBanner';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import LaptopInventory from '@/components/landing/LaptopInventory';
import ServicesSection from '@/components/landing/ServicesSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <LocationBanner />
      <WhyChooseUs />
      <LaptopInventory />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
