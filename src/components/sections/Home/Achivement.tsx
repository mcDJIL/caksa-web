'use client';

import { motion } from 'framer-motion';
import { 
  Trophy, 
  Medal,
  Calendar,
  Star,
} from 'lucide-react';

const Achievement = () => {
  const achievements = [
    {
      year: "2025",
      title: "1st Runner-Up D1 (Man-Machine)",
      event: "Singapore Amazing Flying Machine Competition",
      desc: "In SAFMC 2025, CAKSA competed in the D1 (Man-Machine) category and achieved the Championship Award as 1st Runner-Up in the \"Releasing Payloads at Designated Targets\" mission.",
      icon: Trophy,
      image: "/assets/img/achievements/safmc-2024.jpg"
    },
    {
      year: "2024",
      title: "Top 10 CAT D1 (Semi-Autonomous)",
      event: "Singapore Amazing Flying Machine Competition",
      desc: "The CAKSA Team (Cakrawala Skala) proudly achieved an outstanding result by securing a Top 10 position in the CAT D1 (Semi-Autonomous) category at the Singapore Amazing Flying Machine Competition (SAFMC) 2024. This prestigious event attracted teams from various countries, showcasing cutting-edge UAV technology and innovation.",
      icon: Star,
      image: "/assets/img/achievements/safmc-2024.jpg"
    },
    {
      year: "2024",
      title: "Rank 13th Worldwide",
      event: "TEKNOFEST International UAV Competition",
      desc: "Competing against hundreds of teams from various countries, CAKRAWALA achieved a remarkable milestone by ranking 13th in the world, outperforming many teams from renowned universities.",
      icon: Star,
      image: "/assets/img/achievements/teknofest-2024.jpg"
    },
    {
      year: "2023",
      title: "Finalist Teknofest UAV",
      event: "TEKNOFEST International UAV Competition",
      desc: "The International UAV Competition is one of the main categories at TEKNOFEST 2023, a prestigious technology festival that provides participants the opportunity to design innovative, creative, and sustainable UAVs.",
      icon: Star,
      image: "/assets/img/achievements/teknofest-uav.jpg"
    },
    {
      year: "2023",
      title: "2nd Runner-Up Startup",
      event: "TEKNOFEST International Startup Competition",
      desc: "CAKSA competed against thousands of international participants, showcasing the nation's excellence in aerospace technology and youthful innovation. Their outstanding performance earned them the 2nd Runner-Up title in this prestigious global competition.",
      icon: Trophy,
      image: "/assets/img/achievements/teknofest-startup.jpg"
    },
  ];

  return (
    <section className="py-10 bg-white relative overflow-hidden">
      {/* Background subtle effect */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-[#084887]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 bg-[#f58a07]/10 border border-[#f58a07]/30 rounded-full"
          >
            <span className="text-[#f58a07] text-xs font-bold uppercase tracking-widest">Hall of Fame</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Our History of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#084887] to-[#f58a07]">Excellence</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-2 border-[#084887] rounded-full transform -translate-x-1/2 mt-6 z-20 shadow-[0_0_0_4px_rgba(8,72,135,0.1)]">
                  <div className="w-full h-full bg-[#f58a07] rounded-full animate-pulse opacity-50" />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                     <span className="text-5xl font-bold text-slate-200 mb-4 font-mono absolute -top-8 select-none z-0">
                       {item.year}
                     </span>
                     
                     <div className="relative z-10 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl hover:border-[#f58a07]/30 transition-all duration-300 group w-full overflow-hidden">
                       {/* Image Banner */}
                       <div className="h-48 w-full overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                         <img 
                           src={item.image} 
                           alt={item.title} 
                           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                         />
                         <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur text-xs font-mono text-[#084887] px-3 py-1 rounded-full font-bold shadow-sm">
                            {item.year}
                         </div>
                       </div>

                       <div className="p-6 relative z-20 -mt-12">
                         <div className="flex items-center gap-4 mb-3">
                           <div className="p-2 rounded-lg bg-[#f58a07] text-white shadow-lg shadow-[#f58a07]/30">
                             <item.icon className="w-5 h-5" />
                           </div>
                         </div>
                         
                         <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#084887] transition-colors">
                           {item.title}
                         </h3>
                         <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-4">
                           {item.event}
                         </p>
                         <p className="text-slate-600 text-sm leading-relaxed text-justify">
                           {item.desc}
                         </p>
                       </div>
                     </div>
                  </div>
                </div>

                {/* Empty Side for Desktop Balance */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;