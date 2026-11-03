/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { SubpageCtaBanner } from '../components/SubpageCtaBanner';
import { ContactApplicationForm } from '../components/ContactApplicationForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { FAQ_DATA } from '../data/academyData';
import { getAssetUrl } from '../utils/assetUrl';
import {
  Sparkles,
  CheckCircle,
  Users,
  Video,
  ShieldCheck,
  Calendar,
  Lock,
  ArrowRight,
} from 'lucide-react';

export const FreeTrialPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12 lg:space-y-16 pb-12">
      {/* 1. Page Hero Header */}
      <PageHeroHeader
        pageName={{
          en: 'Free Trial Class',
          bn: 'ফ্রি ট্রায়াল ক্লাস',
        }}
        kicker={{
          en: 'Free Trial Class',
          bn: 'ফ্রি ট্রায়াল ক্লাস',
        }}
        title={{
          en: 'Experience Quran Learning Risk-Free',
          bn: 'বিনা খরচে যাচাই করুন আমাদের পাঠদানের মান',
        }}
        description={{
          en: 'Let your child or yourself experience the quality of our online Quran classes with 1–2 free trial sessions. Zero payment or upfront commitment required.',
          bn: 'ভর্তির পূর্বেই আল মুঈনুল কুরআন অনলাইন একাডেমির পাঠদান পদ্ধতি ও পরিবেশ পরীক্ষা করার জন্য ১-২টি ফ্রি ট্রায়াল ক্লাসে অংশ নিন। কোনো অগ্রিম ফি দিতে হবে না।',
        }}
        heroImage="assets/images/freetrial_hero_img_1793379228480.jpg"
        heroImageAlt={{
          en: 'Online Quran live 1-to-1 learning session with headset, laptop and Quran',
          bn: 'অনলাইন কুরআন লাইভ ক্লাসের প্রস্তুতি ও সরঞ্জাম',
        }}
        quote={{
          arabic: 'اقْرَأْ وَارْتَقِ وَرَتِّلْ كَمَا كُنْتَ تُرَتِّلُ فِي الدُّنْيَا',
          translation: {
            en: '“Recite and ascend, and recite melodiously as you used to recite in the world.”',
            bn: '“কুরআন পাঠ করতে থাকো এবং মর্যাদার স্তরে উন্নীত হও, যেমন দুনিয়াতে যত্নসহকারে পাঠ করতে।”',
          },
          source: {
            en: '— Jami` at-Tirmidhi (2914)',
            bn: '— জামে আত-তিরমিযী (২৯১৪)',
          },
        }}
        badges={[
          {
            icon: <Sparkles className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'For New Students Only',
              bn: 'শুধু নতুন শিক্ষার্থীদের জন্য',
            },
          },
          {
            icon: <CheckCircle className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: '1–2 Free Trial Classes',
              bn: '১-২টি ফ্রি ট্রায়াল ক্লাস',
            },
          },
          {
            icon: <ShieldCheck className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'No Upfront Obligation',
              bn: 'বাধ্যতামূলক ফি নেই',
            },
          },
        ]}
      />

      {/* 2. Why Choose Our Free Trial Class? (4 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-5 h-0.5 bg-[#D6B66C]" />
            <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
              {language === 'en' ? 'Why Choose Our Free Trial Class?' : 'কেন ফ্রি ট্রায়াল ক্লাস করবেন?'}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
            {language === 'en' ? 'A Simple Way to Get Started' : 'শুরু করার সহজ উপায়'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            {language === 'en'
              ? 'We understand that choosing the right online Quran academy is important. That’s why we offer a free trial class so you can experience our teaching method.'
              : 'একটি সঠিক অনলাইন একাডেমি নির্বাচন অত্যন্ত গুরুত্বপূর্ণ। তাই সিদ্ধান্ত নেওয়ার পূর্বে আমাদের শিক্ষকের ক্লাস পদ্ধতি যাচাই করে নেওয়ার সুযোগ দিচ্ছি।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left shadow-xs">
            <Users className="w-8 h-8 text-[#123D32] mb-3" />
            <h3 className="font-semibold text-sm text-slate-900 mb-1">
              {language === 'en' ? 'Qualified Teachers' : 'সনদপ্রাপ্ত শিক্ষক'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'en'
                ? 'Experienced & certified instructors'
                : 'অভিজ্ঞ ও সনদধারী শিক্ষক-শিক্ষিকা'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left shadow-xs">
            <Sparkles className="w-8 h-8 text-[#123D32] mb-3" />
            <h3 className="font-semibold text-sm text-slate-900 mb-1">
              {language === 'en' ? 'Personalized Learning' : 'একক পাঠদান'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'en' ? 'One-to-one live classes' : 'ওয়ান-টু-ওয়ান লাইভ ক্লাস'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left shadow-xs">
            <Calendar className="w-8 h-8 text-[#123D32] mb-3" />
            <h3 className="font-semibold text-sm text-slate-900 mb-1">
              {language === 'en' ? 'Flexible Schedule' : 'সুবিধাজনক সময়'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'en' ? 'Your time, your convenience' : 'আপনার পছন্দমতো সময়ে শিডিউল'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left shadow-xs">
            <ShieldCheck className="w-8 h-8 text-[#123D32] mb-3" />
            <h3 className="font-semibold text-sm text-slate-900 mb-1">
              {language === 'en' ? 'Safe & Trusted' : 'নিরাপদ ও বিশ্বস্ত'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'en' ? 'Secure learning environment' : 'পর্দানশীন ও শান্ত পরিবেশ'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. How It Works: 4 Easy Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-5 h-0.5 bg-[#D6B66C]" />
            <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
              {language === 'en' ? 'How It Works' : 'কার্যপদ্ধতি'}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
            {language === 'en' ? 'Get Started in 4 Easy Steps' : 'সহজ ৪টি ধাপে শুরু করুন'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left">
            <div className="w-9 h-9 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-xs mb-3">
              1
            </div>
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              {language === 'en' ? 'Fill Out Form' : 'ফর্ম পূরণ করুন'}
            </h4>
            <p className="text-xs text-slate-600">
              {language === 'en'
                ? 'Provide your basic information in the contact form.'
                : 'আপনার প্রয়োজনীয় তথ্য ফর্মে লিখে জমা দিন।'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left">
            <div className="w-9 h-9 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-xs mb-3">
              2
            </div>
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              {language === 'en' ? 'We Contact You' : 'আমরা যোগাযোগ করব'}
            </h4>
            <p className="text-xs text-slate-600">
              {language === 'en'
                ? 'Our team reaches out via WhatsApp to confirm details.'
                : 'আমাদের প্রতিনিধি হোয়াটসঅ্যাপে আপনার সাথে কথা বলবেন।'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left">
            <div className="w-9 h-9 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-xs mb-3">
              3
            </div>
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              {language === 'en' ? 'Get Trial Schedule' : 'ট্রায়াল শিডিউল নিন'}
            </h4>
            <p className="text-xs text-slate-600">
              {language === 'en'
                ? 'We arrange 1–2 free trial classes based on availability.'
                : 'সুবিধাজনক সময়ে ১-২টি ফ্রি ক্লাসের দিন ঠিক হবে।'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left">
            <div className="w-9 h-9 rounded-full bg-[#123D32] text-[#D6B66C] font-bold flex items-center justify-center text-xs mb-3">
              4
            </div>
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              {language === 'en' ? 'Start on Google Meet' : 'গুগল মিটে ক্লাস'}
            </h4>
            <p className="text-xs text-slate-600">
              {language === 'en'
                ? 'Join your live class and experience our teaching method.'
                : 'লাইভ ক্লাসে অংশ নিয়ে শিক্ষক ও ক্লাস যাচাই করুন।'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Split Application Section: Green Brand Card (Left) + Form (Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Deep Green Brand Box with Quran photo */}
          <div className="lg:col-span-5 bg-[#123D32] text-white rounded-3xl p-8 border border-[#D6B66C]/40 space-y-6 text-left">
            <div>
              <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider block mb-1">
                {language === 'en' ? 'Apply for Free Trial Class*' : 'ফ্রি ট্রায়াল আবেদন*'}
              </span>
              <h3 className="font-serif font-bold text-3xl text-white">
                {language === 'en' ? 'Fill Out the Form' : 'ফর্মটি পূরণ করুন'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                {language === 'en'
                  ? 'Complete the form below with your details and our team will contact you via WhatsApp to confirm your free trial class and answer any questions.'
                  : 'নিচের ফর্মে আপনার তথ্য দিন। আমাদের একাডেমি প্রতিনিধি দ্রুততম সময়ে হোয়াটসঅ্যাপে যোগাযোগ করে আপনার ক্লাস সময় নির্ধারণ করবেন।'}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#D6B66C]/30 shadow-md">
              <img
                src={getAssetUrl('assets/images/student_online_learning_1793371433018.jpg')}
                alt="Student learning Quran in one-to-one online class"
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-[#D6B66C] pt-2 border-t border-white/10">
              <Lock className="w-4 h-4 text-[#D6B66C] shrink-0" />
              <span>
                {language === 'en'
                  ? 'Your information is safe and secure with us.'
                  : 'আপনার তথ্যের সম্পূর্ণ গোপনীয়তা বজায় রাখা হয়।'}
              </span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <ContactApplicationForm initialAppType="free-trial" />
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-5 h-0.5 bg-[#D6B66C]" />
            <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
              {language === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা'}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
            {language === 'en' ? 'Got Questions? We’re Here to Help' : 'আপনার মনে কি কোনো প্রশ্ন আছে?'}
          </h2>
        </div>

        <FAQAccordion items={FAQ_DATA.slice(0, 5)} defaultOpenIndex={0} />
      </section>

      {/* Bottom Subpage CTA Banner */}
      <SubpageCtaBanner buttonType="trial" />
    </div>
  );
};
