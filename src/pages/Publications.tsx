import { PageWrapper } from '../components/layout/PageWrapper';
import { portfolioData } from '../data/portfolio';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Card, SectionWrapper } from '../components/ui';

export function Publications() {
  return (
    <PageWrapper>
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tighter">Publications</h1>
          <p className="text-xl text-brand-accent font-medium">Sharing my thoughts and findings on mobile development.</p>
        </div>

        <SectionWrapper>
          <div className="grid gap-8">
            {portfolioData.publications.map((pub, i) => (
              <a 
                key={i} 
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="hover:bg-white transition-colors">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-brand-bg text-brand-accent shadow-inner">
                        <BookOpen size={24} />
                      </div>
                      <ExternalLink size={20} className="text-brand-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold tracking-tight group-hover:text-brand-accent transition-colors">{pub.title}</h2>
                      <p className="text-brand-text/60 text-lg leading-relaxed font-medium">{pub.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </PageWrapper>
  );
}
