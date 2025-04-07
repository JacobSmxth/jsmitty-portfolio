import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default config;
