"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#rcm", label: "RCM" },
  { href: "#specialties", label: "Specialties" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <Link className="nav-brand" href="/">
        <Logo className="nav-logo" />
        <div className="brand-name">
          Clinora<em>Med</em>Bill
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
        <Link className="btn-outline-nav" href="#demo">
          Book Demo
        </Link>
        <Link className="btn-solid-nav" href="#audit">
          Free Audit →
        </Link>
      </div>
    </nav>
  );
}
