import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillGroup } from "@/lib/types";

type SkillsProps = {
  skillGroups: SkillGroup[];
};

const panelPalette = ["bg-[#101010] text-white", "bg-[#f4ff2a] text-black", "bg-[#00d8ff] text-black"];

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="anchor-offset px-4 py-16 md:px-6">
      <MotionReveal>
        <div className="brutal-block bg-white p-6 md:p-8">
          <SectionTitle eyebrow="Toolkit" title="Skills Stack" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className={`border-4 border-black p-4 ${panelPalette[index % panelPalette.length]}`}
              >
                <h3 className="text-lg font-black uppercase">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block border-[3px] border-current bg-white/90 px-2 py-1 text-xs font-black uppercase tracking-widest text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
