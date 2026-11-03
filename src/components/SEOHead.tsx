/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ACADEMY_INFO, COURSES_DATA } from '../data/academyData';

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description }) => {
  const { language, currentRoute } = useLanguage();

  const defaultTitles = {
    en: {
      '': 'Al Muinul Quran Online Academy | Learn the Quran. Illuminate Your Life.',
      about: 'About Us | Al Muinul Quran Online Academy',
      courses: 'Our Courses | Noorani Qaida, Tajweed & Arabic',
      teachers: 'Our Qualified Teachers | Al Muinul Quran Online Academy',
      'free-trial': 'Free Trial Class | Al Muinul Quran Online Academy',
      admission: 'Admission & FAQ | Al Muinul Quran Online Academy',
      contact: 'Contact Us & Apply | Al Muinul Quran Online Academy',
    },
    bn: {
      '': 'আল মুঈনুল কুরআন অনলাইন একাডেমি | কুরআন শিখুন, জীবনকে আলোকিত করুন।',
      about: 'আমাদের সম্পর্কে | আল মুঈনুল কুরআন অনলাইন একাডেমি',
      courses: 'বিশেষায়িত কোর্সসমূহ | নূরানী কায়দা, তাজবিদ ও আরবি',
      teachers: 'সুযোগ্য শিক্ষকমণ্ডলী | আল মুঈনুল কুরআন অনলাইন একাডেমি',
      'free-trial': 'ফ্রি ট্রায়াল ক্লাস | আল মুঈনুল কুরআন অনলাইন একাডেমি',
      admission: 'ভর্তি তথ্য ও প্রশ্নোত্তর | আল মুঈনুল কুরআন অনলাইন একাডেমি',
      contact: 'যোগাযোগ ও আবেদন | আল মুঈনুল কুরআন অনলাইন একাডেমি',
    },
  };

  const pageTitle = title || defaultTitles[language][currentRoute] || defaultTitles[language][''];

  const defaultDescriptions = {
    en: 'Begin your journey towards authentic Quranic knowledge through personalized one-to-one live Google Meet classes with certified teachers at Al Muinul Quran Online Academy.',
    bn: 'অভিজ্ঞ ও সনদপ্রাপ্ত শিক্ষক-শিক্ষিকাদের তত্ত্বাবধানে ঘরে বসে গুগল মিটে ওয়ান-টু-ওয়ান লাইভ ক্লাসের মাধ্যমে বিশুদ্ধভাবে কুরআন শিক্ষার নির্ভরযোগ্য একাডেমি।',
  };

  const metaDesc = description || defaultDescriptions[language];

  useEffect(() => {
    document.title = pageTitle;

    // Update meta description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDesc);
    }

    // Update OpenGraph tags
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', pageTitle);
    }

    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute('content', metaDesc);
    }

    // Schema.org Structured Data (EducationalOrganization & Courses)
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'EducationalOrganization',
          '@id': 'https://almuinulquran.com/#organization',
          name: ACADEMY_INFO.name.en,
          alternateName: ACADEMY_INFO.name.bn,
          description: metaDesc,
          url: window.location.origin,
          logo: `${window.location.origin}${ACADEMY_INFO.logo}`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: ACADEMY_INFO.phone,
            contactType: 'Customer Support',
            availableLanguage: ['Bengali', 'English', 'Arabic'],
          },
          sameAs: [ACADEMY_INFO.facebook],
        },
        ...COURSES_DATA.map((c) => ({
          '@type': 'Course',
          name: c.title[language],
          description: c.description[language],
          provider: {
            '@type': 'EducationalOrganization',
            name: ACADEMY_INFO.name.en,
          },
        })),
      ],
    };

    let scriptTag = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);
  }, [pageTitle, metaDesc, language, currentRoute]);

  return null;
};
