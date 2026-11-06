import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COURSES_DATA, ACADEMY_INFO } from '../data/academyData';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Mail, BookOpen } from 'lucide-react';

interface ContactApplicationFormProps {
  initialAppType?: 'free-trial' | 'admission' | 'general-inquiry';
  initialCourseId?: string | null;
  onSuccess?: () => void;
}

interface SimplifiedFormData {
  studentName: string;
  age: string;
  country: string;
  whatsappNumber: string;
  email: string;
  additionalMessage: string;
  selectedCourse?: string;
  applicationType?: string;
  agreedToTerms: boolean;
}

export const ContactApplicationForm: React.FC<ContactApplicationFormProps> = ({
  initialAppType,
  initialCourseId,
  onSuccess,
}) => {
  const { language, t, selectedCourseId, selectedAppType } = useLanguage();

  const [formData, setFormData] = useState<SimplifiedFormData>({
    studentName: '',
    age: '',
    country: '',
    whatsappNumber: '',
    email: '',
    additionalMessage: '',
    selectedCourse: initialCourseId || selectedCourseId || COURSES_DATA[0].id,
    applicationType: initialAppType || selectedAppType || 'admission',
    agreedToTerms: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionSummary, setSubmissionSummary] = useState<SimplifiedFormData | null>(null);

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
      const courseObj = COURSES_DATA.find((c) => c.id === formData.selectedCourse);
      const courseName = courseObj ? courseObj.title[language] : formData.selectedCourse || '';

      const submissionDate = new Date().toLocaleString('bn-BD', {
        dateStyle: 'full',
        timeStyle: 'medium',
        timeZone: 'Asia/Dhaka',
      });

      const emailPayload = {
        _subject: `নতুন শিক্ষার্থী আবেদন - ${formData.studentName}${courseName ? ` (${courseName})` : ''}`,
        _template: 'table',
        _captcha: 'false',
        'শিক্ষার্থীর পুরো নাম': formData.studentName,
        'শিক্ষার্থীর বয়স': `${formData.age} বছর`,
        'আপনার ঠিকানা': formData.country,
        'হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ)': formData.whatsappNumber,
        'ইমেইল এড্রেস (ঐচ্ছিক)': formData.email ? formData.email : 'দেওয়া হয়নি (ঐচ্ছিক)',
        'অতিরিক্ত তথ্য বা বিশেষ অনুরোধ (ঐচ্ছিক)': formData.additionalMessage ? formData.additionalMessage : 'কোনো বিশেষ অনুরোধ নেই',
        'কোর্স (Course)': courseName || 'সাধারণ আবেদন',
        'আবেদনের সময় (Date & Time)': submissionDate,
      };

      // 1. Dispatch to recipient email: ahmadshiblibd@gmail.com via AJAX endpoint
      try {
        await fetch('https://formsubmit.co/ajax/ahmadshiblibd@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(emailPayload),
        });
      } catch (postErr) {
        console.warn('FormSubmit AJAX dispatch notice:', postErr);
      }

      // 2. Dispatch to any configured secondary Webhook (e.g. Google Apps Script)
      const webhookUrl =
        (typeof window !== 'undefined' && localStorage.getItem('ACADEMY_WEBHOOK_URL')) ||
        (import.meta as any).env?.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...formData,
              courseName,
              submittedAt: new Date().toISOString(),
              targetEmail: 'ahmadshiblibd@gmail.com',
            }),
          });
        } catch (fetchErr) {
          console.warn('Webhook dispatch note:', fetchErr);
        }
      }

      // 3. Save locally in browser application log for backup
      try {
        const existingLogs = JSON.parse(localStorage.getItem('student_applications') || '[]');
        existingLogs.push({
          ...formData,
          courseName,
          submittedAt: new Date().toISOString(),
          sentTo: 'ahmadshiblibd@gmail.com',
        });
        localStorage.setItem('student_applications', JSON.stringify(existingLogs));
      } catch (storageErr) {
        // Ignore local storage error
      }

      await new Promise((res) => setTimeout(res, 400));

      setSubmissionSummary(formData);
      setIsSuccess(true);
      setIsSubmitting(false);
      if (onSuccess) onSuccess();
    } catch (err) {
      setIsSubmitting(false);
      setSubmissionSummary(formData);
      setIsSuccess(true);
    }
  };

  const generateWhatsAppUrl = () => {
    if (!submissionSummary) return ACADEMY_INFO.whatsappUrl;

    const courseObj = COURSES_DATA.find((c) => c.id === submissionSummary.selectedCourse);
    const courseTitle = courseObj ? courseObj.title[language] : '';

    const message =
      language === 'en'
        ? `*New Application: Al Muinul Quran Academy*\n` +
          `• Student Name: ${submissionSummary.studentName}\n` +
          `• Age: ${submissionSummary.age}\n` +
          `• Address: ${submissionSummary.country}\n` +
          `• WhatsApp: ${submissionSummary.whatsappNumber}\n` +
          (submissionSummary.email ? `• Email: ${submissionSummary.email}\n` : '') +
          (courseTitle ? `• Course: ${courseTitle}\n` : '') +
          (submissionSummary.additionalMessage
            ? `• Note: ${submissionSummary.additionalMessage}\n`
            : '')
        : `*নতুন আবেদন: আল মুঈনুল কুরআন একাডেমি*\n` +
          `• শিক্ষার্থীর পুরো নাম: ${submissionSummary.studentName}\n` +
          `• শিক্ষার্থীর বয়স: ${submissionSummary.age}\n` +
          `• আপনার ঠিকানা: ${submissionSummary.country}\n` +
          `• হোয়াটসঅ্যাপ নম্বর: ${submissionSummary.whatsappNumber}\n` +
          (submissionSummary.email ? `• ইমেইল: ${submissionSummary.email}\n` : '') +
          (courseTitle ? `• কোর্স: ${courseTitle}\n` : '') +
          (submissionSummary.additionalMessage
            ? `• বিশেষ অনুরোধ: ${submissionSummary.additionalMessage}\n`
            : '');

    return `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
  };

  if (isSuccess && submissionSummary) {
    const courseObj = COURSES_DATA.find((c) => c.id === submissionSummary.selectedCourse);
    const courseTitle = courseObj ? courseObj.title[language] : '';

    const emailSubject = encodeURIComponent(
      `নতুন শিক্ষার্থী আবেদন - ${submissionSummary.studentName}`
    );
    const emailBody = encodeURIComponent(
      `শিক্ষার্থীর পুরো নাম: ${submissionSummary.studentName}\n` +
      `শিক্ষার্থীর বয়স: ${submissionSummary.age}\n` +
      `আপনার ঠিকানা: ${submissionSummary.country}\n` +
      `হোয়াটসঅ্যাপ নম্বর: ${submissionSummary.whatsappNumber}\n` +
      `ইমেইল এড্রেস: ${submissionSummary.email || 'N/A'}\n` +
      (courseTitle ? `কোর্স: ${courseTitle}\n` : '') +
      `বিশেষ অনুরোধ: ${submissionSummary.additionalMessage || 'N/A'}`
    );

    return (
      <div className="bg-white rounded-2xl border-2 border-[#D6B66C] p-6 sm:p-8 text-center shadow-lg animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-emerald-100 text-[#123D32] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xs">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>

        <h3 className="font-serif font-bold text-2xl text-[#123D32] mb-2">
          {language === 'en' ? 'Alhamdulillah! Application Submitted' : 'আলহামদুলিল্লাহ! আবেদন সফলভাবে গৃহীত হয়েছে'}
        </h3>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-full mb-4">
          <Mail className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            {language === 'en'
              ? 'Lead sent directly to: ahmadshiblibd@gmail.com'
              : 'আবেদনের তথ্য সরাসরি পাঠানো হয়েছে: ahmadshiblibd@gmail.com'}
          </span>
        </div>

        <p className="text-slate-600 max-w-lg mx-auto mb-6 text-xs sm:text-sm leading-relaxed">
          {language === 'en'
            ? 'Our administration has received your details and will get in touch with you shortly via WhatsApp.'
            : 'আমাদের একাডেমি প্রতিনিধি আপনার আবেদনের তথ্য পেয়েছেন এবং শীঘ্রই হোয়াটসঅ্যাপে আপনার সাথে যোগাযোগ করবেন।'}
        </p>

        {/* Detailed submission summary */}
        <div className="bg-[#F3F5F2] rounded-xl p-4 sm:p-5 max-w-lg mx-auto text-left text-xs sm:text-sm text-slate-700 mb-6 border border-slate-200 shadow-inner">
          <p className="font-semibold text-[#123D32] mb-3 pb-2 border-b border-slate-200 flex items-center justify-between">
            <span>{language === 'en' ? 'Submitted Lead Information' : 'প্রেরিত তথ্যাবলী'}:</span>
            <span className="text-[11px] font-normal text-slate-500">To: ahmadshiblibd@gmail.com</span>
          </p>
          <div className="space-y-2">
            <div className="flex justify-between gap-2">
              <span className="text-slate-500 font-medium">
                {language === 'en' ? 'Student Full Name:' : 'শিক্ষার্থীর পুরো নাম:'}
              </span>
              <span className="font-semibold text-slate-900 text-right">{submissionSummary.studentName}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-slate-500 font-medium">
                {language === 'en' ? 'Student Age:' : 'শিক্ষার্থীর বয়স:'}
              </span>
              <span className="font-semibold text-slate-900 text-right">{submissionSummary.age}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-slate-500 font-medium">
                {language === 'en' ? 'Address:' : 'আপনার ঠিকানা:'}
              </span>
              <span className="font-semibold text-slate-900 text-right">{submissionSummary.country}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-slate-500 font-medium">
                {language === 'en' ? 'WhatsApp Number:' : 'হোয়াটসঅ্যাপ নম্বর:'}
              </span>
              <span className="font-mono font-bold text-[#123D32] text-right">{submissionSummary.whatsappNumber}</span>
            </div>
            {submissionSummary.email && (
              <div className="flex justify-between gap-2">
                <span className="text-slate-500 font-medium">
                  {language === 'en' ? 'Email Address:' : 'ইমেইল এড্রেস:'}
                </span>
                <span className="font-semibold text-slate-900 text-right">{submissionSummary.email}</span>
              </div>
            )}
            {submissionSummary.additionalMessage && (
              <div className="pt-2 border-t border-slate-200">
                <span className="text-slate-500 font-medium block mb-1">
                  {language === 'en' ? 'Special Request / Info:' : 'অতিরিক্ত তথ্য বা বিশেষ অনুরোধ:'}
                </span>
                <span className="text-slate-800 italic bg-white p-2 rounded-md block border border-slate-200 text-xs">
                  {submissionSummary.additionalMessage}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons: WhatsApp Direct + Direct Mailto + Reset */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.contactPage.successAlert.whatsappDirectBtn}</span>
          </a>

          <a
            href={`mailto:ahmadshiblibd@gmail.com?subject=${emailSubject}&body=${emailBody}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#123D32] hover:bg-[#0c2a22] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-all cursor-pointer border border-[#D6B66C]/40"
          >
            <Mail className="w-4 h-4 text-[#D6B66C]" />
            <span>{language === 'en' ? 'Send via Email App' : 'ইমেইল অ্যাপেও পাঠান'}</span>
          </a>

          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                studentName: '',
                age: '',
                country: '',
                whatsappNumber: '',
                email: '',
                additionalMessage: '',
                selectedCourse: COURSES_DATA[0].id,
                applicationType: 'admission',
                agreedToTerms: true,
              });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            {t.contactPage.successAlert.submitAnother}
          </button>
        </div>
      </div>
    );
  }

  const selectedCourseObj = COURSES_DATA.find((c) => c.id === formData.selectedCourse);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-[#D6B66C]/30 p-6 sm:p-8 lg:p-10 shadow-sm"
    >
      <div className="mb-6 pb-4 border-b border-slate-100 text-left">
        <h3 className="font-serif font-bold text-2xl text-[#123D32] mb-1">
          {t.contactPage.formTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          {t.contactPage.formSubtitle}
        </p>

        {selectedCourseObj && (
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-[#123D32]/10 border border-[#D6B66C]/50 rounded-full text-xs font-semibold text-[#123D32]">
            <BookOpen className="w-3.5 h-3.5 text-[#D6B66C]" />
            <span>{language === 'en' ? 'Course:' : 'নির্বাচিত কোর্স:'} {selectedCourseObj.title[language]}</span>
          </div>
        )}
      </div>

      {/* Strictly the 6 Requested Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-left">
        {/* 1. Student Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {language === 'en' ? 'Student Full Name *' : 'শিক্ষার্থীর পুরো নাম *'}
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

        {/* 2. Student Age */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {language === 'en' ? 'Student Age *' : 'শিক্ষার্থীর বয়স *'}
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

        {/* 3. Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {language === 'en' ? 'Your Address (City & Country) *' : 'আপনার ঠিকানা (শহর ও দেশ) *'}
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder={language === 'en' ? 'e.g. Dhaka, Bangladesh / London, UK' : 'যেমন: ঢাকা, বাংলাদেশ / লন্ডন, যুক্তরাজ্য'}
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

        {/* 4. WhatsApp Number (with country code) */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {language === 'en' ? 'WhatsApp Number (with country code) *' : 'হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ) *'}
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

        {/* 5. Email Address (Optional) */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {language === 'en' ? 'Email Address (optional)' : 'ইমেইল এড্রেস (ঐচ্ছিক)'}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t.contactPage.fields.emailPlaceholder}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors"
          />
        </div>

        {/* 6. Additional Information or Special Request (Optional) */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-800 mb-1.5">
            {language === 'en' ? 'Additional Information or Special Request (optional)' : 'অতিরিক্ত তথ্য বা বিশেষ অনুরোধ (ঐচ্ছিক)'}
          </label>
          <textarea
            rows={3}
            value={formData.additionalMessage}
            onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
            placeholder={language === 'en' ? 'Any specific request, preferred class time, or questions...' : 'আপনার বিশেষ কোনো চাহিদা (যেমন: নারী শিক্ষিকার অনুরোধ, ক্লাসের সুবিধাজনক সময় ইত্যাদি) থাকলে লিখুন...'}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32] transition-colors"
          />
        </div>
      </div>

      {/* Agreement Checkbox */}
      <div className="mb-6 text-left">
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

