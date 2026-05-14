import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/landing/Navbar';
import Features from '@/components/landing/Features';
import Screenshots from '@/components/landing/Screenshots';
import CTAForm from '@/components/landing/CTAForm';
import Footer from '@/components/landing/Footer';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'features' });

  const descriptions: Record<string, string> = {
    uz: "EduNex imkoniyatlari — talabalar, to'lovlar, davomat, Telegram bot va boshqa zamonaviy yechimlar.",
    ru: 'Возможности EduNex — студенты, платежи, посещаемость, Telegram бот и многое другое.',
    en: 'EduNex features — students, payments, attendance, Telegram bot and more.',
  };

  return {
    title: `${t('title')} | EduNex`,
    description: descriptions[locale] ?? descriptions.uz,
    alternates: {
      canonical: `https://www.edunex.uz/${locale}/features`,
      languages: {
        uz: 'https://www.edunex.uz/uz/features',
        ru: 'https://www.edunex.uz/ru/features',
        en: 'https://www.edunex.uz/en/features',
        'x-default': 'https://www.edunex.uz/uz/features',
      },
    },
  };
}

export default function FeaturesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Features />
        <Screenshots />
        <CTAForm />
      </div>
      <Footer />
    </main>
  );
}