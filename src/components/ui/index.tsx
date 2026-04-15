import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  key?: string | number;
}

export function Card({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "group relative p-8 rounded-[32px] bg-brand-bg-secondary border border-white/20 shadow-sm hover:shadow-xl hover:shadow-brand-glow transition-all duration-300",
        className
      )}
    >
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function SectionWrapper({ children, className, title }: { children: ReactNode; className?: string; title?: string }) {
  return (
    <section className={cn("space-y-8 py-12", className)}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-[0.3em] text-brand-accent/60 ml-1"
        >
          {title}
        </motion.h2>
      )}
      {children}
    </section>
  );
}

export function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <div className={cn("flex flex-wrap gap-x-[0.3em]", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.1,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function GlassContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("glass-premium rounded-[40px] p-1", className)}>
      <div className="bg-brand-bg-secondary/50 rounded-[39px] p-8">
        {children}
      </div>
    </div>
  );
}
