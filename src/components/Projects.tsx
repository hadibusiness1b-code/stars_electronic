import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const projects = [
  {
    title: "تركيب ألواح طاقة شمسية لمعمل",
    category: "طاقة شمسية",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
  },
  {
    title: "نظام مراقبة متكامل لفيلا",
    category: "أنظمة أمنية",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "صناعة منظمات كهربائية لإدارة الكهرباء من الارتفاع والنزول الحاد",
    category: "حماية كهربائية",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "تقديم دعم صياني فوري 24/7",
    category: "دعم فني وصيانة",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-primary-dark mb-4">أحدث مشاريعنا</h2>
            <p className="text-gray-600 text-lg">
              نفخر بتقديم أفضل الحلول لعملائنا في جبلة واللاذقية، تصفح بعضاً من أعمالنا المنجزة باحترافية وتفانٍ.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            <span>جميع المشاريع</span>
            <ArrowLeft className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
