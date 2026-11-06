# Al Muinul Quran Online Academy — Implementation Plan

Comprehensive architectural and design plan for Al Muinul Quran Online Academy ("Learn the Quran. Illuminate Your Life."), delivering a production-grade, bilingual (English & Bengali), responsive 7-page educational platform with live Google Meet learning integration, real teacher profiles, working admission and free trial applications, and GitHub Pages deployment readiness.

---

## User Review & Critical Decisions

- **Confirmed Decision 1 (Email & Lead Capture Integration)**: All lead submission forms (Student Full Name, Age, Address/Country, WhatsApp Number, Email Address, Selected Course, Preferred Time, and Special Requests) are linked directly to `ahmadshiblibd@gmail.com` via FormSubmit AJAX table format, paired with direct WhatsApp confirmation and Mailto fallbacks for zero lost leads.
- **Confirmed Decision 2 (Academy Logo / Favicon in Browser Tab)**: Added `favicon.ico`, `favicon.png`, and WebP brand logos in `index.html` head to ensure instant recognition in browser tabs and bookmarks on desktop and mobile.
- **Confirmed Decision 3 (Mobile Device Optimization & Hero Ordering)**: On mobile viewports, the live teacher image displays first (`order-1 lg:order-2`) at the top of the hero section, followed by headlines and full-width touch-friendly CTA buttons (`order-2 lg:order-1`).
- **Confirmed Decision 4 (Teacher Profiles)**: Display the 3 verified uploaded teacher photographs (Mufti Abdulla Al mamun, Maulana Shibli Moktabir, and Maulana Abu Sayed Habibi) alongside Maolana Atikul Islam and discreet female teacher faculty.
- **Confirmed Decision 5 (GitHub Pages & AI Studio Compatibility)**: Dual-mode SPA routing supporting clean `/en/` and `/bn/` paths with 404 query decoder, lazy-loaded chunks, and WebP compression.

---

## 1. Overview & Core Concept

- **What It Does**: A complete, trustworthy, and elegant online academy web application allowing parents, children, and adult learners to explore 6 certified Quranic courses, meet qualified male and female teachers, request 1–2 free trial classes, apply for admission, and connect instantly via email and WhatsApp.
- **Target Audience / Persona**: Local Bengali-speaking families and international Muslims (USA, UK, Canada, Middle East, Europe) seeking authentic, one-to-one Quranic education through Google Meet with male or female instructors.
- **Key Value**: Direct, transparent, and respectful Islamic education without aggressive marketing or fabricated claims, combining luxury Islamic aesthetics with fast, intuitive user workflows.

---

## 2. Completed Milestones

- [x] **Lead Form Direct Email Delivery (`ahmadshiblibd@gmail.com`)**:
  - Wired form submissions directly to `https://formsubmit.co/ajax/ahmadshiblibd@gmail.com`.
  - Structured fields: শিক্ষার্থীর পুরো নাম, শিক্ষার্থীর বয়স, আপনার ঠিকানা (শহর ও দেশ), হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ), ইমেইল এড্রেস, নির্বাচিত কোর্স, ক্লাসের সময়, টাইমজোন, এবং অতিরিক্ত তথ্য বা বিশেষ অনুরোধ।
  - Rendered explicit confirmation showing delivery to `ahmadshiblibd@gmail.com` with summary card, direct WhatsApp button, and direct mailto button.
  - Linked general contact inquiry form to `ahmadshiblibd@gmail.com`.
- [x] **Academy Brand Logo & Favicon**:
  - Generated and installed `public/favicon.ico` and `public/favicon.png`.
  - Linked in `index.html` for browser tabs, mobile homescreen shortcuts, and social share metadata.
- [x] **Mobile-Friendly Hero Section**:
  - Configured `order-1 lg:order-2` so the teacher photo appears at the very top on smartphones.
  - Formatted responsive action buttons (`flex-col sm:flex-row items-stretch sm:items-center`).
- [x] **Performance & Load Time Optimization**:
  - Re-encoded high-res images to WebP (hero image reduced from 1.9MB to 100KB, teachers to 25KB).
  - Code-splitting with `React.lazy` (Home chunk reduced to 38KB).
  - Production build compiles cleanly in under 600ms.
