"use client";

import { motion } from "framer-motion";

interface HeroProps {
  dict: {
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroDescription: string;
    contact: string;
  };
}

export default function Hero({ dict }: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      {typeof window !== 'undefined' && window.innerWidth < 768 ? (
  <img
    src="/img/fondoimg.jpeg"
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />
) : (
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/video/hero-energia.mp4" type="video/mp4" />
    Tu navegador no soporta video HTML5.
  </video>
)}


      {/* Overlay oscuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Contenido central */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-6 drop-shadow-lg"
        >
          <span>{dict.heroTitleLine1}</span>
          <br />
          <span className="text-[#caeb23]">{dict.heroTitleLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed drop-shadow"
        >
          {dict.heroDescription}
        </motion.p>

        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#9f28e7] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#b93ef7] transition"
        >
          {dict.contact}
        </motion.a>
      </div>
    </div>
  );
}
