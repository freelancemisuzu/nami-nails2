import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#4A3E31] text-[#F5F1E8] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-[2.5rem] mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>NAMI NAILS</h2>
            <p className="max-w-md text-[#F5F1E8]/60 text-[1rem] leading-relaxed" style={{ fontFamily: "'Cormorant', serif" }}>
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-[1rem] mb-6 tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>{t('footer.links')}</h4>
            <nav className="flex flex-col gap-4" style={{ fontFamily: "'Cormorant', serif" }}>
              <a href="#services" className="text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors">Services</a>
              <a href="#about" className="text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors">About</a>
              <a href="#gallery" className="text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors">Gallery</a>
              <a href="#location" className="text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors">Location</a>
              <a href="#faq" className="text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors">FAQ</a>
            </nav>
          </div>

          <div>
            <h4 className="text-[1rem] mb-6 tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>{t('footer.social')}</h4>
            <div className="flex flex-col gap-4" style={{ fontFamily: "'Cormorant', serif" }}>
              <a href="#" className="text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors">Instagram</a>
              <a href="#" className="text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#F5F1E8]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[0.875rem] text-[#F5F1E8]/40" style={{ fontFamily: "'Cormorant', serif" }}>
            {t('footer.rights')}
          </p>
          <div className="flex gap-8 text-[0.875rem] text-[#F5F1E8]/40" style={{ fontFamily: "'Cormorant', serif" }}>
            <a href="#" className="hover:text-[#F5F1E8] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F5F1E8] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
