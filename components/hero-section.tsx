import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle, Users, Globe, Shield } from 'lucide-react';
import { Button } from './ui/button.tsx';
import { useLanguage } from './language-context.tsx';
import { ImageWithFallback } from './figma/ImageWithFallback.tsx';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-sky-400/10 to-blue-600/10 dark:from-sky-600/10 dark:to-blue-800/10"></div>
      </div>

      {/* Glass Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full border border-white/20"
              >
                <CheckCircle className="w-4 h-4 text-sky-600 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('about.verified')}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-400"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 dark:hover:bg-sky-950 px-8 py-3 rounded-xl backdrop-blur-md bg-white/60 dark:bg-gray-800/60"
                asChild
              >
                <a href="tel:+998950057500" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('hero.phone')}
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-600">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Mijozlar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-600">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Mamlakatlar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-600">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Yil tajriba</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            <div className="grid gap-6">
              {/* Main large image */}
              <div className="relative z-10">
                <div className="backdrop-blur-md bg-white/10 dark:bg-gray-800/10 rounded-3xl p-6 border border-white/20">
                  <ImageWithFallback
                    // src="https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTcyNzg0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    src="/m.jpg"
                    alt="International business team meeting"
                    className="w-full h-80 md:h-96 object-cover rounded-2xl"
                  />
                  
                  {/* Floating cards */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
                  >
                    <div className="flex items-center space-x-2">
                      <Users className="w-6 h-6 text-sky-600" />
                      <div>
                        <div className="text-sm font-medium">1000+</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Mijozlar</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
                  >
                    <div className="flex items-center space-x-2">
                      <Shield className="w-6 h-6 text-green-600" />
                      <div>
                        <div className="text-sm font-medium">100%</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Rasmiy</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};