import { services } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section className="band" id="services">
      <div className="shell">
        <SectionHead title="What I do" count={`${services.length} areas`} />
        <Reveal delay={1} className="grid-svc">
          {services.map((s) => (
            <div className="svc" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
