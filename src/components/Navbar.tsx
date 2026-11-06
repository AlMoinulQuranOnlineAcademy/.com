/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RoutePath } from '../types';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { getAssetUrl } from '../utils/assetUrl';

export const Navbar: React.FC = () => {
  const { language, setLanguage, currentRoute, navigateTo, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; route: RoutePath }[] = [
    { label: t.nav.home, route: '' },
    { label: t.nav.about, route: 'about' },
    { label: t.nav.courses, route: 'courses' },
    { label: t.nav.teachers, route: 'teachers' },
    { label: t.nav.freeTrial, route: 'free-trial' },
    { label: t.nav.admission, route: 'admission' },
    { label: t.nav.contact, route: 'contact' },
  ];

  const handleNavClick = (route: RoutePath) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D6B66C]/25 shadow-xs transition-all">
      {/* Top micro bar with contact info */}
      <div className="bg-[#123D32] text-white/90 text-xs py-1.5 px-4 hidden md:block border-b border-[#D6B66C]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D6B66C]" />
              {language === 'en'
                ? 'One-to-One Live Quran Classes via Google Meet'
                : 'গুগল মিটে ওয়ান-টু-ওয়ান লাইভ কুরআন ক্লাস'}
            </span>
            <a
              href={`tel:${ACADEMY_INFO.phone}`}
              className="flex items-center gap-1 hover:text-[#D6B66C] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6B66C]" />
              <span>{ACADEMY_INFO.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#D6B66C]">
              {language === 'en' ? '1–2 Free Trial Classes Available' : '১-২টি ফ্রি ট্রায়াল ক্লাসের সুযোগ'}
            </span>
            <span className="text-white/40">|</span>
            <a
              href={ACADEMY_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D6B66C] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Academy Wordmark */}
          <button
            onClick={() => handleNavClick('')}
            className="flex items-center gap-3 group text-left cursor-pointer shrink-0 focus-visible:outline-hidden"
          >
            <img
              src={getAssetUrl(ACADEMY_INFO.logo)}
              alt="Al Muinul Quran Online Academy Logo"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#D6B66C] object-cover shadow-xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-[#123D32] leading-tight tracking-tight">
                Al Muinul Quran
              </span>
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#D6B66C]">
                Online Academy
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route || 'home'}
                  onClick={() => handleNavClick(link.route)}
                  className={`cursor-pointer whitespace-nowrap transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#123D32] font-semibold'
                      : 'text-slate-700 hover:text-[#123D32]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D6B66C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action Group: Language selector + Admission button (only on lg: screens) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Dual Language Box (ছোট ঘরের মধ্যে বাংলা ও English দুইটাই পরিষ্কারভাবে দৃশ্যমান) */}
            <div
              className="inline-flex items-center p-1 rounded-lg bg-slate-100 border border-slate-300 shadow-inner"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  language === 'bn'
                    ? 'bg-[#123D32] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#123D32] hover:bg-white/60'
                }`}
                title="বাংলা সংস্করণ"
              >
                <span>বাংলা</span>
              </button>
              <span className="text-slate-300 text-xs px-1 select-none">|</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#123D32] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#123D32] hover:bg-white/60'
                }`}
                title="English Version"
              >
                <span>English</span>
              </button>
            </div>

            {/* Admission Now CTA */}
            <button
              onClick={() => handleNavClick('admission')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-medium text-white bg-[#123D32] hover:bg-[#0c2a22] rounded-lg shadow-xs hover:shadow transition-all cursor-pointer border border-[#D6B66C]/40"
            >
              <span>{t.nav.admissionNow}</span>
              <ArrowRight className="w-4 h-4 text-[#D6B66C]" />
            </button>
          </div>

          {/* Mobile Menu & Dual Language Box */}
          <div className="flex items-center gap-2 lg:hidden">
            <div
              className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-300 shadow-inner"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  language === 'bn'
                    ? 'bg-[#123D32] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#123D32]'
                }`}
              >
                বাংলা
              </button>
              <span className="text-slate-300 text-[10px] px-0.5 select-none">|</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#123D32] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#123D32]'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#123D32] hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route || 'home'}
                  onClick={() => handleNavClick(link.route)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#123D32] text-white font-semibold'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('admission')}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white bg-[#123D32] rounded-lg shadow-xs cursor-pointer"
            >
              <span>{t.nav.admissionNow}</span>
              <ArrowRight className="w-4 h-4 text-[#D6B66C]" />
            </button>

            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#123D32] bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{ACADEMY_INFO.phone} (WhatsApp)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
