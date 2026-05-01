import FloatingCallButton from "@/components/layout/FloatingCallButton";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import RCMProcess from "@/components/sections/RCMProcess";
import Services from "@/components/sections/Services";
import Specialties from "@/components/sections/Specialties";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <RCMProcess />
        <WhyUs />
        <Specialties />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
