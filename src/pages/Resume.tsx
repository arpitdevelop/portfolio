import { PageWrapper } from '../components/layout/PageWrapper';
import { portfolioData } from '../data/portfolio';
import { Download, MapPin, Calendar } from 'lucide-react';
import { Card, SectionWrapper } from '../components/ui';
import { motion } from 'motion/react';

export function Resume() {
  return (
    <PageWrapper>
      <div className="space-y-16">
        <div className="flex items-end justify-between">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold tracking-tighter">Resume</h1>
            <p className="text-xl text-brand-accent font-medium">My professional journey and technical expertise.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-brand-text text-white rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl">
            <Download size={18} /> Download PDF
          </button>
        </div>

        {/* Experience Timeline */}
        <SectionWrapper title="Experience">
          <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-accent/10">
            {portfolioData.experience.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10 space-y-4"
              >
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-brand-bg-secondary shadow-sm z-10" />
                
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-accent flex items-center gap-2">
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-accent font-semibold">
                    <span>{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-accent/40" />
                    <span className="flex items-center gap-1 text-xs uppercase tracking-widest"><MapPin size={12} /> {exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-brand-text/70 leading-relaxed font-medium flex gap-3">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-accent/30 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Skills Grid */}
        <SectionWrapper title="Technical Arsenal">
          <div className="grid gap-10">
            {Object.entries(portfolioData.skills).map(([category, skills], i) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent/50">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {(skills as string[]).map((skill) => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white shadow-sm border border-white/50 rounded-2xl text-sm font-bold tracking-tight hover:shadow-md hover:border-brand-accent/20 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Education */}
        <SectionWrapper title="Education">
          <div className="grid gap-6">
            {portfolioData.education.map((edu, i) => (
              <Card key={i}>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tight">{edu.school}</h3>
                    <p className="text-brand-accent font-semibold">{edu.degree}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-accent">{edu.period}</p>
                    <p className="text-xs font-medium text-brand-accent/60 uppercase tracking-widest">{edu.location}</p>
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
