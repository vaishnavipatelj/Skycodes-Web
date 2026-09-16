import { courses } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Courses() {
  return (
    <section className="band" id="courses">
      <div className="shell">
        <SectionHead title="Free courses" />
        <Reveal delay={1} className="courses">
          {courses.map((c) => (
            <a className="course" key={c.title} href={c.href} target="_blank" rel="noopener noreferrer">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <span className="tag">{c.tag}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
