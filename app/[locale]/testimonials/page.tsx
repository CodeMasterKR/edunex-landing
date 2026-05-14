import { Metadata } from 'next';
import Navbar from '@/components/landing/Navbar';
import Testimonials from '@/components/landing/Testimonials';
import CTAForm from '@/components/landing/CTAForm';
import Footer from '@/components/landing/Footer';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    uz: "Mijozlar fikri | EduNex",
    ru: 'Отзывы клиентов | EduNex',
    en: 'Customer Reviews | EduNex',
  };

  const descriptions: Record<string, string> = {
    uz: "O'quv markaz rahbarlari EduNex haqida nima deyishadi? Haqiqiy mijozlar tajribasi.",
    ru: 'Что говорят руководители учебных центров об EduNex? Реальный опыт клиентов.',
    en: 'What do learning center directors say about EduNex? Real customer experiences.',
  };

  return {
    title: titles[locale] ?? titles.uz,
    description: descriptions[locale] ?? descriptions.uz,
    alternates: {
      canonical: `https://www.edunex.uz/${locale}/testimonials`,
      languages: {
        uz: 'https://www.edunex.uz/uz/testimonials',
        ru: 'https://www.edunex.uz/ru/testimonials',
        en: 'https://www.edunex.uz/en/testimonials',
        'x-default': 'https://www.edunex.uz/uz/testimonials',
      },
    },
  };
}

export default function TestimonialsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Testimonials />
        <CTAForm />
      </div>
      <Footer />
    </main>
  );
}