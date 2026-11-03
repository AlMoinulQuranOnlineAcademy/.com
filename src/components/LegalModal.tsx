/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ACADEMY_INFO } from '../data/academyData';
import { X, ShieldCheck, FileText } from 'lucide-react';

export const LegalModal: React.FC = () => {
  const { language, legalModal, setLegalModal } = useLanguage();

  if (!legalModal) return null;

  const isPrivacy = legalModal === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#D6B66C]/40 overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#123D32] text-white">
          <div className="flex items-center gap-2.5">
            {isPrivacy ? (
              <ShieldCheck className="w-5 h-5 text-[#D6B66C]" />
            ) : (
              <FileText className="w-5 h-5 text-[#D6B66C]" />
            )}
            <h3 className="font-serif font-bold text-lg text-white">
              {isPrivacy
                ? language === 'en'
                  ? 'Privacy Policy'
                  : 'গোপনীয়তা নীতি'
                : language === 'en'
                ? 'Terms & Conditions'
                : 'ব্যবহারের শর্তাবলী'}
            </h3>
          </div>
          <button
            onClick={() => setLegalModal(null)}
            className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto text-slate-700 text-sm leading-relaxed space-y-4">
          {isPrivacy ? (
            <>
              <p>
                <strong>{ACADEMY_INFO.name[language]}</strong>{' '}
                {language === 'en'
                  ? 'is deeply committed to safeguarding the privacy of our students, children, and their families. This policy outlines how we handle and protect personal information.'
                  : 'আমাদের শিক্ষার্থী, সন্তান ও তাদের অভিভাবকদের ব্যক্তিগত তথ্যের সর্বোচ্চ সুরক্ষা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।'}
              </p>

              <h4 className="font-semibold text-slate-900 pt-2">
                {language === 'en' ? '1. Information We Collect' : '১. সংগৃহীত তথ্যাবলী'}
              </h4>
              <p>
                {language === 'en'
                  ? 'When you fill out an application or request a free trial, we collect basic details including the student name, age, country, WhatsApp contact number, and course preference strictly to organize Google Meet classes.'
                  : 'ভর্তি আবেদন বা ফ্রি ট্রায়ালের জন্য শিক্ষার্থীর নাম, বয়স, দেশ, হোয়াটসঅ্যাপ নম্বর এবং পছন্দের কোর্সের তথ্য নেওয়া হয় শুধুমাত্র ক্লাস সমন্বয়ের উদ্দেশ্যে।'}
              </p>

              <h4 className="font-semibold text-slate-900 pt-2">
                {language === 'en' ? '2. How Information is Used' : '২. তথ্যের ব্যবহার'}
              </h4>
              <p>
                {language === 'en'
                  ? 'Collected details are used solely to communicate schedule updates, coordinate with teachers, send Google Meet links, and verify attendance. We never sell, rent, or publicly display applicant information.'
                  : 'তথ্যসমূহ কেবলমাত্র ক্লাসের সময় নির্ধারণ, শিক্ষকের সাথে সমন্বয় ও গুগল মিট লিংক পাঠানোর কাজে ব্যবহৃত হয়। কোনো তৃতীয় পক্ষের কাছে তথ্য বিক্রি বা প্রকাশ করা হয় না।'}
              </p>

              <h4 className="font-semibold text-slate-900 pt-2">
                {language === 'en' ? '3. Child Safety & Class Dignity' : '৩. শিশু নিরাপত্তা ও সম্মানজনক পরিবেশ'}
              </h4>
              <p>
                {language === 'en'
                  ? 'We maintain a strict Islamic code of ethics. Female students are taught in a respectful, modest environment by qualified female instructors. Guardians are always welcome to observe their child’s online classes.'
                  : 'আমরা ইসলামিক আদব-আখলাক সম্পূর্ণ বজায় রাখি। নারী শিক্ষার্থীদের জন্য নারী শিক্ষিকা এবং অভিভাবকরা চাইলে সন্তানের ক্লাস পর্যবেক্ষণ করতে পারেন।'}
              </p>
            </>
          ) : (
            <>
              <p>
                {language === 'en'
                  ? 'By enrolling in or requesting free trial classes at Al Muinul Quran Online Academy, you agree to the following terms:'
                  : 'আল মুঈনুল কুরআন অনলাইন একাডেমিতে ভর্তি বা ফ্রি ট্রায়াল ক্লাসে অংশ নেওয়ার মাধ্যমে আপনি নিচের শর্তাবলীতে সম্মত হচ্ছেন:'}
              </p>

              <h4 className="font-semibold text-slate-900 pt-2">
                {language === 'en' ? '1. Online Class Etiquette' : '১. অনলাইন ক্লাসের আদব'}
              </h4>
              <p>
                {language === 'en'
                  ? 'Students are expected to join their Google Meet sessions on time with proper Islamic attire, in a quiet study space, and with an open heart to learn the Holy Quran.'
                  : 'শিক্ষার্থীদের যথাসময়ে শালীন পোশাকে ও শান্ত পরিবেশে গুগল মিট ক্লাসে উপস্থিত থাকার অনুরোধ করা হয়।'}
              </p>

              <h4 className="font-semibold text-slate-900 pt-2">
                {language === 'en' ? '2. Free Trial & Scheduling' : '২. ফ্রি ট্রায়াল ও শিডিউল'}
              </h4>
              <p>
                {language === 'en'
                  ? 'Free trial classes (1–2 sessions) are offered to new students subject to academy teacher availability. Rescheduling requests should be sent via WhatsApp with reasonable notice.'
                  : 'নতুন শিক্ষার্থীদের জন্য ১-২টি ফ্রি ট্রায়াল ক্লাসের ব্যবস্থা রয়েছে যা একাডেমি ও শিক্ষকের সময়ের সাথে সমন্বয় সাপেক্ষে নির্ধারিত হয়।'}
              </p>

              <h4 className="font-semibold text-slate-900 pt-2">
                {language === 'en' ? '3. Direct Academy Support' : '৩. সার্বিক সহযোগিতা'}
              </h4>
              <p>
                {language === 'en'
                  ? 'For any queries, feedback, or support, students and parents can contact our student coordinator directly via WhatsApp at +880 1626-278303.'
                  : 'যেকোনো জিজ্ঞাসা, মতামত বা অভিযোগের জন্য সরাসরি হোয়াটসঅ্যাপে (+৮৮০ ১৬২৬-২৭৮৩০৩) যোগাযোগ করুন।'}
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50">
          <button
            onClick={() => setLegalModal(null)}
            className="px-5 py-2 text-xs font-semibold bg-[#123D32] hover:bg-[#0c2a22] text-white rounded-lg transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Close' : 'বন্ধ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};
