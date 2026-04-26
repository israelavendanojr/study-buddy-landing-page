import mascot from "@/assets/Monkey.svg";

interface MascotProps {
  size?: number;
  className?: string;
}

export const Mascot = ({ size = 140, className = "" }: MascotProps) => (
  <img
    src={mascot}
    alt="The GarlicMonkey culinary mascot"
    width={size}
    height={size}
    className={`select-none ${className}`}
    style={{ width: size, height: size, objectFit: "contain" }}
  />
);
