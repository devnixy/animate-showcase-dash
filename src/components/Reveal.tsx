import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

type Animation = "rise" | "reveal" | "thread";

interface RevealProps {
  children: ReactNode;
  animation?: Animation;
  /** Stagger delay in ms */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}

/**
 * Scroll-triggered reveal wrapper. Renders hidden (opacity-0) until the
 * element enters the viewport, then plays the chosen animation class.
 */
export function Reveal({
  children,
  animation = "rise",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style = { "--d": `${delay}ms` } as CSSProperties;

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={inView ? animation : "opacity-0"}
    >
      {children}
    </Tag>
  );
}
