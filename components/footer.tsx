import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Send, Clock, Facebook, Music2Icon } from 'lucide-react';
import { useLanguage } from './language-context.tsx';
import {ImageWithFallback} from "./figma/ImageWithFallback.tsx";

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

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
                <a href="tel:+998555118866" className="text-gray-300 hover:text-white transition-colors">
                  +998 55 511 88 66
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sky-400" />
                <a
                  href="https://maps.app.goo.gl/TCwRPnqgx9pAjovv9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Toshkent shahar, Yakkasaroy tumani, Kichik xalqa yo’li 8A
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

          {/* Working Hours & Social */}
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

            <h4 className="text-lg font-semibold mb-4">{language == "uz" ? "Ijtimoiy tarmoqlar" : "Социальные сети" }</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/jobex.uz?igsh=MWw0dm94MWdtOXlveA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://t.me/jobex_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://www.facebook.com/share/1CCXRpgTJV/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@jobex.uz?_t=ZS-8zkSt1bpi8Q&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Music2Icon className="w-5 h-5 text-white" />
              </a>

            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer.rights')}
            </p>

          </div>
        </motion.div>
      </div>
    </footer>
  );
};