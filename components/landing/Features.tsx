'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { cubicBezier } from 'framer-motion';
import { useRef } from 'react';
import {
  Users, CreditCard, CheckSquare, GraduationCap, MessageCircle, BarChart3,
} from 'lucide-react';

const ease = cubicBezier(0.22, 1, 0.36, 1);

const FEATURES = [
  { key: 'students',   icon: Users,          accent: 'bg-slate-100 text-slate-600' },
  { key: 'payments',   icon: CreditCard,     accent: 'bg-emerald-50 text-emerald-600' },
  { key: 'attendance', icon: CheckSquare,    accent: 'bg-blue-50 text-blue-600' },
  { key: 'teachers',   icon: GraduationCap,  accent: 'bg-amber-50 text-amber-600' },
  { key: 'telegram',   icon: MessageCircle,  accent: 'bg-sky-50 text-sky-600' },
  { key: 'analytics',  icon: BarChart3,      accent: 'bg-violet-50 text-violet-600' },
] as const;

function FeatureCard({
  featureKey,
  icon: Icon,
  accent,
  index,
}: {
  featureKey: string;
  icon: React.ElementType;
  accent: string;
  index: number;
}) {
  const t = useTranslations(`features.items.${featureKey}`);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease }}
      className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-300"
    >
      {/* Icon */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${accent}`}>
        <Icon className="w-5 h-5" strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3
        className="text-[15px] font-semibold text-slate-900 mb-2 tracking-tight"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        {t('title')}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">
        {t('desc')}
      </p>

      {/* Bottom accent line — hover da chiqadi */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
    </motion.div>
  );
}

export default function Features() {
  const t = useTranslations('features');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" className="pb-16">

      {/* Top separator */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-slate-100 mb-16" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6"
          >
            <span className="w-4 h-px bg-slate-300" />
            {t('badge')}
            <span className="w-4 h-px bg-slate-300" />
          </motion.span>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08, ease }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-md leading-[1.1]"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t('title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.14, ease }}
              className="text-sm text-slate-400 leading-relaxed max-w-xs sm:text-right"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map(({ key, icon, accent }, i) => (
            <FeatureCard
              key={key}
              featureKey={key}
              icon={icon}
              accent={accent}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}