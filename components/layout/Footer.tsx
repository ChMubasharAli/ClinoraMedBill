import Link from "next/link";
import { Logo } from "./Logo";

export default function Footer() {
  // WhatsApp Link Setup
  const whatsappNumber = "19453350950"; // No spaces, dashes, or +
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello ClinoraMedBill, I have a query regarding medical billing.")}`;

  return (
    <footer>
      <div className="footer-main">
        <div className="footer-top">
          <Link className="f-logo" href="/">
            <Logo className="nav-logo" />
            <div className="brand-name">
              <img
                src="/secondaryLogo.png"
                className="secondaryImage"
                alt="ClinoraMedBill"
              />
            </div>
          </Link>
          <p className="f-desc">
            Professional medical billing agency delivering accurate, efficient,
            and reliable revenue cycle management for healthcare providers
            nationwide.
          </p>
          <div className="f-contact">
            {/* Address */}
            <div className="f-contact-item">
              <div className="f-contact-icon">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>5900 Balcones Drve STE 20866, Austin TX, 78731</span>
            </div>

            {/* Phone / WhatsApp Link */}
            <div className="f-contact-item">
              <div className="f-contact-icon">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
              </div>
              {/* Ab is par click karne se WhatsApp khulega */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                +1 (945) 335-0950
              </a>
            </div>

            {/* Email */}
            <div className="f-contact-item">
              <div className="f-contact-icon">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <a href="mailto:info@clinoramedbill.com">
                info@clinoramedbill.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 ClinoraMedBill. All rights reserved.</p>
      </div>
    </footer>
  );
}
