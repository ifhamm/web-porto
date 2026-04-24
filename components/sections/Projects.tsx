import { MotionReveal } from "@/components/MotionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { Project } from "@/lib/types";

type ProjectsProps = {
  projects: Project[];
};

const cardBackgrounds = ["bg-[#ff2f00]", "bg-[#f4ff2a]", "bg-[#00d8ff]", "bg-white"];

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="anchor-offset px-4 py-16 md:px-6">
      <MotionReveal>
        <div className="brutal-block bg-white p-6 md:p-8">
          <SectionTitle eyebrow="Build Log" title="Featured Projects" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={`${project.title}-${project.year}`}
                className={`group border-4 border-black p-5 shadow-[8px_8px_0_#101010] transition duration-150 hover:-translate-x-1 hover:-translate-y-1 ${cardBackgrounds[index % cardBackgrounds.length]}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="border-[3px] border-black bg-white px-2 py-0.5 text-xs font-black uppercase tracking-[0.16em]">
                    {project.year}
                  </span>
                  <span className="text-xs font-black uppercase tracking-[0.14em]">{project.role}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black uppercase leading-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-semibold">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((skill) => (
                    <li key={skill} className="border-[3px] border-black bg-white px-2 py-1 text-[11px] font-black uppercase tracking-widest">
                      {skill}
                    </li>
                  ))}
                </ul>
                {(project.githubUrl || project.driveUrl) && (
                  <div className="mt-6 border-t-4 border-black pt-3">
                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em]">Project Links</p>
                    <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex flex-1 items-center justify-between gap-2 border-4 border-black bg-black px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#f4ff2a] shadow-[5px_5px_0_#101010] transition hover:-translate-y-0.5 hover:bg-[#ff2f00] hover:text-white"
                      >
                        Open GitHub
                        <span aria-hidden="true" className="text-sm leading-none transition group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    )}
                    {project.driveUrl && (
                      <a
                        href={project.driveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex flex-1 items-center justify-between gap-2 border-4 border-black bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-black shadow-[5px_5px_0_#101010] transition hover:-translate-y-0.5 hover:bg-[#00d8ff]"
                      >
                        Open Drive
                        <span aria-hidden="true" className="text-sm leading-none transition group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    )}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
