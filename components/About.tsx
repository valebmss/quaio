'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  dict: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    vision: string;
  };
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section className="bg-[#f9f9f9] text-black py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#9f28e7] mb-4 text-center pt-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {dict.title}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          className="bg-white rounded-xl shadow-md p-6 md:p-10 space-y-6 md:space-y-0 md:flex md:items-center md:gap-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Imagen decorativa */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <Image
              src="/img/red.jpeg"
              alt="Quaio working in energy tech"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Texto */}
          <div className="md:w-1/2 w-full space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              {dict.description}
            </p>

            <div className="grid md:grid-cols-1 gap-6 pt-4 border-t border-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-[#caeb23] mb-2">
                  {dict.mission}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Proporcionar soluciones digitales inteligentes y a medida para el sector energético, impulsando la eficiencia y la transformación tecnológica.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#caeb23] mb-2">
                  {dict.vision}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Ser líderes en innovación tecnológica para empresas energéticas, creando herramientas que cambien el futuro de la industria.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
