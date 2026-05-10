export default function sitemap() {
  return [
    { url: 'https://edunex.uz/uz', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://edunex.uz/ru', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://edunex.uz/en', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}