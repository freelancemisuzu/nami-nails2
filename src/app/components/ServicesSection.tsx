import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import nailArtImg from "../../assets/nail_art.jpg";
import oneColorImg from "../../assets/one_color_v2.jpg";
import frenchNailImg from "../../assets/pexels-pexels-user-101154924-9393757.jpg";
import gelExtensionImg from "../../assets/rayana-sales-3EqQIavMRnE-unsplash.jpg";
import naturalCareImg from "../../assets/natural_care.jpg";
import footGelImg from "../../assets/foot_gel_v2.jpg";
import basicNailsImg from "../../assets/basic_nails.jpg";

const renderWithNumberFont = (text: string) => {
  const parts = text.split(/(\d[\d,.]*)/g);
  return parts.map((part, index) => {
    if (/^\d[\d,.]*$/.test(part)) {
      return (
        <span key={index} style={{ fontFamily: "'Inter', sans-serif" }}>
          {part}
        </span>
      );
    }
    return part;
  });
};

export default function ServicesSection() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      ...t('services.list')[0],
      image: oneColorImg,
    },
    {
      ...t('services.list')[1],
      image: gelExtensionImg,
    },
    {
      ...t('services.list')[2],
      image: nailArtImg,
    },
    {
      ...t('services.list')[3],
      image: frenchNailImg,
    },
    {
      ...t('services.list')[4],
      image: naturalCareImg,
    },
    {
      ...t('services.list')[5],
      image: footGelImg,
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[2.2rem] sm:text-[3.2rem] md:text-[4.5rem] mb-12 tracking-tight font-medium text-[#2A2520]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t('services.heading')}
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-3 md:mb-6">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  animate={{
                    backgroundColor: hoveredIndex === index ? "rgba(159, 168, 144, 0.15)" : "rgba(159, 168, 144, 0)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    <h3
                      className="text-[1rem] sm:text-[1.5rem] md:text-[1.75rem] tracking-tight leading-tight"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <span
                      className="text-[0.85rem] sm:text-[1rem] md:text-[1.1rem] flex-shrink-0 font-medium"
                      style={{ fontFamily: "'Cormorant', serif" }}
                    >
                      {renderWithNumberFont(service.price)}
                    </span>
                  </div>
                  <div className="text-[0.75rem] sm:text-[0.875rem] text-[#6B6762] tracking-widest uppercase font-bold opacity-80" style={{ fontFamily: "'Cormorant', serif" }}>
                    {renderWithNumberFont(service.duration)}
                  </div>
                </div>
                <p
                  className="text-[#6B6762] tracking-wide text-[0.75rem] sm:text-[0.875rem] md:text-[0.95rem] leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: "'Cormorant', serif", letterSpacing: "0.05em" }}
                >
                  {renderWithNumberFont(service.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div 
            className="mb-8 text-[#6B6762] text-[0.85rem] sm:text-[0.95rem] leading-relaxed whitespace-pre-line"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {t('services.notice')}
          </div>
          <motion.a
            href="https://beauty.hotpepper.jp/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-3 bg-transparent border-2 border-[#4A3E31] text-[#4A3E31] hover:bg-[#4A3E31] hover:text-[#F5F1E8] transition-all duration-300 text-[1.1rem] tracking-wider font-medium text-center"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {t('services.bookNow')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
