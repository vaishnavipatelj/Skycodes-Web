import { profile, socials } from "@/lib/data";
import Reveal from "./Reveal";

const links = [
  { label: "Instagram", href: socials.instagram },
  { label: "YouTube", href: socials.youtube },
  { label: "GitHub", href: socials.github },
  { label: "LinkedIn", href: socials.linkedin },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <Reveal as="h2" className="shout">
          <span className="line">
            <span>Let&apos;s build</span>
          </span>
          <span className="line">
            <span>
              something <a href={`mailto:${profile.email}`}>solid</a>
            </span>
          </span>
        </Reveal>

        <Reveal delay={2}>
          <a className="mailto" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>

        <div className="foot">
          <p className="meta">
            {profile.brand} — {profile.tagline}
          </p>
          <nav>
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </nav>
          <p className="meta">© 2026</p>
        </div>
      </div>
    </section>
  );
}
