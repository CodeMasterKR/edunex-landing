'use client';

import { useTranslations } from 'next-intl';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const links = [
    { href: '#features',     label: nav('features')     },
    { href: '#screenshots',  label: nav('screenshots')  },
    { href: '#pricing',      label: nav('pricing')      },
    { href: '#testimonials', label: nav('testimonials') },
    { href: '#faq',          label: nav('faq')          },
  ];

  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="/edunex_logo.png"
                alt="EduNex"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              {t('desc')}
            </p>

            <a
              href="https://t.me/ibrohimov_kamron"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-slate-300 hover:text-white transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              @ibrohimov_kamron
            </a>
          </div>

          <div>
            <h4
              className="font-semibold text-white mb-4 text-sm"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t('links_title')}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold text-white mb-4 text-sm"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {t('contact_title')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+998935895766"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  +998 93 589 57 66
                </a>
              </li>
              <li>
                <a
                  href="mailto:ibrahimovkamronbek7@gmail.com"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  ibrahimovkamronbek7@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                Toshkent, O'zbekiston
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-sm">{t('copyright')}</p>
          <p className="text-slate-600 text-xs">{t('rights')}</p>
        </div>
      </div>

    </footer>
  );
}