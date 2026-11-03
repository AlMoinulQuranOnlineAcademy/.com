/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ACADEMY_INFO, FAQ_DATA } from '../data/academyData';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { SubpageCtaBanner } from '../components/SubpageCtaBanner';
import { FAQAccordion } from '../components/FAQAccordion';
import { getAssetUrl } from '../utils/assetUrl';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  BookOpen,
  Headphones,
  Info,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { language, navigateTo, t } = useLanguage();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: 'Course Information',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phoneNumber) {
      alert(
        language === 'en'
          ? 'Please enter your name and phone number.'
          : 'দয়া করে আপনার নাম ও ফোন নম্বর লিখুন।'
      );
      return;
    }

    setIsSubmitting(true);

    // Save locally
    try {
      const logs = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      logs.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem('contact_messages', JSON.stringify(logs));
    } catch (e) {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 500);
  };

  const getWhatsAppMsgUrl = () => {
    const text =
      language === 'en'
        ? `*Message from Website Contact Form:*\n` +
          `• Name: ${form.fullName}\n` +
          `• Phone: ${form.phoneNumber}\n` +
          `• Email: ${form.email || 'N/A'}\n` +
          `• Subject: ${form.subject}\n` +
          `• Message: ${form.message}`
        : `*ওয়েবসাইট থেকে নতুন বার্তা:*\n` +
          `• নাম: ${form.fullName}\n` +
          `• ফোন: ${form.phoneNumber}\n` +
          `• ইমেইল: ${form.email || 'N/A'}\n` +
          `• বিষয়: ${form.subject}\n` +
          `• বার্তা: ${form.message}`;
    return `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-12 lg:space-y-16 pb-12">
      {/* 1. Page Hero Header */}
      <PageHeroHeader
        pageName={{
          en: 'Contact Us',
          bn: 'যোগাযোগ',
        }}
        kicker={{
          en: 'Get in Touch',
          bn: 'যোগাযোগ করুন',
        }}
        title={{
          en: 'Contact Us',
          bn: 'আমাদের সাথে যোগাযোগ',
        }}
        description={{
          en: 'We’re here to help! Whether you have questions about our courses, need support, or want to start your Quran learning journey — feel free to reach out to us anytime.',
          bn: 'কোর্স সম্পর্কে বিস্তারিত জানতে, যেকোনো সহায়তায় অথবা আপনার সন্তান বা নিজের কুরআন শিক্ষার বরকতময় যাত্রা শুরু করতে নির্দ্বিধায় যোগাযোগ করুন।',
        }}
        heroImage="assets/images/contact_hero_img_1793379305698.jpg"
        heroImageAlt={{
          en: 'Academy welcoming reception and consultation desk with Quran',
          bn: 'একাডেমির পরামর্শ ডেস্ক ও সহৃদয় অভ্যর্থনা',
        }}
        badges={[
          {
            icon: <Clock className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Quick Response (Fast reply)',
              bn: 'দ্রুত জবাব ও সার্বক্ষণিক সহায়তা',
            },
          },
          {
            icon: <MessageSquare className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Friendly Support',
              bn: 'আন্তরিক অভিভাবক সেবা',
            },
          },
          {
            icon: <ShieldCheck className="w-4 h-4 text-[#D6B66C]" />,
            label: {
              en: 'Your Success Matters',
              bn: 'শিক্ষার্থীর অগ্রগতিই আমাদের লক্ষ্য',
            },
          },
        ]}
        quote={{
          arabic: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ',
          translation: {
            en: '“And cooperate in righteousness and piety.”',
            bn: '“তোমরা নেক কাজ ও তাকওয়ার ক্ষেত্রে একে অপরকে সহযোগিতা করো।”',
          },
          source: {
            en: '— Surah Al-Ma’idah (5:2)',
            bn: '— সূরা আল-মায়িদাহ (৫:২)',
          },
        }}
      />

      {/* 2. Contact Information: Reach Us Directly (4 Boxes) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-5 h-0.5 bg-[#D6B66C]" />
            <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
              {language === 'en' ? 'Contact Information' : 'যোগাযোগের মাধ্যম'}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
            {language === 'en' ? 'Reach Us Directly' : 'সরাসরি যোগাযোগ করুন'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {language === 'en'
              ? 'You can contact us through any of the following channels. We are always happy to assist you.'
              : 'যেকোনো মাধ্যমে আপনি আমাদের সাথে কথা বলতে পারেন। আমরা সবসময় সহায়তা করতে প্রস্তুত।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left hover:border-[#25D366] transition-colors shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base mb-1">WhatsApp</h3>
            <p className="font-mono text-sm font-bold text-slate-800 mb-1">{ACADEMY_INFO.phone}</p>
            <p className="text-xs text-slate-500 mb-3">
              {language === 'en' ? 'Chat with us directly' : 'সরাসরি চ্যাট করুন'}
            </p>
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>{language === 'en' ? 'Open WhatsApp' : 'হোয়াটসঅ্যাপে মেসেজ'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left hover:border-[#123D32] transition-colors shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#123D32]/10 text-[#123D32] flex items-center justify-center mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base mb-1">Email</h3>
            <p className="text-xs font-bold text-slate-800 break-all mb-1">{ACADEMY_INFO.email}</p>
            <p className="text-xs text-slate-500 mb-3">
              {language === 'en' ? 'Send us an email' : 'ইমেইল পাঠাতে ক্লিক করুন'}
            </p>
            <a
              href={`mailto:${ACADEMY_INFO.email}`}
              className="text-xs font-semibold text-[#123D32] hover:underline flex items-center gap-1"
            >
              <span>{language === 'en' ? 'Compose Mail' : 'ইমেইল লিখুন'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left hover:border-[#123D32] transition-colors shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#123D32]/10 text-[#123D32] flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base mb-1">
              {language === 'en' ? 'Our Location' : 'আমাদের অবস্থান'}
            </h3>
            <p className="text-sm font-bold text-slate-800 mb-1">Bangladesh</p>
            <p className="text-xs text-slate-500">
              {language === 'en' ? '(Online Based Academy)' : '(অনলাইন ভিত্তিক একাডেমি)'}
            </p>
          </div>

          {/* Facebook */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left hover:border-blue-500 transition-colors shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <ExternalLink className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base mb-1">Facebook Page</h3>
            <p className="text-sm font-bold text-slate-800 mb-1">Al Muinul Quran</p>
            <p className="text-xs text-slate-500 mb-3">
              {language === 'en' ? 'Follow us for updates' : 'পেজে নিয়মিত আপডেট দেখুন'}
            </p>
            <a
              href={ACADEMY_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1"
            >
              <span>{language === 'en' ? 'Visit Page' : 'পেজ ভিজিট করুন'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Send Us a Message: Form (Left) + Green Information Plaque (Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs text-left">
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider block mb-1">
                {language === 'en' ? 'Send Us a Message' : 'বার্তা পাঠান'}
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#123D32]">
                {language === 'en' ? 'We’d Love to Hear from You' : 'আপনার মতামত বা জিজ্ঞাসা লিখুন'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'en'
                  ? 'Fill out the form below and we’ll get back to you as soon as possible.'
                  : 'নিচের ফর্মটি পূরণ করুন। আমাদের একাডেমি প্রতিনিধি দ্রুত উত্তর প্রদান করবেন।'}
              </p>
            </div>

            {isSent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-xl text-[#123D32]">
                  {language === 'en'
                    ? 'Thank You! Message Received'
                    : 'ধন্যবাদ! আপনার বার্তা গৃহীত হয়েছে'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {language === 'en'
                    ? 'Our team will review your message and reply via WhatsApp or Email promptly.'
                    : 'আমাদের একাডেমি প্রতিনিধি দ্রুতই হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ করবেন।'}
                </p>
                <a
                  href={getWhatsAppMsgUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white font-semibold text-xs rounded-lg shadow-sm"
                >
                  <span>{language === 'en' ? 'Send on WhatsApp Too' : 'হোয়াটসঅ্যাপেও পাঠান'}</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      {language === 'en' ? 'Full Name *' : 'পুরো নাম *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder={language === 'en' ? 'Enter your full name' : 'আপনার নাম লিখুন'}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      {language === 'en' ? 'Email Address' : 'ইমেইল এড্রেস'}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={language === 'en' ? 'Enter your email address' : 'আপনার ইমেইল ঠিকানা'}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      {language === 'en' ? 'Phone / WhatsApp Number *' : 'ফোন / হোয়াটসঅ্যাপ নম্বর *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phoneNumber}
                      onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      {language === 'en' ? 'Subject' : 'বিষয়'}
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32]"
                    >
                      <option value="Course Information">
                        {language === 'en' ? 'Course Information' : 'কোর্স সম্পর্কে তথ্য'}
                      </option>
                      <option value="Technical Support">
                        {language === 'en' ? 'Technical Support' : 'টেকনিক্যাল সহায়তা'}
                      </option>
                      <option value="General Inquiry">
                        {language === 'en' ? 'General Inquiry' : 'সাধারণ জিজ্ঞাসা'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    {language === 'en' ? 'Message *' : 'আপনার বার্তা *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={
                      language === 'en'
                        ? 'Write your message here...'
                        : 'আপনার বার্তা বা প্রশ্ন লিখুন...'
                    }
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123D32]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#123D32] hover:bg-[#0c2a22] text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 border border-[#D6B66C]/40"
                >
                  <Send className="w-4 h-4 text-[#D6B66C]" />
                  <span>
                    {isSubmitting
                      ? language === 'en'
                        ? 'Sending...'
                        : 'পাঠানো হচ্ছে...'
                      : language === 'en'
                      ? 'Send Message'
                      : 'বার্তা পাঠান'}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Arched Green Information Plaque (5 cols) */}
          <div className="lg:col-span-5 bg-[#123D32] text-white rounded-3xl p-6 sm:p-8 border border-[#D6B66C]/40 flex flex-col justify-between text-left shadow-xs">
            <div className="space-y-4">
              <div>
                <h3 className="font-serif font-bold text-2xl text-white">
                  {language === 'en'
                    ? 'Let’s Build a Better Future Together'
                    : 'কুরআনের আলোয় আলোকিত হোক ভবিষ্যৎ'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {language === 'en'
                    ? 'Your trust means a lot to us. Feel free to reach out for any query or assistance.'
                    : 'আপনার আস্থা আমাদের অনুপ্রেরণা। যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।'}
                </p>
              </div>

              {/* Photo */}
              <div className="rounded-2xl overflow-hidden border border-[#D6B66C]/30 shadow-md">
                <img
                  src={getAssetUrl('assets/images/quran_hero_visual_1793371432823.jpg')}
                  alt="Quran and laptop educational setup"
                  className="w-full h-44 object-cover"
                />
              </div>

              {/* 3 Helper Rows */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-[#D6B66C] flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-white">
                      {language === 'en' ? 'Course Information' : 'কোর্স পরিচিতি'}
                    </h5>
                    <p className="text-[11px] text-slate-300">
                      {language === 'en' ? 'Get details about our courses' : 'কোর্সের বিস্তারিত তথ্য'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-[#D6B66C] flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-white">
                      {language === 'en' ? 'Technical Support' : 'কারিগরি সহায়তা'}
                    </h5>
                    <p className="text-[11px] text-slate-300">
                      {language === 'en'
                        ? 'Help with Google Meet or class setup'
                        : 'গুগল মিট বা ক্লাস সংক্রান্ত সাহায্য'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-[#D6B66C] flex items-center justify-center shrink-0">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-white">
                      {language === 'en' ? 'General Inquiry' : 'সাধারণ জিজ্ঞাসা'}
                    </h5>
                    <p className="text-[11px] text-slate-300">
                      {language === 'en'
                        ? 'Other questions or helpful feedback'
                        : 'যেকোনো মতামত ও প্রশ্নোত্তর'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-300">
              <span className="text-[#D6B66C]">WhatsApp:</span> {ACADEMY_INFO.phone}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Location Section with Map Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D6B66C]" />
              <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
                {language === 'en' ? 'Our Location' : 'আমাদের অবস্থান'}
              </span>
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#123D32]">
              Bangladesh (Online Based Academy)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'We are an online-based academy, serving students from all over the world through Google Meet.'
                : 'আমরা একটি অনলাইন ভিত্তিক একাডেমি, বিশ্বের যেকোনো প্রান্ত থেকে শিক্ষার্থীরা সরাসরি আমাদের ক্লাসে যুক্ত হতে পারেন।'}
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#123D32] hover:bg-[#0c2a22] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>{language === 'en' ? 'View on Google Maps' : 'গুগল ম্যাপে দেখুন'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D6B66C]" />
          </a>
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-5 h-0.5 bg-[#D6B66C]" />
            <span className="text-xs font-semibold text-[#D6B66C] uppercase tracking-wider">
              {language === 'en' ? 'Quick Answers' : 'সাধারণ জিজ্ঞাসা'}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123D32]">
            {language === 'en' ? 'Frequently Asked Questions' : 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী'}
          </h2>
        </div>

        <FAQAccordion items={FAQ_DATA.slice(0, 5)} defaultOpenIndex={0} />

        <div className="text-center mt-6">
          <button
            onClick={() => navigateTo('admission')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#123D32] hover:underline cursor-pointer"
          >
            <span>{t.common.viewAllFaqs}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D6B66C]" />
          </button>
        </div>
      </section>

      {/* Bottom Subpage CTA Banner */}
      <SubpageCtaBanner buttonType="admission" />
    </div>
  );
};
