import { numbers } from "@/lib/data";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Numbers() {
  return (
    <section className="band" id="numbers">
      <div className="shell">
        <SectionHead title="Content" />
        <Reveal delay={1} className="nums">
          {numbers.map((n) => (
            <div className="num" key={n.label}>
              <b>
                <CountUp to={n.to} suffix={n.suffix} decimals={n.decimals} />
              </b>
              <span>{n.label}</span>
              <small>{n.note}</small>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
