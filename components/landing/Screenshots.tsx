'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView, AnimatePresence, cubicBezier } from 'framer-motion';
import {
  LayoutDashboard, Users, CreditCard, CheckSquare,
  GraduationCap, Settings, FileText, BookOpen,
  UserCheck, Briefcase, Banknote, AlertCircle,
  Tv2, BookMarked,
} from 'lucide-react';

const ease = cubicBezier(0.22, 1, 0.36, 1);

type Role = 'director' | 'teacher';

const DIRECTOR_TABS = [
  { key: 'dashboard',  icon: LayoutDashboard, image: '/director-1.png' },
  { key: 'reports',    icon: FileText,        image: '/director-2.png' },
  { key: 'students',   icon: Users,           image: '/director-3.png' },
  { key: 'teachers',   icon: GraduationCap,   image: '/director-4.png' },
  { key: 'groups',     icon: Briefcase,       image: '/director-5.png' },
  { key: 'attendance', icon: CheckSquare,     image: '/director-6.png' },
  { key: 'payments',   icon: CreditCard,      image: '/director-7.png' },
  { key: 'salaries',   icon: Banknote,        image: '/director-8.png' },
  { key: 'debtors',    icon: AlertCircle,     image: '/director-9.png' },
  { key: 'settings',   icon: Settings,        image: '/director-10.png' },
] as const;

const TEACHER_TABS = [
  { key: 'overview',   icon: BookOpen,   image: '/teacher-1.png' },
  { key: 'groups',     icon: Users,      image: '/teacher-2.png' },
  { key: 'payments',   icon: CreditCard, image: '/teacher-3.png' },
  { key: 'attendance', icon: UserCheck,  image: '/teacher-4.png' },
] as const;

type DirectorKey = (typeof DIRECTOR_TABS)[number]['key'];
type TeacherKey  = (typeof TEACHER_TABS)[number]['key'];

const ROLE_CONFIG: Record<Role, { icon: React.ElementType; labelKey: string }> = {
  director: { icon: Tv2,        labelKey: 'roles.director' },
  teacher:  { icon: BookMarked, labelKey: 'roles.teacher'  },
};

function BrowserMockup({ image, tabKey, role }: { image: string; tabKey: string; role: Role }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 max-w-sm mx-auto">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-[11px] text-slate-400 font-medium truncate tracking-wide">
            app.edunex.uz/{role}/{tabKey}
          </span>
        </div>
        <div className="w-16 shrink-0" />
      </div>

      <div className="relative aspect-[16/9] sm:aspect-[18/10] bg-slate-50 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${role}-${tabKey}`}
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.32, ease }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={`${role} ${tabKey}`}
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Screenshots() {
  const t = useTranslations('screenshots');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [role, setRole]               = useState<Role>('director');
  const [directorTab, setDirectorTab] = useState<DirectorKey>('dashboard');
  const [teacherTab, setTeacherTab]   = useState<TeacherKey>('overview');

  const activeTabs  = role === 'director' ? DIRECTOR_TABS : TEACHER_TABS;
  const activeKey   = role === 'director' ? directorTab : teacherTab;
  const activeImage = activeTabs.find((tab) => tab.key === activeKey)!.image;

  const setTab = (key: string) => {
    if (role === 'director') setDirectorTab(key as DirectorKey);
    else setTeacherTab(key as TeacherKey);
  };

  const handleRoleChange = (r: Role) => {
    setRole(r);
  };

  return (
    <section id="screenshots" className="py-8 bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-slate-100 mb-8" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6"
          >
            <span className="w-4 h-px bg-slate-300" />
            {t('label')}
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

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="flex flex-col gap-4 mb-8"
        >
          {/* Role Toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl w-fit">
            {(['director', 'teacher'] as Role[]).map((r) => {
              const { icon: RoleIcon, labelKey } = ROLE_CONFIG[r];
              return (
                <button
                  key={r}
                  onClick={() => handleRoleChange(r)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    role === r ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {role === r && (
                    <motion.div
                      layoutId="role-pill"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm border border-slate-200"
                      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    />
                  )}
                  <RoleIcon className="relative z-10 w-4 h-4" />
                  <span className="relative z-10">{t(labelKey)}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Pills */}
          <div className="relative">
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 sm:hidden pointer-events-none" />
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap">
              <AnimatePresence mode="wait">
                {activeTabs.map(({ key, icon: Icon }, i) => (
                  <motion.button
                    key={`${role}-${key}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ delay: i * 0.035, duration: 0.2, ease }}
                    onClick={() => setTab(key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border whitespace-nowrap shrink-0 sm:shrink ${
                      activeKey === key
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{t(`tabs.${key}`)}</span>
                    {activeKey === key && (
                      <motion.span
                        layoutId="tab-dot"
                        className="w-1.5 h-1.5 rounded-full bg-white/60 ml-0.5"
                      />
                    )}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          <BrowserMockup image={activeImage} tabKey={activeKey} role={role} />
        </motion.div>

        {/* Mobile dot strip */}
        <div className="flex justify-center gap-1.5 mt-5 sm:hidden">
          {activeTabs.map(({ key }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeKey === key
                  ? 'bg-slate-900 w-6'
                  : 'bg-slate-200 w-1.5 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}