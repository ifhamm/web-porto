import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { Profile } from "@/lib/types";

type AboutProps = {
  profile: Profile;
};

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="anchor-offset px-4 py-16 md:px-6">
      <MotionReveal>
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="brutal-block bg-white p-6 md:p-8">
            <SectionTitle eyebrow="Identity" title="About Ilham" />
            <p className="mt-6 text-base leading-relaxed md:text-lg">{profile.summary}</p>
          </div>
          <aside className="brutal-block bg-[#101010] p-6 text-white md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f4ff2a]">Education</p>
            <p className="mt-4 text-xl font-black uppercase leading-tight">{profile.education.institution}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest">{profile.education.degree}</p>
            <p className="mt-4 inline-block border-[3px] border-white px-2 py-1 text-xs font-black uppercase">
              Since {profile.education.start}
            </p>
          </aside>
        </div>
      </MotionReveal>
    </section>
  );
}
