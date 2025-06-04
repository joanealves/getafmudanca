import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServiceSection';
import AboutSection from './components/AboutSection';
import AreasSection from './components/AreasSection';
import TestimonialsSection from './components/TestimonialCarousel';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AreasSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}