/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://oblinor.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/404',
    '/500',
    '/api/*',
    '/admin/*',
    '/server-sitemap.xml',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      'https://oblinor.com/sitemap.xml',
      'https://oblinor.com/server-sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom transformation for specific paths
    const customPriorities = {
      '/': 1.0,
      '/features': 0.9,
      '/solutions': 0.9,
      '/pricing': 0.8,
      '/about': 0.7,
      '/contact': 0.7,
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: customPriorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}