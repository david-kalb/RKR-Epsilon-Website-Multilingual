import { MetadataRoute } from 'next'
import { slugMap, type PageKey } from '@/config/slugs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rkr-epsilon.com' // Update with your actual domain
  const locales: ('en' | 'de')[] = ['en', 'de']
  const pages: PageKey[] = ['home', 'about', 'services', 'contact', 'privacy', 'terms', 'imprint', 'faq']

  const routes: MetadataRoute.Sitemap = []

  // Generate routes for all pages in all locales
  for (const locale of locales) {
    for (const page of pages) {
      const slug = slugMap[page][locale]
      routes.push({
        url: `${baseUrl}/${locale}/${slug}`,
        lastModified: new Date(),
        changeFrequency: page === 'home' ? 'weekly' : 'monthly',
        priority: page === 'home' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en/${slugMap[page].en}`,
            de: `${baseUrl}/de/${slugMap[page].de}`,
          },
        },
      })
    }
  }

  return routes
}

