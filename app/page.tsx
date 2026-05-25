import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* MobileCTA가 감지하는 센티넬 — Hero 끝 지점 */}
        <div id="hero-sentinel" />
        <Services />
        <Process />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
