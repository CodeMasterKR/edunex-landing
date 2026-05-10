'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView, cubicBezier } from 'framer-motion';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

const ease = cubicBezier(0.22, 1, 0.36, 1);

interface FormData {
  firstName: string;
  phone: string;
  centerName: string;
}

export default function CTAForm() {
  const t = useTranslations('cta');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState<FormData>({ firstName: '', phone: '', centerName: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const benefits = t.raw('benefits') as string[];

  const handleSubmit = async () => {
    if (!form.firstName || !form.phone || !form.centerName) {
      setError(t('error_required'));
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ firstName: '', phone: '', centerName: '' });
      } else {
        setError(t('error_server'));
      }
    } catch {
      setError(t('error_network'));
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl border border-slate-200
    bg-slate-50 focus:bg-white
    text-sm text-slate-800 placeholder:text-slate-300
    focus:border-slate-400 focus:outline-none
    transition-all duration-200
  `;

  return (
    <section id="cta" className="py-12 bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-slate-100 mb-10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
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

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08, ease }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t('title')}{' '}
              <span className="text-slate-400 font-semibold">
                {t('highlight')}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.14, ease }}
              className="text-sm text-slate-400 leading-relaxed mb-8 max-w-sm"
            >
              {t('subtitle')}
            </motion.p>

            {/* Benefits */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2, ease }}
              className="space-y-3"
            >
              {benefits.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-slate-500" />
                  </div>
                  <span className="text-sm text-slate-500">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-[0_4px_32px_rgba(0,0,0,0.07)]">
              {success ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3
                    className="text-lg font-bold text-slate-900 mb-2"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {t('success_title')}
                  </h3>
                  <p className="text-sm text-slate-400">{t('success')}</p>
                </div>
              ) : (
                <div className="space-y-5">

                  {/* Form header */}
                  <div>
                    <h3
                      className="text-lg font-bold text-slate-900 mb-1"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {t('form_title')}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {t('form_subtitle')}
                    </p>
                  </div>

                  <div className="h-px bg-slate-100" />

                  {/* Fields */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        {t('firstName')} *
                      </label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        placeholder={t('placeholder_name')}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        {t('phone')} *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder={t('placeholder_phone')}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        {t('centerName')} *
                      </label>
                      <input
                        type="text"
                        value={form.centerName}
                        onChange={(e) => setForm({ ...form, centerName: e.target.value })}
                        placeholder={t('placeholder_center')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="text-red-500 text-xs bg-red-50 border border-red-100 px-3 py-2 rounded-lg">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('submitting')}
                      </>
                    ) : (
                      <>
                        {t('submit')}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    {t('privacy')}
                  </p>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}