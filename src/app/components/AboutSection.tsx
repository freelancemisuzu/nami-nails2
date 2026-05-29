import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import dannyGreenbergImg from "../../assets/danny-greenberg-LtbH3-yD5ms-unsplash.jpg";
import alecPastelImg from "../../assets/alec-pastel-GNi0L_1Al00-unsplash.jpg";

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 px-6 bg-[#EDE7DC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-[2.0rem] sm:text-[2.8rem] md:text-[3.8rem] mb-6 tracking-tight font-medium text-[#2A2520] whitespace-pre-line"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t('about.title')}
            </h2>
            <div className="space-y-6" style={{ fontFamily: "'Cormorant', serif" }}>
              <p className="text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] leading-relaxed tracking-wide text-[#2A2520] whitespace-pre-line">
                {t('about.p1')}
              </p>
              <p className="text-[0.9375rem] sm:text-[1rem] md:text-[1.0625rem] leading-relaxed tracking-wide text-[#6B6762] whitespace-pre-line">
                {t('about.p2')}
              </p>
              <p className="text-[0.9375rem] sm:text-[1rem] md:text-[1.0625rem] leading-relaxed tracking-wide text-[#6B6762] whitespace-pre-line">
                {t('about.p3')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden aspect-[3/4]">
                <ImageWithFallback
                  src={dannyGreenbergImg}
                  alt="Our Salon Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden aspect-[3/4] mt-12">
                <ImageWithFallback
                  src={alecPastelImg}
                  alt="Salon Details"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
