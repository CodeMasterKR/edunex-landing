'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Play, Users, GraduationCap, BookOpen, Activity, TrendingUp, X } from 'lucide-react';

const ease = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease },
  }),
};

function DemoModal({ isOpen, onClose, t }: { isOpen: boolean; onClose: () => void; t: (key: string) => string }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 8 }}
            transition={{ duration: 0.35, ease }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl px-4"
          >
            <div className="bg-white rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 fill-slate-700 text-slate-700" />
                  <span className="text-sm font-semibold text-slate-700">{t('modal_title')}</span>
                </div>
                <button
                  onClick={onClose}
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Video placeholder — video tayyor bo'lganda shu div o'rniga <iframe> yoki <video> qo'ying */}
              <div className="aspect-video bg-slate-950 flex flex-col items-center justify-center gap-4 relative overflow-hidden">

                {/* Dot grid background */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Glow */}
                <div className="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Play circle */}
                <div className="relative w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white/40 fill-white/40 ml-1" />
                </div>

                {/* Text */}
                <div className="text-center relative">
                  <p className="text-white/60 text-sm font-medium">{t('modal_coming_soon')}</p>
                  <p className="text-white/30 text-xs mt-1">{t('modal_desc')}</p>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function DashboardMockup({ t }: { t: (key: string) => string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease, delay: 0.3 }}
      className="relative w-full lg:-mr-8 xl:-mr-12"
    >
      {/* Subtle glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-100 rounded-3xl blur-2xl" />

      {/* Browser chrome */}
      <div className="relative rounded-2xl border border-slate-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)] overflow-hidden">

        {/* Browser topbar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-amber-400/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 max-w-xs mx-auto">
            <div className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0" />
            <span className="text-xs text-slate-400 font-medium tracking-wide">app.edunex.uz</span>
          </div>
          <div className="w-16" />
        </div>

        {/* Screen */}
        <div className="aspect-[18/10] bg-slate-50 overflow-hidden">
          <Image
            src="/edunex.png"
            alt="EduNex Dashboard"
            width={1700}
            height={875}
            priority
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Stat pill — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5, ease }}
        className="absolute -bottom-5 -left-4 flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 leading-none mb-0.5">{t('pill_month')}</div>
          <div className="text-xs font-semibold text-slate-700">{t('pill_students')}</div>
        </div>
      </motion.div>

      {/* Active learners pill — top right */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5, ease }}
        className="absolute -top-4 -right-4 flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
      >
        <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
          <Activity className="w-3.5 h-3.5 text-blue-600" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 leading-none mb-0.5">{t('pill_active_label')}</div>
          <div className="text-xs font-semibold text-slate-700">{t('pill_active_value')}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isUz = locale === 'uz';
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    { icon: Users,         value: '2K+',  label: t('stats.students') },
    { icon: GraduationCap, value: '5+',   label: t('stats.centers')  },
    { icon: BookOpen,      value: '100+', label: t('stats.groups')   },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-100" />

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} t={t} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-center">

          {/* ── LEFT ── */}
          <div className="max-w-xl">

            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                <span className="w-4 h-px bg-slate-300" />
                {t('badge')}
                <span className="w-4 h-px bg-slate-300" />
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className={`${
                isUz
                  ? 'text-[2.75rem] sm:text-5xl lg:text-[3.25rem]'
                  : 'text-[2.25rem] sm:text-4xl lg:text-[2.75rem]'
              } font-bold tracking-[-0.03em] leading-[1.08] text-slate-900`}
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t('headline').split(' ').slice(0, -2).join(' ')}
              <span className="block text-slate-400 font-semibold mt-1">
                {t('headline').split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 text-base leading-7 text-slate-500 max-w-md"
            >
              {t('subheadline')}
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-3 mt-10"
            >
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 active:scale-[0.98] transition-all duration-200"
              >
                {t('cta_primary')}
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5 fill-slate-500 text-slate-500" />
                {t('cta_secondary')}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center gap-0 mt-12 pt-8 border-t border-slate-100"
            >
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div
                  key={label}
                  className={`flex-1 ${i !== 0 ? 'pl-6 border-l border-slate-100' : ''} ${i !== stats.length - 1 ? 'pr-6' : ''}`}
                >
                  <div className="text-xl font-bold text-slate-800 tracking-tight">{value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── RIGHT ── */}
          <DashboardMockup t={t} />

        </div>
      </div>
    </section>
  );
}