import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Star } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'من نحن', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-b from-white to-gray-100 shadow-[0_6px_12px_rgba(0,71,255,0.15),inset_0_-3px_6px_rgba(0,0,0,0.05),inset_0_3px_6px_rgba(255,255,255,1)] border border-gray-200/50 p-1.5 transition-transform hover:scale-105 duration-300 group">
            <div className="absolute inset-0 rounded-full border border-white/50" />
            <img 
              src="https://www.image2url.com/r2/default/images/1776928860784-c05be533-ce95-4f9a-a666-c60c84f1e5ac.png" 
              alt="شركة النجوم" 
              className="w-full h-full object-contain drop-shadow-[0_3px_4px_rgba(0,0,0,0.2)] group-hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.3)] transition-all duration-300 relative z-10" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary-dark leading-none">شركة النجوم</span>
            <span className="text-[0.65rem] text-gray-500 font-semibold mt-1">للخدمات الإلكترونية والطاقة</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-primary-dark font-medium hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="https://wa.me/963996761176" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-blue-700 transition-all shadow-[0_4px_14px_rgba(0,71,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,71,255,0.23)] hover:-translate-y-[1px]"
          >
            <Phone className="w-4 h-4" />
            <span>طلب خدمة الآن</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass shadow-lg border-t border-gray-100 flex flex-col p-6 gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-primary-dark border-b border-gray-100 pb-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/963996761176"
              className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-bold mt-2"
            >
              <Phone className="w-5 h-5" />
              <span>طلب خدمة الآن</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
