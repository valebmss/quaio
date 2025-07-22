'use client';

import { motion } from 'framer-motion';

interface ServiciosProps {
  dict: {
    title: string;
    items: string[];
  };
}

export default function Servicios({ dict }: ServiciosProps) {
  return (
    <section id="servicios" className="bg-white text-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-4xl font-bold mb-10 text-[#9f28e7]"
        >
          {dict.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {dict.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#f9f9f9] rounded-lg p-5 border border-[#eee] hover:border-[#caeb23] transition"
            >
              <span className="text-gray-800">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
