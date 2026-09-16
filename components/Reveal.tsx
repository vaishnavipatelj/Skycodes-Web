"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
};

/** Fades a block in the first time it scrolls into view, then stops watching. */
export default function Reveal({ children, as, delay = 0, className = "" }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8%" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = ["rv", delay ? `rv-d${delay}` : "", shown ? "in" : "", className]
    .filter(Boolean)
    .join(" ");

  const Rendered = Tag as any;

  return (
    <Rendered ref={ref} className={classes}>
      {children}
    </Rendered>
  );
}
