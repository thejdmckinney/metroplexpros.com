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
      // Explicitly handle pages without trailing slashes for Google Search Console
      {
        source: '/about',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/service-areas',
        destination: '/service-areas/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig