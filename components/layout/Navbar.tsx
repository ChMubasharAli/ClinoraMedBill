"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#rcm", label: "RCM" },
  { href: "#specialties", label: "Specialties" },
  { href: "#pricing", label: "Pricing" },
];

interface WhyUsProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: WhyUsProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-main ${scrolled ? "scrolled" : ""}`}>
      <Link className="nav-brand" href="/">
        <Logo className="nav-logo" />
        <div className="brand-name">
          <img src="/secondaryLogo.png" className="secondaryImage" />
        </div>
      </Link>
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="nav-right">
        <button onClick={onOpenModal} className="btn-outline-nav">
          Book Demo
        </button>
        <button onClick={onOpenModal} className="btn-solid-nav">
          Free Audit →
        </button>
      </div>
    </nav>
  );
}
