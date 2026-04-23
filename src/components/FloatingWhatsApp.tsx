import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/963996761176"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] w-16 h-16 bg-[#25D366] hover:bg-[#1ebe57] shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] rounded-full flex items-center justify-center transition-all hover:-translate-y-1 group"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-8 h-8 text-white fill-current" />
      
      {/* Tooltip */}
      <span className="absolute left-full ml-4 xl:-translate-x-0 rtl:right-full rtl:mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        تواصل معنا
        {/* Arrow */}
        <span className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900 rtl:border-l-transparent rtl:border-r-gray-900 rtl:left-full rtl:right-auto" />
      </span>
      
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
};
