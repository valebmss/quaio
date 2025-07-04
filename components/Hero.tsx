'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/hero-energia.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Overlay oscuro para legibilidad */}
<div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Contenido central */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-6 drop-shadow-lg"
  >
    <span>Impulsamos la energía</span><br />
    <span className="text-[#caeb23]">con inteligencia digital</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed drop-shadow"
  >
    Creamos soluciones de software para transformar el sector energético con innovación, eficiencia y tecnología.
  </motion.p>

  <motion.a
    href="#contacto"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#9f28e7] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#b93ef7] transition"
  >
    Contáctanos
  </motion.a>
</div>

    </div>
  );
}
