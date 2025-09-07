import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from './language-context.tsx';
import { ImageWithFallback } from './figma/ImageWithFallback.tsx';
import { newsData } from '../data/news.ts';

export const NewsSection: React.FC = () => {
  const { language, t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString(language === 'uz' ? 'uz-UZ' : 'ru-RU', options);
  };

  return (
    <section id="news" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            {t('news.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('news.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden border border-white/20 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-300 hover:shadow-xl hover:shadow-sky-100 dark:hover:shadow-sky-900/20 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={news.image}
                    alt={news.title[language]}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(news.date)}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-sky-600 transition-colors">
                    {news.title[language]}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {news.excerpt[language]}
                  </p>
                  
                  <div className="flex items-center text-sky-600 group-hover:text-sky-700 transition-colors">
                    <span className="text-sm font-medium">{t('news.readMore')}</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};