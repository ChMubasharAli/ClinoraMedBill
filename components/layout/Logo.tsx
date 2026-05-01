import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 50, height = 50 }: LogoProps) {
  return (
    <Image
      src={"/brandLogo.png"}
      alt="Company Logo" // 2. Always include an alt tag
      width={width}
      height={height}
      // className={className}
      priority // 3. Logos are usually "Above the Fold," so priority helps LCP
    />
  );
}
