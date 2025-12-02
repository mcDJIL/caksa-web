'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Trophy, 
  MapPin, 
  Cpu, 
  Filter, 
  X, 
  Plane,
  Calendar,
  Share2,
  Maximize2
} from 'lucide-react';

// --- MOCK DATA ---
const COMPETITIONS = [
  {
    id: 'safmc-2025',
    title: "SAFMC 2025",
    fullTitle: "Singapore Amazing Flying Machine Competition",
    year: "2025",
    location: "Singapore",
    category: "International",
    result: "Category D1 Champions",
    description: "Our team deployed the 'Cakrawala X1', a hybrid VTOL focused on fully autonomous payload delivery in urban environments. The mission required precise dropping mechanisms and obstacle avoidance using LIDAR.",
    uav: {
      name: "Cakrawala X1",
      type: "Hybrid VTOL",
      specs: "4.5kg MTOW | 45min Endurance",
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=800"
    },
    gallery: [
      "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800",
    ]
  },
  {
    id: 'teknofest-2023',
    title: "Teknofest 2023",
    fullTitle: "Teknofest Aerospace & Technology Festival",
    year: "2023",
    location: "Istanbul, Turkey",
    category: "International",
    result: "Finalist - Fighter UAV",
    description: "Our first international exposure. We learned valuable lessons regarding autonomy in high-wind conditions. The Garuda MK-II demonstrated robust telemetry links over long distances.",
    uav: {
      name: "Garuda MK-II",
      type: "Rotary Wing Hexacopter",
      specs: "Heavy Lift | Redundant Flight Controller",
      image: "https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?auto=format&fit=crop&q=80&w=800"
    },
    gallery: [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800",
    ]
  }
];

interface CompetitionCardProps {
  data: typeof COMPETITIONS[0];
  onImageClick: (img: string) => void;
}

// --- COMPONENT: COMPETITION CARD ---
const CompetitionCard = ({ data, onImageClick }: CompetitionCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* 1. Header Section */}
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/50">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-bold tracking-wider text-[#084887] bg-[#084887]/10 border border-[#084887]/20 rounded-full flex items-center gap-1">
              <Calendar size={10} /> {data.year}
            </span>
            <span className={`px-3 py-1 text-xs font-bold tracking-wider border rounded-full ${
              data.category === 'International' 
                ? 'text-purple-700 bg-purple-50 border-purple-200' 
                : 'text-emerald-700 bg-emerald-50 border-emerald-200'
            }`}>
              {data.category.toUpperCase()}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-[#084887] flex items-center gap-2">
            {data.title}
            {data.result && (
              <span className="hidden sm:flex text-[#f58a07]" title="Achievement">
                <Trophy size={20} />
              </span>
            )}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm mt-1">
            <span className="flex items-center gap-1"><MapPin size={14} /> {data.location}</span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="italic text-slate-600">{data.fullTitle}</span>
          </div>
        </div>
        
        {data.result && (
          <div className="w-full md:w-auto p-3 bg-[#f58a07]/10 border-l-4 border-[#f58a07] rounded-r-lg">
            <p className="text-xs text-[#f58a07] uppercase font-bold tracking-wider">Achievement</p>
            <p className="text-lg font-bold text-slate-900">{data.result}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* 2. LEFT: UAV Tech Spec Section */}
        <div className="lg:w-1/3 p-6 bg-[#084887]/5 border-r border-slate-100 flex flex-col relative group/uav">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none text-[#084887]">
             <Cpu size={140} />
          </div>

          <h3 className="text-xs font-bold text-[#084887] uppercase tracking-widest mb-4 flex items-center gap-2">
            <Plane size={14} /> Mission Unit
          </h3>
          
          <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-video mb-5 bg-white shadow-sm">
            <img 
              src={data.uav.image} 
              alt={data.uav.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover/uav:scale-110"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#084887]/90 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <p className="text-white font-bold text-xl leading-none">{data.uav.name}</p>
              <p className="text-slate-200 text-xs mt-1 font-mono">{data.uav.type}</p>
            </div>
          </div>
          
          <div className="space-y-4 relative z-10">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Specifications</p>
              <p className="text-slate-700 text-sm font-mono border-l-2 border-[#084887] pl-3">
                {data.uav.specs}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Mission Profile</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* 3. RIGHT: Event Gallery (Masonry) */}
        <div className="lg:w-2/3 p-6 bg-slate-50/50">
          <div className="flex justify-between items-end mb-4">
             <h3 className="text-xs font-bold text-[#084887] uppercase tracking-widest flex items-center gap-2">
                <Camera size={14} /> Mission Gallery
              </h3>
              <span className="text-xs text-slate-400 font-semibold">{data.gallery.length} Images</span>
          </div>
          
          {/* CSS Columns Masonry Layout */}
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {data.gallery.map((img, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="break-inside-avoid relative group rounded-lg overflow-hidden cursor-zoom-in border border-slate-200 bg-white shadow-sm"
                onClick={() => onImageClick(img)}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
                {/* Hover Overlay - Blue tint */}
                <div className="absolute inset-0 bg-[#084887]/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize2 className="text-white drop-shadow-md" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN GALLERY COMPONENT ---
export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const years = [...new Set(COMPETITIONS.map(c => c.year))].sort().reverse();
  const TABS = ["All", ...years, "International", "National"];

  const filteredData = COMPETITIONS.filter(item => {
    if (activeTab === "All") return true;
    if (years.includes(activeTab)) return item.year === activeTab;
    return item.category === activeTab;
  });

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#f58a07]/30">
      
      {/* Background Decor - Subtle Gradients on White */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#084887]/5 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-[#f58a07]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 lg:px-10 xl:px-20 2xl:px-[117px] py-20">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h4 className="text-[#084887] font-bold tracking-widest uppercase text-sm mb-2">CAKSA Robotics Team</h4>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#084887] to-[#f58a07]">Archive</span>
              </h1>
              <p className="text-slate-500 mt-4 max-w-2xl text-lg leading-relaxed">
                A visual database of our deployed UAV systems and mission logs from national and international aerospace competitions.
              </p>
            </div>
            
            <div className="hidden md:block">
               <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#084887] text-[#084887] font-bold hover:bg-[#084887] hover:text-white transition-colors text-sm shadow-sm hover:shadow-md">
                  <Share2 size={18} /> Share Gallery
               </button>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="sticky top-4 z-30 mb-10">
          <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-2 rounded-2xl shadow-xl shadow-slate-200/50 inline-flex flex-wrap gap-1">
            <div className="flex items-center px-3 text-slate-400 border-r border-slate-200 mr-1">
              <Filter size={16} />
            </div>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative ${
                  activeTab === tab
                    ? "text-white shadow-md shadow-[#084887]/20"
                    : "text-slate-500 hover:text-[#084887] hover:bg-slate-50"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#084887] rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <motion.div layout className="flex flex-col gap-8 min-h-[50vh]">
          <AnimatePresence mode='popLayout'>
            {filteredData.map((competition) => (
              <CompetitionCard 
                key={competition.id} 
                data={competition} 
                onImageClick={setSelectedImage}
              />
            ))}
          </AnimatePresence>
          
          {filteredData.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex flex-col items-center justify-center py-20 text-slate-400"
            >
              <div className="bg-slate-50 p-6 rounded-full mb-4 border border-slate-100">
                 <Filter size={48} className="opacity-50 text-[#084887]" />
              </div>
              <p className="text-xl font-semibold text-slate-600">No missions found</p>
              <p className="text-sm">Try adjusting your filters to see more results.</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop - Keep dark for better image viewing experience */}
            <div 
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            />
            
            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-70 max-w-5xl w-full max-h-full flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#f58a07] transition-colors bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20"
              >
                <X size={24} />
              </button>
              
              <img
                src={selectedImage}
                alt="Full View"
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}