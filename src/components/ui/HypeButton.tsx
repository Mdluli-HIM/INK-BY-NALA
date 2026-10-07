import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type HypeButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
};

export function HypeButton({
  href,
  children,
  className,
  variant = "dark",
}: HypeButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "hype-cta group",
        variant === "light" && "hype-cta--light",
        className,
      )}
    >
      <span className="hype-cta__label">
        {children}
      </span>

      <span className="hype-cta__arrow">
        <ArrowUpRight
          size={26}
          strokeWidth={2.5}
          className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </span>
    </Link>
  );
}
