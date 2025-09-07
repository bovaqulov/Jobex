import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from './language-context.tsx';
import { ImageWithFallback } from './figma/ImageWithFallback.tsx';
import { testimonialsData } from '../data/testimonials.ts';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useLanguage();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-white/20 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-300 hover:shadow-xl hover:shadow-sky-100 dark:hover:shadow-sky-900/20 relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-sky-400/30" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    "{testimonial.comment[language]}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position[language]} • {testimonial.country[language]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}

      </div>
    </section>
  );
};