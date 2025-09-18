import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { Button } from './ui/button.tsx';
import { useLanguage } from './language-context.tsx';
import { useTheme } from './theme-provider.tsx';
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navItems = [
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
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-2 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-white/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button onClick={scrollToTop} className="flex items-center hover:opacity-80 transition-opacity">
                <ImageWithFallback
                    src="/logo.png"
                    alt="JobEx Logo"
                    className="h-10 w-auto dark:filter dark:brightness-110"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <button
                      key={item.key}
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200"
                  >
                    {t(`nav.${item.key}`)}
                  </button>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-1 bg-white/60 dark:bg-gray-800/60 rounded-lg p-1">
                <button
                    onClick={() => setLanguage('uz')}
                    className={`px-2 py-1 rounded text-sm font-medium transition-all ${
                        language === 'uz'
                            ? 'bg-sky-500 text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:text-sky-600'
                    }`}
                >
                  UZ
                </button>
                <button
                    onClick={() => setLanguage('ru')}
                    className={`px-2 py-1 rounded text-sm font-medium transition-all ${
                        language === 'ru'
                            ? 'bg-sky-500 text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:text-sky-600'
                    }`}
                >
                  RU
                </button>
              </div>

              {/* Theme Switcher */}
              <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="rounded-lg"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* Phone */}
              <a
                  href="tel:+998950057500"
                  className="hidden lg:flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+998 95 005 75 00</span>
              </a>

              {/* Mobile Menu Button */}
              <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg mt-2 p-4 border border-white/20"
              >
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                      <button
                          key={item.key}
                          onClick={() => scrollToSection(item.href)}
                          className="text-left text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 py-2"
                      >
                        {t(`nav.${item.key}`)}
                      </button>
                  ))}
                  <a
                      href="tel:+998950057500"
                      className="flex items-center space-x-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors mt-4"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+998 95 005 75 00</span>
                  </a>
                </nav>
              </motion.div>
          )}
        </div>
      </motion.header>
  );
};