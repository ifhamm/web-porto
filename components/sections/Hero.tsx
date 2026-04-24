import { MotionReveal } from "@/components/MotionReveal";
import { Profile } from "@/lib/types";

type HeroProps = {
  profile: Profile;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section id="hero" className="anchor-offset px-4 pt-10 md:px-6 md:pt-14">
      <MotionReveal>
        <div className="brutal-block noise-grid relative overflow-hidden bg-white p-6 md:p-10">
          <div className="absolute -right-5 -top-6 rotate-12 border-4 border-black bg-[#ff2f00] px-3 py-1 text-xs font-black uppercase text-white">
            OPEN TO WORK
          </div>
          <p className="mb-4 inline-block -rotate-2 border-[3px] border-black bg-[#f4ff2a] px-3 py-1 text-xs font-black uppercase tracking-[0.15em]">
            Bandung, Indonesia
          </p>
          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-7xl">
            Build Loud.
            <br />
            Ship Sharp.
            <br />
            Solve Real Problems.
          </h1>
          <p className="mt-6 max-w-3xl border-l-4 border-black pl-4 text-base font-semibold leading-relaxed md:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="brutal-chip bg-[#101010] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-[#ff2f00]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="brutal-chip bg-[#ffffff] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] transition hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
