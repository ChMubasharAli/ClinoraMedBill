interface RCMStatTileProps {
  value: string;
  label: string;
  variant?: "teal" | "dark";
}

export default function RCMStatTile({
  value,
  label,
  variant = "teal",
}: RCMStatTileProps) {
  return (
    <div className={`rcm-tile ${variant === "teal" ? "teal-t" : "dark-t"}`}>
      <div className="rcm-tile-num">{value}</div>
      <div className="rcm-tile-lbl">{label}</div>
    </div>
  );
}
