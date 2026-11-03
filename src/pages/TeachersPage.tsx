/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TEACHERS_DATA } from '../data/academyData';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { SubpageCtaBanner } from '../components/SubpageCtaBanner';
import { getAssetUrl } from '../utils/assetUrl';
import {
  GraduationCap,
  Award,
  BookOpen,
  Clock,
  ShieldCheck,
  CheckCircle,
  Users,
  Calendar,
  Globe2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const TeachersPage: React.FC = () => {
  const { language, navigateTo, t } = useLanguage();
  const [filterRole, setFilterRole] = useState<'all' | 'male' | 'female'>('all');

  const maleTeachers = TEACHERS_DATA.filter((t) => t.role === 'male');
  const femaleTeachers = TEACHERS_DATA.filter((t) => t.role === 'female');

  const handleEnrollTeacher = (teacherName: string) => {
    navigateTo('contact', { appType: 'admission' });
  };

  return (
    <div className="space-y-12 lg:space-y-16 pb-12">
      {/* 1. Subpage Hero Header with Bukhari quote */}
      <PageHeroHeader
        pageName={{
          en: 'Our Teachers',
          bn: 'শিক্ষকমণ্ডলী',
        }}
        kicker={{
          en: 'Our Faculty',
          bn: 'অভিজ্ঞ শিক্ষকমণ্ডলী',
        }}
        title={{
          en: 'Meet Our Qualified Teachers',
          bn: 'আমাদের সুযোগ্য ও সনদপ্রাপ্ত শিক্ষকমণ্ডলী',
        }}
        description={{
          en: 'Our dedicated and experienced teachers are committed to providing high-quality Quranic and Islamic education with personalized care and professional guidance.',
          bn: 'আমাদের সকল শিক্ষক-শিক্ষিকা অত্যন্ত যত্নশীল, অভিজ্ঞ এবং আন্তরিকতার সাথে ওয়ান-টু-ওয়ান ক্লাসে বিশুদ্ধভাবে কুরআন শিক্ষাদানে নিবেদিতপ্রাণ।',
        }}
        heroImage="assets/images/teachers_hero_img_1793379074088.jpg"
        heroImageAlt={{
          en: 'Classical Islamic study library with Sanad certificate and scholar',
          bn: 'সনদপ্রাপ্ত শিক্ষকমণ্ডলীর ঐতিহ্য ও সমৃদ্ধ লাইব্রেরি',
        }}
        badges={[
          {
            icon: <Award className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Qualified Teachers & Scholars',
              bn: 'সনদপ্রাপ্ত আলেম ও স্কলার',
            },
          },
          {
            icon: <Users className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Male & Female Teachers',
              bn: 'পুরুষ ও নারী শিক্ষিকা',
            },
          },
          {
            icon: <BookOpen className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Hafiz & Qari Certified',
              bn: 'হাফেজ ও ক্বারী সনদধারী',
            },
          },
          {
            icon: <Sparkles className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Tajweed Expertise',
              bn: 'বিশুদ্ধ তাজবিদ প্রশিক্ষণ',
            },
          },
        ]}
        quote={{
          arabic: 'إِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ',
          translation: {
            en: '“The scholars are the heirs of the Prophets.”',
            bn: '“নিশ্চয়ই আলেম ওলামাগণ হলেন নবীগণের উত্তরসূরী।”',
          },
          source: {
            en: '— Sunan Abi Dawood & Tirmidhi',
            bn: '— সুনানে আবু দাউদ ও তিরমিযী',
          },
        }}
      />

      {/* Filter Tabs matching reference UI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterRole('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterRole === 'all'
                  ? 'bg-[#123D32] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {language === 'en' ? 'All Instructors' : 'সকল শিক্ষক-শিক্ষিকা'}
            </button>
            <button
              onClick={() => setFilterRole('male')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterRole === 'male'
                  ? 'bg-[#123D32] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {language === 'en' ? 'Male Teachers' : 'পুরুষ শিক্ষকবৃন্দ'}
            </button>
            <button
              onClick={() => setFilterRole('female')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterRole === 'female'
                  ? 'bg-[#123D32] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {language === 'en' ? 'Female Teachers' : 'নারী শিক্ষিকাবৃন্দ'}
            </button>
          </div>

          <span className="text-xs text-slate-500">
            {language === 'en'
              ? 'One-to-one personalized learning on Google Meet'
              : 'গুগল মিটে সম্পূর্ণ একক ওয়ান-টু-ওয়ান পাঠদান'}
          </span>
        </div>
      </div>

      {/* 2. Male Teachers Section */}
      {(filterRole === 'all' || filterRole === 'male') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 text-left">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-0.5 bg-[#D6B66C]" />
                <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
                  {language === 'en' ? 'Male Teachers' : 'সম্মানিত শিক্ষকবৃন্দ'}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
                {language === 'en' ? 'Our Male Teachers' : 'আমাদের পুরুষ শিক্ষকবৃন্দ'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                {language === 'en'
                  ? 'Our male teachers are well-qualified, experienced and passionate about teaching the Quran and Islamic knowledge.'
                  : 'আমাদের সম্মানিত শিক্ষকগণ অভিজ্ঞ, সনদপ্রাপ্ত এবং পরম মমতায় সহীহ তিলাওয়াত শিক্ষাদানে নিবেদিতপ্রাণ।'}
              </p>
            </div>
          </div>

          {/* Teacher Cards Grid: Full face visible, title in top corner, name below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maleTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container: Full Face completely visible, corner badge at top */}
                  <div className="h-64 sm:h-72 bg-gradient-to-b from-[#123D32]/5 to-slate-100 relative overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={getAssetUrl(teacher.photo)}
                      alt={teacher.name[language]}
                      className="w-full h-full object-contain object-top group-hover:scale-102 transition-transform duration-300"
                    />

                    {/* Top-Corner Title Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#123D32] text-[#D6B66C] text-xs font-semibold rounded-full shadow-sm border border-[#D6B66C]/40">
                      {teacher.qualifications[language][0]}
                    </span>
                  </div>

                  {/* Information below photo */}
                  <div className="p-5 space-y-3">
                    <div>
                      {/* Name below photo */}
                      <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#123D32] transition-colors">
                        {teacher.name[language]}
                      </h3>
                      <p className="text-xs font-semibold text-[#D6B66C] mt-0.5">
                        {teacher.title[language]}
                      </p>
                    </div>

                    {/* Feature Rows with clean icons */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-[#123D32] shrink-0" />
                        <span className="truncate">{teacher.qualifications[language][0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#123D32] shrink-0" />
                        <span className="truncate">{teacher.specialization[language]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-[#123D32] shrink-0" />
                        <span className="truncate">
                          {language === 'en' ? 'Islamic Education' : 'ইসলামিক শিক্ষা'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#123D32] shrink-0" />
                        <span className="truncate">
                          {language === 'en' ? 'Teaching Experience' : 'পাঠদানের অভিজ্ঞতা'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enrollment Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleEnrollTeacher(teacher.name[language])}
                    className="w-full py-2.5 bg-[#123D32] hover:bg-[#0c2a22] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>{language === 'en' ? 'Select Teacher' : 'এই শিক্ষকের কাছে পড়ুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D6B66C]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Female Teachers Section */}
      {(filterRole === 'all' || filterRole === 'female') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 text-left">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-0.5 bg-[#D6B66C]" />
                <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
                  {language === 'en' ? 'Female Teachers' : 'সম্মানিত শিক্ষিকাবৃন্দ'}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
                {language === 'en' ? 'Our Female Teachers' : 'আমাদের নারী শিক্ষিকাবৃন্দ'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                {language === 'en'
                  ? 'Our female teachers are qualified, experienced and specially selected to provide a comfortable and safe learning environment for female students.'
                  : 'মা-বোন ও শিশু শিক্ষার্থীদের জন্য সম্পূর্ণ পর্দানশীন ও নিরাপদ পরিবেশে সনদপ্রাপ্ত নারী শিক্ষিকাদের দ্বারা পাঠদান পরিচালিত হয়।'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {femaleTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  {/* Discrete Hijab Silhouette Frame */}
                  <div className="h-64 sm:h-72 bg-gradient-to-b from-[#123D32]/10 via-[#F3F5F2] to-white relative flex flex-col items-center justify-center p-4">
                    <div className="w-28 h-28 rounded-full bg-[#123D32] border-3 border-[#D6B66C] flex items-center justify-center text-white shadow-md">
                      <GraduationCap className="w-12 h-12 text-[#D6B66C]" />
                    </div>

                    <span className="text-[11px] font-semibold text-[#123D32] uppercase tracking-widest mt-3">
                      {language === 'en' ? 'Certified Alimah / Hafiza' : 'সনদপ্রাপ্ত আলিমা ও হাফেজা'}
                    </span>

                    {/* Top-Corner Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#123D32] text-[#D6B66C] text-xs font-semibold rounded-full shadow-sm border border-[#D6B66C]/40">
                      {teacher.qualifications[language][0]}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#123D32] transition-colors">
                        {teacher.name[language]}
                      </h3>
                      <p className="text-xs font-semibold text-[#D6B66C] mt-0.5">
                        {teacher.title[language]}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-[#123D32] shrink-0" />
                        <span className="truncate">{teacher.qualifications[language][0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#123D32] shrink-0" />
                        <span className="truncate">{teacher.specialization[language]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-[#123D32] shrink-0" />
                        <span className="truncate">
                          {language === 'en' ? 'Female Student Coach' : 'নারী শিক্ষার্থীদের দিকনির্দেশক'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#123D32] shrink-0" />
                        <span className="truncate">
                          {language === 'en' ? 'Teaching Experience' : 'পাঠদানের অভিজ্ঞতা'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleEnrollTeacher(teacher.name[language])}
                    className="w-full py-2.5 bg-[#123D32] hover:bg-[#0c2a22] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>{language === 'en' ? 'Select Teacher' : 'এই শিক্ষিকার কাছে পড়ুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D6B66C]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Why Choose Us? Section matching UI reference */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Visual & CTA button */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-0.5 bg-[#D6B66C]" />
                  <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
                    {language === 'en' ? 'Why Choose Us?' : 'কেন আমাদের বেছে নেবেন?'}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#123D32]">
                  {language === 'en'
                    ? 'Experienced. Qualified. Dedicated.'
                    : 'অভিজ্ঞ। সনদপ্রাপ্ত। নিবেদিতপ্রাণ।'}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {language === 'en'
                  ? 'We carefully select our teachers based on their qualifications, experience, and teaching skills to ensure the best learning experience for every student.'
                  : 'আমরা প্রতিটি শিক্ষকের যোগ্যতা, বিশুদ্ধ উচ্চারণ ও ধৈর্যশীল পাঠদান দক্ষতা যাচাই করে নিয়োগ দিই, যাতে প্রতিটি শিক্ষার্থী শ্রেষ্ঠ দ্বীনি শিক্ষা লাভ করতে পারে।'}
              </p>

              <button
                onClick={() => navigateTo('free-trial', { appType: 'free-trial' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D6B66C] hover:bg-amber-300 text-[#123D32] font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <span>{language === 'en' ? 'Start Free Trial' : 'ফ্রি ট্রায়াল শুরু করুন'}</span>
                <ArrowRight className="w-4 h-4 text-[#123D32]" />
              </button>
            </div>

            {/* Right Column: 4 Trust Points */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-[#F3F5F2] border border-slate-200">
                <Users className="w-7 h-7 text-[#123D32] mb-2" />
                <h4 className="font-semibold text-sm text-slate-900 mb-1">
                  {language === 'en' ? 'Personalized Attention' : 'একক মনোযোগ'}
                </h4>
                <p className="text-xs text-slate-600">
                  {language === 'en' ? 'One-to-one live classes' : 'ওয়ান-টু-ওয়ান লাইভ ক্লাস'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3F5F2] border border-slate-200">
                <ShieldCheck className="w-7 h-7 text-[#123D32] mb-2" />
                <h4 className="font-semibold text-sm text-slate-900 mb-1">
                  {language === 'en' ? 'Safe & Trusted' : 'নিরাপদ ও বিশ্বস্ত'}
                </h4>
                <p className="text-xs text-slate-600">
                  {language === 'en' ? 'Verified teachers' : 'যাচাইকৃত শিক্ষকবৃন্দ'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3F5F2] border border-slate-200">
                <Calendar className="w-7 h-7 text-[#123D32] mb-2" />
                <h4 className="font-semibold text-sm text-slate-900 mb-1">
                  {language === 'en' ? 'Flexible Schedule' : 'সুবিধাজনক সময়সূচি'}
                </h4>
                <p className="text-xs text-slate-600">
                  {language === 'en' ? 'Your time, your convenience' : 'আপনার সুবিধাজনক সময়'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F3F5F2] border border-slate-200">
                <Globe2 className="w-7 h-7 text-[#123D32] mb-2" />
                <h4 className="font-semibold text-sm text-slate-900 mb-1">
                  {language === 'en' ? 'Global Access' : 'বিশ্বব্যাপী ক্লাস'}
                </h4>
                <p className="text-xs text-slate-600">
                  {language === 'en' ? 'Learn from anywhere' : 'যেকোনো দেশ থেকে যুক্ত হোন'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Subpage CTA Banner */}
      <SubpageCtaBanner buttonType="admission" />
    </div>
  );
};
