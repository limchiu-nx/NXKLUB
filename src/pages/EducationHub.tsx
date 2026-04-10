import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen, Shield, BarChart3, Scale, Info, ArrowRight, Target } from 'lucide-react';
const nx3dmark = "https://i.imgur.com/61Pnt6T.png";

const EducationHub: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const focusPoints = [
    { text: 'How real-world assets and yield structures work', icon: <BarChart3 className="text-brand" /> },
    { text: 'Where risk actually lives — and where it’s often misunderstood', icon: <Shield className="text-brand" /> },
    { text: 'The difference between ownership, speculation, and execution', icon: <Scale className="text-brand" /> },
    { text: 'Regulation, incentives, and market structure', icon: <Info className="text-brand" /> },
    { text: 'How to evaluate opportunities without pressure', icon: <Target className="text-brand" /> },
  ];

  const blogPosts = [
    {
      title: 'Understanding Real-World Asset Tokenization',
      category: 'Fundamentals',
      image: 'https://picsum.photos/seed/finance/800/600',
      date: 'Mar 24, 2026'
    },
    {
      title: 'Risk Management in Decentralized Markets',
      category: 'Strategy',
      image: 'https://picsum.photos/seed/risk/800/600',
      date: 'Mar 20, 2026'
    },
    {
      title: 'The Evolution of Yield Structures',
      category: 'Analysis',
      image: 'https://picsum.photos/seed/yield/800/600',
      date: 'Mar 15, 2026'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
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
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/15 rounded-full blur-[120px]" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
           
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-semibold uppercase leading-tight">
              <span className="gradient-text font-extrabold">Education Hub</span>
            </h1>
             <p className="text-xl md:text-2xl text-white uppercase font-bold leading-relaxed mb-8">
              Understand how it works — before you decide.
             </p>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
              Our education hub is where we break down how modern financial opportunities actually function.
            </p>
            <div className="flex items-center justify-center gap-4 text-brand font-bold uppercase tracking-widest">
              <div className="h-px w-12 bg-brand" />
              <span>What you’ll find here</span>
              <div className="h-px w-12 bg-brand" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Section */}
      <section ref={sectionRef} className="py-24 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-semibold mb-16 uppercase text-center"
          >
            <span className="gradient-text">Our content focuses on</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Box: NX 3D Mark Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-brand/40 rounded-full blur-[100px] hidden lg:block" />
              <motion.img 
                src={nx3dmark} 
                alt="NX 3D Mark" 
                style={isMobile ? {} : { y, rotate }}
                className="relative w-full max-w-md h-auto z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Right Box: Points List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="bg-[#110F1C] border border-white/10 rounded-2xl p-4 md:p-6 space-y-2">
                {[
                  'How real-world assets and yield structures work',
                  'Where risk actually lives — and where it’s often misunderstood',
                  'The difference between ownership, speculation, and execution',
                  'Regulation, incentives, and market structure',
                  'How to evaluate opportunities without pressure'
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors group"
                  >
                    <div className="mt-1.5 w-2 h-2 bg-brand rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(255,143,3,0.5)]" />
                    <p className="text-lg text-gray-300 group-hover:text-white transition-colors">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Block Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-display font-semibold uppercase mb-4">Latest Insights</h2>
              <p className="text-gray-400">Deep dives into the NX ecosystem and beyond.</p>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-brand font-bold uppercase tracking-widest hover:text-white transition-colors">
              View All <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-brand uppercase tracking-widest border border-white/10">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-3 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">{post.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intent Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 bg-black border border-white/5 rounded-[40px] shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 uppercase">
              <span className="gradient-text">A note on intent</span>
            </h2>
            <p className="text-2xl text-white font-medium mb-8">
              NXKLUB education is non-transactional by design.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Understanding happens here. Participation happens elsewhere — if and when it makes sense for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Line */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-display italic text-gray-500">
            Where money connects to understanding — <span className="text-white">before it connects to markets.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default EducationHub;
