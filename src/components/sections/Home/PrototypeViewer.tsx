'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Stars, useGLTF, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { 
  MousePointer2
} from 'lucide-react';

const GacorDrone = () => {
  // Memuat model GLTF milik user
  // Menggunakan path root '/' karena file diupload di root
  const { scene } = useGLTF('/assets/uav/gacor.gltf');

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center top>
        {/* Scale diperkecil agar tidak menutupi kamera (penyebab layar putih) */}
        {/* Diubah menjadi 0.5 agar lebih kecil dan pas di tengah */}
        <primitive object={scene} scale={0.1} />
      </Center>
    </Float>
  );
};

const SceneContainer = () => {
  return (
    // DPR diset ke 1 untuk performa lebih ringan
    <Canvas shadows dpr={1} camera={{ position: [0, 0, 10], fov: 40 }}>
      <Suspense fallback={null}>
        {/* Lighting yang lebih soft */}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
        <spotLight position={[-10, 10, -5]} intensity={1} color="#084887" />
        
        <Environment preset="city" />
        
        <group position={[0, -0.5, 0]}>
          <GacorDrone />
        </group>
        
        {/* Jumlah bintang dikurangi untuk performa */}
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
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
  return (
    <section id="prototype" className="relative w-full bg-black flex flex-col justify-center py-20">
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
        </motion.div>
      </div>

      {/* The 3D Canvas Container - FULL WIDTH style again */}
      <div className="w-full h-[75vh] border-y border-white/10 bg-gradient-to-b from-slate-900 to-black relative">
          <SceneContainer />
          
          {/* Overlay Controls */}
          <div className="absolute bottom-10 right-10">
              <div className="flex items-center gap-2 text-white/70 text-sm bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 font-medium">
                  <MousePointer2 className="w-4 h-4" />
                  <span>Drag to rotate</span>
              </div>
          </div>

          {/* Overlay Info */}
          <div className="absolute top-10 left-10 hidden sm:block">
               <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="flex flex-col gap-1 text-xs font-mono text-[#f58a07]">
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> SYSTEM ONLINE</div>
                      <div>MK-I PROTOTYPE</div>
                  </div>
               </div>
          </div>
      </div>

    </section>
  );
};

export default PrototypeViewer;