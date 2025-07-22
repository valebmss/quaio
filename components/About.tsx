'use client';

import React from 'react';

interface AboutSectionProps {
  dict: {
    about: {
      title: string;
      subtitle: string;
      description: string;
      mission: string;
      vision: string;
    };
  };
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center pt-16">
          {dict.about.title}
        </h2>
        <p className="text-lg text-gray-300 mb-10 text-center">
          {dict.about.subtitle}
        </p>

        <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 md:p-10 space-y-6">
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            {dict.about.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                 {dict.about.mission}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Proporcionar soluciones digitales inteligentes y a medida para el sector energético, impulsando la eficiencia y la transformación tecnológica.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                 {dict.about.vision}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Ser líderes en innovación tecnológica para empresas energéticas, creando herramientas que cambien el futuro de la industria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
