interface WhyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyCard({ icon, title, description }: WhyCardProps) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <div className="why-h">{title}</div>
      <div className="why-p">{description}</div>
    </div>
  );
}
