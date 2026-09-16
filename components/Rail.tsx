"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/lib/data";

/** Fixed left rail: vertical role label, scroll-progress hairline, year. */
export default function Rail() {
  const bar = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const span = doc.scrollHeight - window.innerHeight;
      const p = span > 0 ? doc.scrollTop / span : 0;
      bar.current?.style.setProperty("--p", String(Math.min(1, Math.max(0, p))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="rail" aria-hidden="true">
      <span>{profile.role}</span>
      <div className="track">
        <i ref={bar} />
      </div>
      <span className="year">2026</span>
    </div>
  );
}
