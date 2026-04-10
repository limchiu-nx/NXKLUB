import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Icon';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Education Hub', id: 'education' },
    { name: 'Opportunities', id: 'opportunities' },
    { name: 'Lucky XO', id: 'lucky' },
  ];

  const JoinButton = ({ mobile = false }: { mobile?: boolean }) => (
    <button
      onClick={() => {
        setActivePage('join');
        if (mobile) setIsOpen(false);
      }}
      className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-300 shadow-[0_0_15px_#F36B15] hover:shadow-[0_0_25px_#F36B15] hover:scale-105 active:scale-95 ${
        mobile ? 'w-full mt-4' : 'ml-4'
      }`}
      style={{
        background: 'linear-gradient(to bottom, #FF9151, #F56411)',
      }}
    >
      <span style={{ opacity: 0.7 }}>Join NXKLUB</span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
            <Logo className="h-10" />
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activePage === item.id ? 'text-brand' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <JoinButton />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  {item.name}
                </button>
              ))}
              <JoinButton mobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
