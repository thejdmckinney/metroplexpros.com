const fs = require('fs')
const path = require('path')

function generateSitemap() {
  const baseUrl = 'https://metroplexpros.com'
  
  // Define all your pages with their priorities and change frequencies
  const pages = [
    {
      url: '',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/services',
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/services/smart-home-installations',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/gallery',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/service-areas',
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/university-park',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/for-realtors',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/shop',
      changefreq: 'weekly',
      priority: '0.7',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/terms-of-service',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: '/privacy-policy',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: new Date().toISOString().split('T')[0]
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully!')
}

if (require.main === module) {
  generateSitemap()
}

module.exports = { generateSitemap }