/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, Teacher, FAQItem } from '../types';

export const ACADEMY_INFO = {
  name: {
    en: 'Al Muinul Quran Online Academy',
    bn: 'আল মুঈনুল কুরআন অনলাইন একাডেমি',
    ar: 'المعين القرآن الأكاديمية الإلكترونية',
  },
  tagline: {
    en: 'Learn the Quran. Illuminate Your Life.',
    bn: 'কুরআন শিখুন, জীবনকে আলোকিত করুন।',
  },
  phone: '+880 1626-278303',
  whatsappRaw: '8801626278303',
  whatsappUrl: 'https://wa.me/8801626278303',
  email: 'almuinulquranacademy@gmail.com',
  facebook: 'https://www.facebook.com/AlMoinulQuran?mibextid=ZbWKwL',
  location: {
    en: 'Bangladesh (Serving Online Globally)',
    bn: 'বাংলাদেশ (বিশ্বজুড়ে অনলাইনে পাঠদান)',
  },
  platform: 'Google Meet',
  classType: {
    en: '1-to-1 Live Interactive Classes',
    bn: 'ওয়ান-টু-ওয়ান লাইভ ইন্টারেক্টিভ ক্লাস',
  },
  logo: '/assets/aistudio/logo_8fc48c97.webp',
};

export const COURSES_DATA: Course[] = [
  {
    id: 'noorani-qaida',
    slug: 'noorani-qaida',
    title: {
      en: 'Noorani Qaida',
      bn: 'নূরানী কায়দা',
    },
    subtitle: {
      en: 'Foundational Arabic letters & accurate pronunciation for beginners',
      bn: 'শুদ্ধ উচ্চারণে আরবি হরফ ও কুরআন শিক্ষার মৌলিক ভিত্তি',
    },
    description: {
      en: 'The essential foundational course for beginners of any age. Students learn Arabic alphabet recognition, accurate Makhraj (articulation points), Harakat, Tanween, Sukoon, and basic reading rules systematically.',
      bn: 'যেকোনো বয়সের নতুন শিক্ষার্থীদের জন্য কুরআন শিক্ষার মূল ভিত্তি। আরবি হরফ চেনা, বিশুদ্ধ মাখরাজ, হরকত, তানভীন, জজম ও পড়ার নিয়ম হাতে-কলমে শেখানো হয়।',
    },
    objectives: {
      en: [
        'Recognize individual and compound Arabic letters',
        'Master the 17 Makharij for authentic articulation',
        'Learn short and long vowels (Harakat, Maddah)',
        'Read combined words and sentences with confidence',
      ],
      bn: [
        'আরবি একক ও যুক্ত হরফ শুদ্ধভাবে চেনা ও উচ্চারণ করা',
        'বিশুদ্ধ উচ্চারণের জন্য ১৭টি মাখরাজ নির্ভুলভাবে আয়ত্ত করা',
        'হরকত, তানভীন, জজম ও মাদ্দের নিয়মসমূহ অনুশীলন করা',
        'সহজ আরবি শব্দ ও ছোট বাক্য নির্ভুলভাবে পড়তে পারা',
      ],
    },
    targetAudience: {
      en: 'Kids from age 5+ and adult beginners starting from scratch',
      bn: '৫ বছর বা তদূর্ধ্ব শিশু এবং যেকোনো বয়সের নতুন শিক্ষার্থী',
    },
    iconName: 'BookOpen',
    color: '#123D32',
    durationNote: {
      en: 'Flexible pace based on student individual absorption',
      bn: 'শিক্ষার্থীর নিজস্ব গতি ও সামর্থ্যের ভিত্তিতে নির্ধারিত',
    },
  },
  {
    id: 'quran-reading',
    slug: 'quran-reading',
    title: {
      en: 'Quran Reading (Nazira)',
      bn: 'কুরআন রিডিং (নাজেরা)',
    },
    subtitle: {
      en: 'Fluent and continuous recitation of the Holy Quran',
      bn: 'পবিত্র কুরআন দেখে দেখে শুদ্ধ ও সাবলীল তিলাওয়াত',
    },
    description: {
      en: 'Structured for learners who have completed basic alphabet training and want to develop smooth, confident, and correct recitation across all 30 Juz of the Holy Quran.',
      bn: 'যারা হরফ পড়তে পারেন কিন্তু কুরআনের আয়াত সাবলীলভাবে পড়তে জড়তা রয়েছে, তাদের জন্য পূর্ণ ৩০ পারা বিশুদ্ধ তিলাওয়াত অনুশীলন।',
    },
    objectives: {
      en: [
        'Attain fluent and hesitation-free recitation',
        'Recognize stopping marks (Waqf) and verse connectors',
        'Build speed, rhythm, and confidence verse by verse',
        'Complete reading selected Surahs and Surah Al-Baqarah',
      ],
      bn: [
        'অস্পষ্টতা ও জড়তা দূর করে সাবলীলভাবে কুরআন তিলাওয়াত করা',
        'থামা ও শ্বাস নেওয়ার নিয়ম (ওয়াক্ফ) যথাযথভাবে অনুসরণ করা',
        'পর্যায়ক্রমে তিলাওয়াতের গতি ও সৌন্দর্য বৃদ্ধি করা',
        'গুরুত্বপূর্ণ সূরাসমূহ ও পর্যায়ক্রমে পূর্ণ কুরআন খতম করা',
      ],
    },
    targetAudience: {
      en: 'Children & adults who know basic letters but need continuous reading practice',
      bn: 'মৌলিক হরফ জানা শিশু ও বয়স্ক শিক্ষার্থী যারা রিডিং শিখতে চান',
    },
    iconName: 'BookMarked',
    color: '#123D32',
    durationNote: {
      en: 'Personalized based on weekly classes and practice',
      bn: 'সাপ্তাহিক ক্লাসের সংখ্যা ও নিয়মিত অনুশীলনের ওপর নির্ভরশীল',
    },
  },
  {
    id: 'quran-with-tajweed',
    slug: 'quran-with-tajweed',
    title: {
      en: 'Quran with Tajweed',
      bn: 'কুরআন তাজবিদসহ',
    },
    subtitle: {
      en: 'Master Tajweed rules for melodious and error-free recitation',
      bn: 'তাজবিদের নিয়মাবলী সহকারে সুরেলা ও নির্ভুল কুরআন তিলাওয়াত',
    },
    description: {
      en: 'In-depth study and practical application of Tajweed rules, including Noon Sakinah, Meem Sakinah, Ghunnah, Qalqalah, Ahkam Al-Madd, and heavy/light letter characteristics.',
      bn: 'নূন সাকিন, মীম সাকিন, গুন্নাহ, ক্বলক্বলাহ, মাদ্দ ও হরফের সিফাত সহ পূর্ণাঙ্গ তাজবিদের নিয়মানুযায়ী তিলাওয়াতের বিশেষ প্রশিক্ষণ।',
    },
    objectives: {
      en: [
        'Deep theoretical and practical knowledge of Tajweed rules',
        'Recite with beautiful Islamic melody (Tartil)',
        'Identify and eliminate hidden pronunciation errors (Lahn Khafi)',
        'Correct application of Tafkheem (heavy) and Tarqeeq (light)',
      ],
      bn: [
        'তাজবিদের প্রতিটি নিয়ম হাতে-কলমে ও আয়াতের প্রয়োগে শেখা',
        'তারতিলের সাথে হৃদয়গ্রাহী ও বিশুদ্ধ তিলাওয়াত করা',
        'তিলাওয়াতের সূক্ষ্ম ভুলত্রুটি (লাহনে খাফী) বর্জন করা',
        'হরফ মোটা ও পাতলা করার নিয়ম সঠিকভাবে প্রয়োগ করা',
      ],
    },
    targetAudience: {
      en: 'Learners wishing to beautify and elevate their Quranic recitation',
      bn: 'যাঁরা তিলাওয়াতকে আরও বিশুদ্ধ ও শ্রুতিমধুর করতে আগ্রহী',
    },
    iconName: 'Sparkles',
    color: '#123D32',
    durationNote: {
      en: 'Comprehensive progressive syllabus',
      bn: 'ধারাবাহিক সিলেবাস ভিত্তিক পাঠদান',
    },
  },
  {
    id: 'basic-islamic-studies',
    slug: 'basic-islamic-studies',
    title: {
      en: 'Basic Islamic Studies',
      bn: 'বেসিক ইসলামিক স্টাডিজ',
    },
    subtitle: {
      en: 'Core Islamic faith, Aqeedah, Seerah & Islamic etiquette',
      bn: 'ঈমান, আকিদা, সীরাত, আদব ও ইসলামের মৌলিক শিক্ষা',
    },
    description: {
      en: 'Nurture your heart with authentic knowledge of Islamic pillars, foundational Aqeedah, the noble character of Prophet Muhammad (PBUH), daily Islamic manners, and moral values.',
      bn: 'ইসলামের পঞ্চস্তম্ভ, বিশুদ্ধ আকিদা, রাসুলুল্লাহ (সা.)-এর জীবনচরিত, ইসলামিক আদব-আখলাক ও জীবনযাপনের জরুরি বিধিবিধানের পাঠ।',
    },
    objectives: {
      en: [
        'Understand the 5 Pillars of Islam and 6 Pillars of Iman',
        'Learn inspiring stories of Prophets and Companions',
        'Develop noble Islamic character (Akhlaq) and honesty',
        'Understand Halal and Haram principles for everyday modern life',
      ],
      bn: [
        'ইসলাম ও ঈমানের মৌলিক স্তম্ভসমূহ বিশুদ্ধভাবে জানা',
        'নবী-রাসূল ও সাহাবায়ে কেরামের জীবনী থেকে শিক্ষা গ্রহণ',
        'সুন্দর আচরণ, পিতা-মাতার প্রতি দায়িত্ব ও নৈতিক গুণাবলী অর্জন',
        'দৈনন্দিন জীবনে হালাল-হারাম ও করণীয় সম্পর্কে ধারণা লাভ',
      ],
    },
    targetAudience: {
      en: 'Children, teenagers, and adult Muslims seeking solid foundations',
      bn: 'শিশু, কিশোর ও যেকোনো প্রাপ্তবয়স্ক মুসলিম শিক্ষার্থী',
    },
    iconName: 'Compass',
    color: '#123D32',
    durationNote: {
      en: 'Modular lessons adapted to the learner age group',
      bn: 'শিক্ষার্থীর বয়সের উপযোগী সুবিন্যস্ত মডিউল',
    },
  },
  {
    id: 'daily-dua-salah',
    slug: 'daily-dua-salah',
    title: {
      en: 'Daily Dua & Salah',
      bn: 'দৈনন্দিন দোয়া ও নামাজ শিক্ষা',
    },
    subtitle: {
      en: 'Learn step-by-step Salah, Wudu, and essential Masnoon Duas',
      bn: 'সহীহ তরিকায় নামাজ, ওযু ও দৈনন্দিন জীবনের মাসনূন দোয়া শিক্ষা',
    },
    description: {
      en: 'Practical, step-by-step guidance on performing Wudu, five daily prayers according to Sunnah, essential Surahs for prayer, Janazah, Eid prayers, and authenticated daily morning/evening supplications.',
      bn: 'সুন্নাহ অনুযায়ী ওযু ও পাঁচ ওয়াক্ত নামাজের বাস্তব প্রশিক্ষণ, নামাজের ছোট সূরা, তাশাহহুদ, দরূদ, দোয়া কুনূত ও প্রাত্যহিক জীবনের দোয়া শিক্ষা।',
    },
    objectives: {
      en: [
        'Perfect your Wudu and Salah posture and movements',
        'Memorize essential prayer Surahs with proper articulation',
        'Learn daily Sunnah Duas (waking up, sleeping, eating, travelling)',
        'Understand the spiritual meanings and tranquility in prayer',
      ],
      bn: [
        'সুন্নাহ অনুযায়ী ওযু ও নামাজের প্রতিটি রুকন বিশুদ্ধভাবে আদায়',
        'নামাজের সূরা, তাশাহহুদ, দরূদ ও গুরুত্বপূর্ণ দোয়া মুখস্থ করা',
        'সকাল-সন্ধ্যার প্রাত্যহিক মাসনূন দোয়াসমূহ বিশুদ্ধ উচ্চারণে শেখা',
        'নামাজের অর্থ ও অন্তরের একাগ্রতা (খুশু-খুজু) অর্জনের চেষ্টা',
      ],
    },
    targetAudience: {
      en: 'Children learning to pray and adults looking to rectify their Salah',
      bn: 'নতুন নামাজী শিশু-কিশোর এবং বড়দের নামাজ শুদ্ধিকরণ',
    },
    iconName: 'HeartHandshake',
    color: '#123D32',
    durationNote: {
      en: 'Practical, step-by-step coaching',
      bn: 'হাতে-কলমে বাস্তবসম্মত প্রশিক্ষণ',
    },
  },
  {
    id: 'arabic-language',
    slug: 'arabic-language',
    title: {
      en: 'Arabic Language',
      bn: 'আরবি ভাষা শিক্ষা',
    },
    subtitle: {
      en: 'Understand Quranic Arabic words, vocabulary & conversational basics',
      bn: 'কুরআনের ভাষা অনুধাবন ও প্রাথমিক কথোপকথন শিক্ষা',
    },
    description: {
      en: 'Connect directly with the language of Revelation. Learn high-frequency Quranic vocabulary, essential Arabic grammar (Nahw & Sarf simplified), and foundational dialogue skills.',
      bn: 'কুরআন বোঝার উদ্দেশ্যে গুরুত্বপূর্ণ আরবি শব্দভাণ্ডার, মৌলিক ব্যাকরণ ও প্রাত্যহিক আরবি বাক্যালাপের সহজবোধ্য পাঠ।',
    },
    objectives: {
      en: [
        'Learn high-frequency Quranic vocabulary that recurs across Surahs',
        'Understand fundamental Arabic sentence structures',
        'Comprehend common verses directly without needing a translation',
        'Practice elementary spoken Arabic greetings and sentences',
      ],
      bn: [
        'কুরআনে বারবার ব্যবহৃত জরুরি শব্দভাণ্ডার আয়ত্ত করা',
        'সহজ আরবি বাক্য গঠন ও মৌলিক ব্যাকরণ অনুধাবন করা',
        'তিলাওয়াত করার সময় সরাসরি অর্থ বোঝার সক্ষমতা তৈরি করা',
        'প্রাথমিক আরবি অভিবাদন ও কথোপকথন অনুশীলন করা',
      ],
    },
    targetAudience: {
      en: 'Students and adults who want to comprehend the Quran in its original tongue',
      bn: 'কুরআন সরাসরি বুঝতে আগ্রহী যেকোনো বয়সের শিক্ষার্থী',
    },
    iconName: 'Languages',
    color: '#123D32',
    durationNote: {
      en: 'Structured step-by-step modular progression',
      bn: 'পর্যায়ক্রমিক মডিউল ভিত্তিক পাঠদান',
    },
  },
];

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 'maulana-shibli-moktabir',
    name: {
      en: 'Maulana Shibli Moktabir',
      bn: 'মাওলানা শিবলী মুক্তাদির',
    },
    title: {
      en: 'Senior Quran & Tajweed Specialist',
      bn: 'সিনিয়র কুরআন ও তাজবিদ বিশেষজ্ঞ',
    },
    role: 'male',
    photo: '/assets/aistudio/Maulana_Shibli_Moktabir_51096f43.webp',
    qualifications: {
      en: ['Maulana (Islamic Scholar)', 'Daura-e-Hadith (Kamil)', 'Certified Qari'],
      bn: ['মাওলানা (ইসলামিক স্কলার)', 'দাওরায়ে হাদিস (কামিল)', 'সনদপ্রাপ্ত ক্বারী'],
    },
    specialization: {
      en: 'Quran with Tajweed, Hifz Guidance & Melodious Recitation',
      bn: 'তাজবিদসহ কুরআন তিলাওয়াত, হিফজ ও সুরময় উচ্চারণ',
    },
    languages: {
      en: 'Bangla, Arabic & English',
      bn: 'বাংলা, আরবি ও ইংরেজি',
    },
    experienceNote: {
      en: 'Experienced in patient one-to-one coaching and melodious Quran recitation for learners worldwide.',
      bn: 'বিশ্বজুড়ে শিক্ষার্থীদের নিবিড় ওয়ান-টু-ওয়ান ক্লাসে বিশুদ্ধ ও সুরেলা তিলাওয়াত শিক্ষাদানে দক্ষ।',
    },
  },
  {
    id: 'mufti-abdullah-al-mamun',
    name: {
      en: 'Mufti Abdullah Al Mamun',
      bn: 'মুফতি আব্দুল্লাহ আল মামুন',
    },
    title: {
      en: 'Senior Islamic Scholar & Fiqh Instructor',
      bn: 'সিনিয়র ইসলামিক স্কলার ও ফিকহ শিক্ষক',
    },
    role: 'male',
    photo: '/assets/aistudio/Mufti_Abdulla_Al_mamun__d44c50e1.webp',
    qualifications: {
      en: ['Mufti (Islamic Jurisprudence)', 'Daura-e-Hadith', 'Certified Tajweed & Qirat'],
      bn: ['মুফতি (ইসলামিক আইন ও ফিকহ)', 'দাওরায়ে হাদিস', 'সনদপ্রাপ্ত তাজবিদ ও কিরাত'],
    },
    specialization: {
      en: 'Islamic Jurisprudence (Fiqh), Quran Tafseer & Advanced Guidance',
      bn: 'ইসলামিক ফিকহ, কুরআন তাফসির ও ধর্মীয় দিকনির্দেশনা',
    },
    languages: {
      en: 'Bangla, Arabic & English',
      bn: 'বাংলা, আরবি ও ইংরেজি',
    },
    experienceNote: {
      en: 'Extensive experience in teaching online and guiding students with deep scholarship.',
      bn: 'অনলাইনে বিভিন্ন বয়সের শিক্ষার্থীদের গভীর ইলমি দিকনির্দেশনা ও পাঠদানে দীর্ঘ অভিজ্ঞতা।',
    },
  },
  {
    id: 'maulana-abu-sayed-habibi',
    name: {
      en: 'Maulana Abu Sayed Habibi',
      bn: 'মাওলানা আবু সাঈদ হাবিবি',
    },
    title: {
      en: 'Quran Recitation & Makhraj Specialist',
      bn: 'কুরআন তিলাওয়াত ও মাখরাজ বিশেষজ্ঞ',
    },
    role: 'male',
    photo: '/assets/aistudio/Maulana_Abu_Sayed_Habibi__ffb86f1b.webp',
    qualifications: {
      en: ['Maulana (Islamic Scholar)', 'Qirat & Tajweed Specialist', 'Noorani Qaida Expert'],
      bn: ['মাওলানা (ইসলামিক স্কলার)', 'কিরাত ও তাজবিদ প্রশিক্ষক', 'নূরানী কায়দা বিশারদ'],
    },
    specialization: {
      en: 'Noorani Qaida, Quran Reading & Makhraj Precision',
      bn: 'নূরানী কায়দা, সহীহ মাখরাজ ও সাবলীল কুরআন রিডিং',
    },
    languages: {
      en: 'Bangla & Arabic',
      bn: 'বাংলা ও আরবি',
    },
    experienceNote: {
      en: 'Specialized in foundational Arabic phonetics, child pedagogy, and beginner-friendly tutoring.',
      bn: 'শিশু ও নতুন শিক্ষার্থীদের জন্য অত্যন্ত সহজ ও আকর্ষণীয় পদ্ধতিতে কুরআন শিক্ষাদানে অভিজ্ঞ।',
    },
  },
  {
    id: 'maolana-atikul-islam',
    name: {
      en: 'Maolana Atikul Islam',
      bn: 'মাওলানা আতিকুল ইসলাম',
    },
    title: {
      en: 'Quran & Arabic Language Faculty',
      bn: 'কুরআন ও আরবি ভাষা শিক্ষক',
    },
    role: 'male',
    photo: '/assets/aistudio/Maolana_Atikul_Islam__830b6320.webp',
    qualifications: {
      en: ['Maolana (Dars-e-Nizami)', 'Arabic Grammar Specialist', 'Tajweed Expert'],
      bn: ['মাওলানা (দরসে নেজামী)', 'আরবি ব্যাকরণ বিশারদ', 'তাজবিদ প্রশিক্ষক'],
    },
    specialization: {
      en: 'Arabic Language, Daily Dua & Salah, Basic Quran Reading',
      bn: 'আরবি ভাষা, নামাজ ও দোয়া শিক্ষা, কুরআন রিডিং',
    },
    languages: {
      en: 'Bangla, Arabic & English',
      bn: 'বাংলা, আরবি ও ইংরেজি',
    },
    experienceNote: {
      en: 'Dedicated to helping beginners build strong foundational Arabic skills.',
      bn: 'নতুন শিক্ষার্থীদের মজবুত ভিত্তি তৈরিতে নিবেদিতপ্রাণ শিক্ষক।',
    },
  },
  // Female Teachers - Discrete Islamic presentation as required by the design reference
  {
    id: 'female-teacher-hafiza',
    name: {
      en: 'Sister Hafiza Tasnim',
      bn: 'হাফেজা তাসনিম',
    },
    title: {
      en: 'Certified Hafiza & Tajweed Teacher',
      bn: 'সনদপ্রাপ্ত হাফেজা ও তাজবিদ শিক্ষিকা',
    },
    role: 'female',
    photo: '',
    qualifications: {
      en: ['Hafiza of the Holy Quran', 'Sanad in Tajweed (Hafs an Asim)', 'Female Student Coach'],
      bn: ['পবিত্র কুরআনের হাফেজা', 'হাফস আন আসিম তাজবিদ সনদ', 'নারী শিক্ষার্থীদের শিক্ষিকা'],
    },
    specialization: {
      en: 'Quran with Tajweed, Hifz Revision & Women/Children Classes',
      bn: 'তাজবিদসহ কুরআন, শিশু ও মা-বোনদের ব্যক্তিগত পাঠদান',
    },
    languages: {
      en: 'Bangla & English',
      bn: 'বাংলা ও ইংরেজি',
    },
    experienceNote: {
      en: 'Creates a comfortable, respectful, and safe learning environment for female students.',
      bn: 'মা-বোনদের জন্য সম্পূর্ণ মার্জিত ও পর্দাপূর্ণ পরিবেশে ক্লাস পরিচালনা।',
    },
  },
  {
    id: 'female-teacher-qaria',
    name: {
      en: 'Sister Qaria Maryam',
      bn: 'ক্বারিয়া মারিয়াম',
    },
    title: {
      en: 'Certified Qaria & Noorani Qaida Specialist',
      bn: 'সনদপ্রাপ্ত ক্বারিয়া ও নূরানী কায়দা বিশেষজ্ঞ',
    },
    role: 'female',
    photo: '',
    qualifications: {
      en: ['Certified Qaria', 'Child Quranic Pedagogy Expert', 'Islamic Studies Alimah'],
      bn: ['সনদপ্রাপ্ত ক্বারিয়া', 'শিশু মনস্তত্ত্ব ও কুরআন শিক্ষা', 'আলিমা কোর্স সম্পন্ন'],
    },
    specialization: {
      en: 'Noorani Qaida for Kids, Quran Reading & Daily Duas',
      bn: 'ছোটদের নূরানী কায়দা, কুরআন রিডিং ও প্রাত্যহিক দোয়া',
    },
    languages: {
      en: 'Bangla & English',
      bn: 'বাংলা ও ইংরেজি',
    },
    experienceNote: {
      en: 'Specially trained in nurturing young minds with gentle encouragement and patience.',
      bn: 'ছোট শিশুদের ধৈর্য ও মমতার সাথে হরফ ও কুরআন শিক্ষাদানে অভিজ্ঞ।',
    },
  },
  {
    id: 'female-teacher-alimah',
    name: {
      en: 'Sister Alimah Fatema',
      bn: 'আলিমা ফাতেমা',
    },
    title: {
      en: 'Alimah & Islamic Studies Faculty',
      bn: 'আলিমা ও ইসলামিক স্টাডিজ শিক্ষিকা',
    },
    role: 'female',
    photo: '',
    qualifications: {
      en: ['Graduate in Islamic Studies (Dawra-e-Hadith)', 'Tajweed Certified', 'Seerah Instructor'],
      bn: ['দাওরায়ে হাদিস (মাস্টার্স সমমান)', 'তাজবিদ সনদধারী', 'সীরাত ও আকিদা প্রশিক্ষক'],
    },
    specialization: {
      en: 'Basic Islamic Studies, Daily Dua & Salah, Female Quran Reading',
      bn: 'ইসলামিক স্টাডিজ, দৈনন্দিন দোয়া ও নামাজ শিক্ষা',
    },
    languages: {
      en: 'Bangla & English',
      bn: 'বাংলা ও ইংরেজি',
    },
    experienceNote: {
      en: 'Devoted to imparting practical Islamic lifestyle knowledge for female learners.',
      bn: 'শিক্ষার্থীদের প্রাত্যহিক জীবনে দ্বীন পালনে সহায়ক পাঠদান।',
    },
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'who-can-join',
    category: 'admission',
    question: {
      en: 'Who can join Al Muinul Quran Online Academy?',
      bn: 'আল মুঈনুল কুরআন অনলাইন একাডেমিতে কারা ভর্তি হতে পারবে?',
    },
    answer: {
      en: 'Anyone! We welcome learners of all age groups, from young children starting their first Arabic letters at age 5 to working professionals and adult seniors. We offer customized one-to-one learning pacing for each student.',
      bn: 'যেকোনো বয়সের শিক্ষার্থী ভর্তি হতে পারবে। ৫ বছর বয়সী শিশুদের প্রথম হরফ শেখা থেকে শুরু করে প্রাপ্তবয়স্ক ও কর্মজীবী ভাই-বোন—সবার জন্যই রয়েছে নিজস্ব সুবিধা অনুযায়ী ওয়ান-টু-ওয়ান ক্লাসের সুযোগ।',
    },
  },
  {
    id: 'are-classes-one-to-one',
    category: 'classes',
    question: {
      en: 'Are classes conducted one-to-one or in groups?',
      bn: 'ক্লাসগুলো কি ওয়ান-টু-ওয়ান (একক) নাকি গ্রুপ ভিত্তিক?',
    },
    answer: {
      en: 'All standard classes are strictly one-to-one (1-to-1 live teacher and student). This guarantees 100% personalized attention, immediate pronunciation correction, and no hesitation or distraction.',
      bn: 'আমাদের নিয়মিত ক্লাসগুলো সম্পূর্ণ ওয়ান-টু-ওয়ান (একজন শিক্ষকের সাথে একজন শিক্ষার্থী)। ফলে শিক্ষক সম্পূর্ণ মনোযোগ দেন, তাৎক্ষণিক উচ্চারণ সংশোধন করেন এবং শিক্ষার্থী স্বাচ্ছন্দ্যে শিখতে পারে।',
    },
  },
  {
    id: 'how-do-classes-work',
    category: 'classes',
    question: {
      en: 'How do the online classes work technically?',
      bn: 'অনলাইন ক্লাসগুলো কীভাবে পরিচালিত হয়?',
    },
    answer: {
      en: 'Classes take place live via Google Meet. You only need a smartphone, tablet, or computer with an active internet connection. The academy provides the private Google Meet link, and our screen-sharing software makes following the book effortless.',
      bn: 'ক্লাসগুলো গুগল মিট (Google Meet)-এর মাধ্যমে লাইভ অনুষ্ঠিত হয়। আপনার কেবল একটি স্মার্টফোন, ট্যাবলেট বা কম্পিউটার এবং ইন্টারনেট কানেকশন প্রয়োজন। স্ক্রিন শেয়ারিংয়ের মাধ্যমে ডিজিটাল কায়দা ও কুরআন সরাসরি প্রদর্শন করা হয়।',
    },
  },
  {
    id: 'female-teachers-available',
    category: 'classes',
    question: {
      en: 'Can female students request female teachers?',
      bn: 'মা-বোন ও নারী শিক্ষার্থীদের জন্য কি নারী শিক্ষিকা রয়েছেন?',
    },
    answer: {
      en: 'Yes, absolutely. We have qualified and certified female teachers (Alimah, Hafiza, and Qaria) specifically dedicated to teaching female students and young children in a comfortable, dignified environment.',
      bn: 'হ্যাঁ, অবশ্যই। নারী শিক্ষার্থী ও শিশুদের জন্য আমাদের অভিজ্ঞ ও সনদপ্রাপ্ত নারী শিক্ষিকা (আলিমা, হাফেজা ও ক্বারিয়া) রয়েছেন, যারা সম্পূর্ণ পর্দানশীন ও আন্তরিক পরিবেশে পাঠদান করেন।',
    },
  },
  {
    id: 'free-trial-process',
    category: 'trial',
    question: {
      en: 'How does the Free Trial Class process work?',
      bn: 'ফ্রি ট্রায়াল ক্লাসের প্রক্রিয়াটি কীভাবে কাজ করে?',
    },
    answer: {
      en: 'New students can apply for 1–2 free trial classes without any upfront fees or payment commitment. Once you submit the simple request form, our administration contacts you on WhatsApp within a few hours to arrange a suitable time on Google Meet.',
      bn: 'নতুন শিক্ষার্থীরা কোনো প্রকার পূর্বশর্ত ছাড়াই ১-২টি ফ্রি ট্রায়াল ক্লাসের আবেদন করতে পারেন। আবেদন পাওয়ার পর আমাদের প্রতিনিধি হোয়াটসঅ্যাপে যোগাযোগ করে আপনার সুবিধাজনক সময়ে ক্লাসের ব্যবস্থা করবেন।',
    },
  },
  {
    id: 'languages-supported',
    category: 'general',
    question: {
      en: 'Which languages are used during teaching?',
      bn: 'ক্লাসে কোন কোন ভাষার মাধ্যমে পাঠদান করা হয়?',
    },
    answer: {
      en: 'Classes are conducted in Bengali or English based on the student preference. Our teachers are fluent in both languages, making learning natural for students in Bangladesh as well as expatriate families abroad.',
      bn: 'শিক্ষার্থীর পছন্দের ভিত্তিতে বাংলা অথবা ইংরেজি উভয় ভাষাতেই ক্লাস নেওয়া হয়। আমাদের শিক্ষকরা অত্যন্ত সাবলীল, তাই দেশ ও বিদেশের প্রবাসী পরিবারের সন্তানেরাও সহজে বুঝতে পারে।',
    },
  },
  {
    id: 'international-students',
    category: 'admission',
    question: {
      en: 'Can international students living outside Bangladesh enroll?',
      bn: 'বাংলাদেশের বাইরে প্রবাসী ও বিদেশি শিক্ষার্থীরা কি ভর্তি হতে পারবে?',
    },
    answer: {
      en: 'Yes! A significant portion of our students join from the USA, UK, Canada, Australia, Europe, and the Middle East. Class timings are scheduled flexibly according to your local timezone.',
      bn: 'অবশ্যই! আমাদের বহু শিক্ষার্থী যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া, ইউরোপ ও মধ্যপ্রাচ্য থেকে যুক্ত হয়ে শিখছেন। আপনার স্থানীয় টাইমজোন অনুযায়ী সুবিধাজনক ক্লাসের সময় নির্ধারণ করা হয়।',
    },
  },
  {
    id: 'schedule-flexibility',
    category: 'classes',
    question: {
      en: 'Can I change my class schedule if I have busy days?',
      bn: 'ব্যস্ততার কারণে কি ক্লাসের সময় পরিবর্তন করা যাবে?',
    },
    answer: {
      en: 'Yes. With prior notice to the teacher or student coordinator via WhatsApp, missed classes can be rescheduled, keeping your learning steady without stress.',
      bn: 'হ্যাঁ, যুক্তিসঙ্গত কারণে পূর্বে জানালে শিক্ষকের সাথে সমন্বয় করে ক্লাসের সময় পরিবর্তন বা মেকআপ ক্লাস নেওয়ার সুযোগ রয়েছে।',
    },
  },
];
