/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COURSES_DATA, ACADEMY_INFO } from '../data/academyData';
import { ApplicationFormData } from '../types';
import { Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

interface ContactApplicationFormProps {
  initialAppType?: 'free-trial' | 'admission' | 'general-inquiry';
  initialCourseId?: string | null;
  onSuccess?: () => void;
}

export const ContactApplicationForm: React.FC<ContactApplicationFormProps> = ({
  initialAppType,
  initialCourseId,
  onSuccess,
}) => {
  const { language, t, selectedCourseId, selectedAppType } = useLanguage();

  const [formData, setFormData] = useState<ApplicationFormData>({
    studentName: '',
    age: '',
    country: '',
    gender: '',
    selectedCourse: initialCourseId || selectedCourseId || COURSES_DATA[0].id,
    preferredLanguage: 'bangla',
    preferredClassTime: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'GMT+6',
    whatsappNumber: '',
    email: '',
    applicationType: initialAppType || selectedAppType || 'admission',
    additionalMessage: '',
    agreedToTerms: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionSummary, setSubmissionSummary] = useState<ApplicationFormData | null>(null);

  // Sync initial props or context updates
  useEffect(() => {
    if (initialCourseId || selectedCourseId) {
      setFormData((prev) => ({
        ...prev,
        selectedCourse: initialCourseId || selectedCourseId || prev.selectedCourse,
      }));
    }
  }, [initialCourseId, selectedCourseId]);

  useEffect(() => {
    if (initialAppType || selectedAppType) {
      setFormData((prev) => ({
        ...prev,
        applicationType: initialAppType || selectedAppType || prev.applicationType,
      }));
    }
  }, [initialAppType, selectedAppType]);

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!formData.studentName.trim()) {
      errs.studentName = t.contactPage.validation.nameRequired;
    }
    if (!formData.age.trim()) {
      errs.age = t.contactPage.validation.ageRequired;
    }
    if (!formData.country.trim()) {
      errs.country = t.contactPage.validation.countryRequired;
    }
    if (!formData.gender) {
      errs.gender = t.contactPage.validation.genderRequired;
    }
    if (!formData.selectedCourse) {
      errs.course = t.contactPage.validation.courseRequired;
    }
    if (!formData.whatsappNumber.trim() || formData.whatsappNumber.length < 7) {
      errs.whatsappNumber = t.contactPage.validation.whatsappRequired;
    }
    if (!formData.agreedToTerms) {
      errs.agreedToTerms = t.contactPage.validation.termsRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Prepare payload
      const courseObj = COURSES_DATA.find((c) => c.id === formData.selectedCourse);
      const courseName = courseObj ? courseObj.title[language] : formData.selectedCourse;

      const payload = {
        ...formData,
        courseName,
        submittedAt: new Date().toISOString(),
        locale: language,
      };

      // 2. Check for configured Google Apps Script Webhook
      const webhookUrl =
        (typeof window !== 'undefined' && localStorage.getItem('ACADEMY_WEBHOOK_URL')) ||
        (import.meta as any).env?.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
        } catch (fetchErr) {
          console.warn('Webhook dispatch note:', fetchErr);
        }
      }

      // 3. Save locally in student submissions log
      try {
        const existingLogs = JSON.parse(localStorage.getItem('student_applications') || '[]');
        existingLogs.push(payload);
        localStorage.setItem('student_applications', JSON.stringify(existingLogs));
      } catch (e) {
        // Ignore local storage error
      }

      // Small delay for natural UI feel
      await new Promise((res) => setTimeout(res, 600));

      setSubmissionSummary(formData);
      setIsSuccess(true);
      setIsSubmitting(false);
      if (onSuccess) onSuccess();
    } catch (err) {
      setIsSubmitting(false);
      alert(t.common.error);
    }
  };

  const generateWhatsAppUrl = () => {
    if (!submissionSummary) return ACADEMY_INFO.whatsappUrl;

    const courseObj = COURSES_DATA.find((c) => c.id === submissionSummary.selectedCourse);
    const courseTitle = courseObj ? courseObj.title[language] : submissionSummary.selectedCourse;

    const message =
      language === 'en'
        ? `*New Application: Al Muinul Quran Academy*\n` +
          `• Student Name: ${submissionSummary.studentName}\n` +
          `• Age: ${submissionSummary.age}\n` +
          `• Country: ${submissionSummary.country}\n` +
          `• Gender: ${submissionSummary.gender}\n` +
          `• Course: ${courseTitle}\n` +
          `• Preferred Medium: ${submissionSummary.preferredLanguage}\n` +
          `• Preferred Time: ${submissionSummary.preferredClassTime || 'Flexible'} (${submissionSummary.timezone})\n` +
          `• WhatsApp: ${submissionSummary.whatsappNumber}\n` +
          `• Type: ${submissionSummary.applicationType}\n` +
          (submissionSummary.additionalMessage
            ? `• Note: ${submissionSummary.additionalMessage}\n`
            : '')
        : `*নতুন আবেদন: আল মুঈনুল কুরআন একাডেমি*\n` +
          `• শিক্ষার্থীর নাম: ${submissionSummary.studentName}\n` +
          `• বয়স: ${submissionSummary.age}\n` +
          `• দেশ: ${submissionSummary.country}\n` +
          `• জেন্ডার: ${submissionSummary.gender}\n` +
          `• নির্বাচিত কোর্স: ${courseTitle}\n` +
          `• পছন্দের ভাষা: ${submissionSummary.preferredLanguage}\n` +
          `• ক্লাসের সময়: ${submissionSummary.preferredClassTime || 'সুবিধাজনক সময়ে'} (${submissionSummary.timezone})\n` +
          `• হোয়াটসঅ্যাপ: ${submissionSummary.whatsappNumber}\n` +
          `• আবেদনের ধরন: ${submissionSummary.applicationType}\n` +
          (submissionSummary.additionalMessage
            ? `• মন্তব্য: ${submissionSummary.additionalMessage}\n`
            : '');

    return `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
  };

  if (isSuccess && submissionSummary) {
    return (
      <div className="bg-white rounded-2xl border-2 border-[#D6B66C] p-6 sm:p-8 text-center shadow-lg animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-emerald-100 text-[#123D32] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>

        <h3 className="font-serif font-bold text-2xl text-[#123D32] mb-2">
          {t.contactPage.successAlert.title}
        </h3>

        <p className="text-slate-600 max-w-lg mx-auto mb-6 text-sm sm:text-base leading-relaxed">
          {t.contactPage.successAlert.message}
        </p>

        <div className="bg-[#F3F5F2] rounded-xl p-4 max-w-md mx-auto text-left text-xs sm:text-sm text-slate-700 mb-6 border border-slate-200">
          <p className="font-semibold text-[#123D32] mb-2 pb-1 border-b border-slate-200">
            {language === 'en' ? 'Application Summary' : 'আবেদনের বিবরণ'}:
          </p>
          <div className="space-y-1">
            <p>
              <strong className="text-slate-900">{language === 'en' ? 'Student:' : 'শিক্ষার্থী:'}</strong>{' '}
              {submissionSummary.studentName} ({submissionSummary.age} yrs)
            </p>
            <p>
              <strong className="text-slate-900">{language === 'en' ? 'Course:' : 'কোর্স:'}</strong>{' '}
              {COURSES_DATA.find((c) => c.id === submissionSummary.selectedCourse)?.title[language]}
            </p>
            <p>
              <strong className="text-slate-900">{language === 'en' ? 'Country:' : 'দেশ:'}</strong>{' '}
              {submissionSummary.country}
            </p>
            <p>
              <strong className="text-slate-900">{language === 'en' ? 'WhatsApp:' : 'হোয়াটসঅ্যাপ:'}</strong>{' '}
              {submissionSummary.whatsappNumber}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-lg shadow-sm transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.contactPage.successAlert.whatsappDirectBtn}</span>
          </a>

          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                studentName: '',
                age: '',
                country: '',
                gender: '',
                selectedCourse: COURSES_DATA[0].id,
                preferredLanguage: 'bangla',
                preferredClassTime: '',
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'GMT+6',
                whatsappNumber: '',
                email: '',
                applicationType: 'admission',
                additionalMessage: '',
                agreedToTerms: true,
              });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
          >
            {t.contactPage.successAlert.submitAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-[#D6B66C]/30 p-6 sm:p-8 lg:p-10 shadow-sm"
    >
      <div className="mb-8 pb-4 border-b border-slate-100">
        <h3 className="font-serif font-bold text-2xl text-[#123D32] mb-1">
          {t.contactPage.formTitle}
        </h3>
        <p className="text-sm text-slate-600">{t.contactPage.formSubtitle}</p>
      </div>

      {/* Application Type Selector */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          {t.contactPage.fields.appType}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, applicationType: 'free-trial' })}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-center ${
              formData.applicationType === 'free-trial'
                ? 'bg-[#123D32] text-white border-[#123D32] shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {t.contactPage.fields.appTypeTrial}
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, applicationType: 'admission' })}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-center ${
              formData.applicationType === 'admission'
                ? 'bg-[#123D32] text-white border-[#123D32] shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {t.contactPage.fields.appTypeAdmission}
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, applicationType: 'general-inquiry' })}
            className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer text-center ${
              formData.applicationType === 'general-inquiry'
                ? 'bg-[#123D32] text-white border-[#123D32] shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {t.contactPage.fields.appTypeInquiry}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* Student Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.studentName}
          </label>
          <input
            type="text"
            value={formData.studentName}
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            placeholder={t.contactPage.fields.studentNamePlaceholder}
            className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors ${
              errors.studentName ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
            }`}
          />
          {errors.studentName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.studentName}</span>
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.age}
          </label>
          <input
            type="text"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder={t.contactPage.fields.agePlaceholder}
            className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors ${
              errors.age ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
            }`}
          />
          {errors.age && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.age}</span>
            </p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.country}
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder={t.contactPage.fields.countryPlaceholder}
            className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors ${
              errors.country ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
            }`}
          />
          {errors.country && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.country}</span>
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.gender}
          </label>
          <select
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value as 'male' | 'female' })
            }
            className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors ${
              errors.gender ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
            }`}
          >
            <option value="">{t.contactPage.fields.genderSelect}</option>
            <option value="male">{t.contactPage.fields.genderMale}</option>
            <option value="female">{t.contactPage.fields.genderFemale}</option>
          </select>
          {errors.gender && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.gender}</span>
            </p>
          )}
        </div>

        {/* Selected Course */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.course}
          </label>
          <select
            value={formData.selectedCourse}
            onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors ${
              errors.course ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
            }`}
          >
            {COURSES_DATA.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title[language]}
              </option>
            ))}
          </select>
        </div>

        {/* Medium of Instruction */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.language}
          </label>
          <select
            value={formData.preferredLanguage}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredLanguage: e.target.value as 'bangla' | 'english' | 'both',
              })
            }
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors"
          >
            <option value="bangla">{t.contactPage.fields.langBangla}</option>
            <option value="english">{t.contactPage.fields.langEnglish}</option>
            <option value="both">{t.contactPage.fields.langBoth}</option>
          </select>
        </div>

        {/* Class Time */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.classTime}
          </label>
          <input
            type="text"
            value={formData.preferredClassTime}
            onChange={(e) => setFormData({ ...formData, preferredClassTime: e.target.value })}
            placeholder={t.contactPage.fields.classTimePlaceholder}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors"
          />
        </div>

        {/* Timezone */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.timezone}
          </label>
          <input
            type="text"
            value={formData.timezone}
            onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
            placeholder={t.contactPage.fields.timezonePlaceholder}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors"
          />
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.whatsapp}
          </label>
          <input
            type="tel"
            value={formData.whatsappNumber}
            onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
            placeholder={t.contactPage.fields.whatsappPlaceholder}
            className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors ${
              errors.whatsappNumber ? 'border-red-400 bg-red-50/40' : 'border-slate-200'
            }`}
          />
          {errors.whatsappNumber && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.whatsappNumber}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {t.contactPage.fields.email}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t.contactPage.fields.emailPlaceholder}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors"
          />
        </div>
      </div>

      {/* Additional Message */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-800 mb-1.5">
          {t.contactPage.fields.message}
        </label>
        <textarea
          rows={3}
          value={formData.additionalMessage}
          onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
          placeholder={t.contactPage.fields.messagePlaceholder}
          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors"
        />
      </div>

      {/* Agreement Checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-normal">
          <input
            type="checkbox"
            checked={formData.agreedToTerms}
            onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
            className="mt-0.5 rounded-sm border-slate-300 text-[#123D32] focus:ring-[#123D32]"
          />
          <span>{t.contactPage.fields.agree}</span>
        </label>
        {errors.agreedToTerms && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.agreedToTerms}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#123D32] hover:bg-[#0c2a22] text-white font-medium rounded-lg shadow-sm hover:shadow transition-all cursor-pointer border border-[#D6B66C]/40 disabled:opacity-60"
        >
          {isSubmitting ? (
            <span>{t.contactPage.fields.submittingBtn}</span>
          ) : (
            <>
              <span>{t.contactPage.fields.submitBtn}</span>
              <Send className="w-4 h-4 text-[#D6B66C]" />
            </>
          )}
        </button>

        <span className="text-xs text-slate-500">
          {language === 'en'
            ? 'Or message directly on WhatsApp: +880 1626-278303'
            : 'অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ দিন: +880 1626-278303'}
        </span>
      </div>
    </form>
  );
};
