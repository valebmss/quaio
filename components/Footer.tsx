'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface FooterProps {
  dict: {
    services: string;
    aboutUs: string;
    contact: string;
    requestDemo: string;
    companyName: string;
    companySlogan: string;
    currentPage: string;
    copyright: string;
  };
}

export default function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-[#f8f8f8] text-gray-800 py-10 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo y nombre */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#9f28e7]">{dict.companyName}</h2>
          <p className="text-sm text-gray-600 mt-2">{dict.companySlogan}</p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-700">
          <Link href="#servicios" className="hover:text-[#cae3b2] transition">{dict.services}</Link>
          <Link href="#nosotros" className="hover:text-[#cae3b2] transition">{dict.aboutUs}</Link>
          <Link href="#contacto" className="hover:text-[#cae3b2] transition">{dict.contact}</Link>
          <Link href="#demo" className="hover:text-[#cae3b2] transition">{dict.requestDemo}</Link>
        </div>
      </div>

      {/* Línea y derechos */}
      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-500">
        &copy; {year} {dict.companyName}. {dict.copyright}
        <br />
        <span className="text-gray-400">{dict.currentPage}: {pathname}</span>
      </div>
    </footer>
  );
}
