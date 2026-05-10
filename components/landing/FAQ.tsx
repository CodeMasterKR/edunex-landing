'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView, AnimatePresence, cubicBezier } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const ease = cubicBezier(0.22, 1, 0.36, 1);

export default function FAQ() {
  const t = useTranslations('faq');
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const items = t.raw('items') as Array<{ q: string; a: string }>;

  return (
    <section id="faq" className="py-12 bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-slate-100 mb-10" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — markazda */}
        <div ref={ref} className="mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5"
          >
            <span className="w-4 h-px bg-slate-300" />
            FAQ
            <span className="w-4 h-px bg-slate-300" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-3"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            {t('title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14, ease }}
            className="text-sm text-slate-400 leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Accordion — markazda, to'liq kenglikda */}
        <div className="space-y-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                open === i
                  ? 'border-slate-300 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xs font-bold text-slate-300 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-sm font-semibold transition-colors leading-snug ${
                      open === i ? 'text-slate-900' : 'text-slate-600'
                    }`}
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {item.q}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                    open === i
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {open === i
                    ? <Minus className="w-3.5 h-3.5" />
                    : <Plus className="w-3.5 h-3.5" />
                  }
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease }}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-slate-100 mb-4 ml-8" />
                      <p className="text-sm text-slate-400 leading-relaxed ml-8">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}