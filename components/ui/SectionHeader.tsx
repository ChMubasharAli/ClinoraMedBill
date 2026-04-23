interface SectionHeaderProps {
  kicker: string;
  title: React.ReactNode;
  className?: string;
  kickerClassName?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  kicker,
  title,
  className = "",
  kickerClassName = "",
  titleClassName = "",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className={`section-kicker ${kickerClassName}`}>{kicker}</div>
      <div className={`section-h2 ${titleClassName}`}>{title}</div>
    </div>
  );
}
