import React from 'react';
import { motion } from 'motion/react';
import { Users, CheckCircle, Clock, Headset } from 'lucide-react';

const stats = [
  { value: '500+', label: 'مشروع مكتمل', icon: CheckCircle },
  { value: '1000+', label: 'عميل سعيد', icon: Users },
  { value: '20+', label: 'سنة خبرة', icon: Clock },
  { value: '24/7', label: 'دعم فني متواصل', icon: Headset },
];

export const Stats = () => {
  return (
    <section className="relative py-16 bg-gradient-to-l from-primary to-primary-dark overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-x-reverse divide-white/20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <stat.icon className="w-8 h-8 text-blue-200 mb-4 opacity-80" />
              <h4 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                {stat.value}
              </h4>
              <p className="text-blue-100 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
