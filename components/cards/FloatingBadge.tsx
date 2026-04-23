type BadgePosition = "top-right" | "left" | "bottom";

interface FloatingBadgeProps {
  position: BadgePosition;
  value: string;
  label: string;
  icon?: React.ReactNode;
  showDot?: boolean;
  delay?: number;
}

const positionClasses: Record<BadgePosition, string> = {
  "top-right": "bf-top-right",
  left: "bf-left",
  bottom: "bf-bottom",
};

export default function FloatingBadge({
  position,
  value,
  label,
  icon,
  showDot = true,
  delay = 0,
}: FloatingBadgeProps) {
  return (
    <div
      className={`badge-float ${positionClasses[position]}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bf-icon">
        {showDot && <div className="bf-dot" />}
        {icon}
        <div>
          <div className="bf-num">{value}</div>
          <div className="bf-lbl">{label}</div>
        </div>
      </div>
    </div>
  );
}
