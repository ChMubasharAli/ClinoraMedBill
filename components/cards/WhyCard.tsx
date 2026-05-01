interface WhyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyCard({ icon, title, description }: WhyCardProps) {
  return (
    <div className="why-card">
      <div className="card-icon">{icon}</div>
      <div className="card-h3">{title}</div>
      <div className="card-p">{description}</div>
    </div>
  );
}
