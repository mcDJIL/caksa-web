'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Stars, useGLTF, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { 
  Loader2,
  MousePointer2,
  AlertTriangle
} from 'lucide-react';

// Daftar UAV yang tersedia
const uavOptions = [
  { id: 'gacor', name: 'Gacor X1', path: '/assets/uav/gacor.gltf', scale: 0.1 },
  { id: 'galakasa', name: 'Galakasa', path: '/assets/uav/galakasa/galakasa.gltf', scale: 6.0 },
  { id: 'anak-lanang', name: 'Anak Lanang', path: '/assets/uav/anak-lanang/ASSY Gen 2.gltf', scale: 6.0 },
];

const DroneModel = ({ modelPath, scale }: { modelPath: string; scale: number }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center top>
        <primitive object={scene} scale={scale} />
      </Center>
    </Float>
  );
};

const SceneContainer = ({ modelPath, scale }: { modelPath: string; scale: number }) => {
  return (
    // OPTIMASI PERFORMA:
    // 1. shadows={false}: Mematikan bayangan (berat di GPU)
    // 2. dpr={1}: Menjaga resolusi standar agar tidak berat di layar retina/4k
    // 3. gl={{ antialias: true }}: Menjaga pinggiran halus tapi performan
    <Canvas shadows={false} dpr={1} gl={{ antialias: true }} camera={{ position: [0, 0, 10], fov: 40 }}>
      <Suspense fallback={null}>
        {/* Lighting yang lebih soft & Tanpa Shadow map */}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <spotLight position={[-10, 10, -5]} intensity={1} color="#084887" />
        
        <Environment preset="city" />
        
        <group position={[0, -0.5, 0]}>
          <DroneModel modelPath={modelPath} scale={scale} />
        </group>
        
        {/* Jumlah bintang dikurangi drastis untuk performa (1000 -> 500) */}
        <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={1} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={1.5} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.5}
          minDistance={5}
          maxDistance={20}
        />
      </Suspense>
    </Canvas>
  );
};

const PrototypeViewer = () => {
  // State untuk melacak apakah komponen sudah masuk viewport
  const [inView, setInView] = useState(false);
  const [webGLError, setWebGLError] = useState(false);
  const [selectedUav, setSelectedUav] = useState(uavOptions[0]); // Default: Gacor
  const ref = useRef(null);

  useEffect(() => {
    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
          setWebGLError(true);
          return false;
        }
        return true;
      } catch (e) {
        setWebGLError(true);
        return false;
      }
    };

    if (!checkWebGL()) {
      return;
    }

    // Intersection Observer untuk mendeteksi kapan user scroll ke bagian ini
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Hanya perlu load sekali
        }
      },
      { 
        rootMargin: '200px' // Load 200px sebelum elemen muncul di layar (Preload)
      } 
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="prototype" className="relative w-full bg-black flex flex-col justify-center py-20">
      {/* Dark section for 3D viewer to pop */}
      
      {/* Header for the section */}
      <div className="relative z-20 text-center px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#f58a07] text-xs font-bold uppercase tracking-widest mb-2 block">Interactive Laboratory</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-2">Prototype <span className="text-[#f58a07]">Viewer</span></h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm opacity-80">
            Interact with our latest aerodynamic fuselage concept. 
          </p>
          
          {/* UAV Selector */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-slate-400 text-sm font-medium">Select UAV:</span>
            <select
              value={selectedUav.id}
              onChange={(e) => {
                const selected = uavOptions.find(uav => uav.id === e.target.value);
                if (selected) setSelectedUav(selected);
              }}
              className="bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f58a07] hover:border-[#f58a07] transition-colors cursor-pointer"
            >
              {uavOptions.map((uav) => (
                <option key={uav.id} value={uav.id}>
                  {uav.name}
                </option>
              ))}
            </select>
          </div>
        </motion.div>
      </div>

      {/* The 3D Canvas Container - FULL WIDTH style again */}
      <div className="w-full h-[75vh] border-y border-white/10 bg-gradient-to-b from-slate-900 to-black relative flex items-center justify-center">
          
          {/* WebGL Error Fallback */}
          {webGLError ? (
            <div className="flex flex-col items-center gap-4 text-slate-400 max-w-md px-6 text-center">
              <AlertTriangle className="w-12 h-12 text-[#f58a07]" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">3D Viewer Unavailable</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Your browser doesn't support WebGL or hardware acceleration is disabled. 
                </p>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-left">
                  <p className="text-xs font-semibold text-[#f58a07] mb-2">To enable 3D viewer:</p>
                  <ol className="text-xs space-y-1 list-decimal list-inside">
                    <li>Enable hardware acceleration in browser settings</li>
                    <li>Update your graphics drivers</li>
                    <li>Try a different browser (Chrome, Firefox, Edge)</li>
                  </ol>
                </div>
              </div>
            </div>
          ) : inView ? (
             <SceneContainer modelPath={selectedUav.path} scale={selectedUav.scale} />
          ) : (
             <div className="flex flex-col items-center gap-2 text-slate-500">
                <Loader2 className="w-8 h-8 animate-spin text-[#f58a07]" />
                <span className="text-xs uppercase tracking-widest">Initializing Lab...</span>
             </div>
          )}
          
          {/* Overlay Controls (Only show if loaded and no error) */}
          {inView && !webGLError && (
            <div className="absolute bottom-10 right-10">
                <div className="flex items-center gap-2 text-white/70 text-sm bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 font-medium">
                    <MousePointer2 className="w-4 h-4" />
                    <span>Drag to rotate</span>
                </div>
            </div>
          )}

          {/* Overlay Info */}
          {!webGLError && (
            <div className="absolute top-10 left-10 hidden sm:block">
                 <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="flex flex-col gap-1 text-xs font-mono text-[#f58a07]">
                        <div className="flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${inView ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'} `} /> SYSTEM {inView ? 'ONLINE' : 'STANDBY'}</div>
                        <div>{selectedUav.name.toUpperCase()}</div>
                    </div>
                 </div>
            </div>
          )}
      </div>

    </section>
  );
};

export default PrototypeViewer;