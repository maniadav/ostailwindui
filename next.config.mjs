/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export", // Enables static HTML export
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/ostailwindui",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "/ostailwindui",
};

export default nextConfig;
