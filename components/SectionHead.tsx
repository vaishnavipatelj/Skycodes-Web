import Reveal from "./Reveal";

export default function SectionHead({ title, count }: { title: string; count?: string }) {
  return (
    <Reveal className="head">
      <h2>
        <span className="line">
          <span>{title}</span>
        </span>
      </h2>
      {count ? <span className="count">{count}</span> : null}
    </Reveal>
  );
}
