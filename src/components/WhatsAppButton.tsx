/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ACADEMY_INFO } from '../data/academyData';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  const prefilledMessage =
    language === 'en'
      ? encodeURIComponent(
          'Assalamu Alaikum! I would like to know more about Quran classes at Al Muinul Quran Online Academy.'
        )
      : encodeURIComponent(
          'আসসালামু আলাইকুম! আমি আল মুঈনুল কুরআন অনলাইন একাডেমির কুরআন ক্লাসের ব্যাপারে বিস্তারিত জানতে আগ্রহী।'
        );

  const directUrl = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 mr-1 bg-white text-slate-900 border border-[#D6B66C]/40 p-3 rounded-2xl shadow-xl text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-100">
            <span className="font-semibold text-[#123D32]">
              {language === 'en' ? 'Al Muinul Quran Academy' : 'আল মুঈনুল কুরআন একাডেমি'}
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600 mb-2">
            {language === 'en'
              ? 'Have questions about classes or free trials? Chat directly with our student coordinator!'
              : 'ক্লাস বা ফ্রি ট্রায়াল সম্পর্কে যেকোনো জিজ্ঞাসা থাকলে সরাসরি কথা বলুন আমাদের সাথে।'}
          </p>
          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-1.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium rounded-lg text-xs transition-colors"
          >
            {language === 'en' ? 'Start WhatsApp Chat' : 'হোয়াটসঅ্যাপে মেসেজ দিন'}
          </a>
        </div>
      )}

      {/* Floating launcher icon */}
      <a
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all relative group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
