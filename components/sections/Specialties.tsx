import SpecialtyPill from "../cards/SpecialtyPill";

const SPECIALTIES = [
  "Family Medicine",
  "Internal Medicine",
  "Cardiology",
  "Orthopedics",
  "Pediatrics",
  "Behavioral Health",
  "Dermatology",
  "Urgent Care",
  "Neurology",
  "Gastroenterology",
  "Telehealth",
  "Physical Therapy",
  "Oncology",
  "Radiology",
  "Obstetrics & Gynecology",
  "Multi-Physician Groups",
];

export default function Specialties() {
  return (
    <section className="spec-section" id="specialties">
      <div className="section-kicker">Specialties We Serve</div>
      <div className="section-h2">
        We Know Your <em>Specialty</em>
      </div>
      <div className="spec-grid">
        {SPECIALTIES.map((specialty) => (
          <SpecialtyPill key={specialty} name={specialty} />
        ))}
      </div>
    </section>
  );
}
