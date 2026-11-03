/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SEOHead } from './components/SEOHead';
import { LegalModal } from './components/LegalModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { TeachersPage } from './pages/TeachersPage';
import { FreeTrialPage } from './pages/FreeTrialPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentRoute } = useLanguage();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage />;
      case 'teachers':
        return <TeachersPage />;
      case 'free-trial':
        return <FreeTrialPage />;
      case 'admission':
        return <AdmissionPage />;
      case 'contact':
        return <ContactPage />;
      case '':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F5F2] text-[#171717] selection:bg-[#D6B66C]/30 selection:text-[#123D32]">
      <SEOHead />
      <Navbar />
      <main className="grow animate-in fade-in duration-150">
        {renderCurrentPage()}
      </main>
      <Footer />
      <WhatsAppButton />
      <LegalModal />
    </div>
  );
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F3F5F2] flex items-center justify-center p-6 text-center">
          <div className="bg-white rounded-3xl p-8 max-w-md shadow-xl border border-[#D6B66C]/40 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#123D32] text-[#D6B66C] flex items-center justify-center text-2xl mx-auto font-serif">
              ﷽
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#123D32]">
              Al Muinul Quran Academy
            </h2>
            <p className="text-sm text-slate-600">
              পৃষ্ঠাটি লোড করতে সাময়িক সমস্যা হয়েছে। দয়া করে পুনরায় রিফ্রেশ করুন।
            </p>
            <p className="text-xs text-slate-500">
              An unexpected error occurred while loading this view.
            </p>
            <button
              onClick={() => {
                window.location.href = window.location.pathname;
              }}
              className="w-full py-2.5 px-4 bg-[#123D32] hover:bg-[#0c2a22] text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
            >
              পুনরায় চেষ্টা করুন (Reload)
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
}
