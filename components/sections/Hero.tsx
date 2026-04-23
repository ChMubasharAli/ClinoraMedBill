"use client";

import Image from "next/image";
import FloatingBadge from "../cards/FloatingBadge";
import HeroForm from "./HeroForm";

const TRUST_STATS = [
  { value: "98.7%", label: "Clean Claims" },
  { value: "35%", label: "Revenue Uplift" },
  { value: "2.4K+", label: "Providers" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-mesh" aria-hidden="true">
        <svg viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern
              id="g"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M56 0L0 0 0 56"
                fill="none"
                stroke="#2c8d93"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
          <circle
            cx="900"
            cy="100"
            r="200"
            fill="none"
            stroke="#2c8d93"
            strokeWidth="1"
            opacity=".4"
          />
          <circle
            cx="900"
            cy="100"
            r="360"
            fill="none"
            stroke="#2c8d93"
            strokeWidth="1"
            opacity=".2"
          />
          <circle
            cx="900"
            cy="100"
            r="520"
            fill="none"
            stroke="#2c8d93"
            strokeWidth="1"
            opacity=".12"
          />
        </svg>
      </div>
      <div className="orb orb1" aria-hidden="true" />
      <div className="orb orb2" aria-hidden="true" />

      <div className="hero-left">
        <div className="hero-badge">
          <div className="live-dot" />
          Medical Billing Services
        </div>
        <h1>
          <span style={{ display: "block" }}>Recover More.</span>
          <span style={{ display: "block" }}>
            Bill <span className="outline">Smarter.</span>
          </span>
          <span style={{ display: "block" }}>
            <span className="teal">Grow Faster.</span>
          </span>
        </h1>
        <p className="hero-desc">
          AI-powered medical billing that maximizes reimbursements, slashes
          denials, and puts your practice back in full control of its revenue
          cycle.
        </p>

        <HeroForm />

        <div className="hero-trust">
          <div className="trust-rating">
            <div className="g-icon">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="star-s" />
              ))}
            </div>
            <div className="trust-txt">
              <strong>4.9</strong> Google Rating
            </div>
          </div>
          {TRUST_STATS.map((stat, index) => (
            <div key={stat.label}>
              <div className="trust-divider" />
              <div className="stat-mini">
                <div className="stat-mini-val">
                  {stat.value
                    .replace("%", "")
                    .replace("+", "")
                    .replace("K", "")}
                  {stat.value.includes("%") && <sup>%</sup>}
                  {stat.value.includes("+") && <sup>+</sup>}
                  {stat.value.includes("K") && <sup>K+</sup>}
                </div>
                <div className="stat-mini-lbl">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-img-wrap">
          {/* <div className="hero-circle-ring" /> */}
          {/* <div className="hero-circle" /> */}
          {/* NOTE: Replace with your actual doctor image */}
          <Image
            className="hero-doctor"
            src={"/doctor.png"}
            alt="Medical Billing Specialist"
            width={380}
            height={500}
            priority
          />
          <FloatingBadge
            position="top-right"
            value="98.7%"
            label="Clean Claim Rate"
            showDot
          />
          <FloatingBadge
            position="left"
            value="$2.1B+"
            label="Revenue Processed"
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2c8d93"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            }
            showDot={false}
            delay={0.8}
          />
          <FloatingBadge
            position="bottom"
            value="2,400+"
            label="Providers Served"
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2c8d93"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            }
            showDot={false}
            delay={1.4}
          />
        </div>
      </div>
    </section>
  );
}
