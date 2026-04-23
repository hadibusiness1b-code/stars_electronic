import React from 'react';
import { Star } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary-dark pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#05132d] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-white to-gray-200 shadow-[0_4px_10px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] p-1.5 transition-transform hover:scale-105 duration-300">
                <img 
                  src="https://www.image2url.com/r2/default/images/1776928860784-c05be533-ce95-4f9a-a666-c60c84f1e5ac.png" 
                  alt="شركة النجوم" 
                  className="w-full h-full object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" 
                />
              </div>
              <span className="text-2xl font-bold text-white">شركة النجوم</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-8">
              الشركة الرائدة في مجال الخدمات الإلكترونية، الطاقة الشمسية، وأنظمة الحماية في محافظة اللاذقية ومدينة جبلة. الجودة والاحترافية هما عنواننا.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="flex flex-col gap-3">
              {['الرئيسية', 'خدماتنا', 'مشاريعنا', 'من نحن', 'اتصل بنا'].map((link) => (
                <li key={link}>
                  <a href={`#${link === 'الرئيسية' ? 'home' : link === 'اتصل بنا' ? 'contact' : link === 'مشاريعنا' ? 'projects' : link === 'خدماتنا' ? 'services' : 'about'}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">خدماتنا</h4>
            <ul className="flex flex-col gap-3">
              {['الطاقة الشمسية', 'كاميرات المراقبة', 'أنظمة الإنذار', 'مانعات الصواعق', 'الأدوات الكهربائية'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} شركة النجوم للخدمات الإلكترونية. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
             <span>تصميم وتطوير بواسطة AI Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
