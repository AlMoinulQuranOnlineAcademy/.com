/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ACADEMY_INFO, COURSES_DATA } from '../data/academyData';
import { RoutePath } from '../types';
import { Phone, Mail, MapPin, ExternalLink, Globe } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export const Footer: React.FC = () => {
  const { language, setLanguage, navigateTo, t, setLegalModal } = useLanguage();

  const handleNav = (route: RoutePath) => {
    navigateTo(route);
  };

  const handleCourseNav = (courseId: string) => {
    navigateTo('courses', { courseId });
  };

  return (
    <footer className="bg-[#123D32] text-white border-t border-[#D6B66C]/30 relative overflow-hidden">
      {/* Decorative Islamic arch background watermark */}
      <div
        className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 pointer-events-none rounded-full border-32 border-[#D6B66C]"
        aria-hidden="true"
      />

      {/* Top Banner strip */}
      <div className="bg-[#0c2a22] border-b border-[#D6B66C]/20 py-4 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#D6B66C] font-semibold">
              {language === 'en' ? 'Start Learning:' : 'শুরু করুন কুরআন শিক্ষা:'}
            </span>
            <span className="text-slate-200">
              {language === 'en'
                ? 'Join Al Muinul Quran Online Academy today'
                : 'আজই আল মুঈনুল কুরআন অনলাইন একাডেমিতে যুক্ত হোন'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('free-trial', { appType: 'free-trial' })}
              className="text-xs font-semibold px-3.5 py-1.5 bg-[#D6B66C] text-[#123D32] hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Request Free Trial' : 'ফ্রি ট্রায়াল আবেদন'}
            </button>
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 bg-emerald-600/80 hover:bg-emerald-600 text-white rounded-md transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & About (Span 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={getAssetUrl(ACADEMY_INFO.logo)}
                alt="Al Muinul Quran Academy Logo"
                className="w-14 h-14 rounded-full border-2 border-[#D6B66C] object-cover bg-white p-0.5"
              />
              <div>
                <h3 className="font-serif font-bold text-xl text-white tracking-tight">
                  Al Muinul Quran
                </h3>
                <p className="text-xs font-medium text-[#D6B66C] uppercase tracking-wider">
                  Online Academy
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {language === 'en'
                ? 'Dedicated to providing authentic, personalized, and respectful Quranic education for students worldwide through one-to-one Google Meet classes.'
                : 'বিশ্বজুড়ে সকল মুসলিম শিক্ষার্থী ও সন্তানদের জন্য ঘরে বসে গুগল মিটের মাধ্যমে বিশুদ্ধ ও ওয়ান-টু-ওয়ান কুরআন শিক্ষার নির্ভরযোগ্য প্রতিষ্ঠান।'}
            </p>

            <div className="pt-2">
              <span className="text-xs text-[#D6B66C] font-serif italic">
                "{ACADEMY_INFO.tagline[language]}"
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={ACADEMY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#D6B66C] hover:text-[#123D32] text-white transition-colors"
                aria-label="Facebook Page"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-white text-white transition-colors"
                aria-label="WhatsApp Contact"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${ACADEMY_INFO.email}`}
                className="p-2 rounded-full bg-white/10 hover:bg-[#D6B66C] hover:text-[#123D32] text-white transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#D6B66C] uppercase tracking-wider">
              {t.common.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.courses}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('teachers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.teachers}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('free-trial')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.freeTrial}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admission')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.admission}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: 6 Approved Courses */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#D6B66C] uppercase tracking-wider">
              {t.common.ourCourses}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {COURSES_DATA.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => handleCourseNav(c.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {c.title[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#D6B66C] uppercase tracking-wider">
              {t.common.contactInfo}
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6B66C] shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.location[language]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6B66C] shrink-0" />
                <a
                  href={`tel:${ACADEMY_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {ACADEMY_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D6B66C] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${ACADEMY_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {ACADEMY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setLegalModal('privacy')}
                  className="text-xs text-slate-400 hover:text-[#D6B66C] transition-colors block cursor-pointer"
                >
                  {t.common.privacyPolicy}
                </button>
                <button
                  onClick={() => setLegalModal('terms')}
                  className="text-xs text-slate-400 hover:text-[#D6B66C] transition-colors block mt-1 cursor-pointer"
                >
                  {t.common.termsConditions}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & language bar */}
        <div className="mt-12 pt-6 border-t border-[#D6B66C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {ACADEMY_INFO.name.en}. {t.common.allRightsReserved}
          </p>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              <Globe className="w-3.5 h-3.5 text-[#D6B66C]" />
              <span>{language === 'en' ? 'Language:' : 'ভাষা:'}</span>
            </span>
            <div
              className="inline-flex items-center p-1 rounded-lg bg-black/40 border border-[#D6B66C]/30 shadow-inner"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  language === 'bn'
                    ? 'bg-[#D6B66C] text-[#123D32] shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                বাংলা
              </button>
              <span className="text-white/20 text-xs px-1 select-none">|</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#D6B66C] text-[#123D32] shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
