import Header from './components/Header'
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
// import ServicesSection from './components/ServiceSection';
import AreasAtendidas from './components/AreasSection';
import CoverageMap from './components/CoverageMap';
import { Contact } from './components/Contact';
import BrazilianMap from './components/BrazilianMap'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <BrazilianMap />
      {/* <AreasAtendidas /> */}
      {/* <CoverageMap /> */}
      <Contact />
    </>
  );
}