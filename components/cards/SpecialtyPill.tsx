interface SpecialtyPillProps {
  name: string;
  onClick?: () => void;
}

export default function SpecialtyPill({ name, onClick }: SpecialtyPillProps) {
  return (
    <div className="spec-pill" onClick={onClick}>
      <div className="spec-dot" />
      <div className="spec-name">{name}</div>
    </div>
  );
}
