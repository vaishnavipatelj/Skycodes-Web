import Image from "next/image";
import { heroFigures, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero-copy">
          <div className="figs">
            {heroFigures.map((f) => (
              <div className="fig" key={f.label}>
                <sup>+</sup>
                <b>{f.value}</b>
                <small>{f.label}</small>
              </div>
            ))}
          </div>

          <div className="hero-title">
            <h1 className="hello">
              <span className="clip">
                <span>{profile.greeting}</span>
              </span>
            </h1>
            <p className="said">
              {profile.said} <em>{profile.saidAccent}</em>.
            </p>
          </div>

          <a className="scroll" href="#about">
            <i />
            Scroll down
          </a>
        </div>

        <div className="hero-shot">
          <div className="mask">
            <Image
              src="/profile-alt.png"
              alt={profile.name}
              width={1142}
              height={1377}
              priority
              sizes="(max-width: 880px) 90vw, 46vw"
            />
          </div>
        </div>
      </div>
      <div className="hero-rule" />
    </section>
  );
}
