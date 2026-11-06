/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COURSES_DATA, TEACHERS_DATA, FAQ_DATA } from '../data/academyData';
import { getAssetUrl } from '../utils/assetUrl';
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Users,
  Video,
  Clock,
  ShieldCheck,
  CheckCircle,
  GraduationCap,
  MessageCircle,
  ChevronRight,
  Award,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, navigateTo, t } = useLanguage();

  const previewCourses = COURSES_DATA.slice(0, 6);
  const maleTeachersPreview = TEACHERS_DATA.filter((t) => t.role === 'male').slice(0, 4);
  const faqPreview = FAQ_DATA.slice(0, 4);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#123D32] to-[#0c2a22] text-white py-16 lg:py-24">
        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#D6B66C_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & CTAs (order-2 on mobile so image is above, order-1 on desktop) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left order-2 lg:order-1">
              {/* Kicker tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D6B66C]/40 text-xs font-semibold text-[#D6B66C]">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B66C]" />
                <span>{t.hero.kicker}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {t.hero.title}
              </h1>

              {/* Supporting Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>

              {/* Primary & Secondary Action Buttons (full width on mobile for easy tap, inline on sm+) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 sm:pt-2">
                <button
                  onClick={() => navigateTo('free-trial', { appType: 'free-trial' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D6B66C] hover:bg-amber-300 text-[#123D32] font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>{t.hero.startFreeTrial}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('courses')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-lg border border-white/20 transition-all cursor-pointer"
                >
                  <span>{t.hero.exploreCourses}</span>
                  <ChevronRight className="w-4 h-4 text-[#D6B66C]" />
                </button>
              </div>

              {/* Bukhari Hadith Citation */}
              <div className="pt-4 border-t border-white/15">
                <p className="font-serif italic text-xs sm:text-sm text-[#D6B66C] leading-snug">
                  {t.hero.quote}
                </p>
                <p className="text-xs text-slate-300 mt-1">{t.hero.quoteSource}</p>
              </div>

              {/* 4 Trust Points */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#D6B66C] shrink-0" />
                  <span>{t.hero.trustPoints.oneToOne}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Video className="w-4 h-4 text-[#D6B66C] shrink-0" />
                  <span>{t.hero.trustPoints.googleMeet}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <GraduationCap className="w-4 h-4 text-[#D6B66C] shrink-0" />
                  <span>{t.hero.trustPoints.bilingual}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Clock className="w-4 h-4 text-[#D6B66C] shrink-0" />
                  <span>{t.hero.trustPoints.flexible}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Frame (order-1 on mobile so image is at top, order-2 on desktop) */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Luminous Golden Ambient Halo */}
                <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-[#D6B66C]/40 via-amber-300/20 to-[#D6B66C]/50 blur-lg opacity-80 pointer-events-none" />

                {/* Outer Luxury Gold Beveled Border */}
                <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-[#E6CA85] via-[#D6B66C] to-[#8C6D2B] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group">
                  {/* Inner Container */}
                  <div className="relative rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#0c2a22]">
                    {/* High-Resolution Optimized Live Teacher Photo */}
                    <picture>
                      <source
                        srcSet={getAssetUrl('assets/aistudio/hero_live_teacher.webp')}
                        type="image/webp"
                      />
                      <img
                        src={getAssetUrl('assets/aistudio/file_00000000b2b881faa7f50487092dbcee_879f2f73.png')}
                        alt={language === 'en' ? 'Al Muinul Quran Online Academy Live Class Instructor' : 'আল মুঈনুল কুরআন অনলাইন একাডেমি - লাইভ ক্লাস শিক্ষক'}
                        className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/9] transition-transform duration-700 group-hover:scale-102"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                      />
                    </picture>

                    {/* Top Floating Badges */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-[#D6B66C]/50 text-xs font-medium text-white shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="tracking-wide">
                        {language === 'en' ? 'Live 1-to-1 Class' : 'লাইভ ১-অন-১ ক্লাস'}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#123D32]/90 backdrop-blur-md border border-[#D6B66C]/60 text-[11px] font-semibold text-[#D6B66C] shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-[#D6B66C]" />
                      <span>{language === 'en' ? 'Verified Academy' : 'ভেরিফাইড একাডেমি'}</span>
                    </div>

                    {/* Bottom Frosted Glass Plaque */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-4 sm:p-5 pt-10 text-left flex items-end justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#D6B66C] uppercase tracking-wider mb-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#D6B66C]" />
                          <span>{language === 'en' ? 'Al Muinul Quran Academy' : 'আল মুঈনুল কুরআন একাডেমি'}</span>
                        </div>
                        <p className="font-serif text-white text-sm sm:text-base font-medium leading-snug">
                          {language === 'en'
                            ? 'Learn Quran with Certified Male & Female Teachers'
                            : 'অভিজ্ঞ ও সনদপ্রাপ্ত শিক্ষকদের তত্ত্বাবধানে কুরআন শিক্ষা'}
                        </p>
                        <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                          <span>Google Meet</span>
                          <span>•</span>
                          <span>{language === 'en' ? 'One-to-One Attention' : 'একক পাঠদান'}</span>
                        </p>
                      </div>

                      <button
                        onClick={() => navigateTo('free-trial', { appType: 'free-trial' })}
                        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#D6B66C] hover:bg-amber-300 text-[#123D32] text-xs font-bold shadow-md transition-all shrink-0 cursor-pointer"
                      >
                        <span>{language === 'en' ? 'Book Trial' : 'ফ্রি ট্রায়াল'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub-card feature strip underneath */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl py-2 px-2">
                    <p className="text-[#D6B66C] font-bold text-xs">100%</p>
                    <p className="text-[10px] text-slate-300 leading-tight mt-0.5">
                      {language === 'en' ? 'Live 1-on-1' : 'লাইভ ক্লাস'}
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl py-2 px-2">
                    <p className="text-[#D6B66C] font-bold text-xs">24/7</p>
                    <p className="text-[10px] text-slate-300 leading-tight mt-0.5">
                      {language === 'en' ? 'Flexible Time' : 'ফ্লেক্সিবল সময়'}
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl py-2 px-2">
                    <p className="text-[#D6B66C] font-bold text-xs">Free</p>
                    <p className="text-[10px] text-slate-300 leading-tight mt-0.5">
                      {language === 'en' ? 'Trial Class' : 'ট্রায়াল ক্লাস'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Academy Introduction & Value Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D6B66C]/25 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual preview */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={getAssetUrl('assets/images/student_online_learning_1793371433018.webp')}
                  alt="Young Muslim student learning Quran attentively on Google Meet"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-[#123D32]">
                    {language === 'en' ? 'Live 1-to-1 Session' : 'লাইভ ওয়ান-টু-ওয়ান ক্লাস'}
                  </span>
                  <span className="text-[#D6B66C] font-semibold">Google Meet</span>
                </div>
              </div>
            </div>

            {/* Content description */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
              <div className="inline-block text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
                {language === 'en' ? 'Who We Are' : 'আমাদের পরিচয়'}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
                {t.home.aboutHeading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.home.aboutIntro}
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F3F5F2] border border-slate-200/80">
                  <h3 className="font-semibold text-[#123D32] text-sm mb-1">
                    {t.home.ourMissionTitle}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.home.ourMissionDesc}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F3F5F2] border border-slate-200/80">
                  <h3 className="font-semibold text-[#123D32] text-sm mb-1">
                    {t.home.ourVisionTitle}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.home.ourVisionDesc}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F3F5F2] border border-slate-200/80">
                  <h3 className="font-semibold text-[#123D32] text-sm mb-1">
                    {t.home.ourGoalTitle}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.home.ourGoalDesc}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#123D32] hover:text-[#0c2a22] group cursor-pointer"
                >
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="w-4 h-4 text-[#D6B66C] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Six Specialized Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[#D6B66C] uppercase tracking-wider mb-2">
            {t.common.ourCourses}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123D32] mb-3">
            {t.home.coursesHeading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.home.coursesSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewCourses.map((course, idx) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-[#D6B66C] transition-all group text-left relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#123D32]/10 text-[#123D32] flex items-center justify-center group-hover:bg-[#123D32] group-hover:text-white transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-[#D6B66C] tracking-wide">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-xl text-[#123D32] group-hover:text-slate-900 transition-colors">
                    {course.title[language]}
                  </h3>
                  <p className="text-xs font-medium text-[#D6B66C] mt-1">
                    {course.subtitle[language]}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {course.description[language]}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500 font-medium block">
                    {course.durationNote[language]}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={() => navigateTo('courses', { courseId: course.id })}
                  className="text-xs font-semibold text-[#123D32] hover:text-[#0c2a22] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.common.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6B66C]" />
                </button>

                <button
                  onClick={() =>
                    navigateTo('admission', { courseId: course.id, appType: 'admission' })
                  }
                  className="px-3 py-1.5 bg-[#123D32] hover:bg-[#0c2a22] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Enroll' : 'ভর্তি'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigateTo('courses')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-[#123D32] text-[#123D32] font-semibold text-sm rounded-lg transition-colors cursor-pointer"
          >
            <span>{t.common.viewAllCourses}</span>
            <ArrowRight className="w-4 h-4 text-[#D6B66C]" />
          </button>
        </div>
      </section>

      {/* 4. Our Teachers Preview Section (Full face visible, top corner badge, name below) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F3F5F2] to-white rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block text-xs font-semibold text-[#D6B66C] uppercase tracking-wider mb-2">
              {t.nav.teachers}
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#123D32] mb-3">
              {t.home.teachersHeading}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">{t.home.teachersSubheading}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maleTeachersPreview.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  {/* Photo container with top-corner title and full face */}
                  <div className="h-60 sm:h-64 bg-slate-100 overflow-hidden relative flex items-center justify-center p-2">
                    <img
                      src={getAssetUrl(teacher.photo)}
                      alt={teacher.name[language]}
                      className="w-full h-full object-contain object-top group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Top corner title badge */}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-[#123D32] text-[#D6B66C] text-[11px] font-semibold rounded-full shadow-xs border border-[#D6B66C]/40">
                      {teacher.qualifications[language][0]}
                    </span>
                  </div>

                  {/* Details below photo */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif font-bold text-lg text-[#123D32]">
                      {teacher.name[language]}
                    </h3>
                    <p className="text-xs font-semibold text-[#D6B66C]">
                      {teacher.title[language]}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-600">
                      <Award className="w-3.5 h-3.5 text-[#123D32] shrink-0" />
                      <span className="truncate">{teacher.specialization[language]}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => navigateTo('teachers')}
                    className="w-full py-2 text-xs font-semibold text-[#123D32] bg-slate-50 hover:bg-[#123D32] hover:text-white rounded-lg transition-colors border border-slate-200 cursor-pointer"
                  >
                    {language === 'en' ? 'View Profile' : 'প্রোফাইল দেখুন'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigateTo('teachers')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#123D32] text-white hover:bg-[#0c2a22] font-medium text-sm rounded-lg transition-colors cursor-pointer"
            >
              <span>{t.common.viewAllTeachers}</span>
              <ArrowRight className="w-4 h-4 text-[#D6B66C]" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. How It Works (4 Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[#D6B66C] uppercase tracking-wider mb-2">
            {t.home.howItWorksSubheading}
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#123D32] mb-3">
            {t.home.howItWorksHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left relative">
            <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-sm mb-4">
              01
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
              {t.home.step1Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.home.step1Desc}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left relative">
            <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-sm mb-4">
              02
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
              {t.home.step2Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.home.step2Desc}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left relative">
            <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-sm mb-4">
              03
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
              {t.home.step3Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.home.step3Desc}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left relative">
            <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-sm mb-4">
              04
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
              {t.home.step4Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.home.step4Desc}</p>
          </div>
        </div>
      </section>

      {/* 6. Free Trial Promotion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#123D32] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden border border-[#D6B66C]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="inline-block px-3 py-1 bg-[#D6B66C]/20 border border-[#D6B66C] text-[#D6B66C] text-xs font-semibold rounded-full">
                {t.common.freeTrialTag} · {t.common.newStudentsOnly}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                {t.home.trialBannerHeading}
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                {t.home.trialBannerSubheading}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#D6B66C]" />
                  {language === 'en' ? 'Zero Upfront Payment' : 'কোনো অগ্রিম ফি নেই'}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#D6B66C]" />
                  {language === 'en' ? '100% 1-to-1 Attention' : '১০০% একক পাঠদান'}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#D6B66C]" />
                  {language === 'en' ? 'Male & Female Teachers' : 'পুরুষ ও নারী শিক্ষিকা'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => navigateTo('free-trial', { appType: 'free-trial' })}
                className="px-6 py-3.5 bg-[#D6B66C] hover:bg-amber-300 text-[#123D32] font-semibold text-sm rounded-lg shadow-md transition-all text-center cursor-pointer"
              >
                {t.common.applyTrial}
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-lg border border-white/20 transition-all text-center cursor-pointer"
              >
                {t.common.contactUs}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block text-xs font-semibold text-[#D6B66C] uppercase tracking-wider mb-2">
            FAQ
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32] mb-2">
            {language === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা ও উত্তর'}
          </h2>
          <p className="text-slate-600 text-sm">
            {language === 'en'
              ? 'Find quick answers to common questions about our online classes.'
              : 'অনলাইন ক্লাস ও ভর্তি সম্পর্কিত সাধারণ প্রশ্নগুলোর উত্তর জেনে নিন।'}
          </p>
        </div>

        <div className="space-y-3">
          {faqPreview.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-5 text-left shadow-xs hover:border-[#D6B66C]/60 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
                {item.question[language]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.answer[language]}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigateTo('admission')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#123D32] hover:text-[#0c2a22] cursor-pointer"
          >
            <span>{t.common.viewAllFaqs}</span>
            <ArrowRight className="w-4 h-4 text-[#D6B66C]" />
          </button>
        </div>
      </section>

      {/* 8. Final Admission CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#123D32] to-[#0c2a22] rounded-3xl p-8 sm:p-12 text-center text-white border-2 border-[#D6B66C]/40 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight">
              {t.home.finalCtaHeading}
            </h2>
            <p className="text-[#D6B66C] font-medium text-sm sm:text-base">
              {t.home.finalCtaSubheading}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
              {language === 'en'
                ? 'Join Al Muinul Quran Online Academy today. Empower yourself and your loved ones with the blessed knowledge of the Holy Quran.'
                : 'আজই আল মুঈনুল কুরআন অনলাইন একাডেমিতে যুক্ত হয়ে আপনার ও আপনার সন্তানের কুরআন শিক্ষার যাত্রা শুরু করুন।'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigateTo('admission')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#D6B66C] hover:bg-amber-300 text-[#123D32] font-bold text-sm rounded-lg shadow-md transition-all cursor-pointer"
              >
                {t.common.applyNow}
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-lg border border-white/20 transition-all cursor-pointer"
              >
                {t.common.contactUs}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
