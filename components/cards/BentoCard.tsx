interface BentoCardProps {
  number?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  tag?: string;
  variant?: "default" | "accent" | "soft" | "wide";
  className?: string;
  children?: React.ReactNode;
}

export default function BentoCard({
  number,
  icon,
  title,
  description,
  tag,
  variant = "default",
  className = "",
  children,
}: BentoCardProps) {
  return (
    <div className={`bento-card`}>
      {icon && <div className="card-icon">{icon}</div>}
      {children ? (
        children
      ) : (
        <div>
          <div className="card-h3">{title}</div>
          <div className="card-p">{description}</div>
        </div>
      )}
    </div>
  );
}
