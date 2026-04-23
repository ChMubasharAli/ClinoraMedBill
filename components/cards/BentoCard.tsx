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
  const variantClasses = {
    default: "",
    accent: "accent",
    soft: "soft",
    wide: "wide",
  };

  return (
    <div className={`bento-card ${variantClasses[variant]} ${className}`}>
      {number && <div className="card-num">{number}</div>}
      {icon && <div className="card-icon">{icon}</div>}
      {children ? (
        children
      ) : (
        <>
          <div className="card-h3">{title}</div>
          <div className="card-p">{description}</div>
          {tag && <div className="card-tag">{tag}</div>}
        </>
      )}
    </div>
  );
}
