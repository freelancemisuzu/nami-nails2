import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqList = t('faq.list') as { q: string; a: string }[];

  return (
    <section id="faq" className="py-24 px-6 bg-[#FAF8F3]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[2.2rem] sm:text-[3.2rem] md:text-[4.5rem] mb-12 tracking-tight text-center font-medium text-[#2A2520]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {t('faq.heading')}
        </motion.h2>

        <div className="space-y-4">
          {faqList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-[#2A2520]/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 sm:py-5 flex items-center justify-between text-left group"
              >
                <span 
                  className="text-[0.95rem] sm:text-[1.1rem] text-[#2A2520] font-medium tracking-wide"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {item.q}
                </span>
                <span className="ml-4 flex-shrink-0 text-[#2A2520]/40 group-hover:text-[#2A2520] transition-colors">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p 
                      className="pb-5 text-[#6B6762] text-[0.875rem] sm:text-[0.95rem] leading-relaxed"
                      style={{ fontFamily: "'Cormorant', serif" }}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
