import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Headphones, FileCheck } from 'lucide-react';
import { useLanguage } from './language-context.tsx';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: CheckCircle,
      title: t('about.verified'),
      description: t('about.verified_desc'),
    },
    {
      icon: FileCheck,
      title: t('about.official'),
      description: t('about.official_desc'),
    },
    {
      icon: Headphones,
      title: t('about.support'),
      description: t('about.support_desc'),
    },
    {
      icon: Users,
      title: t('about.consultation'),
      description: t('about.consultation_desc'),
    },
  ];

  return (
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                >
                  <div className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/20 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-300 hover:shadow-lg hover:shadow-sky-100 dark:hover:shadow-sky-900/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Additional info */}
          {/*<motion.div*/}
          {/*    initial={{ opacity: 0, y: 20 }}*/}
          {/*    whileInView={{ opacity: 1, y: 0 }}*/}
          {/*    viewport={{ once: true }}*/}
          {/*    transition={{ duration: 0.6, delay: 0.4 }}*/}
          {/*    className="mt-16 text-center"*/}
          {/*>*/}
          {/*  <div className="backdrop-blur-md bg-sky-50/60 dark:bg-sky-900/20 rounded-2xl p-8 border border-sky-200/20">*/}
          {/*    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">*/}
          {/*      {t('about.unique_title')}*/}
          {/*    </h3>*/}
          {/*    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">*/}
          {/*      <div className="text-center">*/}
          {/*        <div className="text-lg font-medium text-gray-900 dark:text-white">*/}
          {/*          {t('about.unique_1')}*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="text-center">*/}
          {/*        <div className="text-lg font-medium text-gray-900 dark:text-white">*/}
          {/*          {t('about.unique_2')}*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="text-center">*/}
          {/*        <div className="text-lg font-medium text-gray-900 dark:text-white">*/}
          {/*          {t('about.unique_3')}*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="text-center">*/}
          {/*        <div className="text-lg font-medium text-gray-900 dark:text-white">*/}
          {/*          {t('about.unique_4')}*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</motion.div>*/}
        </div>
      </section>
  );
};
