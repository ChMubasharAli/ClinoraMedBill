"use client";

import Image from "next/image";
import FloatingBadge from "../cards/FloatingBadge";
import HeroForm from "./HeroForm";

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
            width={400}
            height={600}
            priority
          />
          <FloatingBadge
            position="top-right"
            value="> 98.7%"
            label="Clean Claim Rate"
            showDot
          />
          <FloatingBadge
            position="left"
            value="&lt; 1%"
            label="Denial Rate"
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
            value="< 28 Days"
            label="A/R Days"
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
