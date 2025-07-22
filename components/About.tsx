'use client';

import React from 'react';
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
    <section className="bg-[#0e0e0e] text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center pt-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {dict.title}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          className="bg-[#1a1a1a] rounded-xl shadow-md p-6 md:p-10 space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-base md:text-lg leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {dict.description}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-700">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {dict.mission}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Proporcionar soluciones digitales inteligentes y a medida para el sector energético, impulsando la eficiencia y la transformación tecnológica.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {dict.vision}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Ser líderes en innovación tecnológica para empresas energéticas, creando herramientas que cambien el futuro de la industria.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
