'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView, cubicBezier } from 'framer-motion';
import { Check, Users, Users2, Building2 } from 'lucide-react';

const ease = cubicBezier(0.22, 1, 0.36, 1);

const PLANS = [
  {
    key: 'starter',
    icon: Users,
    price: 300_000,
    accent: 'bg-emerald-50 text-emerald-600',
    border: 'border-slate-200',
    check: 'bg-emerald-50 text-emerald-600',
    popular: false,
  },
  {
    key: 'pro',
    icon: Users2,
    price: 600_000,
    accent: 'bg-slate-900 text-white',
    border: 'border-slate-900',
    check: 'bg-slate-100 text-slate-700',
    popular: true,
  },
  {
    key: 'enterprise',
    icon: Building2,
    price: null,
    accent: 'bg-violet-50 text-violet-600',
    border: 'border-slate-200',
    check: 'bg-violet-50 text-violet-600',
    popular: false,
  },
] as const;

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default function Pricing() {
  const t = useTranslations('pricing');
  const [yearly, setYearly] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="pricing" className="py-12 bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-slate-100 mb-10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="mb-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5"
          >
            <span className="w-4 h-px bg-slate-300" />
            {t('label')}
            <span className="w-4 h-px bg-slate-300" />
          </motion.span>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08, ease }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight whitespace-nowrap"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t('title')}
            </motion.h2>

            {/* Yearly toggle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.14, ease }}
              className="flex items-center gap-3 shrink-0"
            >
              <span className={`text-sm font-medium transition-colors ${!yearly ? 'text-slate-900' : 'text-slate-400'}`}>
                {t('monthly')}
              </span>

              <button
                onClick={() => setYearly(!yearly)}
                className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
                  yearly ? 'bg-slate-900' : 'bg-slate-200'
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${
                    yearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>

              <span className={`text-sm font-medium transition-colors ${yearly ? 'text-slate-900' : 'text-slate-400'}`}>
                {t('yearly')}
              </span>

              {yearly && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-md border border-emerald-100"
                >
                  {t('yearly_badge')}
                </motion.span>
              )}
            </motion.div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map(({ key, icon: Icon, price, accent, border, check, popular }, i) => {
            const finalPrice = price
              ? yearly ? Math.round(price * 0.8) : price
              : null;

            const features = t.raw(`plans.${key}.features`) as string[];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.09, duration: 0.55, ease }}
                className={`relative flex flex-col rounded-2xl border-2 p-6 transition-all duration-300 ${border} ${
                  popular
                    ? 'bg-slate-900 shadow-[0_8px_40px_rgba(15,23,42,0.18)]'
                    : 'bg-white hover:border-slate-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
                }`}
              >
                {/* Popular badge */}
                {popular && (
                  <div className="absolute -top-3.5 left-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-900 text-xs font-bold rounded-full shadow-sm border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {t('popular')}
                    </span>
                  </div>
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${popular ? 'bg-white/10' : accent}`}>
                    <Icon className={`w-4 h-4 ${popular ? 'text-white' : ''}`} />
                  </div>
                  <div>
                    <div
                      className={`text-sm font-semibold ${popular ? 'text-white' : 'text-slate-900'}`}
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {t(`plans.${key}.name`)}
                    </div>
                    <div className={`text-xs mt-0.5 ${popular ? 'text-slate-400' : 'text-slate-400'}`}>
                      {t(`plans.${key}.students`)}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  {finalPrice !== null ? (
                    <>
                      <div className="flex items-end gap-1">
                        <span
                          className={`text-3xl font-bold tracking-tight ${popular ? 'text-white' : 'text-slate-900'}`}
                          style={{ fontFamily: 'var(--font-syne)' }}
                        >
                          {formatPrice(finalPrice)}
                        </span>
                        <span className={`mb-1.5 text-xs ${popular ? 'text-slate-400' : 'text-slate-400'}`}>
                          {t('currency')} / {t('per_month')}
                        </span>
                      </div>
                      <div className={`text-xs mt-1 ${popular ? 'text-slate-500' : 'text-slate-400'}`}>
                        {yearly
                          ? `= ${formatPrice(finalPrice * 12)} ${t('currency')} / ${t('per_year')}`
                          : t('yearly_hint')}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`text-3xl font-bold tracking-tight ${popular ? 'text-white' : 'text-slate-900'}`}
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {t('custom_price')}
                      </div>
                      <div className={`text-xs mt-1 ${popular ? 'text-slate-500' : 'text-slate-400'}`}>
                        {t('custom_hint')}
                      </div>
                    </>
                  )}
                </div>

                {/* Divider */}
                <div className={`h-px mb-5 ${popular ? 'bg-white/10' : 'bg-slate-100'}`} />

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                        popular ? 'bg-white/10' : check
                      }`}>
                        <Check className={`w-3 h-3 ${popular ? 'text-white' : ''}`} strokeWidth={2.5} />
                      </div>
                      <span className={`text-sm leading-relaxed ${popular ? 'text-slate-300' : 'text-slate-500'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#cta"
                  className={`block text-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                    popular
                      ? 'bg-white text-slate-900 hover:bg-slate-100'
                      : 'bg-slate-900 text-white hover:bg-slate-700'
                  }`}
                >
                  {key === 'enterprise' ? t('cta_contact') : t('cta_start')}
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}