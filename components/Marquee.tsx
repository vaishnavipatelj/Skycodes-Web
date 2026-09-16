import { stack } from "@/lib/data";

/** The track holds two identical runs so the -50% slide loops seamlessly. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="row">
        {[0, 1].map((run) => (
          <div key={run}>
            {stack.map((item) => (
              <span key={`${run}-${item}`}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
