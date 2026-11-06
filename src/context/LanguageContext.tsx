/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, RoutePath } from '../types';
import { translations } from '../translations';
import { getBasePrefix } from '../utils/assetUrl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentRoute: RoutePath;
  navigateTo: (route: RoutePath, state?: { courseId?: string; appType?: 'free-trial' | 'admission' }) => void;
  t: typeof translations.en;
  selectedCourseId: string | null;
  setSelectedCourseId: (id: string | null) => void;
  selectedAppType: 'free-trial' | 'admission' | 'general-inquiry';
  setSelectedAppType: (type: 'free-trial' | 'admission' | 'general-inquiry') => void;
  legalModal: 'privacy' | 'terms' | null;
  setLegalModal: (modal: 'privacy' | 'terms' | null) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function parsePath(pathname: string): { lang: Language; route: RoutePath } {
  let clean = pathname.toLowerCase();
  
  // Strip potential base path (e.g. repo name on GitHub Pages)
  const prefix = getBasePrefix().toLowerCase();
  if (prefix && clean.startsWith(prefix)) {
    clean = clean.slice(prefix.length);
  }
  
  // Handle hash fallback if present (e.g., /#/bn/courses)
  if (window.location.hash.startsWith('#/')) {
    clean = window.location.hash.slice(1);
  }

  const parts = clean.split('/').filter(Boolean);

  let savedLang: Language | null = null;
  try {
    const s = localStorage.getItem('almuinul_user_language');
    if (s === 'en' || s === 'bn') savedLang = s;
  } catch (e) {
    // Ignore localStorage access issues
  }

  // Bengali ('bn') is the default language when first visiting the landing page
  let lang: Language = savedLang || 'bn';
  let route: RoutePath = '';

  if (parts.length > 0) {
    if (parts[0] === 'bn') {
      lang = 'bn';
      route = (parts[1] as RoutePath) || '';
    } else if (parts[0] === 'en') {
      lang = 'en';
      route = (parts[1] as RoutePath) || '';
    } else {
      // If no language prefix, check if first part is a known route
      const knownRoutes: RoutePath[] = ['about', 'courses', 'teachers', 'free-trial', 'admission', 'contact'];
      if (knownRoutes.includes(parts[0] as RoutePath)) {
        route = parts[0] as RoutePath;
      }
    }
  }

  return { lang, route };
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initial = parsePath(window.location.pathname);
  const [language, setLanguageState] = useState<Language>(initial.lang);
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(initial.route);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedAppType, setSelectedAppType] = useState<'free-trial' | 'admission' | 'general-inquiry'>('admission');
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Sync document html lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = 'ltr';
  }, [language]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parsePath(window.location.pathname);
      setLanguageState(parsed.lang);
      setCurrentRoute(parsed.route);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (
    route: RoutePath,
    state?: { courseId?: string; appType?: 'free-trial' | 'admission' }
  ) => {
    setCurrentRoute(route);
    if (state?.courseId) {
      setSelectedCourseId(state.courseId);
    }
    if (state?.appType) {
      setSelectedAppType(state.appType);
    }

    const prefix = getBasePrefix();
    const newPath = route ? `${prefix}/${language}/${route}` : `${prefix}/${language}/`;
    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('almuinul_user_language', newLang);
    } catch (e) {
      // Ignore
    }
    const prefix = getBasePrefix();
    const newPath = currentRoute ? `${prefix}/${newLang}/${currentRoute}` : `${prefix}/${newLang}/`;
    window.history.pushState({}, '', newPath);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentRoute,
        navigateTo,
        t,
        selectedCourseId,
        setSelectedCourseId,
        selectedAppType,
        setSelectedAppType,
        legalModal,
        setLegalModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
