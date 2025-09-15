import React from 'react';
import { motion } from 'framer-motion';
import { Building, Factory, Truck, Coffee, Code, Wheat } from 'lucide-react';
import { useLanguage } from './language-context.tsx';

export const DirectionsSection: React.FC = () => {
  const { t } = useLanguage();

  const directions = [
    {
      icon: Building,
      title: t('directions.construction'),
      description: t('directions.construction.desc'),
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Factory,
      title: t('directions.production'),
      description: t('directions.production.desc'),
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Truck,
      title: t('directions.logistics'),
      description: t('directions.logistics.desc'),
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Coffee,
      title: t('directions.services'),
      description: t('directions.services.desc'),
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Code,
      title: t('directions.it'),
      description: t('directions.it.desc'),
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Wheat,
      title: t('directions.agriculture'),
      description: t('directions.agriculture.desc'),
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
      <section id="directions" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              {t('directions.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('directions.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directions.map((direction, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                >
                  <div className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/20 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-300 hover:shadow-lg hover:shadow-sky-100 dark:hover:shadow-sky-900/20 hover:-translate-y-1 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${direction.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <direction.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {direction.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {direction.description}
                    </p>

                  </div>
                </motion.div>
            ))}
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 backdrop-blur-md bg-sky-50/60 dark:bg-sky-900/20 rounded-3xl p-8 border border-sky-200/20"
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-sky-600 mb-2">1000+</div>
                <div className="text-gray-600 dark:text-gray-400">{t('directions.stats.employed')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-600 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">{t('directions.stats.countries')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">{t('directions.stats.partners')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-600 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-400">{t('directions.stats.success')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};
