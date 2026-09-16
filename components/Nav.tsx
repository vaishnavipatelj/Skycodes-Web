"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, profile, socials } from "@/lib/data";
import Arrow from "./Arrow";

const socialLinks = [
  { label: "Instagram", href: socials.instagram },
  { label: "YouTube", href: socials.youtube },
  { label: "GitHub", href: socials.github },
  { label: "LinkedIn", href: socials.linkedin },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={stuck ? "nav stuck" : "nav"}>
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="" width={320} height={320} priority />
          <b>skycodes</b>
        </a>

        <nav className="links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-social">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              {s.label}
            </a>
          ))}
        </div>

        <a className="call" href={`mailto:${profile.email}`}>
          Contact us
          <Arrow size={11} />
        </a>

        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </header>

      <div className={open ? "sheet open" : "sheet"} aria-hidden={!open}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <div className="social">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
