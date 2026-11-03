# Al Muinul Quran Online Academy — Implementation Plan

Comprehensive architectural and design plan for Al Muinul Quran Online Academy ("Learn the Quran. Illuminate Your Life."), delivering a production-grade, bilingual (English & Bengali), responsive 7-page educational platform with live Google Meet learning integration, real teacher profiles, working admission and free trial applications, and GitHub Pages deployment readiness.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following recommended architectural standards will be implemented based on the project requirements:

- **Confirmed Decision 1 (Application Backend)**: Dual-layer application handling. The Contact and Admission forms submit data directly via an asynchronous webhook (Google Apps Script / Google Sheets ready, with a live operational fallback to WhatsApp pre-filled chat and local application confirmation), ensuring zero lost leads and zero simulated fake alerts.
- **Confirmed Decision 2 (Teacher Profiles)**: Display the 5 real uploaded teacher photographs and confirmed titles (Mufti Shibli Moktadir, Kari Shibli Sadek, Maolana Atikul Islam, Rakibul Islam, and Ahmad Shibli) alongside dignified Islamic silhouette avatars for female teachers as specified in the provided UI design reference.
- **Confirmed Decision 3 (GitHub Pages & AI Studio Compatibility)**: Implement dual-mode SPA routing that supports clean `/en/` and `/bn/` paths while seamlessly including a `404.html` fallback script and relative base path configuration for GitHub Pages deployment.

---

## 1. Overview & Core Concept

- **What It Does**: A complete, trustworthy, and elegant online academy web application allowing parents, children, and adult learners to explore 6 certified Quranic courses, meet qualified male and female teachers, request 1–2 free trial classes, apply for admission, and connect instantly via WhatsApp or email.
- **Target Audience / Persona**: Local Bengali-speaking families and international Muslims (USA, UK, Canada, Middle East, Europe) seeking authentic, one-to-one Quranic education through Google Meet with male or female instructors.
- **Key Value**: Direct, transparent, and respectful Islamic education without aggressive marketing or fabricated claims, combining luxury Islamic aesthetics with fast, intuitive user workflows.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Course Discovery**: Home → Six Specialized Courses grid → Course Detail modal/section → "Enroll in Course" or "Start Free Trial".
2. **Teacher Transparency**: Navigation → "Our Teachers" → Filter/View male and female faculty, verified credentials (Mufti, Qari, Maulana, Tajweed Expert) → "Learn with this Teacher".
3. **Free Trial Request**: Floating CTA or Hero button → "Free Trial Class" (4 simple steps highlighted) → 1–2 Free Trial application with course, age, language, and time preferences.
4. **Admission & FAQ**: "Admission" page → Step-by-step guidance → Admission FAQ accordion → Direct Admission application form.
5. **Direct Inquiry & WhatsApp**: Instant access via the floating WhatsApp launcher (+880 1626-278303) and the comprehensive Contact Us form.

### Visual Identity & Theme

- **Aesthetic Direction**: Premium Islamic Heritage combined with modern international educational architecture. Elegant, calm, trustworthy, and uncluttered.
- **Color Palette & Distribution (60-30-10 Rule)**:
  - `60% Neutral Canvas`: Soft off-white and cream gray (`#F3F5F2` / `#FFFFFF`) creating an airy, peaceful background.
  - `30% Structural Surfaces`: Deep Islamic Green (`#123D32`) for headers, primary cards, hero backgrounds, and footers, framed with subtle hairline borders.
  - `10% Accent Gold`: Elegant Warm Gold (`#D6B66C`) used strictly for CTA buttons, Islamic geometric accents, and highlights.
- **Typography & Hierarchy**:
  - *Display Headings*: `Playfair Display` (English) and `Hind Siliguri` (Bengali) for refined academic presence.
  - *Body Prose*: `Inter` (English) and `Hind Siliguri` (Bengali) with balanced line heights.
  - *Sacred Text*: `Amiri` with proper Arabic diacritics for Quranic verses and Hadith citations.
- **Component Styling & Layout**:
  - Zero-pill discipline: Unboxed metadata tags separated by `·` or `/`.
  - Clean hairline borders (`border border-[#D6B66C]/20`) over thick drop-shadows.
  - High-fidelity visual anchors utilizing the authentic academy logo and provided reference assets.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Exact 7-Page Routing Structure**
  - *Chosen Approach*: Strictly implement `/en/` and `/bn/` with pages: `Home`, `About Us`, `Our Courses`, `Our Teachers`, `Free Trial Class`, `Admission`, and `Contact Us`.
  - *Why*: Perfectly satisfies the master prompt requirement, with FAQ placed neatly inside Admission and legal notices in the footer.
  - *Alternatives Considered*: Multi-page routing with separate FAQ was rejected as prohibited by rule 2.
- **Decision 2: Multilingual Architecture (i18n)**
  - *Chosen Approach*: Deep JSON dictionary with seamless context provider (`LanguageContext`), preserving active routes when switching between English (`/en/...`) and Bengali (`/bn/...`).
  - *Why*: Instant switching with zero page reloads, ensuring full translation of courses, FAQs, form labels, and validations.
- **Decision 3: Backend Form Submissions**
  - *Chosen Approach*: Configurable webhook dispatch endpoint (supporting Google Apps Script / Sheets or custom endpoint) paired with instant WhatsApp message generation and client-side confirmation feedback.
  - *Why*: Guarantees reliable operation on GitHub Pages static hosting while allowing the academy owner to receive applications instantly on both Google Sheets and WhatsApp.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Al Muinul Quran Web App                         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
          ┌─────────────────────────┼─────────────────────────┐
          ▼                         ▼                         ▼
   ┌──────────────┐         ┌──────────────┐          ┌──────────────┐
   │ React Router │         │ Language ctx │          │ SEO & Meta   │
   │  (/en, /bn)  │         │  (EN / BN)   │          │ (JSON-LD)    │
   └──────┬───────┘         └──────┬───────┘          └──────┬───────┘
          │                        │                         │
          ▼                        ▼                         ▼
   ┌─────────────────────────────────────────────────────────────────┐
   │ 7 Core Pages:                                                   │
   │ 1. Home (Hero, 6 Courses, About preview, Teachers, Trial, FAQ)   │
   │ 2. About Us (Mission, Vision, One-to-one methodology, Values)   │
   │ 3. Our Courses (6 approved courses with curriculum details)     │
   │ 4. Our Teachers (5 Male Teachers + Female Teachers section)      │
   │ 5. Free Trial Class (Eligibility, 4 steps, dedicated form link) │
   │ 6. Admission / Enrollment (Requirements, Process & Full FAQ)    │
   │ 7. Contact Us (Real Working Application & Contact Form)         │
   └───────────────────────────────┬─────────────────────────────────┘
                                   │
          ┌────────────────────────┴────────────────────────┐
          ▼                                                 ▼
   ┌──────────────┐                                  ┌──────────────┐
   │ Google Apps  │                                  │   WhatsApp   │
   │ Script /     │                                  │ Direct Link  │
   │ Sheets API   │                                  │ (+8801626...)│
   └──────────────┘                                  └──────────────┘
```

### Data Models & Assets

1. **Course Data (Exact 6 Courses)**:
   - Noorani Qaida (নূরানী কায়দা)
   - Quran Reading (কুরআন রিডিং)
   - Quran with Tajweed (কুরআন তাজবিদসহ)
   - Basic Islamic Studies (বেসিক ইসলামিক স্টাডিজ)
   - Daily Dua & Salah (দৈনন্দিন দোয়া ও নামাজ শিক্ষা)
   - Arabic Language (আরবি ভাষা)
2. **Teacher Data (Verified Faculty)**:
   - Mufti Shibli Moktadir (Islamic Studies & Fiqh Expert)
   - Kari Shibli Sadek (Qari & Tajweed Specialist)
   - Maolana Atikul Islam (Quran & Arabic Scholar)
   - Rakibul Islam (Quran Reading & Tajweed Instructor)
   - Ahmad Shibli (Academy Administration & Student Advisor)
   - Female Faculty Section (Qualified Alimah, Hafiza & Tajweed teachers with discreet presentation)
3. **Contact & Application Form Fields**:
   - Student Name, Age, Country, Gender, Selected Course, Preferred Language (Bangla / English), Preferred Class Time, Timezone, WhatsApp Number, Application Type (Free Trial / Regular Admission / General Inquiry), Additional Message.
