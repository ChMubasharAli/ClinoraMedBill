import Link from "next/link";
import BentoCard from "../cards/BentoCard";

const SERVICE_CARDS = [
  {
    number: "01",
    title: "Revenue Cycle Management",
    description:
      "End-to-end RCM from patient registration through final payment. We handle every touchpoint so your team can focus entirely on patient care — not paperwork.",
    tag: "Core Service",
    variant: "accent" as const,
    wide: true,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2c8d93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Medical Coding",
    description:
      "ICD-10, CPT & HCPCS certified coders across all specialties, maximizing reimbursement and accuracy.",
    tag: "Certified",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2c8d93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AR Management",
    description:
      "Proactive follow-up that drastically reduces days in AR and recovers stalled reimbursements.",
    tag: "Real-time",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2c8d93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Eligibility Verification",
    description:
      "Real-time insurance verification before every encounter — stopping denials before they start.",
    tag: "Automated",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2c8d93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Analytics & Reporting",
    description:
      "Live KPI dashboards and financial reporting giving full visibility into every dollar flowing in.",
    tag: "Live Data",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2c8d93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Denial Management",
    description:
      "Root-cause analysis and rapid re-submission turns every denied claim into recovered revenue.",
    tag: "Recovery",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2c8d93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Patient Billing",
    description:
      "Clear, patient-friendly statements with flexible payment options that improve collection rates.",
    tag: "Patient-First",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2c8d93"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="sec-head">
        <div>
          <div className="section-kicker">What We Do</div>
          <div className="section-h2">
            Revenue Solutions
            <br />
            That <em>Actually Work</em>
          </div>
        </div>
        <Link className="btn-view-all" href="#">
          All Services →
        </Link>
      </div>

      <div className="bento">
        <BentoCard
          number={SERVICE_CARDS[0].number}
          icon={SERVICE_CARDS[0].icon}
          title={SERVICE_CARDS[0].title}
          description={SERVICE_CARDS[0].description}
          tag={SERVICE_CARDS[0].tag}
          variant="accent"
          className="wide"
        />

        <BentoCard variant="soft">
          <div className="big-stat">
            98<sub>%</sub>
          </div>
          <div
            className="card-h3"
            style={{
              marginTop: "14px",
              fontSize: "16px",
              color: "var(--navy)",
            }}
          >
            Clean Claim Rate
          </div>
          <div
            className="card-p"
            style={{ fontSize: "12px", color: "var(--muted)" }}
          >
            Industry avg. is 75%
          </div>
        </BentoCard>

        {SERVICE_CARDS.slice(1, 5).map((card) => (
          <BentoCard
            key={card.number}
            number={card.number}
            icon={card.icon}
            title={card.title}
            description={card.description}
            tag={card.tag}
          />
        ))}

        <BentoCard variant="soft">
          <div className="big-stat">
            35<sub>%</sub>
          </div>
          <div
            className="card-h3"
            style={{
              marginTop: "14px",
              fontSize: "16px",
              color: "var(--navy)",
            }}
          >
            Avg. Revenue Uplift
          </div>
          <div
            className="card-p"
            style={{ fontSize: "12px", color: "var(--muted)" }}
          >
            Across all clients in Year 1
          </div>
        </BentoCard>

        <BentoCard
          number={SERVICE_CARDS[6].number}
          icon={SERVICE_CARDS[6].icon}
          title={SERVICE_CARDS[6].title}
          description={SERVICE_CARDS[6].description}
          tag={SERVICE_CARDS[6].tag}
        />
      </div>
    </section>
  );
}
