/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EducationHub from './pages/EducationHub';
import Opportunities from './pages/Opportunities';
import LuckyXO from './pages/LuckyXO';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleSetActivePage = (page: string) => {
    if (page === 'join') {
      setIsJoinModalOpen(true);
    } else {
      setActivePage(page);
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={handleSetActivePage} />;
      case 'education':
        return <EducationHub />;
      case 'opportunities':
        return <Opportunities setActivePage={handleSetActivePage} />;
      case 'lucky':
        return <LuckyXO setActivePage={handleSetActivePage} />;
      default:
        return <Home setActivePage={handleSetActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-brand selection:text-black">
      <Navbar activePage={activePage} setActivePage={handleSetActivePage} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setActivePage={handleSetActivePage} />

      {/* Global Join Modal */}
      <AnimatePresence>
        {isJoinModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsJoinModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <button
                  onClick={() => setIsJoinModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 uppercase">
                  <span className="gradient-text">Join NXKLUB</span>
                </h2>
                <h3 className="text-xl text-white font-medium mb-4">
                  Learn first. Then choose your path.
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  NXKLUB is where people come to understand how modern financial opportunities actually work — before committing capital.
                </p>
                <p className="text-gray-400 leading-relaxed mb-10">
                  Everything inside is education-led. Most members start by observing. Participation only happens when you’re ready.
                </p>
                
                <a
                  href="https://t.me/nxklub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-[0_0_15px_#F36B15] hover:shadow-[0_0_25px_#F36B15] hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(to bottom, #FF9151, #F56411)',
                  }}
                >
                  <span style={{ opacity: 0.7 }}>Join via Telegram</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
