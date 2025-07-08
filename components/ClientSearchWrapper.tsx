// components/ClientSearchWrapper.tsx
'use client';
import SearchBar from './SearchBar';
import type { SearchBarProps } from './SearchBar';

export default function ClientSearchWrapper(props: SearchBarProps) {
  return <SearchBar {...props} />;
}
