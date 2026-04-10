import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Upredic, Datodurian, NXmarket, Nexstox } from '../components/Icon';
const nx3dmark = "https://i.imgur.com/61Pnt6T.png";

interface HomeProps {
  setActivePage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Background Image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full max-w-2xl opacity-[0.15] blur-[10px] hidden lg:flex items-center justify-end">
            <img 
              src={nx3dmark} 
              alt="NX 3D Mark Background 2" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Main Glowing Light - Top Left */}
          <motion.div 
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-[#FF8F03]/20 rounded-full blur-[120px]" 
          />
          
          {/* Secondary Glowing Light - Bottom Right */}
          <motion.div 
            animate={{
              scale: [1.4, 1, 1.4],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] bg-[#FF8F03]/15 rounded-full blur-[120px]" 
          />

          {/* Moving Accent Light */}
          <motion.div 
            animate={{
              x: ['-20%', '20%', '-20%'],
              y: ['-10%', '10%', '-10%'],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF8F03]/10 rounded-full blur-[150px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-semibold leading-tight mb-6 uppercase">
              <span className="text-white">Your gateway to </span>
              <span className="gradient-text">
                <span className="font-extrabold">earning</span>, 
                <span className="font-extrabold sm:pl-[15px]">investing</span>, and <br className="hidden sm:block" />
                <span className="font-extrabold sm:px-[15px]">real-world yield.</span>
              </span>
            </h1>
            <p className="text-xl md:text-xl text-gray-400 mb-4 font-medium">
              NXKLUB helps you understand and access opportunities — from tokenized stocks to high-yield strategies — with context, before capital.
            </p>
            <p className="text-lg text-brand/80 mb-10 font-medium">
              Learn. Compare. Position yourself for what comes next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActivePage('join')}
                className="px-8 py-4 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_15px_#F36B15] hover:shadow-[0_0_25px_#F36B15] hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(to bottom, #FF9151, #F56411)',
                }}
              >
                <span style={{ opacity: 0.7 }}>Join the NXKLUB Community</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" style={{ opacity: 0.7 }} />
              </button>
              <button 
                onClick={() => setActivePage('opportunities')}
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:border-brand hover:text-brand transition-all duration-300"
              >
                Explore Opportunities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-semibold mb-6 uppercase"
            >
              <span className="gradient-text">Our Products.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[              
              {
                title: 'Dato Durian',
                icon: <Datodurian className="w-full h-auto" />,
              },
              {
                title: 'NX Market',
                icon: <NXmarket className="w-full h-auto" />,
              },
              {
                title: 'NexStox',
                icon: <Nexstox className="w-full h-auto" />,
              }
            ].map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => {
                  setActivePage('opportunities');
                  setTimeout(() => {
                    const element = document.getElementById('ecosystem');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="aspect-square bg-[#160D0B] border border-white/5 rounded-3xl shadow-[inset_0_0_30px_#FF8F0344,inset_0_-15px_25px_-10px_#FF5306] hover:shadow-[inset_0_0_30px_#FF8F0344,inset_0_-90px_25px_-10px_#FF8F0344] hover:border-brand/50 transition-all duration-500 group flex items-center justify-center p-4 cursor-pointer relative overflow-hidden"
              >
                <div className="w-[80%] flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-4">
                  {product.icon}
                </div>
                <div className="absolute bottom-[10%] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-brand font-bold text-xs uppercase tracking-widest">
                  Learn More
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display  mb-8 uppercase">
                <span className="gradient-text font-semibold">Opportunity isn’t the problem.</span><br/><span className="font-extrabold">Clarity is.</span>
              </h2>
              <div className="space-y-4 text-xl text-gray-400">
                <p>Markets move fast. Narratives move faster.</p>
                <p>Most people choose between chasing hype or sitting out entirely.</p>
                <p className="text-white font-medium">NXKLUB helps you engage deliberately.</p>
              </div>
            </motion.div>
            
            <div className="relative">
              {/* Central Glowing Light */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/40 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {[
                  { title: 'Earn', desc: 'Access structured yield grounded in real business activity.', icon: <TrendingUp className="text-brand" /> },
                  { title: 'Invest', desc: 'Own tokenized real-world assets with clarity and context.', icon: <ShieldCheck className="text-brand" /> },
                  { title: 'Trade', desc: 'Understand market structure and execution — not just signals.', icon: <Zap className="text-brand" /> },
                  { title: 'Speculate', desc: 'Take defined positions in crypto or prediction markets with clear risk boundaries.', icon: <Globe className="text-brand" /> },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-brand/50 transition-colors group"
                  >
                    <div className="mb-4 p-3 bg-brand/10 rounded-xl w-fit group-hover:bg-brand/20 transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2 uppercase">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Position Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-12 uppercase">
              <span className="gradient-text">Position yourself for what comes next.</span>
            </h2>
            <div className="space-y-6">
              {[
                'Move from speculation to ownership',
                'Move from hype to structure',
                'Move from confusion to conviction'
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-medium text-gray-300"
                >
                  <div className="w-2 h-2 bg-brand rounded-full" />
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Path Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-16 uppercase">
            <span className="gradient-text">Your Path Inside NXKLUB</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {['Join', 'Learn', 'Explore', 'Participate'].map((step, i) => (
              <div key={step} className="relative">
                <div className="text-8xl font-display font-bold text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 select-none">
                  0{i + 1}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand/10 border border-brand/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand font-bold text-xl">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-2 uppercase">{step}</h3>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-linear-to-r from-brand/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
          
          <p className="text-2xl text-gray-400 font-medium italic">
            Start small. Move deliberately. Scale when ready.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-[30px] overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe
              src="https://www.youtube.com/embed/WGorh2NqVwY"
              title="NXKLUB Video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* Footer Statement */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full md:w-[60%] bg-[#190E00] rounded-[30px] p-12 md:p-20 overflow-hidden text-center"
          >
            {/* Blur effects */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF5B03]/30 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF5B03]/30 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-semibold mb-8 uppercase">
                <span className="gradient-text">Where money connects</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                At NXKLUB, money connects to understanding, trust, and readiness — before it connects to markets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
