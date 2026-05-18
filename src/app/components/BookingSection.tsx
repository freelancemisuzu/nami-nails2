import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function BookingSection() {
  const { t } = useLanguage();
  return (
    <section className="py-32 px-6 bg-[#D4C4A8] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2
          className="text-[3rem] sm:text-[4.2rem] md:text-[5.8rem] lg:text-[7.2rem] mb-8 tracking-tight leading-none whitespace-pre-line font-medium text-[#2A2520]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t('booking.title')}
        </h2>
        <p
          className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] mb-12 tracking-wide text-[#2A2520]"
          style={{ fontFamily: "'Cormorant', serif", letterSpacing: "0.1em" }}
        >
          {t('booking.subtitle')}
        </p>
        <motion.a
          href="https://beauty.hotpepper.jp/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-[#2A2520] text-[#F5F1E8] border-2 border-[#2A2520] hover:bg-transparent hover:text-[#2A2520] transition-all duration-300 text-[1rem] sm:text-[1.25rem] tracking-wider text-center"
          style={{ fontFamily: "'Cormorant', serif" }}
        >
          {t('booking.button')}
        </motion.a>


      </motion.div>

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 Q50,20 100,0 L100,100 L0,100 Z" fill="#2A2520" />
        </svg>
      </div>
    </section>
  );
}
