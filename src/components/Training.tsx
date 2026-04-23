import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, ArrowLeft, Zap, Wrench, ShieldCheck, Award } from 'lucide-react';

export const Training = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-[#0A1F44] to-[#04122b] rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            
            {/* Content Side */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30 mb-6">
                  <GraduationCap className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-bold text-blue-100">أكاديمية النجوم للتدريب</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-[1.2]">
                  نؤهل الشباب الطموح لسوق العمل باحترافية
                </h2>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  نقدم دورات تدريبية متكاملة مصممة خصيصاً لتزويدك بالمهارات العملية، بدءاً من المبادئ الأساسية للكهرباء وصولاً إلى التركيب الاحترافي المتقدم لأنظمة الطاقة الشمسية.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { icon: Zap, text: 'أساسيات الكهرباء' },
                    { icon: SunIcon, text: 'تركيب الطاقة الشمسية' },
                    { icon: Wrench, text: 'تطبيق عملي 100%' },
                    { icon: Award, text: 'شهادة إتمام معتمدة' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 group"
                >
                  سجل في الدورة الآن
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="relative min-h-[400px] lg:min-h-full">
              {/* Overlay shadow to blend naturally into dark blue */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-transparent to-transparent z-10 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44] via-transparent to-transparent z-10 lg:hidden block" />
              
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
                alt="تدريب مهني على تركيب الطاقة الشمسية" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-8 left-8 lg:left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">محتوى عملي</p>
                  <p className="text-gray-300 text-xs">مطابق لسوق العمل</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted simple sun icon for the feature list
const SunIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);
