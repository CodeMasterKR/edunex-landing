import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'api.dicebear.com' },
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
  },
};

export default withNextIntl(nextConfig);