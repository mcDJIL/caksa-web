'use client';

import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Clock,
} from 'lucide-react';

const Stats = () => {
  // Stats background is Blue (#084887) for contrast
  const stats = [
    { icon: Trophy, label: "Awards Won", value: "25+", color: "text-[#f58a07]" },
    { icon: Clock, label: "Years of R&D", value: "08", color: "text-white" },
    { icon: Users, label: "Team Members", value: "40+", color: "text-[#f58a07]" },
  ];

  return (
    <section id="stats" className="py-20 bg-[#084887]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className={`p-4 rounded-xl bg-black/20 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-blue-100 text-sm uppercase tracking-wider font-bold opacity-80">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;