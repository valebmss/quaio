import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Permitir imágenes desde Sanity
  },
};

export default nextConfig;
