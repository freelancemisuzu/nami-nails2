import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function LocationSection() {
  const { t } = useLanguage();

  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    t('location.addressText').replace(/\n/g, ' ')
  )}`;

  const hours = [
    { day: t('location.monFri'), time: t('location.monFriTime') },
    { day: t('location.sat'), time: t('location.satTime') },
    { day: t('location.sun'), time: t('location.closed') },
  ];

  return (
    <section id="location" className="py-24 px-6 sm:px-12 lg:px-16 bg-[#F5F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p
            className="text-[#9FA890] tracking-[0.3em] text-sm uppercase mb-4"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {t('location.findUs')}
          </p>
          <h2
            className="text-[2.2rem] sm:text-[3.2rem] md:text-[4.2rem] tracking-tight leading-none text-[#2A2520] font-medium"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('location.heading')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Left: Map & Get Directions (Mobile) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden shadow-xl border border-[#D4C4A8] h-[280px] sm:h-[360px] md:h-[460px] w-full">
              <iframe
                title="Nami Nails Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8706267773!2d139.7670513!3d35.6812362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1715000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.1) brightness(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Get Directions button (Mobile only) */}
            <div className="flex flex-col items-start gap-3 lg:hidden">
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block text-center px-10 py-3 bg-[#4A3E31] text-[#F5F1E8] border-2 border-[#4A3E31] hover:bg-transparent hover:text-[#4A3E31] transition-all duration-300 text-[1rem] tracking-wider w-full sm:w-auto"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {t('location.getDirections')}
              </motion.a>
              <p
                className="text-[#6B6762] text-[1.05rem] tracking-wide font-medium whitespace-pre-line"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {t('location.accessNote')}
              </p>
            </div>
          </motion.div>

          {/* ── Right: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {/* Address */}
              <div className="space-y-4">
                <h3
                  className="text-[0.85rem] tracking-[0.2em] uppercase text-[#6B6762] font-bold"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {t('location.addressLabel')}
                </h3>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2A2520] hover:text-[#9FA890] transition-colors text-[1.1rem] leading-relaxed whitespace-pre-line font-medium block group"
                  style={{ fontFamily: "'Cormorant', serif", textDecoration: 'none' }}
                >
                  <span className="border-b border-transparent group-hover:border-[#9FA890]/50 transition-colors">
                    {t('location.addressText')}
                  </span>
                </a>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3
                  className="text-[0.85rem] tracking-[0.2em] uppercase text-[#6B6762] font-bold"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {t('location.contactLabel')}
                </h3>
                <div
                  className="flex flex-col gap-2 text-[#2A2520] text-[1.1rem] font-medium"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  <a
                    href={t('location.phoneLink')}
                    className="hover:text-[#9FA890] transition-colors inline-block"
                    style={{ textDecoration: 'none' }}
                  >
                    {t('location.phoneText')}
                  </a>
                  <a
                    href="mailto:hello@naminails.com"
                    className="hover:text-[#9FA890] transition-colors inline-block"
                    style={{ textDecoration: 'none' }}
                  >
                    hello@naminails.com
                  </a>
                  <a
                    href="https://instagram.com/naminails"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#9FA890] transition-colors inline-block"
                    style={{ textDecoration: 'none' }}
                  >
                    @naminails
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-10 border-t border-[#D4C4A8]/40 space-y-6">
              <h3
                className="text-[0.85rem] tracking-[0.2em] uppercase text-[#6B6762] font-bold"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {t('location.hoursLabel')}
              </h3>
              <div className="grid grid-cols-1 gap-3 max-w-sm">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between items-baseline text-[1.1rem] border-b border-[#D4C4A8]/20 pb-2"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    <span className="text-[#2A2520] font-medium">{day}</span>
                    <span
                      className={`font-bold ${
                        time === t('location.closed') ? "text-[#9FA890]" : "text-[#2A2520]"
                      }`}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-10 border-t border-[#D4C4A8]/40 space-y-6">
              <h3
                className="text-[0.85rem] tracking-[0.2em] uppercase text-[#6B6762] font-bold"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {t('location.paymentMethodLabel')}
              </h3>
              <p
                className="text-[#2A2520] leading-relaxed text-[1.1rem]"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {t('location.paymentMethodText')}
              </p>
            </div>

            {/* Get Directions button (Desktop only) */}
            <div className="pt-4 hidden lg:flex flex-col items-start gap-3">
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block text-center px-10 py-3 bg-[#4A3E31] text-[#F5F1E8] border-2 border-[#4A3E31] hover:bg-transparent hover:text-[#4A3E31] transition-all duration-300 text-[1rem] tracking-wider"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {t('location.getDirections')}
              </motion.a>
              <p
                className="text-[#6B6762] text-[1.05rem] tracking-wide font-medium whitespace-pre-line"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {t('location.accessNote')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
