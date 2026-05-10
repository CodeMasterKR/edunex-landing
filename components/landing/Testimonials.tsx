'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView, cubicBezier } from 'framer-motion';
import { Star } from 'lucide-react';

const ease = cubicBezier(0.22, 1, 0.36, 1);

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const items = t.raw('items') as Array<{
    name: string;
    role: string;
    quote: string;
    rating: number;
  }>;

  return (
    <section id="testimonials" className="py-12 bg-white">

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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.09, duration: 0.55, ease }}
              className="flex flex-col bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-6">
                "{item.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-slate-100 mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-slate-900"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-400">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}