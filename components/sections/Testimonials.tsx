import TestimonialCard from "../cards/TestimonialCard";

const TESTIMONIALS = [
  {
    quote:
      "ClinoraMedBill transformed our revenue cycle. Our denial rate dropped from 18% to under 4%, and we collected 31% more in the first six months.",
    authorName: "Dr. Sarah Rahman, MD",
    authorRole: "Internal Medicine · Chicago, IL",
    authorInitials: "DR",
  },
  {
    quote:
      "The onboarding was genuinely 48 hours. The live dashboard alone is worth the switch — we finally know exactly where every dollar is at all times.",
    authorName: "James Kowalski",
    authorRole: "Practice Manager · Houston, TX",
    authorInitials: "JK",
  },
  {
    quote:
      "As a behavioral health group, finding a biller who understands our coding requirements was a challenge. ClinoraMedBill got it immediately.",
    authorName: "Dr. Aliya Mirza, LCSW",
    authorRole: "Behavioral Health Group · Austin, TX",
    authorInitials: "AM",
  },
];

export default function Testimonials() {
  return (
    <section className="testi-section" id="testimonials">
      <div className="section-kicker">What Providers Say</div>
      <div className="section-h2">
        Trusted by <em>2,400+ Providers</em>
      </div>
      <div className="testi-grid">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.authorInitials} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
