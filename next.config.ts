/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This will completely ignore ESLint during builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['your-domain.com'], // Add your image domains here
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
}

module.exports = nextConfig