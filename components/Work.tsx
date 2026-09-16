import { projects } from "@/lib/data";
import Arrow from "./Arrow";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Work() {
  return (
    <section className="band" id="work">
      <div className="shell">
        <SectionHead title="Selected work" count={`${projects.length} projects`} />
        <Reveal delay={1} className="work">
          {projects.map((p, i) => (
            <a className="job" key={p.title} href={p.href} target="_blank" rel="noopener noreferrer">
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <span className="stack">{p.stack}</span>
              <span className="go">
                <Arrow size={13} />
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
