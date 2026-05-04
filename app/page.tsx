// app/page.tsx
"use client";

import { useState } from "react";
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
import ConsultationModal from "@/components/sections/ConsultationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero />
        <Services />
        <RCMProcess />
        <WhyUs />
        <Specialties />
        <Testimonials />
        <CTA onOpenModal={openModal} />
      </main>
      <Footer />
      <FloatingCallButton />

      {/* Modal - only one instance for entire app */}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
