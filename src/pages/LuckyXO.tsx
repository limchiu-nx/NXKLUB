import React from 'react';
import { motion } from 'motion/react';
import { Ticket, Gamepad2, Target, Users, ArrowRight, ExternalLink } from 'lucide-react';
import ticketImg from '../assets/images/lukcyxoticket.png';
import heroImg from '../assets/images/hero_image_xo.png';

interface LuckyXOProps {
  setActivePage?: (page: string) => void;
}

const LuckyXO: React.FC<LuckyXOProps> = ({ setActivePage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px]" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl flex flex-col items-center"
          >
            <img 
              src={heroImg} 
              alt="LuckyXO Hero" 
              className="w-full max-w-lg mb-8"
              referrerPolicy="no-referrer"
            />
            
            <h1 className="text-xl font-display font-semibold mb-6 uppercase text-white">
              Engage. Participate. Accumulate.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
              LuckyXO is a simple prediction game shared across the NX ecosystem.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">
              Earn tickets, choose outcomes, and participate in scheduled rounds — without committing capital. 
              It’s designed to reward engagement across NX platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to Get Tickets Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 uppercase">
                <span className="gradient-text">How to Get Tickets</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                You can receive LuckyXO tickets by:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Joining the NXKLUB community',
                  'Creating an account on NexStox or NX Market',
                  'Logging into both platforms',
                  'Referring verified users'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-white">
                    <div className="w-2 h-2 bg-brand rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 italic mb-10">
                The more engaged you are, the more tickets you can accumulate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://nexstox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand text-black font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Create an Account on<br/> NexStox
                  <ExternalLink size={18} />
                </a>
                <a 
                  href="https://nxmarket.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:border-brand hover:text-brand transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Create an Account on<br/> NX Market
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-brand/20 rounded-full blur-[100px] animate-pulse" />
              
              {/* Floating Images */}
              <div className="relative z-10 w-full max-w-[500px] aspect-square flex items-center justify-center">
                {/* Background Ticket (Smaller, Darker, Blurred) */}
                <motion.img
                  src={ticketImg}
                  alt="LuckyXO Ticket Background"
                  referrerPolicy="no-referrer"
                  animate={{
                    y: [10, -10, 10],
                    rotate: [-15, -12, -15],
                    x: [-20, -15, -20]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute z-0 w-[80%] h-auto opacity-60"
                  style={{ filter: 'brightness(0.3) blur(6px)' }}
                />

                {/* Main Ticket */}
                <motion.img
                  src={ticketImg}
                  alt="LuckyXO Ticket"
                  referrerPolicy="no-referrer"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 w-full h-auto drop-shadow-[0_0_30px_rgba(255,143,3,0.3)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How LuckyXO Works Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 uppercase">
              <span className="gradient-text">How LuckyXO Works</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Tickets', desc: 'You receive participation tickets based on your activity.', icon: <Ticket className="text-brand" /> },
              { title: 'Outcomes', desc: 'You place them on outcomes you think will be selected.', icon: <Target className="text-brand" /> },
              { title: 'Schedule', desc: 'Each round runs on a fixed schedule.', icon: <ArrowRight className="text-brand" /> },
              { title: 'Results', desc: 'Results are revealed at the end of the round.', icon: <ExternalLink className="text-brand" /> },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-zinc-950 border border-white/10 rounded-2xl hover:border-brand/50 transition-colors group"
              >
                <div className="mb-6 p-3 bg-brand/10 rounded-xl w-fit group-hover:bg-brand/20 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-4 uppercase">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Your share of the prize pool depends on how many tickets you place and overall participation.
            </p>
            <p className="text-brand font-bold uppercase tracking-widest">
              No deposits required to start.
            </p>
          </div>
        </div>
      </section>

      {/* Why LuckyXO Exists Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 uppercase">
              <span className="gradient-text">Why LuckyXO Exists</span>
            </h2>
            <p className="text-xl text-gray-400">
              LuckyXO is designed to:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Encourage ecosystem participation',
              'Reward engagement',
              'Introduce users to NX platforms in a simple, low-pressure way'
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#110F1C] border border-white/10 rounded-2xl text-center hover:border-brand/30 transition-colors group"
              >
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors font-medium">{text}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-500 italic">
              It’s a lightweight layer connecting community, platform activity, and participation.
            </p>
          </div>
        </div>
      </section>

      {/* Where You Play Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-12 uppercase">
            <span className="gradient-text">Where You Play</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 mb-12">
            <div className="flex items-center gap-4 text-3xl font-display font-bold text-white">
              <span className="text-brand">→</span> NexStox
            </div>
            <div className="flex items-center gap-4 text-3xl font-display font-bold text-white">
              <span className="text-brand">→</span> NX Market
            </div>
          </div>
          <p className="text-xl text-gray-400">
            Create an account to start earning and using tickets.
          </p>
        </div>
      </section>

      {/* Community Boost Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#190E00] rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center border border-brand/10">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF5B03]/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF5B03]/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <Users size={64} className="text-brand mx-auto mb-8" />
              <h2 className="text-4xl md:text-6xl font-display font-semibold mb-8 uppercase">
                <span className="gradient-text">Community Boost</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join NXKLUB to receive bonus tickets and discuss outcomes with other participants.
              </p>
              <button 
                onClick={() => setActivePage?.('join')}
                className="px-10 py-5 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 mx-auto group text-lg shadow-[0_0_15px_#F36B15] hover:shadow-[0_0_25px_#F36B15] hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(to bottom, #FF9151, #F56411)',
                }}
              >
                <span style={{ opacity: 0.7 }}>Join NXKLUB & Get Free Tickets</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" style={{ opacity: 0.7 }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
            LuckyXO is an optional participation feature within the NX ecosystem.
            <br />
            <span className="text-white font-medium mt-4 block">
              Engage, observe, and accumulate through structured participation.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LuckyXO;
