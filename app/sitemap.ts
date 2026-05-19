import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://surecova.com'
  
  const routes = [
    '',
    '/find-doctors',
    '/for-doctors',
    '/hospitals',
    '/pharmacies',
    '/pricing',
    '/about',
    '/faq',
    '/contact',
    '/emergency',
    '/doctor-register',
    '/patient-register',
    '/app',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
