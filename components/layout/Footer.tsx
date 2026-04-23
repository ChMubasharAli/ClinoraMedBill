import Link from "next/link";
import { Logo } from "./Logo";

const SERVICE_LINKS = [
  { href: "#", label: "Revenue Cycle Management" },
  { href: "#", label: "Medical Coding" },
  { href: "#", label: "Claims Submission" },
  { href: "#", label: "AR Management" },
  { href: "#", label: "Denial Management" },
  { href: "#", label: "Eligibility Verification" },
  { href: "#", label: "Analytics & Reporting" },
];

const SPECIALTY_LINKS = [
  { href: "#", label: "Family Medicine" },
  { href: "#", label: "Cardiology" },
  { href: "#", label: "Behavioral Health" },
  { href: "#", label: "Orthopedics" },
  { href: "#", label: "Telehealth" },
  { href: "#", label: "Urgent Care" },
  { href: "#", label: "All Specialties" },
];

const COMPANY_LINKS = [
  { href: "#", label: "About Us" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Contact Us" },
  { href: "#", label: "HIPAA Policy" },
  { href: "#", label: "Privacy Policy" },
];

const BOTTOM_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "HIPAA Notice" },
  { href: "#", label: "Cookie Policy" },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <Link className="f-logo" href="/">
            <Logo width={30} height={30} />
            <div className="f-logo-text">
              Clinora<em>Med</em>Bill
            </div>
          </Link>
          <p className="f-desc">
            Professional medical billing agency delivering accurate, efficient,
            and reliable revenue cycle management for healthcare providers
            nationwide.
          </p>
          <div className="f-badge">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2c8d93"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            HIPAA Compliant
          </div>
        </div>
        <FooterLinkColumn title="Services" links={SERVICE_LINKS} />
        <FooterLinkColumn title="Specialties" links={SPECIALTY_LINKS} />
        <FooterLinkColumn title="Company" links={COMPANY_LINKS} />
      </div>
      <div className="footer-bottom">
        <p>© 2026 ClinoraMedBill. All rights reserved.</p>
        <div className="footer-btm-links">
          {BOTTOM_LINKS.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div className="f-col">
      <div className="f-col-h">{title}</div>
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
