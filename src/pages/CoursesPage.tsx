/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COURSES_DATA } from '../data/academyData';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { SubpageCtaBanner } from '../components/SubpageCtaBanner';
import {
  BookOpen,
  BookMarked,
  Sparkles,
  Compass,
  HeartHandshake,
  Languages,
  CheckCircle2,
  Users,
  Clock,
  ArrowRight,
  ShieldCheck,
  Video,
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  BookOpen,
  BookMarked,
  Sparkles,
  Compass,
  HeartHandshake,
  Languages,
};

export const CoursesPage: React.FC = () => {
  const { language, navigateTo, t, selectedCourseId } = useLanguage();
  const [activeCourseId, setActiveCourseId] = useState<string>(
    selectedCourseId || COURSES_DATA[0].id
  );

  const activeCourse =
    COURSES_DATA.find((c) => c.id === activeCourseId) || COURSES_DATA[0];

  const handleEnroll = (courseId: string) => {
    navigateTo('admission', { courseId, appType: 'admission' });
  };

  const handleTrial = (courseId: string) => {
    navigateTo('free-trial', { courseId, appType: 'free-trial' });
  };

  return (
    <div className="space-y-12 lg:space-y-16 pb-12">
      {/* 1. Page Hero Header */}
      <PageHeroHeader
        pageName={{
          en: 'Our Courses',
          bn: 'কোর্সসমূহ',
        }}
        kicker={{
          en: 'Curriculum & Programs',
          bn: 'আমাদের শিক্ষাক্রম',
        }}
        title={{
          en: 'Six Specialized Quran & Islamic Courses',
          bn: 'আমাদের বিশেষায়িত ৬টি কুরআন ও ইসলামিক কোর্স',
        }}
        description={{
          en: 'Comprehensive Quranic and Islamic education tailored for beginner, intermediate, and advanced learners. Taught one-to-one via Google Meet with certified instructors.',
          bn: 'নতুন শিক্ষার্থী থেকে শুরু করে শুদ্ধ তিলাওয়াত ও ইসলামিক জ্ঞানে সমৃদ্ধ হওয়ার জন্য সুপরিকল্পিত ৬টি বিশেষায়িত কোর্স। অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে ওয়ান-টু-ওয়ান লাইভ ক্লাস।',
        }}
        heroImage="assets/images/courses_hero_img_1793378996394.jpg"
        heroImageAlt={{
          en: 'Illuminated Holy Quran on wooden rehal with calligraphy reed pen',
          bn: 'রেহালের উপর পবিত্র কুরআন শরীফ ও ক্যালিগ্রাফি উপকরণ',
        }}
        quote={{
          arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
          translation: {
            en: '“The best among you are those who learn the Quran and teach it.”',
            bn: '“তোমাদের মধ্যে সর্বোত্তম সেই ব্যক্তি, যে নিজে কুরআন শিখে এবং অন্যকে শেখায়।”',
          },
          source: {
            en: '— Sahih al-Bukhari (5027)',
            bn: '— সহীহ বুখারী (৫০২৭)',
          },
        }}
        badges={[
          {
            icon: <BookOpen className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: '6 Approved Core Courses',
              bn: '৬টি অনুমোদিত মৌলিক কোর্স',
            },
          },
          {
            icon: <Video className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: '1-to-1 Live Google Meet',
              bn: 'গুগল মিটে ওয়ান-টু-ওয়ান ক্লাস',
            },
          },
          {
            icon: <Users className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Kids & Adults Welcome',
              bn: 'শিশু ও বয়স্ক সবার জন্য উন্মুক্ত',
            },
          },
        ]}
      />

      {/* 2. Interactive Horizontal Tab Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-slate-200">
          {COURSES_DATA.map((course) => {
            const isSelected = course.id === activeCourse.id;
            return (
              <button
                key={course.id}
                onClick={() => setActiveCourseId(course.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-[#123D32] text-white border-[#123D32] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {course.title[language]}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Selected Course Detailed Spotlight Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-[#D6B66C]/40 p-6 sm:p-10 lg:p-12 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 cols: Detailed Syllabus */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D6B66C] block mb-1">
                  {language === 'en' ? 'Detailed Course Outline' : 'কোর্সের বিস্তারিত সিলেবাস'}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#123D32]">
                  {activeCourse.title[language]}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-slate-700 mt-1">
                  {activeCourse.subtitle[language]}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeCourse.description[language]}
              </p>

              {/* Learning Objectives Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D6B66C]" />
                  <span>
                    {language === 'en' ? 'Core Learning Objectives' : 'কোর্সের মূল অর্জন ও লক্ষ্য'}
                  </span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCourse.objectives[language].map((obj, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#F3F5F2] border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
                    >
                      <span className="text-[#123D32] font-bold text-sm leading-none mt-0.5">·</span>
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs sm:text-sm text-slate-800 flex items-center gap-3">
                <Users className="w-5 h-5 text-[#D6B66C] shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    {language === 'en' ? 'Target Learners: ' : 'যাঁদের জন্য এই কোর্স: '}
                  </strong>
                  <span>{activeCourse.targetAudience[language]}</span>
                </div>
              </div>
            </div>

            {/* Right 4 cols: Summary Box & Action */}
            <div className="lg:col-span-4 bg-[#F3F5F2] rounded-2xl p-6 border border-slate-200 space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#123D32]">
                {language === 'en' ? 'Class Details' : 'ক্লাস ও শিডিউল'}
              </h3>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span>{language === 'en' ? 'Class Format:' : 'ক্লাসের ধরন:'}</span>
                  <strong className="text-slate-900">1-to-1 Live (Meet)</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span>{language === 'en' ? 'Language:' : 'ভাষা মাধ্যম:'}</span>
                  <strong className="text-slate-900">Bangla / English</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span>{language === 'en' ? 'Instructors:' : 'শিক্ষক:'}</span>
                  <strong className="text-slate-900">Male & Female</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span>{language === 'en' ? 'Schedule:' : 'সময়সূচি:'}</span>
                  <strong className="text-slate-900">Flexible Hours</strong>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => handleEnroll(activeCourse.id)}
                  className="w-full py-3 bg-[#123D32] hover:bg-[#0c2a22] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 border border-[#D6B66C]/40"
                >
                  <span>{language === 'en' ? 'Enroll in this Course' : 'এই কোর্সে ভর্তি হতে চাই'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6B66C]" />
                </button>

                <button
                  onClick={() => handleTrial(activeCourse.id)}
                  className="w-full py-2.5 bg-white hover:bg-slate-50 text-[#123D32] border border-slate-300 font-semibold text-xs rounded-lg transition-colors cursor-pointer text-center"
                >
                  {language === 'en' ? 'Request Free Trial First' : 'আগে ফ্রি ট্রায়াল ক্লাস করুন'}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center leading-normal">
                {language === 'en'
                  ? 'Personalized schedule agreed mutually via WhatsApp'
                  : 'হোয়াটসঅ্যাপে আলোচনার ভিত্তিতে ক্লাসের সময় নির্ধারণ'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Grid of All 6 Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-5 h-0.5 bg-[#D6B66C]" />
            <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
              {language === 'en' ? 'Approved Offerings' : 'সকল কোর্স'}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
            {language === 'en' ? 'Browse All 6 Courses' : 'সকল কোর্সের বিস্তারিত তালিকা'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES_DATA.map((course, idx) => {
            const IconComponent = iconMap[course.iconName] || BookOpen;
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-[#D6B66C] transition-all text-left group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#123D32]/10 text-[#123D32] flex items-center justify-center group-hover:bg-[#123D32] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#D6B66C]">Course 0{idx + 1}</span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#123D32] transition-colors">
                      {course.title[language]}
                    </h3>
                    <p className="text-xs font-semibold text-[#D6B66C] mt-0.5">
                      {course.subtitle[language]}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {course.description[language]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setActiveCourseId(course.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#123D32] hover:underline cursor-pointer"
                  >
                    {language === 'en' ? 'View Syllabus' : 'সিলেবাস দেখুন'}
                  </button>

                  <button
                    onClick={() => handleEnroll(course.id)}
                    className="px-3.5 py-1.5 bg-[#123D32] hover:bg-[#0c2a22] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Enroll' : 'ভর্তি'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Subpage CTA Banner */}
      <SubpageCtaBanner buttonType="admission" />
    </div>
  );
};
