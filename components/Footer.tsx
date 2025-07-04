'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface FooterProps {
  dict: {
    services: string;
    aboutUs: string;
    contact: string;
    requestDemo: string;
  };
}

export default function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo y nombre */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#cae3b2]">Quaio</h2>
          <p className="text-sm text-white/70 mt-2">
            Transformando la energía con tecnología.
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col md:flex-row gap-4 text-sm text-white/80">
          <Link href="#servicios" className="hover:text-[#cae3b2] transition">Servicios</Link>
          <Link href="#nosotros" className="hover:text-[#cae3b2] transition">Nosotros</Link>
          <Link href="#contacto" className="hover:text-[#cae3b2] transition">Contacto</Link>
          <Link href="#demo" className="hover:text-[#cae3b2] transition">Demo</Link>
        </div>
      </div>

      {/* Línea y derechos */}
      <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/50">
        &copy; {year} Quaio. Todos los derechos reservados.
        <br />
        <span className="text-white/30">Página actual: {pathname}</span>
      </div>
    </footer>
  );
}
