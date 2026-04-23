import WhyCard from "../cards/WhyCard";

const WHY_CARDS = [
  {
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
    title: "HIPAA Certified",
    description:
      "Full HIPAA compliance with encrypted data handling, regular audits, and zero-tolerance breach policy.",
  },
  {
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
    title: "Real-Time Visibility",
    description:
      "Live dashboards give you 24/7 insight into claim status, collections, and your full revenue pipeline.",
  },
  {
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
    title: "48-Hour Onboarding",
    description:
      "Seamless EHR integration and full workflow setup within 48 hours — minimal disruption guaranteed.",
  },
  {
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
      </svg>
    ),
    title: "Dedicated Account Team",
    description:
      "A named account manager who knows your practice, your payers, and your revenue goals inside-out.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-section" id="about">
      <div className="section-kicker">Why ClinoraMedBill</div>
      <div className="section-h2">
        Built for Healthcare.
        <br />
        <em>Obsessed</em> With Results.
      </div>
      <div className="why-grid">
        {WHY_CARDS.map((card) => (
          <WhyCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
