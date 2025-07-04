'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logoblanco.png"
            alt="Quaio Logo"
            width={150}
            height={40}
            className="object-contain drop-shadow-md"
          />
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="#servicios" className="text-white hover:text-[#caeb23] transition">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-white hover:text-[#caeb23] transition">
            Nosotros
          </Link>
          <Link href="#contacto" className="text-white hover:text-[#caeb23] transition">
            Contacto
          </Link>
        </nav>

        {/* Botón */}
        <Link
          href="#demo"
          className="hidden md:inline-block bg-[#9f28e7] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#b93ef7] transition"
        >
          Solicita una demo
        </Link>
      </div>
    </header>
  );
}
