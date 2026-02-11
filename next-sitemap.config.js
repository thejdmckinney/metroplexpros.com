/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.metroplexpros.com',
  generateRobotsTxt: false, // We already have a custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/admin/*', '/api/*'],
  additionalPaths: async (config) => {
    const result = []

    // Add blog posts dynamically from Sanity
    try {
      const { createClient } = require('@sanity/client')
      const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h3o584t2',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: '2024-01-01',
        useCdn: true,
      })

      const posts = await client.fetch(`
        *[_type == "post"] {
          "slug": slug.current,
          _updatedAt
        }
      `)

      posts.forEach((post) => {
        result.push({
          loc: `/blog/${post.slug}`,
          changefreq: 'monthly',
          priority: 0.7,
          lastmod: post._updatedAt || new Date().toISOString(),
        })
      })
    } catch (error) {
      console.warn('Could not fetch blog posts for sitemap:', error.message)
    }

    return result
  },
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/99-plan': 0.9,
      '/emergency-electrician-dallas': 0.9,
      '/emergency-plumber-dallas': 0.9,
      '/contact': 0.8,
      '/about': 0.7,
      // Tools pages
      '/tools': 0.8,
      '/tools/panel-upgrade-calculator': 0.8,
      '/tools/outlet-switch-pricing': 0.8,
      '/tools/electrical-cost-estimator': 0.8,
      '/tools/smart-home-roi-calculator': 0.8,
      // Blog index
      '/blog': 0.7,
    }

    // Normalize path by removing trailing slash for lookup
    const normalizedPath = path.replace(/\/$/, '')

    // Custom changefreq for tools (monthly)
    let changefreq = config.changefreq
    if (normalizedPath.startsWith('/tools')) {
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priorities[normalizedPath] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
  },
}
