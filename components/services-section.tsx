import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Shield, Briefcase, Heart } from 'lucide-react';
import { useLanguage } from './language-context.tsx';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: GraduationCap,
      title: t('services.training'),
      description: t('services.training.desc'),
      features: [
        t('services.training.feature1'),
        t('services.training.feature2'),
        t('services.training.feature3'),
      ],
    },
    {
      icon: Shield,
      title: t('services.insurance'),
      description: t('services.insurance.desc'),
      features: [
        t('services.insurance.feature1'),
        t('services.insurance.feature2'),
        t('services.insurance.feature3'),
      ],
    },
    {
      icon: Briefcase,
      title: t('services.placement'),
      description: t('services.placement.desc'),
      features: [
        t('services.placement.feature1'),
        t('services.placement.feature2'),
        t('services.placement.feature3'),
      ],
    },
    {
      icon: Heart,
      title: t('services.adaptation'),
      description: t('services.adaptation.desc'),
      features: [
        t('services.adaptation.feature1'),
        t('services.adaptation.feature2'),
        t('services.adaptation.feature3'),
      ],
    },
  ];

  return (
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                >
                  <div className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 rounded-3xl p-8 border border-white/20 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-300 hover:shadow-xl hover:shadow-sky-100 dark:hover:shadow-sky-900/20 h-full">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" aria-hidden />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mt-4">
                      {service.features.map((feature, fi) => (
                          <div key={fi} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Additional advantages */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
              {t('advantages.title')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 text-center border border-white/20">
                <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {t('advantages.insurance')}
                </div>
              </div>
              <div className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 text-center border border-white/20">
                <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {t('advantages.direct')}
                </div>
              </div>
              <div className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 text-center border border-white/20">
                <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {t('advantages.support24')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};
