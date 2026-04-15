import { PageWrapper } from '../components/layout/PageWrapper';
import { portfolioData } from '../data/portfolio';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, SectionWrapper, AnimatedText } from '../components/ui';

export function Home() {
  return (
    <PageWrapper>
      <section className="space-y-20 pt-10">
        {/* Hero Section */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="w-24 h-24 rounded-3xl bg-white shadow-2xl flex items-center justify-center text-4xl font-black border border-white/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-gradient">{portfolioData.name.charAt(0)}</span>
          </motion.div>
          
          <div className="space-y-4">
            <AnimatedText 
              text={portfolioData.name} 
              className="text-6xl font-extrabold tracking-tighter"
            />
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-brand-accent font-semibold tracking-tight"
            >
              {portfolioData.title}
            </motion.p>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl leading-relaxed text-brand-text/70 max-w-xl font-medium"
          >
            {portfolioData.objective}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <div className="flex gap-3">
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-white/50">
                <Linkedin size={22} />
              </a>
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-white/50">
                <Github size={22} />
              </a>
            </div>
            
            <div className="h-10 w-[1px] bg-brand-accent/20" />
            
            <Link to="/contact" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
              Let's Talk <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Featured Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-1 rounded-[32px] bg-gradient-to-r from-brand-accent/20 via-white/50 to-brand-accent/20 shadow-xl"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-[31px] p-8 flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-brand-text text-white">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent mb-1">Currently working on</p>
              <h3 className="text-lg font-bold">ChitChat — Social Media App with Glass UI</h3>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <SectionWrapper title="Featured Work">
          <div className="grid gap-8">
            {portfolioData.projects.slice(0, 2).map((project, i) => (
              <Card key={project.id} delay={i * 0.1}>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">{project.title}</h3>
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                  <p className="text-brand-text/60 text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest bg-white rounded-lg border border-brand-accent/5 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[48px] bg-brand-text text-white space-y-6 relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
          <h2 className="text-4xl font-bold tracking-tight relative z-10">Ready to start your next project?</h2>
          <p className="text-xl opacity-70 max-w-md relative z-10 font-medium">I'm currently open to new opportunities and collaborations.</p>
          <div className="pt-4 relative z-10">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-text rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
              Get in touch
            </Link>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
