import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, MessageCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'منظم كهرباء 5000 واط',
    description: 'منظم عالي الكفاءة لحماية أجهزتك الدقيقة من تقلبات التيار الكهربائي المفاجئة.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    tag: 'حماية'
  },
  {
    id: 2,
    title: 'لوح طاقة شمسية 550W',
    description: 'ألواح مونوكريستالين عالية الكفاءة مع ضمان الجودة والأداء الممتاز.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
    tag: 'طاقة بديلة'
  },
  {
    id: 3,
    title: 'كاميرا مراقبة خارجية ذكية',
    description: 'كاميرا لاسلكية مقاومة للعوامل الجوية مع رؤية ليلية وتنبيهات الحركة.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
    tag: 'أمان'
  },
  {
    id: 4,
    title: 'بطارية ليثيوم 200 أمبير 24 فولت من NEW POWER',
    description: 'بطارية ليثيوم عالية الجودة بمواصفات ممتازة وعمر افتراضي طويل لتخزين الطاقة بفعالية عالية.',
    image: 'https://www.image2url.com/r2/default/images/1776928864700-11be5522-cf8a-4066-8968-3d611cd58757.png',
    tag: 'تخزين'
  },
  {
    id: 5,
    title: 'طقم أدوات صيانة متكامل',
    description: 'حقيبة أدوات احترافية للكهرباء والصيانة الخفيفة ذات جودة ممتازة.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop',
    tag: 'عدد مهنية'
  },
  {
    id: 6,
    title: 'جهاز إنذار واختراق متطور',
    description: 'نظام حماية منزلي وتجاري شامل يرسل إنذارات فورية على الهاتف.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    tag: 'أمان'
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-primary/10 rounded-2xl sm:rounded-3xl mb-6">
            <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          </div>
          <h2 className="text-4xl font-black text-primary-dark mb-4">متجر منتجاتنا</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            اطلب أفضل القطع والأدوات والأجهزة الإلكترونية بأسعار تنافسية وضمان موثوق، وتواصل معنا مباشرة للطلب بسرعة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            // Encode the pre-written WhatsApp message
            const whatsappMessage = encodeURIComponent(`مرحباً شركة النجوم، أود الاستفسار عن طلب هذا المنتج: ${product.title}`);
            const whatsappUrl = `https://wa.me/963996761176?text=${whatsappMessage}`;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,71,255,0.1)] transition-all duration-300 group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {product.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary-dark mb-2">{product.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-gray-50 border border-gray-200 text-primary-dark font-bold flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all group/btn"
                  >
                    <MessageCircle className="w-5 h-5 text-green-500 group-hover/btn:text-white transition-colors" />
                    <span>اطلب عبر واتساب</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
