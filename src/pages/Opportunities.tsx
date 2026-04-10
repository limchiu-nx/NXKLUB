import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Upredic, Datodurian, IconNX, Logo, NXmarket, Nexstox} from '../components/Icon';

interface OpportunitiesProps {
  setActivePage: (page: string) => void;
}

const Opportunities: React.FC<OpportunitiesProps> = ({ setActivePage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand/15 rounded-full blur-[120px]" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold uppercase">
              <span className="gradient-text font-extrabold">Opportunities</span>
            </h1>
            <div className="text-xl md:text-2xl text-white uppercase font-bold leading-relaxed mb-8">
              <p>Understand what exists — before you participate.</p>
            </div>
            <div className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
              <p>NXKLUB presents a range of opportunities across<br/> yield, investment, speculation, and trading.</p>
            </div>
            <div className="text-lg text-brand/80 mb-10 font-medium">
              <p>This page explains the landscape. Participation happens elsewhere — and only when you’re ready.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opportunity Landscape */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 uppercase">
              <span className="gradient-text">The opportunity landscape</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Not all opportunities are the same. They differ by structure, risk, time horizon, and intent.
              Within the NX ecosystem, opportunities generally fall into four categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Yield',
                desc: 'Income generated from real economic activity — not price appreciation alone.',
                points: [
                  'real-world businesses or assets',
                  'defined structures for returns',
                  'clearer sources of income'
                ],
                footer: 'Yield can offer stability, but only when the source of returns is understood.'
              },
              {
                title: 'Invest',
                desc: 'Longer-term exposure through ownership or structured participation.',
                points: [
                  'value structure, governance, and regulation',
                  'focus on assets over narratives',
                  'think in longer time horizons'
                ],
                footer: 'Investment is about alignment, not timing.'
              },
              {
                title: 'Speculate',
                desc: 'Outcome-based participation driven by probabilities and events.',
                points: [
                  'prediction markets',
                  'event-driven outcomes',
                  'higher variance by design'
                ],
                footer: 'They can be useful — when mechanics and incentives are clearly understood.'
              },
              {
                title: 'Trade',
                desc: 'Opportunities focused on market behavior and execution.',
                points: [
                  'price movement',
                  'technical analysis',
                  'positioning and timing'
                ],
                footer: 'It requires discipline and structure, not conviction alone.'
              }
            ].map((card, i) => {
              const glowPositions = [
                'bottom-right', // 1st card
                'bottom-left',  // 2nd card
                'top-right',    // 3rd card
                'top-left'      // 4th card
              ];
              const pos = glowPositions[i];
              
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-black border border-white/10 rounded-2xl flex flex-col h-full relative overflow-hidden group"
                >
                  {/* Corner Glow Effect */}
                  <div className={`absolute w-64 h-64 bg-[#FF5B03]/15 blur-[60px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#FF5B03]/30 group-hover:blur-[80px]
                    ${pos === 'bottom-right' ? 'bottom-[-80px] right-[-80px]' : ''}
                    ${pos === 'bottom-left' ? 'bottom-[-80px] left-[-80px] md:bottom-[-80px] md:left-[-80px] max-md:bottom-[-80px] max-md:right-[-80px] max-md:left-auto' : ''}
                    ${pos === 'top-right' ? 'top-[-80px] right-[-80px] md:top-[-80px] md:right-[-80px] max-md:top-auto max-md:bottom-[-80px] max-md:right-[-80px]' : ''}
                    ${pos === 'top-left' ? 'top-[-80px] left-[-80px] md:top-[-80px] md:left-[-80px] max-md:top-auto max-md:bottom-[-80px] max-md:right-[-80px] max-md:left-auto' : ''}
                  `} />

                  <h3 className="text-2xl font-display gradient-text font-bold mb-4 uppercase relative z-10">{card.title}</h3>
                  <p className="text-white font-medium mb-6 relative z-10">{card.desc}</p>
                  <div className="mb-6 flex-grow relative z-10">
                    <p className="text-gray-500 text-sm mb-3 uppercase tracking-wider font-semibold">Typically involve:</p>
                    <ul className="space-y-2">
                      {card.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-400">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-brand rounded-full shrink-0 shadow-[0_0_8px_#FF5B03]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-white/5 text-sm text-gray-500 italic relative z-10">
                    {card.footer}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 uppercase">
              <span className="gradient-text">Opportunities in the NX ecosystem</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The NX ecosystem includes multiple platforms and initiatives, each serving a distinct role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Dato Durian',
                url: 'https://datodurian.com/',
                icon: <Datodurian className="h-10 w-auto mb-6" />,
                desc: 'A real-world asset initiative focused on tangible business activity and yield generation.',
                points: [
                  'asset-backed exposure',
                  'longer-term positioning',
                  'understanding how real businesses generate returns'
                ],
                label: 'Best suited for:'
              },
              {
                title: 'NX Market',
                url: 'https://nxmarket.com/',
                icon: <NXmarket className="h-10 w-auto mb-6" />,
                desc: 'A retail-facing execution platform providing access to selected opportunities where permitted.',
                points: [
                  'individual participants',
                  'structured retail access',
                  'regulated environments'
                ],
                label: 'Designed for:'
              },
              {
                title: 'NexStox',
                url: 'https://nexstox.com/',
                icon: <Nexstox className="h-10 w-auto mb-6" />,
                desc: 'Institutional-grade infrastructure for real-world asset issuance and participation.',
                points: [
                  'compliant investment structures',
                  'scalable participation',
                  'institutional standards'
                ],
                label: 'Designed for:'
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#110F1C] border border-white/10 rounded-2xl flex flex-col h-full transition-all duration-300 hover:border-brand hover:shadow-[0_0_20px_rgba(255,143,3,0.3)] group"
              >
                {card.icon}
                <p className="text-gray-400 mb-6">{card.desc}</p>
                <div className="mb-8">
                  <p className="text-brand/80 text-sm mb-3 uppercase tracking-wider font-semibold">{card.label}</p>
                  <ul className="space-y-2">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-brand rounded-full shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mx-auto">
                  <a 
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-normal py-3 px-6 rounded-[50px] transition-all duration-300 hover:scale-105 active:scale-95 border border-white bg-transparent opacity-50 group-hover:opacity-100 group-hover:bg-linear-to-b group-hover:from-[#FF9151] group-hover:to-[#F56411] group-hover:border-transparent"
                  >
                    <span>Visit Website</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step Section */}
      <section className="py-32 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 uppercase">
              <span className="gradient-text">Next step</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-12 font-medium">
              If you’re still orienting yourself, that’s expected.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={() => setActivePage('join')}
                  className="px-8 py-4 text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_#F36B15] hover:shadow-[0_0_25px_#F36B15] hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(to bottom, #FF9151, #F56411)',
                  }}
                >
                  <span style={{ opacity: 0.7 }}>Join the NXKLUB Community</span>
                </button>
                <p className="text-sm text-gray-500">Learn, discuss, and observe before participating.</p>
              </div>
              
              <div className="text-gray-600 font-display font-bold text-xl uppercase">Or</div>
              
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={() => setActivePage('education')}
                  className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:border-brand hover:text-brand transition-all duration-300"
                >
                  Explore educational content
                </button>
                <p className="text-sm text-gray-500">Understand the mechanics behind each opportunity.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;
