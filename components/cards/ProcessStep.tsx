interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
  isLast?: boolean;
  onClick?: () => void;
}

export default function ProcessStep({
  number,
  title,
  description,
  isActive = false,
  isLast = false,
  onClick,
}: ProcessStepProps) {
  return (
    <div className="rcm-step">
      <div
        className={`step-circle ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {number}
      </div>
      <div className="step-body">
        <div className="step-h">{title}</div>
        <div className="step-p">{description}</div>
      </div>
    </div>
  );
}
