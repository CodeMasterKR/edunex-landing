  import { Metadata } from 'next';
import Navbar from '@/components/landing/Navbar';
import CTAForm from '@/components/landing/CTAForm';
import Footer from '@/components/landing/Footer';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    uz: "Bog'lanish | EduNex",
    ru: 'Связаться | EduNex',
    en: 'Contact | EduNex',
  };

  const descriptions: Record<string, string> = {
    uz: "EduNex jamoasi bilan bog'laning. Demo so'rang — 24 soat ichida javob beramiz.",
    ru: 'Свяжитесь с командой EduNex. Запросите демо — ответим в течение 24 часов.',
    en: 'Contact EduNex team. Request a demo — we respond within 24 hours.',
  };

  return {
    title: titles[locale] ?? titles.uz,
    description: descriptions[locale] ?? descriptions.uz,
    alternates: {
      canonical: `https://www.edunex.uz/${locale}/contact`,
      languages: {
        uz: 'https://www.edunex.uz/uz/contact',
        ru: 'https://www.edunex.uz/ru/contact',
        en: 'https://www.edunex.uz/en/contact',
        'x-default': 'https://www.edunex.uz/uz/contact',
      },
    },
  };
}

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <CTAForm />
      </div>
      <Footer />
    </main>
  );
}