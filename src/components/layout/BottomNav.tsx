import { motion, AnimatePresence } from 'motion/react';
import { Home, FileText, Briefcase, Mail, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/resume', label: 'Resume', icon: FileText },
  { path: '/publications', label: 'Pubs', icon: BookOpen },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export function BottomNav() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (scrollDelta > 10 && currentScrollY > 100) {
        setIsVisible(false);
      } else if (scrollDelta < -10) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ 
            y: { type: 'spring', damping: 25, stiffness: 120 },
            opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed bottom-6 sm:bottom-8 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none"
        >
          <nav className="glass-premium rounded-full px-2 py-2 flex items-center gap-1 md:gap-2 pointer-events-auto relative shadow-2xl transition-shadow duration-500">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative flex flex-col items-center justify-center px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-500 group",
                    isActive ? "text-brand-text" : "text-brand-accent hover:text-brand-text"
                  )}
                >
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                      <motion.div
                        layoutId="nav-glow"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-brand-text/20 blur-sm rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    </>
                  )}
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <item.icon 
                      size={20} 
                      strokeWidth={isActive ? 2.5 : 2} 
                      className={cn("transition-transform duration-300", isActive && "scale-110")}
                    />
                    <span className="text-[8px] sm:text-[9px] md:text-xs font-bold mt-1 uppercase tracking-[0.1em] sm:tracking-[0.15em]">
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
