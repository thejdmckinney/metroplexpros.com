/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable proper SSG/SSR on Vercel for better SEO
  // This allows Vercel to handle pages properly and gives Google better crawling
  images: {
    unoptimized: true
  },
  trailingSlash: false,
  // Add proper redirects for SEO
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // Redirect trailing slash versions to non-trailing slash (canonical)
      {
        source: '/about/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services/',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service-areas/',
        destination: '/service-areas',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig