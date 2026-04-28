import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, MessageSquare, Facebook, Instagram } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'طاقة شمسية',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, service, details } = formData;
    
    const text = `مرحباً شركة النجوم، طلب خدمة جديد من الموقع:
👤 الاسم: ${name || 'غير محدد'}
📞 رقم الهاتف: ${phone || 'غير محدد'}
🔧 نوع الخدمة: ${service}
📝 تفاصيل الطلب:
${details || 'لا يوجد تفاصيل إضافية'}`;

    const whatsappUrl = `https://wa.me/963996761176?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary-dark rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-luminosity" />

          <div className="relative z-10 grid lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-12 lg:p-16 flex flex-col justify-between text-white">
              <div>
                <h2 className="text-4xl font-black mb-6 leading-tight">
                  جاهزون لخدمتك،<br />
                  في أي وقت وأي مكان.
                </h2>
                <p className="text-gray-300 text-lg mb-10 max-w-md">
                  تواصل معنا للحصول على استشارة مجانية أو لطلب خدمة. فريقنا مستعد للرد على جميع استفساراتك.
                </p>

                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <Phone className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-blue-300 font-medium mb-1 text-sm">اتصل بنا</h4>
                      <p className="text-xl font-bold text-right" dir="ltr">099 676 1176</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <MapPin className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-blue-300 font-medium mb-1 text-sm">العنوان</h4>
                      <p className="text-lg font-bold">سوريا - محافظة اللاذقية - مدينة جبلة</p>
                      <p className="text-gray-400 text-sm mt-1">خدمة سريعة في جميع مناطق جبلة واللاذقية</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/963996761176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-1"
                >
                  <MessageSquare className="w-6 h-6" />
                  اطلب الآن عبر واتساب
                </a>
                
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.facebook.com/share/1Agfi4mQib/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-blue-600 hover:border-transparent transition-all shadow-sm hover:-translate-y-1"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/stars_electronic_services?igsh=MnR1ZmI4ZXF0dnA5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:border-transparent transition-all shadow-sm hover:-translate-y-1"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-12 lg:p-16 rounded-tl-[2.5rem] lg:rounded-bl-none rounded-bl-[2.5rem] lg:rounded-[2.5rem] m-2 lg:m-4 shadow-inner">
              <h3 className="text-2xl font-bold text-primary-dark mb-8">أرسل لنا رسالة</h3>
              
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">الاسم الكريم</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك"
                      className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-800"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">رقم الهاتف</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09XX XXX XXX"
                      dir="ltr"
                      className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-800 text-right"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">نوع الخدمة المكتوبة</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-800 cursor-pointer"
                  >
                    <option value="طاقة شمسية">طاقة شمسية</option>
                    <option value="أنظمة مراقبة">أنظمة مراقبة</option>
                    <option value="حماية وإنذار">حماية وإنذار</option>
                    <option value="أنظمة صواعق">أنظمة صواعق</option>
                    <option value="أدوات ومفكات">أدوات ومفكات</option>
                    <option value="استشارة عامة">استشارة عامة</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">تفاصيل الطلب</label>
                  <textarea 
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="اكتب تفاصيل طلبك أو استفسارك هنا..."
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-800 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="bg-primary text-white font-bold py-4 rounded-xl mt-2 hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20"
                >
                  إرسال الطلب
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
