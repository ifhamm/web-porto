import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { Profile } from "@/lib/types";

type ContactProps = {
  profile: Profile;
};

export function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="anchor-offset px-4 pb-20 pt-16 md:px-6">
      <MotionReveal>
        <div className="brutal-block bg-[#101010] p-6 text-white md:p-8">
          <SectionTitle eyebrow="Reach Out" title="Contact" className="[&>h2]:text-white" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-100 md:text-base">
            Available for internships, freelance build sessions, QA collaboration, and high-impact software work.
            If you have a real problem to solve, I am ready to help ship it.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <a className="brutal-chip bg-[#f4ff2a] px-4 py-3 font-black text-black" href={`mailto:${profile.contacts.email}`}>
              {profile.contacts.email}
            </a>
            <a className="brutal-chip bg-[#00d8ff] px-4 py-3 font-black text-black" href={`tel:${profile.contacts.phone}`}>
              {profile.contacts.phone}
            </a>
            <a
              className="brutal-chip bg-white px-4 py-3 font-black text-black"
              href={profile.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="brutal-chip bg-white px-4 py-3 font-black text-black"
              href={profile.contacts.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
