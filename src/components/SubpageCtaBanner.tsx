/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ACADEMY_INFO } from '../data/academyData';
import { getAssetUrl } from '../utils/assetUrl';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SubpageCtaBannerProps {
  buttonType?: 'admission' | 'trial';
}

export const SubpageCtaBanner: React.FC<SubpageCtaBannerProps> = ({ buttonType = 'admission' }) => {
  const { language, navigateTo } = useLanguage();

  const handleAction = () => {
    if (buttonType === 'trial') {
      navigateTo('free-trial', { appType: 'free-trial' });
    } else {
      navigateTo('admission', { appType: 'admission' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
      <div className="bg-[#123D32] text-white rounded-3xl p-6 sm:p-10 border border-[#D6B66C]/40 shadow-lg relative overflow-hidden">
        {/* Decorative background Islamic geometry */}
        <div
          className="absolute -right-16 -top-16 w-64 h-64 border-16 border-[#D6B66C]/10 rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Headline */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <img
              src={getAssetUrl(ACADEMY_INFO.logo)}
              alt="Al Muinul Quran Academy"
              className="w-16 h-16 rounded-full border-2 border-[#D6B66C] object-cover bg-white p-0.5 shrink-0 shadow-md"
            />
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider block">
                {language === 'en' ? 'Ready to Start Learning?' : 'কুরআন শিক্ষা শুরু করতে চান?'}
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                {language === 'en'
                  ? 'Join Al Muinul Quran Academy'
                  : 'যুক্ত হোন আল মুঈনুল কুরআন একাডেমিতে'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === 'en'
                  ? 'Learn the Quran. Illuminate Your Life.'
                  : 'কুরআন শিখুন, জীবনকে আলোকিত করুন।'}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleAction}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D6B66C] hover:bg-amber-300 text-[#123D32] font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer shrink-0"
          >
            <span>
              {buttonType === 'trial'
                ? language === 'en'
                  ? 'Start Free Trial'
                  : 'ফ্রি ট্রায়াল শুরু করুন'
                : language === 'en'
                ? 'Apply for Admission'
                : 'ভর্তির আবেদন করুন'}
            </span>
            <ArrowRight className="w-4 h-4 text-[#123D32]" />
          </button>
        </div>
      </div>
    </section>
  );
};
