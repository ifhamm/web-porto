import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { QaArtifacts } from "@/components/sections/QaArtifacts";
import { Skills } from "@/components/sections/Skills";
import { cvData } from "@/data/cv";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar items={cvData.navItems} />
      <main className="mx-auto w-full max-w-6xl pb-10">
        <Hero profile={cvData.profile} />
        <About profile={cvData.profile} />
        <Experience
          experiences={cvData.experiences}
          organizationalExperiences={cvData.organizationalExperiences}
        />
        <QaArtifacts artifacts={cvData.qaArtifacts ?? []} />
        <Projects projects={cvData.projects} />
        <Skills skillGroups={cvData.skillGroups} />
        <Contact profile={cvData.profile} />
      </main>
    </div>
  );
}
