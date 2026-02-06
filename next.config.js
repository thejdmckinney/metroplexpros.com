/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable proper SSG/SSR on Vercel for better SEO
  // This allows Vercel to handle pages properly and gives Google better crawling
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Add proper redirects for SEO
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig