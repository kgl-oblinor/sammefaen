import { Metadata } from 'next'

export const siteConfig = {
  name: 'Apex Capital Partners',
  description: 'A leading global investment firm delivering superior returns through disciplined investment strategies and operational excellence across all asset classes.',
  url: 'https://apexcapital.com',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/apexcapital',
    linkedin: 'https://linkedin.com/company/apexcapital',
  },
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/favicon.ico',
  noIndex = false,
  keywords = [],
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
  keywords?: string[]
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      'private equity',
      'portfolio management', 
      'deal tracking',
      'investor relations',
      'equity hub',
      'investment platform',
      'financial technology',
      'fintech',
      ...keywords,
    ],
    authors: [{ name: 'Oblinor' }],
    creator: 'Oblinor',
    publisher: 'Oblinor',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@oblinor',
    },
    icons,
    manifest: '/site.webmanifest',
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
    alternates: {
      canonical: siteConfig.url,
    },
  }
}