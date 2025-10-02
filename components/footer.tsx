import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Send, Clock, Facebook, Music2Icon } from 'lucide-react';
import { useLanguage } from './language-context.tsx';
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'directions', href: '#directions' },
    { key: 'news', href: '#news' },
    { key: 'contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <footer className="bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
            >
              <div className="mb-4">
                <ImageWithFallback
                    src="/logo.png"
                    alt="JobEx Logo"
                    className="h-10 w-auto dark:filter dark:brightness-110"
                />
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                {t('footer.description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-sky-400" />
                  <a href="tel:+998950057500" className="text-gray-300 hover:text-white transition-colors">
                    +998 95 005 75 00
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-sky-400" />
                  <a
                      href="https://www.google.com/maps?q=41.269436,69.257798"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                  >
                    Toshkent, O'zbekiston
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                    <button
                        key={link.key}
                        onClick={() => scrollToSection(link.href)}
                        className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {t(`nav.${link.key}`)}
                    </button>
                ))}
              </nav>
            </motion.div>

            {/* Working Hours */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">{t('footer.workingHours')}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-sky-400" />
                  <span className="text-gray-400">{t('footer.workingHours.time')}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form + Map */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-2 gap-8 mt-12"
          >
            {/* Form */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
              <form className="space-y-4">
                <input type="text" placeholder={t('contact.name')} className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700" />
                <input type="tel" placeholder={t('contact.phoneNumber')} className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700" />
                <textarea placeholder={t('contact.message')} rows={4} className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700"></textarea>
                <button type="submit" className="w-full py-3 bg-sky-500 hover:bg-sky-600 rounded-lg text-white transition-colors">
                  {t('form.send')}
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5280.868769241426!2d69.25557419624712!3d41.26643152612592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b989f0f0a6d%3A0x5024b774f875bfc4!2sJOBEX%20XUSUSIY%20BANDLIK%20AGENTLIGI!5e0!3m2!1sru!2s!4v1759411316689!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </motion.div>

          {/* Bottom Bar */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-gray-800 pt-8 mt-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

              <p className="text-gray-400 text-sm">
                {t('footer.rights')}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/jobex.uz?igsh=MWw0dm94MWdtOXlveA==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="https://t.me/jobex_uz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                  <Send className="w-4 h-4 text-white" />
                </a>
                <a href="https://www.facebook.com/share/1CCXRpgTJV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="https://www.tiktok.com/@jobex.uz?_t=ZS-8zkSt1bpi8Q&_r=1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-black rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                  <Music2Icon className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
  );
};
