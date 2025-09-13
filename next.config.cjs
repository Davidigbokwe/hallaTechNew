/** @type {import('next').NextConfig} */
const nextConfig = {
  appDir: './src/app',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    
  },
}

module.exports = nextConfig