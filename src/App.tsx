/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';
import { Publications } from './pages/Publications';
import { Contact } from './pages/Contact';
import { BottomNav } from './components/layout/BottomNav';
import { Background } from './components/layout/Background';
import { useEffect } from 'react';

export default function App() {
  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-brand-bg selection:bg-brand-text selection:text-brand-bg relative">
        <Background />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <BottomNav />
      </div>
    </Router>
  );
}
