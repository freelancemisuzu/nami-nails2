import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#F5F1E8]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div style={{ fontFamily: "'Playfair Display', serif" }} className="tracking-wide">
            <span className="text-[1.5rem] md:text-[2.2rem] text-[#2A2520] font-medium">NAMI NAILS</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[0.8rem] font-semibold tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            <a href="#services" className="text-[#2A2520] hover:text-[#9FA890] transition-colors">
              Services
            </a>
            <a href="#about" className="text-[#2A2520] hover:text-[#9FA890] transition-colors">
              About
            </a>
            <a href="#gallery" className="text-[#2A2520] hover:text-[#9FA890] transition-colors">
              Gallery
            </a>
            <a href="#location" className="text-[#2A2520] hover:text-[#9FA890] transition-colors">
              Location
            </a>
            <a href="#faq" className="text-[#2A2520] hover:text-[#9FA890] transition-colors">
              FAQ
            </a>
            <a href="https://instagram.com/naminails" target="_blank" rel="noopener noreferrer" className="text-[#2A2520] hover:text-[#9FA890] transition-colors">
              Instagram
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 mr-4 text-[0.8rem] font-semibold tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-[#2A2520] font-bold' : 'text-[#2A2520]/40 hover:text-[#2A2520]'}`}
              >
                EN
              </button>
              <span className="text-[#2A2520]/20">/</span>
              <button
                onClick={() => setLanguage('jp')}
                className={`transition-colors ${language === 'jp' ? 'text-[#2A2520] font-bold' : 'text-[#2A2520]/40 hover:text-[#2A2520]'}`}
              >
                JP
              </button>
            </div>

            <a 
              href="https://beauty.hotpepper.jp/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:block px-6 py-2 bg-transparent border border-[#4A3E31] text-[#4A3E31] hover:bg-[#4A3E31] hover:text-[#F5F1E8] transition-all duration-300 text-center text-[0.8rem] font-semibold tracking-widest uppercase" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('header.bookNow')}
            </a>

            <button
              className="md:hidden text-[#2A2520]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F5F1E8] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 text-[1.25rem] font-semibold tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              <div className="flex items-center gap-4 mb-4 text-[1.1rem]">
                <button
                  onClick={() => { setLanguage('en'); closeMenu(); }}
                  className={`tracking-widest transition-colors ${language === 'en' ? 'text-[#2A2520] font-bold underline' : 'text-[#2A2520]/40'}`}
                >
                  ENGLISH
                </button>
                <span className="text-[#2A2520]/20">/</span>
                <button
                  onClick={() => { setLanguage('jp'); closeMenu(); }}
                  className={`tracking-widest transition-colors ${language === 'jp' ? 'text-[#2A2520] font-bold underline' : 'text-[#2A2520]/40'}`}
                >
                  JAPANESE
                </button>
              </div>
              <a
                href="#services"
                onClick={closeMenu}
                className="text-[#2A2520] hover:text-[#9FA890] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="text-[#2A2520] hover:text-[#9FA890] transition-colors"
              >
                About
              </a>
              <a
                href="#gallery"
                onClick={closeMenu}
                className="text-[#2A2520] hover:text-[#9FA890] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#location"
                onClick={closeMenu}
                className="text-[#2A2520] hover:text-[#9FA890] transition-colors"
              >
                Location
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="text-[#2A2520] hover:text-[#9FA890] transition-colors"
              >
                FAQ
              </a>
              <a
                href="https://instagram.com/naminails"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="text-[#2A2520] hover:text-[#9FA890] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://beauty.hotpepper.jp/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="px-8 py-3 mt-4 bg-transparent border-2 border-[#4A3E31] text-[#4A3E31] hover:bg-[#4A3E31] hover:text-[#F5F1E8] transition-all duration-300 text-[1.1rem] text-center tracking-widest uppercase font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('header.bookNow')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
