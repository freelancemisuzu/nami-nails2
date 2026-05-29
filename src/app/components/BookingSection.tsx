import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bookingBg from "../../assets/alexander-krivitskiy--nOzuCuog8g-unsplash.jpg";

export default function BookingSection() {
  const { t } = useLanguage();
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={bookingBg}
          alt="Booking Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#F5F1E8]/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2
          className="text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] mb-12 tracking-tight leading-none whitespace-pre-line font-medium text-[#3A3026]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {t('booking.title')}
        </h2>
        <motion.a
          href="https://beauty.hotpepper.jp/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-transparent text-[#3A3026] border-2 border-[#3A3026] hover:bg-[#3A3026] hover:text-[#F5F1E8] transition-all duration-300 text-[1rem] sm:text-[1.25rem] tracking-wider text-center"
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
