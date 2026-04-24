import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { QaArtifact } from "@/lib/types";

type QaArtifactsProps = {
  artifacts: QaArtifact[];
};

export function QaArtifacts({ artifacts }: QaArtifactsProps) {
  if (!artifacts.length) {
    return null;
  }

  return (
    <section id="qa-artifacts" className="anchor-offset px-4 py-16 md:px-6">
      <MotionReveal>
        <div className="brutal-block bg-white p-6 md:p-8">
          <SectionTitle eyebrow="Proof of Work" title="QA Artifacts" />
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-relaxed text-zinc-700 md:text-base">
            Selected samples of test case design and bug reporting documentation to show testing depth,
            issue communication, and release reliability impact.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {artifacts.map((item) => (
              <article key={item.title} className="border-4 border-black bg-[#f8f8f8] p-5 shadow-[7px_7px_0_#101010]">
                <p className="inline-block border-[3px] border-black bg-[#f4ff2a] px-2 py-1 text-[11px] font-black uppercase tracking-[0.14em]">
                  {item.scope}
                </p>
                <h3 className="mt-3 text-xl font-black uppercase leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-medium">{item.summary}</p>

                <ul className="mt-4 space-y-1.5">
                  {item.evidence.map((line) => (
                    <li key={line} className="flex gap-2 text-sm font-semibold leading-relaxed">
                      <span aria-hidden="true" className="font-black text-[#ff2f00]">
                        +
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t-4 border-black pt-3">
                  {item.testCaseUrl && (
                    <a
                      href={item.testCaseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border-4 border-black bg-black px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#f4ff2a] shadow-[5px_5px_0_#101010] transition hover:-translate-y-0.5 hover:bg-[#ff2f00] hover:text-white"
                    >
                      Test Case
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {item.bugReportUrl && (
                    <a
                      href={item.bugReportUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border-4 border-black bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] shadow-[5px_5px_0_#101010] transition hover:-translate-y-0.5 hover:bg-[#00d8ff]"
                    >
                      Bug Report
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
