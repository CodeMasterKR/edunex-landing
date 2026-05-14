import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/landing/Navbar';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import CTAForm from '@/components/landing/CTAForm';
import Footer from '@/components/landing/Footer';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pricing' });

  const descriptions: Record<string, string> = {
    uz: "EduNex narxlari — kichik, o'rta va katta o'quv markazlar uchun qulay tariflar. 14 kun bepul sinab ko'ring.",
    ru: 'Тарифы EduNex — гибкие планы для учебных центров любого размера. 14 дней бесплатно.',
    en: 'EduNex pricing — flexible plans for any learning center. Try free for 14 days.',
  };

  return {
    title: `${t('title')} | EduNex`,
    description: descriptions[locale] ?? descriptions.uz,
    alternates: {
      canonical: `https://www.edunex.uz/${locale}/pricing`,
      languages: {
        uz: 'https://www.edunex.uz/uz/pricing',
        ru: 'https://www.edunex.uz/ru/pricing',
        en: 'https://www.edunex.uz/en/pricing',
        'x-default': 'https://www.edunex.uz/uz/pricing',
      },
    },
  };
}

export default function PricingPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Pricing />
        <FAQ />
        <CTAForm />
      </div>
      <Footer />
    </main>
  );
}