import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Trophy, 
  MapPin, 
  Cpu,
  Gauge,     // Icon Speed
  Battery,   // Icon Battery
  Scale,     // Icon Weight
  Wind,      // Icon Aerodynamics
  Target,    // Icon Mission
  ChevronRight
} from 'lucide-react';

const UAV_HALL_OF_FAME = [
  {
    id: 'gacor-x1',
    name: "Gacor X1",
    tagline: "The Agricultural Delivery Specialist",
    type: "Fixed Wing",
    role: "Autonomous Payload Delivery",
    image: "/assets/img/model/gacor-x1.png",
    specs: [
        { label: "MTOW", value: "4.5 kg", icon: <Scale size={18} /> },
        { label: "Endurance", value: "45 mins", icon: <Battery size={18} /> },
        { label: "Range", value: "15 km", icon: <MapPin size={18} /> },
        { label: "Propulsion", value: "Electric Brushless", icon: <Wind size={18} /> }
    ],
    description: "Designed for urban package delivery, the Cakrawala X1 features a unique tilt-rotor mechanism allowing for vertical takeoff and efficient forward flight. It integrates LIDAR for obstacle avoidance in complex environments and uses a custom-built release mechanism for precision drops.",
    missions: ["Teknofest 2023"]
  },
  {
    id: 'galakasa',
    name: "Galakasa",
    tagline: "Speed Demon of the Skies",
    type: "Fixed Wing",
    role: "High Speed",
    image: "/assets/img/model/galakasa.png",
    specs: [
        { label: "Max Speed", value: "180 km/h", icon: <Gauge size={18} /> },
        { label: "Material", value: "Carbon Fiber", icon: <Scale size={18} /> },
        { label: "Wingspan", value: "1.2 m", icon: <Wind size={18} /> },
        { label: "G-Load", value: "Max 12G", icon: <Target size={18} /> }
    ],
    description: "Built purely for speed, Galakasa strips away all non-essential weight. Its aerodynamic fuselage minimizes drag coefficient significantly compared to previous iterations. The internal structure is reinforced to withstand high-G maneuvers during pylon racing turns.",
    missions: ["Teknofest 2024"]
  },
  {
    id: 'anak-lanang',
    name: "Anak Lanang",
    tagline: "The Heavy Lifter",
    type: "VTOL",
    role: "Heavy Lift / Combat",
    image: "/assets/img/model/anak-lanang.png",
    specs: [
        { label: "Payload", value: "8.0 kg", icon: <Scale size={18} /> },
        { label: "Max Lift", value: "12.0 kg", icon: <Gauge size={18} /> },
        { label: "Battery", value: "2x 6S 22Ah", icon: <Battery size={18} /> },
        { label: "Comms", value: "Long Range RF", icon: <Cpu size={18} /> }
    ],
    description: "Our heavy-lift platform designed for stability in high-wind conditions. The hexacopter configuration provides redundancy; if one motor fails, the aircraft can still land safely. It features a modular rail system for swapping mission payloads rapidly.",
    missions: ["SAFMC 2024"]
  },
  {
    id: 'umar',
    name: "Umar",
    tagline: "Payload Powerhouse",
    type: "VTOL",
    role: "Payload Delivery / Reconnaissance",
    image: "/assets/img/model/umar.png",
    specs: [
        { label: "Payload", value: "8.0 kg", icon: <Scale size={18} /> },
        { label: "Max Lift", value: "12.0 kg", icon: <Gauge size={18} /> },
        { label: "Battery", value: "2x 6S 22Ah", icon: <Battery size={18} /> },
        { label: "Comms", value: "Long Range RF", icon: <Cpu size={18} /> }
    ],
    description: "Our heavy-lift platform designed for stability in high-wind conditions. The hexacopter configuration provides redundancy; if one motor fails, the aircraft can still land safely. It features a modular rail system for swapping mission payloads rapidly.",
    missions: ["SAFMC 2025"]
  }
];

const UAVHallOfFame = () => {
  const [activeId, setActiveId] = useState(UAV_HALL_OF_FAME[0].id);
  const activeUAV = UAV_HALL_OF_FAME.find(u => u.id === activeId) || UAV_HALL_OF_FAME[0];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#084887] mb-4">UAV Hall of Fame</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Engineering excellence on display. Explore the technical specifications and operational history of our championship-winning fleet.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left: Navigation Tabs */}
          <div className="lg:w-1/4">
            <div className="flex p-4 lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 sticky top-24">
              {UAV_HALL_OF_FAME.map((uav) => (
                <button
                  key={uav.id}
                  onClick={() => setActiveId(uav.id)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left group min-w-[200px] lg:min-w-0 ${
                    activeId === uav.id
                      ? "bg-[#084887] text-white shadow-lg shadow-[#084887]/25 scale-105"
                      : "bg-white text-slate-500 hover:bg-white hover:text-[#084887] hover:shadow-md border border-slate-100"
                  }`}
                >
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${activeId === uav.id ? 'text-[#f58a07]' : 'text-slate-400'}`}>
                      {uav.type}
                    </span>
                    <span className="font-bold text-lg">{uav.name}</span>
                  </div>
                  {activeId === uav.id && <ChevronRight size={20} className="text-[#f58a07]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUAV.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200"
              >
                {/* Hero Image Section */}
                <div className="relative h-64 md:h-96 w-full overflow-hidden group">
                  <img 
                    src={activeUAV.image} 
                    alt={activeUAV.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#084887] via-[#084887]/20 to-transparent opacity-90" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{activeUAV.name}</h3>
                      <p className="text-[#f58a07] text-xl font-medium tracking-wide">{activeUAV.tagline}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-8 md:p-10">
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    {activeUAV.specs.map((spec, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:border-[#084887]/30 transition-colors">
                        <div className="p-3 bg-white rounded-full shadow-sm text-[#084887] mb-3">
                          {spec.icon}
                        </div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{spec.label}</span>
                        <span className="text-slate-800 font-bold text-lg">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row gap-10">
                    {/* Description */}
                    <div className="md:w-2/3">
                      <h4 className="text-[#084887] font-bold text-lg mb-4 flex items-center gap-2">
                        <Cpu size={20} /> System Overview
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {activeUAV.description}
                      </p>
                    </div>

                    {/* Missions List */}
                    <div className="md:w-1/3">
                      <h4 className="text-[#084887] font-bold text-lg mb-4 flex items-center gap-2">
                        <Trophy size={20} /> Operational History
                      </h4>
                      <div className="flex flex-col gap-2">
                        {activeUAV.missions.map((mission, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                             <div className="w-2 h-2 rounded-full bg-[#f58a07]" />
                             <span className="text-slate-700 font-medium">{mission}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UAVHallOfFame;