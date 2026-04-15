import { PageWrapper } from '../components/layout/PageWrapper';
import { portfolioData } from '../data/portfolio';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, SectionWrapper } from '../components/ui';
import React, { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <PageWrapper>
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tighter">Contact</h1>
          <p className="text-xl text-brand-accent font-medium">Have a project in mind? Let's talk.</p>
        </div>

        <div className="grid gap-16">
          <Card className="bg-white/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-white/50 focus:border-brand-accent/30 focus:shadow-lg outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-white/50 focus:border-brand-accent/30 focus:shadow-lg outline-none transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent ml-1">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-brand-bg border border-white/50 focus:border-brand-accent/30 focus:shadow-lg outline-none transition-all resize-none font-medium"
                />
              </div>
              <button 
                disabled={status !== 'idle'}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-brand-text text-white rounded-2xl font-bold text-lg hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:scale-100 shadow-xl"
              >
                {status === 'idle' && <><Send size={20} /> Send Message</>}
                {status === 'sending' && "Sending..."}
                {status === 'sent' && "Message Sent!"}
              </button>
            </form>
          </Card>

          <SectionWrapper title="Connect with me">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: portfolioData.linkedin },
                { icon: Github, label: 'GitHub', href: portfolioData.github },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Mail, label: 'Email', href: `mailto:${portfolioData.email}` }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-white/50 group"
                >
                  <social.icon size={24} className="group-hover:text-brand-accent transition-colors" />
                  <span className="text-xs font-bold uppercase tracking-widest">{social.label}</span>
                </a>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </PageWrapper>
  );
}
