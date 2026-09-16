"use client";

import { useEffect } from "react";

/**
 * Runs the one-shot page-load sequence. The body ships with `boot` (everything
 * hidden) so nothing flashes before hydration; swapping to `ready` starts it.
 */
export default function Boot() {
  useEffect(() => {
    const body = document.body;
    const id = requestAnimationFrame(() => {
      body.classList.remove("boot");
      body.classList.add("ready");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return null;
}
