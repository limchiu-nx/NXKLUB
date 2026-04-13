import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Scale, UserCheck, HelpCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-black text-gray-300">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-brand uppercase mb-6">
              Terms of Service
            </h1>
            
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-display font-semibold text-white uppercase mb-6 flex items-center gap-3">
                  <Scale className="text-brand" size={24} />
                  1. Educational Purpose Only
                </h2>
                <div className="space-y-4 leading-relaxed">
                  <p className="text-white font-medium">
                    NXKLUB is an educational platform. Nothing on this website or within our community spaces constitutes financial, investment, legal, or tax advice.
                  </p>
                  <p>
                    All content is provided for informational purposes only. You should not construe any such information or other material as legal, tax, investment, financial, or other advice. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other content on the platform before making any decisions based on such information.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-white uppercase mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-brand" size={24} />
                  2. Risk Disclosure
                </h2>
                <p className="leading-relaxed">
                  Investing in financial markets, digital assets, and real-world yield opportunities involves significant risk of loss. Past performance is not indicative of future results. NXKLUB does not guarantee any specific outcome or profit. You should only commit capital that you can afford to lose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-white uppercase mb-6 flex items-center gap-3">
                  <UserCheck className="text-brand" size={24} />
                  3. User Conduct
                </h2>
                <p className="leading-relaxed">
                  By using NXKLUB, you agree to act with integrity and respect within our community. Harassment, spamming, or the promotion of fraudulent schemes is strictly prohibited and will result in immediate removal from the platform and community spaces.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-white uppercase mb-6 flex items-center gap-3">
                  <HelpCircle className="text-brand" size={24} />
                  4. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, NXKLUB and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 bg-zinc-900/50 border border-white/10 rounded-3xl">
                <h3 className="text-xl font-display font-semibold text-white uppercase mb-4">Acceptance</h3>
                <p className="text-gray-400 mb-6">
                  By accessing or using NXKLUB, you signify your agreement to these Terms of Service. If you do not agree, please do not use the platform.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">NXKLUB Ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
