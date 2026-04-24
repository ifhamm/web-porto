import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { Experience as ExperienceItem, OrganizationExperience } from "@/lib/types";

type ExperienceProps = {
  experiences: ExperienceItem[];
  organizationalExperiences: OrganizationExperience[];
};

export function Experience({ experiences, organizationalExperiences }: ExperienceProps) {
  return (
    <section id="experience" className="anchor-offset px-4 py-16 md:px-6">
      <MotionReveal>
        <div className="brutal-block bg-white p-6 md:p-8">
          <SectionTitle eyebrow="Career" title="Experience" />
          <div className="mt-8 space-y-4">
            {experiences.map((item, index) => (
              <article key={`${item.organization}-${index}`} className="border-4 border-black bg-[#fff] p-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.1em]">
                  <span className="bg-[#f4ff2a] px-2 py-1">{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="mt-2 text-xl font-black uppercase leading-tight">{item.title}</h3>
                <p className="text-sm font-bold uppercase">{item.organization}</p>
                <ul className="mt-3 space-y-1 text-sm font-medium leading-relaxed">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden="true" className="font-black text-[#ff2f00]">
                        +
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.08} className="mt-8">
        <div className="brutal-block bg-[#101010] p-6 text-white md:p-8">
          <SectionTitle eyebrow="Community" title="Organizational Roles" className="[&>h2]:text-white" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {organizationalExperiences.map((item, index) => (
              <article key={`${item.role}-${index}`} className="border-4 border-white/80 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f4ff2a]">{item.period}</p>
                <h3 className="mt-2 text-lg font-black uppercase leading-tight">{item.role}</h3>
                <p className="mt-1 text-sm font-semibold">{item.organization}</p>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed text-zinc-100">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
