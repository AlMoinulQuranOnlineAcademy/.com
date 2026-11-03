/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'bn';

export type RoutePath =
  | ''
  | 'about'
  | 'courses'
  | 'teachers'
  | 'free-trial'
  | 'admission'
  | 'contact';

export interface Course {
  id: string;
  slug: string;
  title: {
    en: string;
    bn: string;
  };
  subtitle: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  objectives: {
    en: string[];
    bn: string[];
  };
  targetAudience: {
    en: string;
    bn: string;
  };
  iconName: string;
  color: string;
  durationNote: {
    en: string;
    bn: string;
  };
}

export interface Teacher {
  id: string;
  name: {
    en: string;
    bn: string;
  };
  title: {
    en: string;
    bn: string;
  };
  role: 'male' | 'female';
  photo: string;
  qualifications: {
    en: string[];
    bn: string[];
  };
  specialization: {
    en: string;
    bn: string;
  };
  languages: {
    en: string;
    bn: string;
  };
  experienceNote?: {
    en: string;
    bn: string;
  };
}

export interface FAQItem {
  id: string;
  question: {
    en: string;
    bn: string;
  };
  answer: {
    en: string;
    bn: string;
  };
  category: 'general' | 'admission' | 'classes' | 'trial';
}

export interface ApplicationFormData {
  studentName: string;
  age: string;
  country: string;
  gender: 'male' | 'female' | '';
  selectedCourse: string;
  preferredLanguage: 'bangla' | 'english' | 'both';
  preferredClassTime: string;
  timezone: string;
  whatsappNumber: string;
  email: string;
  applicationType: 'free-trial' | 'admission' | 'general-inquiry';
  additionalMessage: string;
  agreedToTerms: boolean;
}
