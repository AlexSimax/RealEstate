/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`www.theconsultingreport.com`, 'images.ctfassets.net'],
  },
}

module.exports = nextConfig
