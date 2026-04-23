"use client";

import { useState } from "react";
import Link from "next/link";
import RCMStatTile from "../cards/RCMStatTile";
import ProcessStep from "../cards/ProcessStep";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Patient Registration & Eligibility",
    description:
      "Insurance verification and demographic capture before every appointment.",
  },
  {
    number: "02",
    title: "Charge Capture & Coding",
    description:
      "Certified coders review every encounter note for accurate ICD-10 and CPT codes.",
  },
  {
    number: "03",
    title: "Claims Scrubbing & Submission",
    description:
      "Automated error detection before electronic submission to all major payers.",
  },
  {
    number: "04",
    title: "Payment Posting & Reconciliation",
    description:
      "ERA/EOB processing with full audit trail and payer contract verification.",
  },
  {
    number: "05",
    title: "Denial Management & Appeals",
    description:
      "Root-cause analysis and rapid appeals process to recover maximum revenue.",
  },
  {
    number: "06",
    title: "Reporting & Ongoing Optimization",
    description:
      "Monthly performance reviews to continuously maximize your revenue cycle.",
  },
];

const STAT_TILES = [
  { value: "$2.1B+", label: "Revenue Processed", variant: "teal" as const },
  { value: "48hr", label: "Onboarding Time", variant: "dark" as const },
  { value: "8.4d", label: "Avg. Days in AR", variant: "dark" as const },
  { value: "99.9%", label: "HIPAA Compliance", variant: "teal" as const },
];

export default function RCMProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="rcm-section" id="rcm">
      <div className="rcm-inner">
        <div>
          <div className="section-kicker">The RCM Process</div>
          <div className="section-h2">
            How We Manage
            <br />
            Your <em>Full Cycle</em>
          </div>
          <p className="rcm-desc">
            A transparent, step-by-step process built for healthcare providers
            who demand accuracy, speed, and complete accountability at every
            stage.
          </p>
          <Link
            className="btn-primary"
            href="#contact"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            Explore RCM in Detail →
          </Link>

          <div className="rcm-grid">
            {STAT_TILES.map((tile) => (
              <RCMStatTile
                key={tile.label}
                value={tile.value}
                label={tile.label}
                variant={tile.variant}
              />
            ))}
          </div>
        </div>

        <div className="rcm-steps">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isActive={activeStep === index}
              isLast={index === PROCESS_STEPS.length - 1}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
