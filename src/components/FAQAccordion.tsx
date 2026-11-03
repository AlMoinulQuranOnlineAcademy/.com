/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQItem } from '../types';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, defaultOpenIndex = 0 }) => {
  const { language } = useLanguage();
  const [openIds, setOpenIds] = useState<string[]>(
    items[defaultOpenIndex] ? [items[defaultOpenIndex].id] : []
  );

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#D6B66C] shadow-sm'
                : 'bg-white/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-hidden"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-900 text-sm md:text-base leading-snug">
                {item.question[language]}
              </span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? 'bg-[#123D32] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100">
                <p>{item.answer[language]}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
