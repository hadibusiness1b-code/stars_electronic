import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, HandHeart, CheckCircle, MessageCircle, ArrowLeft, Facebook, Instagram } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-primary-light/30 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-300/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Right Side (Text Content - RTL) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 bg-primary-light/50 px-4 py-2 rounded-full border border-blue-100 self-start">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">الرواد في جبلة واللاذقية</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-primary-dark leading-[1.1] tracking-tight">
            شركة النجوم
            <span className="block text-3xl lg:text-5xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              للخدمات الإلكترونية والطاقة الشمسية
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            نقدم حلولاً إلكترونية متكاملة بأعلى معايير الجودة والاحترافية. من أنظمة الطاقة الشمسية المتطورة إلى المراقبة الأمنية وحماية المنازل، نلبي كافة احتياجاتك بثقة وأمان.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="https://wa.me/963996761176"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل عبر واتساب
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white text-primary-dark border-2 border-gray-100 px-8 py-3.5 rounded-full font-bold text-lg hover:border-primary/20 hover:bg-gray-50 transition-all"
            >
              اطلب خدمة الآن
              <ArrowLeft className="w-5 h-5" />
            </a>
            
            <div className="flex items-center gap-3 mr-2">
              <a 
                href="https://www.facebook.com/share/1Agfi4mQib/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/stars_electronic_services?igsh=MnR1ZmI4ZXF0dnA5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
            {[
              { text: 'جودة عالية', icon: ShieldCheck },
              { text: 'أسعار مناسبة', icon: HandHeart },
              { text: 'ضمان موثوق', icon: CheckCircle },
              { text: 'خدمة احترافية', icon: Zap },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-primary-dark">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Left Side (3D Product Hero Images) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-1 lg:order-2 h-[400px] lg:h-[600px] w-full flex items-center justify-center"
        >
          {/* Main 3D Composition Placeholder - we'll use a layered approach with unsplash images to simulate the 3D tech feel */}
          <div className="relative w-full h-full max-w-md mx-auto">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[60px]" />
            
            {/* Solar Panel */}
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
              alt="Solar Panels"
              className="absolute top-[10%] right-[10%] w-[60%] rounded-2xl shadow-2xl border border-white/20 object-cover h-48 z-10"
              style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)' }}
            />
            
            {/* Security Camera */}
            <motion.img 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
              alt="CCTV"
              className="absolute top-[40%] text-white left-[0%] w-[45%] rounded-2xl shadow-2xl border border-white/20 object-cover h-40 z-20"
              style={{ transform: 'perspective(1000px) rotateY(15deg) rotateX(-5deg)' }}
            />
            
            {/* Maintenance / Repair */}
            <motion.img 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
              alt="Repair and Maintenance"
              className="absolute bottom-[10%] right-[20%] w-[50%] rounded-2xl shadow-2xl border border-white/20 object-cover h-36 z-30"
              style={{ transform: 'perspective(1000px) rotateY(-10deg) rotateX(20deg)' }}
            />
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[25%] left-[5%] bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl flex items-center gap-3 z-40 border border-white"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-left rtl:text-right">
                <p className="text-xs font-bold text-gray-800">طاقة نظيفة</p>
                <p className="text-[10px] text-gray-500">كفاءة 100%</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
