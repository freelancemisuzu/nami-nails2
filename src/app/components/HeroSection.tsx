import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { useLanguage } from "../context/LanguageContext";
import heroBg from "../../assets/hero_bg.jpg";

export default function HeroSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src={heroBg}
          alt="Luxury nail salon experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F1E8]" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-5xl"
        >
          <h1
            className="text-[2rem] min-[400px]:text-[2.4rem] sm:text-[4.2rem] md:text-[5.8rem] lg:text-[7.2rem] xl:text-[8.5rem] tracking-tight mb-4 whitespace-nowrap font-medium text-[#2A2520]"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.0" }}
          >
            {t('hero.title')}
          </h1>
          <p
            className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] text-[#2A2520] max-w-2xl mx-auto tracking-widest px-4"
            style={{ fontFamily: "'Cormorant', serif", letterSpacing: "0.15em" }}
          >
            {t('hero.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
