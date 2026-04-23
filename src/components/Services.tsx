import React from 'react';
import { motion } from 'motion/react';
import { Sun, ShieldAlert, MonitorPlay, Wrench, GraduationCap, Cpu } from 'lucide-react';

const services = [
  {
    title: 'الطاقة الشمسية',
    description: 'تركيب أنظمة الطاقة الشمسية باحترافية عالية وأجود الأدوات والمعدات لضمان كفاءة مستدامة.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
    color: 'from-orange-400 to-yellow-400'
  },
  {
    title: 'أنظمة المراقبة',
    description: 'كاميرات مراقبة عالية الدقة مع تسجيل ومراقبة عن بعد لحماية ممتلكاتك على مدار الساعة.',
    icon: MonitorPlay,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'حماية المنازل والإنذار',
    description: 'أنظمة إنذار متطورة لحماية المنازل من السرقة والاختراق مع تنبيهات فورية.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
    color: 'from-red-500 to-rose-400'
  },
  {
    title: 'صيانة إلكترونية ودعم فني',
    description: 'كادر هندسي مختص لصيانة جميع القطع والأدوات الإلكترونية لتقديم الدعم الفني داخل الشركة وميدانياً.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    color: 'from-purple-500 to-indigo-400'
  },
  {
    title: 'الأدوات والمفكات',
    description: 'توفير جميع أنواع المفكات والأدوات الكهربائية واليدوية عالية الجودة للمهنيين.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2143&auto=format&fit=crop',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    title: 'دورات تدريبية احترافية',
    description: 'تأهيل كامل للشباب لسوق العمل من أساسيات الكهرباء وحتى احتراف تركيب أنظمة الطاقة الشمسية.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop',
    color: 'from-primary to-blue-400'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-primary-dark mb-4">خدماتنا</h2>
          <p className="text-gray-600 text-lg">
            نقدم مجموعة واسعة من الخدمات الإلكترونية والطاقة الشمسية بأعلى درجات الموثوقية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,71,255,0.08)] transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className={`absolute top-4 right-4 z-20 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg`}>
                  <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-[10px] flex items-center justify-center text-white">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                <span>اطلب الخدمة</span>
                <span className="mr-2">←</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
