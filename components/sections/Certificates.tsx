'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    name: 'Huawei HCIA-AI V3.5 (Turkish)',
    issuer: 'Huawei',
    image: '/api/placeholder/400/300',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    name: 'BTK-Veri Tabanına Giriş',
    issuer: 'BTK Akademi',
    image: '/api/placeholder/400/300',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Sertifikalar
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Aldığım profesyonel sertifikalar ve eğitimler
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative aspect-[4/3] bg-slate-700/50 overflow-hidden">
                  <motion.div
                    className={`w-full h-full bg-gradient-to-br ${cert.gradient} flex items-center justify-center`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Award size={80} className="text-white/80" />
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {cert.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-slate-400">{cert.issuer}</p>

                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.button>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
