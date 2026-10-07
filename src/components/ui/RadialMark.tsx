import { cn } from "@/lib/utils";

type RadialMarkProps = {
  className?: string;
};

export function RadialMark({ className }: RadialMarkProps) {
  const rays = Array.from({ length: 18 });

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("block", className)}
    >
      {rays.map((_, index) => (
        <line
          key={index}
          x1="50"
          y1="2"
          x2="50"
          y2="34"
          stroke="currentColor"
          strokeWidth="4"
          transform={`rotate(${index * 20} 50 50)`}
        />
      ))}
    </svg>
  );
}
