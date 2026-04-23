interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 38, height = 38 }: LogoProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="23" y="5" width="14" height="50" rx="7" fill="#1d302f" />
      <rect x="5" y="23" width="50" height="14" rx="7" fill="#2c8d93" />
      <rect x="23" y="23" width="14" height="14" rx="3" fill="#1d302f" />
      <circle cx="14" cy="22" r="3" fill="#2c8d93" opacity=".7" />
      <circle cx="8" cy="30" r="2.5" fill="#1d302f" opacity=".5" />
      <circle cx="11" cy="38" r="2" fill="#2c8d93" opacity=".5" />
    </svg>
  );
}
