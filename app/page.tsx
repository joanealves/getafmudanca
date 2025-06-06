import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServiceSection';
import AreasSection from './components/AreasSection';
import TestimonialsSection from './components/TestimonialsSections'
import { Contact } from './components/Contact';
import Header from './components/Header';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AreasSection />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </>
  );
}