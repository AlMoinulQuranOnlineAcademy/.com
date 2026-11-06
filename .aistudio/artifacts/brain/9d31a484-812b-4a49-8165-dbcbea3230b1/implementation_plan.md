# Al Muinul Quran Online Academy — Implementation Plan

Comprehensive architectural and design plan for Al Muinul Quran Online Academy ("Learn the Quran. Illuminate Your Life."), delivering a production-grade, bilingual (English & Bengali), responsive 7-page educational platform with live Google Meet learning integration, real teacher profiles, working admission and free trial applications, and GitHub Pages deployment readiness.

---

## User Review & Critical Decisions

- **Confirmed Decision 1 (Strictly Streamlined 6 Lead Form Fields)**:
  - Form is strictly limited to only the required/desired fields:
    1. শিক্ষার্থীর পুরো নাম * (Student Full Name *)
    2. শিক্ষার্থীর বয়স * (Student Age *)
    3. আপনার ঠিকানা (শহর ও দেশ) * (Your Address *)
    4. হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ) * (WhatsApp Number with country code *)
    5. ইমেইল এড্রেস (ঐচ্ছিক) (Email Address - Optional)
    6. অতিরিক্ত তথ্য বা বিশেষ অনুরোধ (ঐচ্ছিক) (Additional Info or Special Request - Optional)
  - All extraneous fields (Gender, Class Time, Timezone, Medium of Instruction, Application Type tab buttons) have been completely removed.
- **Confirmed Decision 2 (Default Landing Page Language is Bengali)**:
  - On first visit to the website/landing page, the default language is Bengali (`bn`).
  - Users can switch to English (`en`) at any time via the language toggle.
- **Confirmed Decision 3 (Fixed Navbar Duplicate Language Switcher)**:
  - Resolved the duplicate switcher issue from screenshot `image_0e57c4af.png` where both desktop and mobile language boxes showed up simultaneously between `sm` and `lg` breakpoints.
  - Aligned desktop actions to `hidden lg:flex` and mobile actions to `lg:hidden`.
- **Confirmed Decision 4 (Email Integration & Verification)**:
  - Direct delivery of lead data to `ahmadshiblibd@gmail.com` via FormSubmit AJAX table format.
  - Success screen displays verified confirmation of dispatch to `ahmadshiblibd@gmail.com`, full submission summary, 1-click WhatsApp direct link, and an instant Mailto app backup button.
