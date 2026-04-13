import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
              Privacy Policy
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
                  <Shield className="text-brand" size={24} />
                  1. Information We Collect
                </h2>
                <div className="space-y-4 leading-relaxed">
                  <p>
                    NXKLUB is primarily an educational platform. We collect minimal information necessary to provide our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="text-white font-medium">Account Information:</span> If you join our community via Telegram or other platforms, we may receive basic profile data as permitted by those services.</li>
                    <li><span className="text-white font-medium">Usage Data:</span> We collect anonymous technical data about how you interact with our website to improve performance and user experience.</li>
                    <li><span className="text-white font-medium">Communication:</span> If you contact us directly, we keep a record of that correspondence.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-white uppercase mb-6 flex items-center gap-3">
                  <Lock className="text-brand" size={24} />
                  2. How We Use Information
                </h2>
                <p className="leading-relaxed">
                  We use the information we collect to maintain the platform, provide educational content, and communicate important updates. We do <span className="text-white font-bold italic">not</span> sell your personal data to third parties. Our primary goal is education, not data monetization.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-white uppercase mb-6 flex items-center gap-3">
                  <Eye className="text-brand" size={24} />
                  3. Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure. We encourage users to use strong, unique passwords and be mindful of the information they share in community spaces.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-white uppercase mb-6 flex items-center gap-3">
                  <FileText className="text-brand" size={24} />
                  4. Third-Party Links
                </h2>
                <p className="leading-relaxed">
                  Our platform contains links to external sites (e.g., Twitter, Telegram, Discord). We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read their privacy policies.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 bg-zinc-900/50 border border-white/10 rounded-3xl">
                <h3 className="text-xl font-display font-semibold text-white uppercase mb-4">Questions?</h3>
                <p className="text-gray-400 mb-6">
                  If you have any questions about this Privacy Policy, please reach out to us through our community channels.
                </p>
                <a 
                  href="https://t.me/nxklub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
