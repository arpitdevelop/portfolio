import { PageWrapper } from '../components/layout/PageWrapper';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import { Card, SectionWrapper } from '../components/ui';

export function Projects() {
  return (
    <PageWrapper>
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tighter">Projects</h1>
          <p className="text-xl text-brand-accent font-medium">A curated collection of digital experiences and technical experiments.</p>
        </div>

        <SectionWrapper>
          <div className="grid gap-10">
            {portfolioData.projects.map((project, i) => (
              <Card key={project.id} delay={i * 0.1} className="overflow-hidden">
                <div className="space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} className="p-3 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-white/50">
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} className="p-3 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-white/50">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-brand-text/70 text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="pt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-accent group-hover:text-brand-text transition-colors">
                    View Project Details <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </PageWrapper>
  );
}

const ArrowRight = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
