import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Screenshots from '@/components/landing/Screenshots';
import Pricing from '@/components/landing/Pricing';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import CTAForm from '@/components/landing/CTAForm';
import Footer from '@/components/landing/Footer';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return {
    title: `EduNex — ${t('headline')}`,
    description: t('subheadline'),
    alternates: {
      canonical: `https://edunex.uz/${locale}`,
      languages: {
        uz: 'https://edunex.uz/uz',
        ru: 'https://edunex.uz/ru',
        en: 'https://edunex.uz/en',
        'x-default': 'https://edunex.uz/uz', 
      },
    },
    openGraph: {
      title: `EduNex — ${t('headline')}`,
      description: t('subheadline'),
      type: 'website',
      locale: locale,
    },
  };
}

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTAForm />
      <Footer />
    </main>
  );
}
