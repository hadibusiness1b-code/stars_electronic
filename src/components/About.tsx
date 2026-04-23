import React from 'react';
import { motion } from 'motion/react';
import { Target, Award, Shield } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100/50 px-4 py-2 rounded-full border border-blue-200 self-start">
              <span className="text-sm font-bold text-primary">من نحن</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-primary-dark leading-tight">
              شركة النجوم
              <span className="block mt-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                خبرة وثقة في كل تفصيل
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              تأسست شركة النجوم لتكون الرائدة في محافظة اللاذقية ومدينة جبلة في تقديم الحلول الإلكترونية المتكاملة وأنظمة الطاقة الشمسية. نحن نؤمن بأن الجودة والاحترافية هما أساس النجاح، ولذلك نحرص على استخدام أفضل المعدات وأحدث التقنيات في جميع مشاريعنا.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {[
                { icon: Target, title: 'رؤيتنا', desc: 'تقديم تقنيات مستدامة وموثوقة.' },
                { icon: Shield, title: 'مهمتنا', desc: 'توفير حماية كاملة وكفاءة عالية لعملائنا.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
              alt="فريق شركة النجوم" 
              className="w-full h-full object-cover"
            />
            {/* Elegant glass badge */}
            <div className="absolute bottom-8 right-8 glass p-6 rounded-2xl max-w-xs shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
              <Award className="w-10 h-10 text-primary mb-3" />
              <h4 className="text-xl font-bold text-primary-dark mb-1">الخيار الأول</h4>
              <p className="text-sm text-gray-700 font-medium">للجودة والاعتمادية في سوريا</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
