/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { SubpageCtaBanner } from '../components/SubpageCtaBanner';
import { getAssetUrl } from '../utils/assetUrl';
import {
  Globe2,
  Users2,
  ShieldCheck,
  BookOpenCheck,
  CheckCircle2,
  ArrowRight,
  Compass,
  Eye,
  Award,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { language, navigateTo, t } = useLanguage();

  return (
    <div className="space-y-12 lg:space-y-20 pb-12">
      {/* 1. Page Hero Header */}
      <PageHeroHeader
        pageName={{
          en: 'About Us',
          bn: 'আমাদের সম্পর্কে',
        }}
        kicker={{
          en: 'About Our Academy',
          bn: 'আমাদের একাডেমি সম্পর্কে',
        }}
        title={{
          en: 'Al Muinul Quran Online Academy',
          bn: 'আল মুঈনুল কুরআন অনলাইন একাডেমি',
        }}
        description={{
          en: 'Quranic Education for a Brighter Future. We are a global online Quran learning academy, dedicated to providing authentic, personalized and high-quality Quranic education for children and adults, regardless of location.',
          bn: 'কুরআন শিক্ষার মাধ্যমে সুন্দর ভবিষ্যতের প্রত্যয়। দেশ ও প্রবাসে বসবাসরত শিশু, কিশোর ও বয়স্কদের জন্য শুদ্ধ ও সহীহভাবে কুরআন শিক্ষার এক আন্তর্জাতিক অনলাইন প্ল্যাটফর্ম।',
        }}
        heroImage="assets/images/about_hero_img_1793379380569.webp"
        heroImageAlt={{
          en: 'Magnificent Islamic Academy Library and Courtyard',
          bn: 'আল মুঈনুল কুরআন একাডেমি শিক্ষা ও অধ্যয়ন পরিবেশ',
        }}
        badges={[
          {
            icon: <Globe2 className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Global Online Reach',
              bn: 'বিশ্বব্যাপী অনলাইন সুবিধা',
            },
          },
          {
            icon: <Users2 className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'One-to-One Focus',
              bn: 'একক নিবিড় পাঠদান',
            },
          },
          {
            icon: <ShieldCheck className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Verified Scholars',
              bn: 'সনদপ্রাপ্ত শিক্ষকমণ্ডলী',
            },
          },
        ]}
      />

      {/* 2. Who We Are? (3-Zone Section matching about_us__0ef8eaee.png) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Zone: Description (4 cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-0.5 bg-[#D6B66C]" />
                  <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
                    {language === 'en' ? 'Who We Are?' : 'আমাদের পরিচয় ও উদ্দেশ্য'}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
                  {language === 'en'
                    ? 'A Trusted Online Quran Learning Academy'
                    : 'সহীহ কুরআন শিক্ষার নির্ভরযোগ্য প্রতিষ্ঠান'}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.home.aboutIntro}
              </p>

              <button
                onClick={() => navigateTo('courses')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123D32] hover:bg-[#0c2a22] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>{language === 'en' ? 'Explore Our Courses' : 'আমাদের কোর্সসমূহ দেখুন'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D6B66C]" />
              </button>
            </div>

            {/* Middle Zone: Arched Student Photo (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#D6B66C]/40 shadow-md">
                <img
                  src={getAssetUrl('assets/images/student_online_learning_1793371433018.webp')}
                  alt="Student learning Quran online with teacher on laptop"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right Zone: 4 Key Features with Circular Icons (4 cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F3F5F2] border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-white text-[#123D32] border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                  <Globe2 className="w-5 h-5 text-[#123D32]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
                    {t.about.feature1Title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">{t.about.feature1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F3F5F2] border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-white text-[#123D32] border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                  <Users2 className="w-5 h-5 text-[#123D32]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
                    {t.about.feature2Title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">{t.about.feature2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F3F5F2] border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-white text-[#123D32] border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#123D32]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
                    {t.about.feature3Title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">{t.about.feature3Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F3F5F2] border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-white text-[#123D32] border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                  <BookOpenCheck className="w-5 h-5 text-[#123D32]" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
                    {t.about.feature4Title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">{t.about.feature4Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Mission, Vision, Goal (3 Gold-Rimmed Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border-2 border-[#D6B66C]/40 text-left shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#123D32] text-[#D6B66C] flex items-center justify-center shrink-0 shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#123D32] mb-1">
                {t.home.ourMissionTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.home.ourMissionDesc}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-[#D6B66C]/40 text-left shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#123D32] text-[#D6B66C] flex items-center justify-center shrink-0 shadow-sm">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#123D32] mb-1">
                {t.home.ourVisionTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.home.ourVisionDesc}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-[#D6B66C]/40 text-left shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#123D32] text-[#D6B66C] flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#123D32] mb-1">
                {t.home.ourGoalTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.home.ourGoalDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Teaching Methodology (3-Zone Section with Checklist, Photo & Hadith Plaque) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Zone: Checklist Points (4 cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-0.5 bg-[#D6B66C]" />
                  <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
                    {language === 'en' ? 'Our Teaching Methodology' : 'আমাদের পাঠদান পদ্ধতি'}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#123D32]">
                  {t.about.methodologyTitle}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.about.methodologyDesc}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#123D32] shrink-0" />
                  <span>{language === 'en' ? 'One-to-One Live Classes' : 'ওয়ান-টু-ওয়ান লাইভ ক্লাস'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#123D32] shrink-0" />
                  <span>{language === 'en' ? 'Google Meet Platform' : 'গুগল মিট প্ল্যাটফর্ম'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#123D32] shrink-0" />
                  <span>
                    {language === 'en' ? 'Interactive & Engaging Sessions' : 'সহজ ও প্রাণবন্ত ক্লাস'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#123D32] shrink-0" />
                  <span>{language === 'en' ? 'Flexible Schedule' : 'সুবিধাজনক সময়সূচি'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#123D32] shrink-0" />
                  <span>
                    {language === 'en'
                      ? 'Bangla & English Language Support'
                      : 'বাংলা ও ইংরেজি উভয় ভাষায় পাঠদান'}
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Zone: Female Student Photo (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={getAssetUrl('assets/images/female_student_learning_1793371432961.webp')}
                  alt="Female student studying Quran online"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right Zone: Arched Hadith Plaque (4 cols) */}
            <div className="lg:col-span-4">
              <div className="rounded-t-full rounded-b-2xl bg-[#123D32] border-2 border-[#D6B66C] p-8 text-center text-white shadow-md flex flex-col justify-center min-h-[320px]">
                <p className="font-serif text-lg text-[#D6B66C] mb-3">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>
                <p className="font-serif italic text-white text-base sm:text-lg font-medium leading-relaxed mb-2">
                  {language === 'en'
                    ? '“The best among you are those who learn the Quran and teach it.”'
                    : '“তোমাদের মধ্যে সর্বোত্তম ব্যক্তি সে, যে নিজে কুরআন শিখে এবং অন্যকে শেখায়।”'}
                </p>
                <p className="text-xs text-amber-200">— Sahih al-Bukhari</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Subpage CTA Banner */}
      <SubpageCtaBanner buttonType="trial" />
    </div>
  );
};
