import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.edunex.uz';
  const lastModified = new Date();
  const locales = ['uz', 'ru', 'en'];
  const pages = ['', '/pricing', '/features', '/testimonials', '/contact'];

  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.7,
      });
    }
  }

  return urls;
}