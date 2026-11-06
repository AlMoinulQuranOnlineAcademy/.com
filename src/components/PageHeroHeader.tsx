/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

interface HeroBadge {
  icon: React.ReactNode;
  label: {
    en: string;
    bn: string;
  };
}

interface PageHeroHeaderProps {
  pageName: {
    en: string;
    bn: string;
  };
  kicker: {
    en: string;
    bn: string;
  };
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  heroImage?: string;
  heroImageAlt?: {
    en: string;
    bn: string;
  };
  badges?: HeroBadge[];
  quote?: {
    arabic?: string;
    translation: {
      en: string;
      bn: string;
    };
    source: {
      en: string;
      bn: string;
    };
  };
}

export const PageHeroHeader: React.FC<PageHeroHeaderProps> = ({
  pageName,
  kicker,
  title,
  description,
  heroImage,
  heroImageAlt,
  badges,
  quote = {
    arabic: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
    translation: {
      en: '“And say: My Lord, increase me in knowledge.”',
      bn: '“আর বলুন: হে আমার রব, আমাকে জ্ঞানে সমৃদ্ধ করুন।”',
    },
    source: {
      en: '— Surah Taha (20:114)',
      bn: '— সূরা ত্ব-হা (২০:১১৪)',
    },
  },
}) => {
  const { language, navigateTo } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-transparent pt-6 pb-12 lg:pb-16 border-b border-[#D6B66C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-slate-500 mb-6"
        >
          <button
            onClick={() => navigateTo('')}
            className="hover:text-[#123D32] transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Home' : 'হোম'}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#123D32] font-semibold">{pageName[language]}</span>
        </nav>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Kicker, Title, Description, and Badges (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#D6B66C]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D6B66C]">
                {kicker[language]}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123D32] leading-tight tracking-tight">
              {title[language]}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              {description[language]}
            </p>

            {/* Badges strip matching the reference screenshots */}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-2.5 pt-3">
                {badges.map((b, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-medium text-slate-700"
                  >
                    <span className="text-[#123D32]">{b.icon}</span>
                    <span>{b.label[language]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Arched Islamic Window with Quran visual and Hadith Plaque (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Islamic Arch Window */}
              <div className="relative rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#D6B66C] shadow-xl bg-black group">
                <img
                  src={getAssetUrl(heroImage || 'assets/images/courses_hero_img_1793378996394.webp')}
                  alt={heroImageAlt ? heroImageAlt[language] : (language === 'en' ? 'Al Muinul Quran Academy' : 'আল মুঈনুল কুরআন একাডেমি')}
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                />

                {/* Dark Green Gradient Plaque with Calligraphy and Citation */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D32]/95 via-[#123D32]/60 to-transparent flex flex-col justify-end p-6 text-right">
                  {quote.arabic && (
                    <p className="font-serif text-lg text-[#D6B66C] mb-2 dir-rtl tracking-wide">
                      {quote.arabic}
                    </p>
                  )}
                  <p className="font-serif italic text-white text-sm sm:text-base font-medium leading-snug">
                    {quote.translation[language]}
                  </p>
                  <p className="text-xs text-amber-200 mt-1">{quote.source[language]}</p>
                </div>
              </div>

              {/* Decorative gold corner flourish */}
              <div
                className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#D6B66C] rounded-tr-xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
