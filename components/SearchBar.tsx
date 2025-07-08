"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface BlogPost {
  title: string;
  slug: { current: string };
  excerpt: string;
}

interface SearchBarProps {
  dict: {
    search: {
      placeholder: string;
      noResults: string;
      results: string;
    };
  };
  data?: BlogPost[];
}

export default function SearchBar({ dict, data = [] }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BlogPost[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = data.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-10 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Input de búsqueda */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder={dict.search.placeholder}
            className="w-full rounded-full border border-gray-300 px-5 py-3 pr-12 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-secondary shadow-md transition-all"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Resultados */}
        {query && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-white border border-gray-200 shadow-lg rounded-xl p-5 text-sm"
          >
            {results.length === 0 ? (
              <p className="text-gray-500 text-center">
                {dict.search.noResults}
              </p>
            ) : (
              <>
                <p className="text-gray-500 mb-3 text-center">
                  {results.length} {dict.search.results}
                </p>
                <ul className="space-y-4 text-gray-800">
                  {results.map((post, i) => (
                    <li key={i} className="pb-2 border-b border-gray-100">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                      <p className="text-gray-500 text-sm mt-1">
                        {post.excerpt}
                      </p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
export type { SearchBarProps };
