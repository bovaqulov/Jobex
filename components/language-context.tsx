import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    // Navigation
    'nav.about': 'Kompaniya haqida',
    'nav.services': 'Xizmatlar',
    'nav.directions': 'Yo\'nalishlar',
    'nav.news': 'Yangiliklar',
    'nav.testimonials': 'Mijozlar fikri',
    'nav.contact': 'Aloqa',
    
    // Hero section
    'hero.title': 'Chet elda ishga joylashish',
    'hero.subtitle': 'Professional xizmat va ishonchli hamkorlik',
    'hero.description': 'Biz sizga chet elda rasmiy ish topishda yordam beramiz. Ishonchli ish beruvchilar va to\'liq hujjat rasmiylashtirish.',
    'hero.cta': 'Bepul konsultatsiya',
    'hero.phone': 'Qo\'ng\'iroq qiling',
    
    // About section
    'about.title': 'Kompaniya haqida',
    'about.description': 'Biz - bir maqsadga yo‘nalgan professionallar jamoasi: chet elda ish qidirayotgan har bir kishi uchun ishga joylashishni qulay, shaffof va xavfsiz qilish. Biz har bir nomzodning malakasi, umidlari va karyera maqsadlariga mos keladigan vakansiyalarni tanlaymiz.',
    'about.verified': 'Tekshirilgan ish beruvchilar',
    'about.verified_desc': 'Faqat ishonchli ish beruvchilar bilan hamkorlik qilamiz — vositachilarsiz',
    'about.official': 'Rasmiy ishga joylashish',
    'about.official_desc': 'Barcha kerakli hujjatlarni rasmiylashtirib beramiz',
    'about.support': 'Qo‘llab-quvvatlash',
    'about.support_desc': 'Ariza topshirishdan boshlab yangi joyga moslashgunga qadar',
    'about.consultation': 'Konsultatsiya',
    'about.consultation_desc': 'Huquqiy, ma’lumotli va amaliy yordam',
    'about.unique_title': 'Biz bilamiz — har bir nomzod o‘ziga xos',
    'about.unique_1': 'Tajriba va ko‘nikmalarga mos vakansiyalarni taklif qilamiz',
    'about.unique_2': 'Ishga joylashish bo‘yicha barcha savollarga javob beramiz',
    'about.unique_3': 'Zarurat bo‘lsa, tayyorlaymiz va o‘qitamiz',
    'about.unique_4': 'Yangi mamlakat va jamoaga moslashishga yordam beramiz',
    
    // Services section
    'services.title': 'Bizning xizmatlarimiz',
    'services.subtitle': 'Mijozlarimizga taqdim etadigan to\'liq xizmatlar spektri',
    'services.training': 'Professional o\'qitish',
    'services.training.desc': 'Zamonaviy kasblar bo\'yicha qayta tayyorlash kurslari, amaliy treninglar va sertifikat dasturlari',
    'services.insurance': 'Sug\'urta va huquqiy xizmatlar',
    'services.insurance.desc': 'Moslashuv davrida tibbiy sug\'urta, bahsli vaziyatlarda huquqiy yordam va mehnat qonunchiligi bo\'yicha konsultatsiyalar',
    'services.placement': 'Ishga joylashish',
    'services.placement.desc': 'Tajriba va ko\'nikmalarni hisobga olgan holda vakansiyalar taklifi, ishga joylashish bo\'yicha barcha masalalarda konsultatsiya',
    'services.adaptation': 'Moslashish yordami',
    'services.adaptation.desc': 'Yangi mamlakatda va jamoada moslashishga yordam, zarurat bo\'lganda tayyorgarlik va o\'qitish',

    'services.training.feature1': 'Zamonaviy kasblar bo\'yicha qayta tayyorlash kurslari',
    'services.training.feature2': 'Amaliy treninglar',
    'services.training.feature3': 'Sertifikatlash dasturlari',

    'services.insurance.feature1': 'Moslashuv davridagi tibbiy sug\'urta',
    'services.insurance.feature2': 'Bahsli holatlarda huquqiy yordam',
    'services.insurance.feature3': 'Mehnat qonunchiligi bo\'yicha konsultatsiyalar',

    'services.placement.feature1': 'Tajriba va ko\'nikmalarga mos vakansiyalar',
    'services.placement.feature2': 'Ishga joylashish bo\'yicha barcha masalalarda konsultatsiya',
    'services.placement.feature3': 'Hujjatlarni tayyorlash va topshirish',

    'services.adaptation.feature1': 'Yangi mamlakatga moslashishda yordam',
    'services.adaptation.feature2': 'Jamoada integratsiya va qo\'llab-quvvatlash',
    'services.adaptation.feature3': 'Kerak bo\'lganda trening va tayyorgarlik',
    // Directions section
    'directions.title': 'Ishga joylashish yo\'nalishlari',
    'directions.construction': 'Qurilish',
    'directions.production': 'Ishlab chiqarish va omborlar',
    'directions.logistics': 'Logistika va yuk tashish',
    'directions.services': 'Xizmat ko\'rsatish sohasi',
    'directions.it': 'IT va texnologiyalar',
    'directions.agriculture': 'Qishloq xo\'jaligi va oziq-ovqat sanoati',
    'directions.subtitle': 'Biz chet elda taklif qiladigan asosiy yo‘nalishlar',
    'directions.more': 'Batafsil',
    'directions.construction.desc': 'Qurilish ishlari, pardoz, payvandlash',
    'directions.production.desc': 'Ishlab chiqarish liniyalari, sifat nazorati, omborlar',
    'directions.logistics.desc': 'Haydovchilar, ekspeditorlar, dispetcherlar',
    'directions.services.desc': 'Restoranlar, mehmonxonalar, klining',
    'directions.it.desc': 'Dasturlash, dizayn, testlash',
    'directions.agriculture.desc': 'Hosil terish, qadoqlash, qayta ishlash',
    'directions.stats.employed': 'Ishga joylashtirilgan',
    'directions.stats.countries': 'Davlatlar',
    'directions.stats.partners': 'Hamkorlar',
    'directions.stats.success': 'Muvaffaqiyatli joylashtirish',
    
    // News section
    'news.title': 'So\'nggi yangiliklar',
    'news.subtitle': 'Ishga joylashish sohasidagi eng so\'nggi yangiliklar va imkoniyatlar',
    'news.readMore': 'Batafsil o\'qish',
    
    // Testimonials section
    'testimonials.title': 'Mijozlarimiz fikri',
    'testimonials.subtitle': 'Bizning xizmatlarimizdan foydalangan mijozlar izohlari',
    
    // Contact section
    'contact.title': 'Biz bilan bog\'laning',
    'contact.subtitle': 'Savollaringiz bo\'lsa, biz bilan bog\'laning',
    'contact.phone': 'Telefon',
    'contact.address': 'Manzil',
    'contact.social': 'Ijtimoiy tarmoqlar',
    'contact.consultation': 'Bepul konsultatsiya olish',
    'contact.name': 'Ismingiz',
    'contact.phoneNumber': 'Telefon raqami',
    'contact.message': 'Xabar',
    'contact.send': 'Yuborish',
    
    // Footer
    'footer.description': 'Chet elda ishga joylashishda professional yordam va ishonchli hamkorlik',
    'footer.quickLinks': 'Tezkor havolalar',
    'footer.workingHours': 'Ish vaqti',
    'footer.workingHours.time': 'Dushanba - Juma: 9:00 - 18:00',
    'footer.rights': '© 2024 Jobex_uz. Barcha huquqlar himoyalangan.',
    
    // Additional
    'advantages.title': 'Bizning afzalliklarimiz',
    'advantages.insurance': 'Bizning ofisimiz orqali sug\'urtalash',
    'advantages.direct': 'Ish beruvchilar bilan to\'g\'ridan-to\'g\'ri aloqa',
    'advantages.support24': '24/7 qo\'llab-quvvatlash',
    'advantages.replacement': '15 kun ichida nomzodni almashtirish imkoniyati',
  },
  ru: {
    // Navigation
    'nav.about': 'О компании',
    'nav.services': 'Услуги',
    'nav.directions': 'Направления',
    'nav.news': 'Новости',
    'nav.testimonials': 'Отзывы',
    'nav.contact': 'Контакты',
    
    // Hero section
    'hero.title': 'Трудоустройство за рубежом',
    'hero.subtitle': 'Профессиональный сервис и надежное партнерство',
    'hero.description': 'Мы поможем вам найти официальную работу за рубежом. Проверенные работодатели и полное оформление документов.',
    'hero.cta': 'Бесплатная консультация',
    'hero.phone': 'Позвонить',
    
    // About section
    'about.title': 'О компании',
    'about.description': 'Мы — команда профессионалов, объединённая одной целью: сделать трудоустройство доступным, прозрачным и безопасным для всех, кто ищет работу за рубежом. Мы подбираем вакансии, которые соответствуют квалификации, ожиданиям и карьерным целям каждого кандидата.',
    'about.verified': 'Проверенные работодатели',
    'about.verified_desc': 'Работаем только с надёжными работодателями — напрямую, без посредников',
    'about.official': 'Официальное трудоустройство',
    'about.official_desc': 'Оформление всех необходимых документов',
    'about.support': 'Поддержка',
    'about.support_desc': 'От подачи заявки до адаптации на новом месте',
    'about.consultation': 'Консультации',
    'about.consultation_desc': 'Юридическая, информационная и практическая помощь',
    'about.unique_title': 'Мы понимаем, что каждый кандидат уникален',
    'about.unique_1': 'Предлагаем вакансии с учётом опыта и навыков',
    'about.unique_2': 'Консультируем по всем вопросам трудоустройства',
    'about.unique_3': 'Готовим к работе и обучаем при необходимости',
    'about.unique_4': 'Помогаем адаптироваться в новой стране и коллективе',
    
    // Services section
    'services.title': 'Наши услуги',
    'services.subtitle': 'Полный спектр услуг для наших клиентов',
    'services.training': 'Профессиональное обучение',
    'services.training.desc': 'Курсы переподготовки по современным профессиям, практические тренинги и сертификационные программы',
    'services.insurance': 'Страховые и правовые услуги',
    'services.insurance.desc': 'Медицинское страхование в период адаптации, юридическая поддержка при спорных ситуациях и консультации по трудовому законодательству',
    'services.placement': 'Трудоустройство',
    'services.placement.desc': 'Предложение вакансий с учётом опыта и навыков, консультации по всем вопросам трудоустройства',
    'services.adaptation': 'Помощь в адаптации',
    'services.adaptation.desc': 'Помощь в адаптации в новой стране и коллективе, подготовка к работе и обучение при необходимости',
    'services.training.feature1': 'Курсы переподготовки по современным профессиям',
    'services.training.feature2': 'Практические тренинги',
    'services.training.feature3': 'Сертификационные программы',

    'services.insurance.feature1': 'Медицинское страхование в период адаптации',
    'services.insurance.feature2': 'Юридическая поддержка при спорных ситуациях',
    'services.insurance.feature3': 'Консультации по вопросам трудового законодательства',

    'services.placement.feature1': 'Предложение вакансий с учётом опыта и навыков',
    'services.placement.feature2': 'Консультации по всем вопросам трудоустройства',
    'services.placement.feature3': 'Подготовка документов',

    'services.adaptation.feature1': 'Помощь в адаптации в новой стране',
    'services.adaptation.feature2': 'Поддержка в коллективе',
    'services.adaptation.feature3': 'Подготовка к работе и обучение при необходимости',
    // Directions section
    'directions.title': 'Направления трудоустройства',
    'directions.construction': 'Строительство',
    'directions.production': 'Производство и склады',
    'directions.logistics': 'Логистика и грузоперевозки',
    'directions.services': 'Сфера услуг',
    'directions.it': 'IT и технологии',
    'directions.agriculture': 'Сельское хозяйство и пищевая промышленность',
    'directions.subtitle': 'Основные направления, по которым мы предлагаем вакансии за рубежом',
    'directions.more': 'Подробнее',
    'directions.construction.desc': 'Строительные работы, отделка, сварка',
    'directions.production.desc': 'Производственные линии, качество, склады',
    'directions.logistics.desc': 'Водители, экспедиторы, диспетчеры',
    'directions.services.desc': 'Рестораны, отели, клининг',
    'directions.it.desc': 'Программирование, дизайн, тестирование',
    'directions.agriculture.desc': 'Сбор урожая, упаковка, переработка',
    'directions.stats.employed': 'Трудоустроенных',
    'directions.stats.countries': 'Стран',
    'directions.stats.partners': 'Партнеров',
    'directions.stats.success': 'Успешных размещений',
    
    // News section
    'news.title': 'Последние новости',
    'news.subtitle': 'Актуальные новости и возможности в сфере трудоустройства',
    'news.readMore': 'Читать далее',
    
    // Testimonials section
    'testimonials.title': 'Отзывы клиентов',
    'testimonials.subtitle': 'Что говорят о нас наши клиенты',
    
    // Contact section
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Есть вопросы? Мы всегда готовы помочь',
    'contact.phone': 'Телефон',
    'contact.address': 'Адрес',
    'contact.social': 'Социальные сети',
    'contact.consultation': 'Получить бесплатную консультацию',
    'contact.name': 'Ваше имя',
    'contact.phoneNumber': 'Номер телефона',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить',
    
    // Footer
    'footer.description': 'Профессиональная помощь в трудоустройстве за рубежом и надежное партнерство',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.workingHours': 'Часы работы',
    'footer.workingHours.time': 'Понедельник - Пятница: 9:00 - 18:00',
    'footer.rights': '© 2024 Jobex_uz. Все права защищены.',
    
    // Additional
    'advantages.title': 'Наши преимущества',
    'advantages.insurance': 'Страхование через наш офис',
    'advantages.direct': 'Прямое взаимодействие с работодателями',
    'advantages.support24': 'Круглосуточная поддержка',
    'advantages.replacement': 'Возможность замены кандидата в течение 15 дней',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};