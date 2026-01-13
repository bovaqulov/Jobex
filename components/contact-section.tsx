import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Button } from './ui/button.tsx';
import { useLanguage } from './language-context.tsx';
import { toast } from 'sonner';


type FormData = {
  name: string;
  phone: string;
  message: string;
  countries: string[];
};

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
    countries: []
  });

  const countryOptions = [
    {
      value: 'russia',
      label: language === 'uz' ? 'Rossiya' : 'Россия'
    },
    {
      value: 'arab',
      label: language === 'uz' ? 'Arab davlatlari' : 'Арабские страны'
    },
    {
      value: 'europe',
      label: language === 'uz' ? 'Yevropa' : 'Европа'
    },
    {
      value: 'korea',
      label: language === 'uz' ? 'Janubiy Koreya' : 'Южная Корея'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCountries = formData.countries.length > 0
        ? formData.countries.map(country =>
            countryOptions.find(option => option.value === country)?.label
        ).join(', ')
        : (language === 'uz' ? 'Ko\'rsatilmagan' : 'Не указано');

    const telegramMessage = `🔔 Yangi so'rov!\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n🌍 Qaysi davlatlarda ishlamoqchi: ${selectedCountries}\n💬 Xabar: ${formData.message}`;

    try {

      // 1️⃣ Telegramga yuborish
      await fetch(`https://api.telegram.org/bot8358381564:AAFHwgZHiX4gP-EgnFTnGPl36xwCP3HKByk/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: -1002619344250,
          text: telegramMessage,
          parse_mode: "HTML"
        })
      });

      // 2️⃣ Bitrix24 CRMga yuborish
      await fetch("https://jobex.bitrix24.kz/rest/1/i6xone91ekpq399a/crm.lead.add.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            TITLE: `Saytdan lead — ${formData.name}`,
            NAME: formData.name,
            PHONE: [{ VALUE: formData.phone, VALUE_TYPE: "WORK" }],
            COMMENTS: `Xabar: ${formData.message}\nDavlatlar: ${selectedCountries}`,
            SOURCE_ID: "WEB"
          }
        })
      });

      toast.success(
          language === 'uz'
              ? "Xabaringiz foydalanish uchun qabul qilindi!"
              : "Ваш запрос успешно отправлен!"
      );

      setFormData({ name: "", phone: "", message: "", countries: [] });

    } catch (error) {
      console.error("Xato:", error);
      toast.error(
          language === 'uz'
              ? "Xatolik yuz berdi. Keyinroq urinib ko'ring."
              : "Произошла ошибка. Попробуйте позже."
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountryChange = (countryValue: string) => {
    setFormData(prev => ({
      ...prev,
      countries: prev.countries.includes(countryValue)
          ? prev.countries.filter(c => c !== countryValue)
          : [...prev.countries, countryValue]
    }));
  };

  return (
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
            >
              {/* Phone */}
              <div className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {t('contact.phone')}
                    </h3>
                    <a
                        href="tel:+998555118866"
                        className="text-sky-600 hover:text-sky-700 transition-colors text-lg"
                    >
                      +998 55 511 88 66
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {t('contact.address')}
                    </h3>
                    <a
                        href="https://www.google.com/maps?q=41.269436,69.257798"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      Toshkent, O'zbekiston
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {t('footer.workingHours')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('footer.workingHours.time')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {t('contact.consultation')}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                        required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.phoneNumber')}
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                        required
                    />
                  </div>

                  {/* Countries Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      <Globe className="w-4 h-4 inline mr-2" />
                      {language === 'uz' ? "Qaysi davlatlarda ishlamoqchisiz?" : "В каких странах хотите работать?"}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {countryOptions.map((country) => (
                          <label
                              key={country.value}
                              className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                                  formData.countries.includes(country.value)
                                      ? 'bg-sky-50 dark:bg-sky-900/20 border-sky-500 text-sky-700 dark:text-sky-300'
                                      : 'bg-white/60 dark:bg-gray-800/60 border-gray-200 dark:border-gray-600 hover:border-sky-300'
                              }`}
                          >
                            <input
                                type="checkbox"
                                checked={formData.countries.includes(country.value)}
                                onChange={() => handleCountryChange(country.value)}
                                className="sr-only"
                            />
                            <div
                                className={`w-4 h-4 rounded border mr-3 flex items-center justify-center ${
                                    formData.countries.includes(country.value)
                                        ? 'bg-sky-500 border-sky-500'
                                        : 'border-gray-300 dark:border-gray-600'
                                }`}
                            >
                              {formData.countries.includes(country.value) && (
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                              )}
                            </div>
                            <span className="text-sm font-medium">{country.label}</span>
                          </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                        required
                    />
                  </div>

                  <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                  >
                    {t('contact.send')}
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>

                {/* Additional contact info */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {language === 'uz' ? "Yoki to'g'ridan-to'g'ri bog'laning:" : "Или свяжитесь с нами напрямую:"}
                  </p>
                  <div className="flex justify-center space-x-6 mt-4">
                    <a
                        href="tel:+998555118866"
                        className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{language === 'uz' ? "Qo'ng'iroq qilish" : "Позвонить"}</span>
                    </a>
                    <a
                        href="https://t.me/jobex_uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span className="text-sm">Telegram</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};