import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

export async function GET(request: Request) {
  // Fetch dynamic routes from your data source
  // This is an example - replace with actual data fetching
  const dynamicPaths: ISitemapField[] = [
    {
      loc: 'https://oblinor.com/solutions/portfolio-management',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.8,
    },
    {
      loc: 'https://oblinor.com/solutions/deal-tracking',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.8,
    },
    {
      loc: 'https://oblinor.com/solutions/investor-relations',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: 0.8,
    },
  ]

  return getServerSideSitemap(dynamicPaths)
}