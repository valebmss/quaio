'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeaderBlog() {
  return (
    <header className="w-full bg-[#0e0e0e] shadow-md py-4 px-6 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logoblanco.png"
            alt="Quaio Logo"
            width={140}
            height={40}
            className="object-contain drop-shadow-sm"
          />
        </Link>

        {/* Enlace de regreso */}
        <Link
          href="/blog"
          className="text-sm md:text-base font-semibold text-primary hover:text-secondary transition-colors"
        >
          ← Volver al Blog
        </Link>
      </div>
    </header>
  );
}
