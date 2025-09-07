import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Send, Clock } from 'lucide-react';
import { Button } from './ui/button.tsx';
import { useLanguage } from './language-context.tsx';
import { toast } from 'sonner';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Telegram bot orqali xabar yuborish (demo)
    const message = `🔔 Yangi so'rov!\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n💬 Xabar: ${formData.message}`;
    
    // Demo uchun - haqiqiy telegram bot integration qo'shish mumkin
    console.log('Form submitted:', formData);
    console.log('Telegram message:', message);
    
    // Success message
    toast.success(
      language === 'uz' 
        ? 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.' 
        : 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
    );
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                    href="tel:+998950057500"
                    className="text-sky-600 hover:text-sky-700 transition-colors text-lg"
                  >
                    +998 95 005 75 00
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

            {/* Social Media */}
            <div className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                {t('contact.social')}
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/jobex.uz?igsh=MWw0dm94MWdtOXlveA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://t.me/jobex_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Send className="w-6 h-6 text-white" />
                </a>
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
                  Или свяжитесь с нами напрямую:
                </p>
                <div className="flex justify-center space-x-6 mt-4">
                  <a
                    href="tel:+998950057500"
                    className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Позвонить</span>
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