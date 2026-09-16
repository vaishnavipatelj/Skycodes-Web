import Image from "next/image";
import { facts, profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section className="band" id="about">
      <div className="shell">
        <SectionHead title="About" />
        <div className="about">
          <Reveal as="figure" className="about-shot">
            <div className="mask">
              <Image
                src="/profile.png"
                alt={profile.name}
                width={892}
                height={1317}
                sizes="(max-width: 1080px) 80vw, 34vw"
              />
            </div>
            <figcaption>{profile.location}</figcaption>
          </Reveal>

          <Reveal delay={1}>
            <p className="lede">{profile.lede}</p>
            {profile.bio.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <ul className="facts">
              {facts.map((f) => (
                <li key={f.key}>
                  <b>{f.key}</b>
                  <em>{f.value}</em>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
