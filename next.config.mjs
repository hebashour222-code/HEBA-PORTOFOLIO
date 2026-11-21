/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cleanDistDir: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: false,
    cpus: 1,
  },
};

export default nextConfig;
