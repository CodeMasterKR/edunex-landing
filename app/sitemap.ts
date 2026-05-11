import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://edunex.uz/uz',
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://edunex.uz/ru',
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://edunex.uz/en',
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}