'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

interface HeaderProps {
  dict: {
    services: string;
    aboutUs: string;
    contact: string;
    requestDemo: string;
    blog: string;
  };
}

export default function Header({ dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'es';


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLang = (lang: 'es' | 'en') => {
    const newPath = pathname.replace(/^\/(en|es)/, `/${lang}`);
    router.push(newPath);
    setMenuOpen(false);
  };

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

        {/* Navegación en desktop */}
        <nav className="hidden md:flex space-x-8 font-medium items-center">
          <Link href="#servicios" className="text-white hover:text-[#caeb23] transition">
            {dict.services}
          </Link>
          <Link  href={`/${lang}/about`} className="text-white hover:text-[#caeb23] transition">
            {dict.aboutUs}
          </Link>
          <Link href="/blog" className="text-white hover:text-[#caeb23] transition">
            {dict.blog}
          </Link>
          <Link href="#contacto" className="text-white hover:text-[#caeb23] transition">
            {dict.contact}
          </Link>

          {/* Language Switcher */}
<div className="ml-6">
  <div className="flex items-center bg-white/10 border border-white/20 rounded-full overflow-hidden text-sm font-medium">
    <button
      onClick={() => switchLang('es')}
      className={clsx(
        'px-4 py-1 transition-all duration-200',
        pathname.startsWith('/es')
          ? 'bg-[#caeb23] text-black'
          : 'text-white hover:bg-white/10'
      )}
    >
      ES
    </button>
    <button
      onClick={() => switchLang('en')}
      className={clsx(
        'px-4 py-1 transition-all duration-200',
        pathname.startsWith('/en')
          ? 'bg-[#caeb23] text-black'
          : 'text-white hover:bg-white/10'
      )}
    >
      EN
    </button>
  </div>
</div>

        </nav>

        {/* Botón en desktop */}
        <Link
          href="#demo"
          className="hidden md:inline-block bg-[#9f28e7] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#b93ef7] transition"
        >
          {dict.requestDemo}
        </Link>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center space-y-1"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm text-white px-6 py-4 space-y-4 text-center transition-all">
          <Link
            href="#servicios"
            className="block hover:text-[#caeb23] transition"
            onClick={() => setMenuOpen(false)}
          >
            {dict.services}
          </Link>
          <Link
             href={`/${lang}/about`}
            className="block hover:text-[#caeb23] transition"
            onClick={() => setMenuOpen(false)}
          >
            {dict.aboutUs}
          </Link>
          <Link
            href="/blog"
            className="block hover:text-[#caeb23] transition"
            onClick={() => setMenuOpen(false)}
          >
            {dict.blog}
          </Link>
          <Link
            href="#contacto"
            className="block hover:text-[#caeb23] transition"
            onClick={() => setMenuOpen(false)}
          >
            {dict.contact}
          </Link>
          <Link
            href="#demo"
            className="inline-block bg-[#9f28e7] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#b93ef7] transition"
            onClick={() => setMenuOpen(false)}
          >
            {dict.requestDemo}
          </Link>

          {/* Idiomas en móvil */}
         <div className="flex justify-center pt-4">
  <div className="flex items-center bg-white/10 border border-white/20 rounded-full overflow-hidden text-sm font-medium">
    <button
      onClick={() => switchLang('es')}
      className={clsx(
        'px-4 py-1 transition-all duration-200',
        pathname.startsWith('/es')
          ? 'bg-[#caeb23] text-black'
          : 'text-white hover:bg-white/10'
      )}
    >
      ES
    </button>
    <button
      onClick={() => switchLang('en')}
      className={clsx(
        'px-4 py-1 transition-all duration-200',
        pathname.startsWith('/en')
          ? 'bg-[#caeb23] text-black'
          : 'text-white hover:bg-white/10'
      )}
    >
      EN
    </button>
  </div>
</div>

        </div>
      )}
    </header>
  );
}
