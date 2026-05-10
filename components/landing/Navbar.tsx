'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOCALES = ['uz', 'ru', 'en'] as const;
type Locale = (typeof LOCALES)[number];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setMenuOpen(false);
  };

  const navLinks = [
    { href: '#features', label: t('features') },
    { href: '#pricing', label: t('pricing') },
    { href: '#testimonials', label: t('testimonials') },
    { href: '#faq', label: t('faq') },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Top border line */}
        <div className="absolute inset-x-0 top-0 h-px bg-slate-900/5" />

        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-[72px]">

              {/* Logo */}
              <Link
                href={`/${locale}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center group"
              >
                <img
                  src="/edunex_logo.png"
                  alt="EduNex"
                  className="h-12 w-auto object-contain"
                />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Desktop Right */}
              <div className="hidden md:flex items-center gap-3">
                {/* Lang switcher */}
                <div className="flex items-center gap-0.5 p-1 rounded-lg bg-slate-100 border border-slate-200">
                  {LOCALES.map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLocale(l)}
                      className={`relative px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                        locale === l
                          ? 'text-slate-900'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {locale === l && (
                        <motion.div
                          layoutId="locale-pill"
                          className="absolute inset-0 bg-white rounded-md shadow-sm border border-slate-200"
                          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10">{l}</span>
                    </button>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 active:scale-[0.98] transition-all duration-200"
                >
                  {t('demo')}
                </a>
              </div>

              {/* Mobile: lang + burger */}
              <div className="flex md:hidden items-center gap-2">
                <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-slate-100">
                  {LOCALES.map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLocale(l)}
                      className={`relative px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                        locale === l
                          ? 'text-slate-900'
                          : 'text-slate-400'
                      }`}
                    >
                      {locale === l && (
                        <motion.div
                          layoutId="locale-pill-mobile"
                          className="absolute inset-0 bg-white rounded-md shadow-sm border border-slate-200"
                          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10">{l}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors"
                  aria-label="Menu"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={menuOpen ? 'x' : 'menu'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {menuOpen
                        ? <X className="w-5 h-5 text-slate-700" />
                        : <Menu className="w-5 h-5 text-slate-700" />
                      }
                    </motion.div>
                  </AnimatePresence>
                </button>
              </div>

            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-[72px] z-40 md:hidden"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden">

                {/* Links */}
                <div className="p-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                      className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 mx-4" />

                {/* CTA */}
                <div className="p-3">
                  <motion.a
                    href="#cta"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.22 }}
                    className="flex items-center justify-center w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold active:scale-[0.98] transition-transform"
                  >
                    {t('demo')}
                  </motion.a>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}