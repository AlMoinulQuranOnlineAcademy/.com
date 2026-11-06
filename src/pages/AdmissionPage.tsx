/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQ_DATA, COURSES_DATA } from '../data/academyData';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { SubpageCtaBanner } from '../components/SubpageCtaBanner';
import { ContactApplicationForm } from '../components/ContactApplicationForm';
import { FAQAccordion } from '../components/FAQAccordion';
import {
  BookOpen,
  Users,
  Video,
  ShieldCheck,
  CheckCircle,
  Clock,
  HelpCircle,
  ChevronDown,
  Plus,
  Minus,
  MessageCircle,
} from 'lucide-react';

export const AdmissionPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [openInfoIndex, setOpenInfoIndex] = useState<number | null>(0);

  const admissionInfoItems = [
    {
      q: {
        en: 'Who can join Al Muinul Quran Academy?',
        bn: 'কারা এই একাডেমিতে ভর্তি হতে পারবেন?',
      },
      a: {
        en: 'Our academy welcomes children from age 5+, school & college students, adults, and professionals. Both male and female students can join from anywhere in the world.',
        bn: '৫ বছর বা তদূর্ধ্ব শিশু, স্কুল-কলেজের শিক্ষার্থী এবং যেকোনো প্রাপ্তবয়স্ক ও কর্মজীবী ব্যক্তি ভর্তি হতে পারেন। দেশ-বিদেশ যেকোনো স্থান থেকেই অংশগ্রহণের সুযোগ রয়েছে।',
      },
    },
    {
      q: {
        en: 'What are the admission requirements?',
        bn: 'ভর্তির জন্য কী কী প্রয়োজন?',
      },
      a: {
        en: 'No prior qualification or Arabic background is necessary. You only need a smartphone, tablet, or computer with an internet connection and the Google Meet application installed.',
        bn: 'কোনো পূর্ববর্তী সনদের প্রয়োজন নেই। কেবল একটি স্মার্টফোন বা কম্পিউটার এবং ইন্টারনেট কানেকশন থাকলেই চলবে।',
      },
    },
    {
      q: {
        en: 'Which courses are available for enrollment?',
        bn: 'বর্তমানে কোন কোন কোর্সে ভর্তি চলছে?',
      },
      a: {
        en: 'All six courses: Noorani Qaida, Quran Reading, Quran with Tajweed, Basic Islamic Studies, Daily Dua & Salah, and Arabic Language.',
        bn: 'নূরানী কায়দা, কুরআন রিডিং, কুরআন তাজবিদসহ, বেসিক ইসলামিক স্টাডিজ, দৈনন্দিন দোয়া ও নামাজ শিক্ষা এবং আরবি ভাষা শিক্ষা।',
      },
    },
    {
      q: {
        en: 'What is the class duration and schedule?',
        bn: 'ক্লাসের সময় ও স্থায়িত্ব কতক্ষণ?',
      },
      a: {
        en: 'Standard one-to-one classes run for 30 to 45 minutes per session, 3 to 5 days weekly, scheduled completely around your local convenience.',
        bn: 'প্রতিটি ওয়ান-টু-ওয়ান ক্লাস সাধারণত ৩০ থেকে ৪৫ মিনিট অনুষ্ঠিত হয় এবং সপ্তাহে ৩ থেকে ৫ দিন সুবিধাজনক সময়ে ক্লাস নির্ধারণ করা হয়।',
      },
    },
    {
      q: {
        en: 'How are the classes conducted?',
        bn: 'অনলাইন ক্লাসগুলো কীভাবে পরিচালিত হয়?',
      },
      a: {
        en: 'Live one-to-one through Google Meet. The teacher screen-shares digital books with color-coded Tajweed so the student follows seamlessly.',
        bn: 'গুগল মিটের মাধ্যমে সরাসরি শিক্ষক ও শিক্ষার্থী স্ক্রিন শেয়ারিং করে রঙিন তাজবিদ ও কায়দা দেখে অনুশীলন করেন।',
      },
    },
    {
      q: {
        en: 'Is there any upfront admission fee?',
        bn: 'ভর্তির জন্য কি কোনো অগ্রিম ফি আছে?',
      },
      a: {
        en: 'No, we do not charge any registration fee. We also offer 1–2 free trial classes for new students to experience our class quality first.',
        bn: 'না, কোনো অগ্রিম রেজিস্ট্রেশন ফি নেই। নতুন শিক্ষার্থীরা প্রথমে ১-২টি ফ্রি ট্রায়াল ক্লাসে অংশ নিয়ে যাচাই করতে পারবেন।',
      },
    },
  ];

  return (
    <div className="space-y-12 lg:space-y-16 pb-12">
      {/* 1. Page Hero Header */}
      <PageHeroHeader
        pageName={{
          en: 'Admission',
          bn: 'ভর্তি তথ্য',
        }}
        kicker={{
          en: 'Admission Process',
          bn: 'ভর্তি প্রক্রিয়া',
        }}
        title={{
          en: 'Join Al Muinul Quran Online Academy',
          bn: 'আল মুঈনুল কুরআন অনলাইন একাডেমিতে ভর্তি',
        }}
        description={{
          en: 'Begin your journey towards Quranic knowledge. Fill out the application form and we will contact you shortly via WhatsApp for the next steps.',
          bn: 'সহীহ কুরআন শিক্ষার বরকতময় যাত্রায় আপনাকে স্বাগতম। সাধারণ ফর্মটি পূরণ করুন, আমাদের প্রতিনিধি খুব দ্রুত হোয়াটসঅ্যাপে যোগাযোগ করে আপনার ভর্তি নিশ্চিত করবেন।',
        }}
        heroImage="assets/images/admission_hero_img_1793379151588.webp"
        heroImageAlt={{
          en: 'Islamic Academy graduation diploma scroll, amber tasbih and Holy Quran',
          bn: 'একাডেমি সনদ, তসবিহ ও উন্মুক্ত কুরআনুল কারীম',
        }}
        quote={{
          arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
          translation: {
            en: '“Whoever takes a path upon which he seeks knowledge, Allah makes the path to Paradise easy for him.”',
            bn: '“যে ব্যক্তি ইলম অর্জনের উদ্দেশ্যে কোনো পথ অবলম্বন করে, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন।”',
          },
          source: {
            en: '— Sahih Muslim (2699)',
            bn: '— সহীহ মুসলিম (২৬৯৯)',
          },
        }}
        badges={[
          {
            icon: <BookOpen className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Quality Islamic Education',
              bn: 'মানসম্মত ইসলামিক শিক্ষা',
            },
          },
          {
            icon: <Users className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Experienced Teachers',
              bn: 'অভিজ্ঞ শিক্ষকমণ্ডলী',
            },
          },
          {
            icon: <Video className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Flexible Learning',
              bn: 'সুবিধাজনক সময়ে ক্লাস',
            },
          },
          {
            icon: <ShieldCheck className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Safe & Trusted Environment',
              bn: 'নিরাপদ ও দ্বীনি পরিবেশ',
            },
          },
        ]}
      />

      {/* 2. Our Admission Process: How to Apply? (4 Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-5 h-0.5 bg-[#D6B66C]" />
            <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
              {language === 'en' ? 'Our Admission Process' : 'আমাদের ভর্তি প্রক্রিয়া'}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
            {language === 'en' ? 'How to Apply?' : 'কীভাবে আবেদন করবেন?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
            {language === 'en'
              ? 'It’s simple! Just follow the steps below to start your Quran learning journey with us.'
              : 'খুব সহজ ৪টি ধাপে সম্পন্ন করুন আপনার অথবা আপনার সন্তানের ভর্তি।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-sm mb-3">
              01
            </div>
            <h3 className="font-serif font-bold text-base text-slate-900 mb-1">
              {language === 'en' ? 'Fill Out Application' : 'আবেদন ফর্ম পূরণ করুন'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'Provide your basic information and course preference in the contact form.'
                : 'শিক্ষার্থীর তথ্য ও পছন্দের কোর্স নির্বাচন করে ফর্মটি জমা দিন।'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-sm mb-3">
              02
            </div>
            <h3 className="font-serif font-bold text-base text-slate-900 mb-1">
              {language === 'en' ? 'We Contact You' : 'আমরা যোগাযোগ করব'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'Our team reaches out via WhatsApp to confirm details and answer questions.'
                : 'আমাদের একাডেমি প্রতিনিধি হোয়াটসঅ্যাপে মেসেজ দিয়ে সময় চূড়ান্ত করবেন।'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-sm mb-3">
              03
            </div>
            <h3 className="font-serif font-bold text-base text-slate-900 mb-1">
              {language === 'en' ? 'Schedule Confirmation' : 'শিডিউল নিশ্চিতকরণ'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'We assign a dedicated male or female teacher and set weekly class days.'
                : 'আপনার পছন্দমতো শিক্ষক নির্ধারণ করে ক্লাসের দিন নির্ধারণ করা হয়।'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-sm mb-3">
              04
            </div>
            <h3 className="font-serif font-bold text-base text-slate-900 mb-1">
              {language === 'en' ? 'Start Learning' : 'ক্লাস শুরু করুন'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'Join your classes via Google Meet and begin your blessed Quranic journey.'
                : 'গুগল মিট লিংকে ক্লিক করে লাইভ ওয়ান-টু-ওয়ান ক্লাস শুরু করুন।'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Side-by-Side: Admission Information Accordion (Left) + Admission Form (Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Admission Information Accordion (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D6B66C] block mb-1">
                {language === 'en' ? 'Guidelines' : 'ভর্তি নির্দেশিকা'}
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#123D32]">
                {language === 'en' ? 'Admission Information' : 'ভর্তির নিয়ম ও তথ্য'}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {language === 'en'
                  ? 'Everything you need to know before applying for classes.'
                  : 'আবেদন করার পূর্বে প্রয়োজনীয় তথ্যসমূহ জেনে নিন।'}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {admissionInfoItems.map((item, idx) => {
                const isOpen = openInfoIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
                  >
                    <button
                      onClick={() => setOpenInfoIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className="font-semibold text-xs sm:text-sm text-slate-900">
                        {item.q[language]}
                      </span>
                      <span className="text-slate-400">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#123D32]" />
                        ) : (
                          <Plus className="w-4 h-4 text-slate-500" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {item.a[language]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Admission Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactApplicationForm initialAppType="admission" />
          </div>
        </div>
      </section>

      {/* 4. Mandatory Admission FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D6B66C] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{t.admissionPage.faqSectionTitle}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
            {language === 'en'
              ? 'Admission Frequently Asked Questions'
              : 'ভর্তি সংক্রান্ত সাধারণ প্রশ্নোত্তর'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">{t.admissionPage.faqSubtitle}</p>
        </div>

        <FAQAccordion items={FAQ_DATA} defaultOpenIndex={0} />
      </section>

      {/* Bottom Subpage CTA Banner */}
      <SubpageCtaBanner buttonType="admission" />
    </div>
  );
};
