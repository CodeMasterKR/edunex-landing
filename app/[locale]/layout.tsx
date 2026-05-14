import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import { routing } from '@/lib/i18n/routing';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.edunex.uz'),
  title: {
    default: "EduNex — O'quv Markazlar uchun Raqamli Boshqaruv",
    template: '%s | EduNex',
  },
  description: "Talabalar, to'lovlar, davomat va o'qituvchilarni bir platformada boshqaring. 14 kun bepul sinab ko'ring.",
  keywords: ["o'quv markaz", 'lms', 'erp', 'uzbekistan', 'edunex', 'talabalar', "to'lov tizimi", 'Ibrohimov Kamron', 'Kamron Ibrohimov', 'EduNex Kamron',],
  icons: {
    icon: '/edunex_tab.png',
    apple: '/edunex_tab.png',
  },
  openGraph: {
    title: "EduNex — O'quv Markazlar uchun Raqamli Boshqaruv",
    description: "O'quv markazingizni zamonaviy texnologiyalar bilan boshqaring.",
    type: 'website',
    url: 'https://www.edunex.uz',
    siteName: 'EduNex',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EduNex Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "EduNex — O'quv Markazlar uchun Raqamli Boshqaruv",
    description: "O'quv markazingizni zamonaviy texnologiyalar bilan boshqaring.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'EduNex',
  url: 'https://www.edunex.uz',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: "O'quv markazlar uchun raqamli boshqaruv tizimi",
  author: {
    '@type': 'Person',
    name: 'Kamron Ibrohimov',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'UZS',
  },
  sameAs: ['https://t.me/edunexuz'],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'uz' | 'ru' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}