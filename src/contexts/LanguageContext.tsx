import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    findTutor: 'Find Tutor',
    becomeATutor: 'Become a Tutor',
    getStarted: 'Get Started',
    
    // Hero
    heroTitle: 'Learn Faster with Your Best Language Tutor',
    heroSubtitle: 'Connect with expert tutors for personalized 1-on-1 lessons. Start your language learning journey today!',
    heroDiscount: '30% OFF Your First Plan',
    startLearning: 'Start Learning Now',
    viewAllTutors: 'View All Tutors',
    
    // Stats
    experiencedTutors: 'Experienced Tutors',
    starReviews: '5-Star Reviews',
    subjectsTaught: 'Subjects Taught',
    tutorNationalities: 'Tutor Nationalities',
    
    // Features
    featuresTitle: 'Why Choose Preply?',
    featuresSubtitle: 'The best platform for learning languages online',
    feature1Title: 'Expert Tutors',
    feature1Desc: 'Learn from certified teachers and professionals',
    feature2Title: 'Flexible Schedule',
    feature2Desc: 'Learn at your own pace, anytime, anywhere',
    feature3Title: 'Personalized Learning',
    feature3Desc: 'Customized lessons tailored to your goals',
    feature4Title: 'Affordable Pricing',
    feature4Desc: 'Quality education at competitive prices',
    
    // How It Works
    howItWorksTitle: 'How It Works',
    howItWorksSubtitle: 'Start learning in 3 simple steps',
    step1Title: 'Choose Your Tutor',
    step1Desc: 'Browse profiles and find the perfect match',
    step2Title: 'Schedule a Lesson',
    step2Desc: 'Pick a time that works for you',
    step3Title: 'Start Learning',
    step3Desc: 'Connect online and begin your journey',
    
    // Testimonials
    testimonialsTitle: 'What Our Students Say',
    testimonialsSubtitle: 'Join thousands of successful learners',
    testimonial1: 'Amazing experience! My tutor helped me improve my English in just 2 months.',
    testimonial1Author: 'Sarah M.',
    testimonial2: 'The flexibility and quality of lessons are outstanding. Highly recommended!',
    testimonial2Author: 'Ahmed K.',
    testimonial3: 'Best investment in my education. The personalized approach made all the difference.',
    testimonial3Author: 'Maria L.',
    
    // CTA
    ctaTitle: 'Ready to Start Your Learning Journey?',
    ctaSubtitle: 'Get 30% off on your first plan. Limited time offer!',
    claimDiscount: 'Claim Your 30% Discount',
    
    // Footer
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    careers: 'Careers',
    blog: 'Blog',
    helpCenter: 'Help Center',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    allRightsReserved: 'All rights reserved.',
  },
  ar: {
    // Header
    findTutor: 'ابحث عن مدرس',
    becomeATutor: 'كن مدرساً',
    getStarted: 'ابدأ الآن',
    
    // Hero
    heroTitle: 'تعلم بشكل أسرع مع أفضل مدرس لغات',
    heroSubtitle: 'تواصل مع مدرسين خبراء للحصول على دروس شخصية فردية. ابدأ رحلة تعلم اللغة اليوم!',
    heroDiscount: 'خصم 30% على خطتك الأولى',
    startLearning: 'ابدأ التعلم الآن',
    viewAllTutors: 'عرض جميع المدرسين',
    
    // Stats
    experiencedTutors: 'مدرس متمرس',
    starReviews: 'تقييم خمس نجوم',
    subjectsTaught: 'موضوع تعليمي',
    tutorNationalities: 'جنسية للمدرسين',
    
    // Features
    featuresTitle: 'لماذا تختار Preply؟',
    featuresSubtitle: 'أفضل منصة لتعلم اللغات عبر الإنترنت',
    feature1Title: 'مدرسون خبراء',
    feature1Desc: 'تعلم من معلمين معتمدين ومحترفين',
    feature2Title: 'جدول مرن',
    feature2Desc: 'تعلم بالسرعة التي تناسبك، في أي وقت ومن أي مكان',
    feature3Title: 'تعلم مخصص',
    feature3Desc: 'دروس مخصصة تناسب أهدافك',
    feature4Title: 'أسعار مناسبة',
    feature4Desc: 'تعليم عالي الجودة بأسعار تنافسية',
    
    // How It Works
    howItWorksTitle: 'كيف يعمل',
    howItWorksSubtitle: 'ابدأ التعلم في 3 خطوات بسيطة',
    step1Title: 'اختر مدرسك',
    step1Desc: 'تصفح الملفات الشخصية واعثر على المطابقة المثالية',
    step2Title: 'حدد موعد الدرس',
    step2Desc: 'اختر الوقت المناسب لك',
    step3Title: 'ابدأ التعلم',
    step3Desc: 'اتصل عبر الإنترنت وابدأ رحلتك',
    
    // Testimonials
    testimonialsTitle: 'ماذا يقول طلابنا',
    testimonialsSubtitle: 'انضم إلى آلاف المتعلمين الناجحين',
    testimonial1: 'تجربة رائعة! ساعدني مدرسي في تحسين لغتي الإنجليزية في شهرين فقط.',
    testimonial1Author: 'سارة م.',
    testimonial2: 'المرونة وجودة الدروس متميزة. أوصي به بشدة!',
    testimonial2Author: 'أحمد ك.',
    testimonial3: 'أفضل استثمار في تعليمي. النهج الشخصي أحدث الفرق.',
    testimonial3Author: 'ماريا ل.',
    
    // CTA
    ctaTitle: 'هل أنت مستعد لبدء رحلة التعلم؟',
    ctaSubtitle: 'احصل على خصم 30% على خطتك الأولى. عرض لفترة محدودة!',
    claimDiscount: 'احصل على خصم 30%',
    
    // Footer
    aboutUs: 'من نحن',
    contactUs: 'اتصل بنا',
    careers: 'الوظائف',
    blog: 'المدونة',
    helpCenter: 'مركز المساعدة',
    termsOfService: 'شروط الخدمة',
    privacyPolicy: 'سياسة الخصوصية',
    allRightsReserved: 'جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Set RTL for Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
