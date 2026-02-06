/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.metroplexpros.com',
  generateRobotsTxt: false, // We already have a custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/admin/*', '/api/*'],
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      '/': 1.0,
      '/services/': 0.9,
      '/99-plan/': 0.9,
      '/emergency-electrician-dallas/': 0.9,
      '/emergency-plumber-dallas/': 0.9,
      '/contact/': 0.8,
      '/about/': 0.7,
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
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
