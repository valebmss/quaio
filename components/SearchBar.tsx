'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface SearchBarProps {
  dict: {
    search: {
      placeholder: string;
      noResults: string;
      results: string;
    };
  };
  data?: string[]; // Puedes reemplazarlo con tu tipo de datos real más adelante
}

export default function SearchBar({ dict, data = [] }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="w-full max-w-xl mx-auto py-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder={dict.search.placeholder}
          className="w-full rounded-full border border-gray-300 px-5 py-3 pr-12 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#9f28e7] shadow-sm"
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2" />
      </div>

      {query && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 bg-white shadow-lg rounded-lg p-4 text-sm"
        >
          {results.length === 0 ? (
            <p className="text-gray-500">{dict.search.noResults}</p>
          ) : (
            <>
              <p className="text-gray-500 mb-2">
                {results.length} {dict.search.results}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {results.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}
