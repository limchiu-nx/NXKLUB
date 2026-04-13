import React from 'react';
import { Logo } from './Icon';

interface FooterProps {
  setActivePage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => (
  <footer className="bg-black border-t border-white/10 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Logo className="h-8" />
          </div>
          <p className="text-gray-400 max-w-xs">
            Where money connects to understanding, trust, and readiness — before it connects to markets.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li 
              className="hover:text-brand cursor-pointer transition-colors"
              onClick={() => setActivePage?.('education')}
            >
              Education Hub
            </li>
            <li 
              className="hover:text-brand cursor-pointer transition-colors"
              onClick={() => setActivePage?.('opportunities')}
            >
              Opportunities
            </li>
            <li 
              className="hover:text-brand cursor-pointer transition-colors"
              onClick={() => setActivePage?.('lucky')}
            >
              Lucky XO
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Community</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li 
              className="hover:text-brand cursor-pointer transition-colors"
              onClick={() => setActivePage?.('join')}
            >
              Join NXKLUB
            </li>
            <li>
              <a 
                href="https://x.com/NXKlub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                Twitter / X
              </a>
            </li>
            <li>Discord</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <p>© 2026 NXKLUB. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span 
            className="hover:text-brand cursor-pointer transition-colors"
            onClick={() => setActivePage?.('privacy')}
          >
            Privacy Policy
          </span>
          <span 
            className="hover:text-brand cursor-pointer transition-colors"
            onClick={() => setActivePage?.('terms')}
          >
            Terms of Service
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
