import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

import gallery1 from "../../assets/gallery_img1.jpg";
import gallery2 from "../../assets/gallery_img2.jpg";
import gallery3 from "../../assets/gallery_img3.jpg";
import gallery4 from "../../assets/gallery_img4.jpg";
import gallery5 from "../../assets/gallery_img5.jpg";
import gallery6 from "../../assets/gallery_img6.jpg";
import gallery7 from "../../assets/gallery_img7.jpg";
import gallery8 from "../../assets/gallery_img8.jpg";

const galleryImages = [
  { src: gallery1, alt: "Nami Nails Art 1" },
  { src: gallery2, alt: "Nami Nails Art 2" },
  { src: gallery3, alt: "Nami Nails Art 3" },
  { src: gallery4, alt: "Nami Nails Art 4" },
  { src: gallery5, alt: "Nami Nails Art 5" },
  { src: gallery6, alt: "Nami Nails Art 6" },
  { src: gallery7, alt: "Nami Nails Art 7" },
  { src: gallery8, alt: "Nami Nails Art 8" }
];

export default function GallerySection() {
  const { t } = useLanguage();
  return (
    <section 
      id="gallery" 
      className="py-32 md:py-48 px-8 sm:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="columns-2 lg:columns-3 gap-8 md:gap-12 lg:gap-16 space-y-8 md:space-y-12 lg:space-y-16">
          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="break-inside-avoid group"
          >
            <div 
              className="relative overflow-hidden aspect-[4/5] bg-[#4A3E31] flex items-center justify-center p-4 sm:p-8 md:p-12 text-center"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <p className="text-[#F5F1E8] text-[1rem] sm:text-[1.5rem] md:text-[2rem] leading-tight tracking-wide italic">
                "Discover the art of everyday joy"
              </p>
            </div>
          </motion.div>

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
              className="break-inside-avoid group"
            >
              <div className="relative overflow-hidden cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <a
            href="https://instagram.com/naminails"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#4A3E31] text-[#F5F1E8] px-6 py-6 md:py-8 text-center max-w-[340px] w-full border border-[#D4C4A8]/20 transition-all duration-300 hover:shadow-2xl flex flex-col items-center gap-2"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            <span className="text-[#9FA890] tracking-[0.2em] text-[0.75rem] uppercase font-bold">Social</span>
            <p className="text-[1.35rem] md:text-[1.5rem] font-light leading-none tracking-wide italic">
              "Follow us on Instagram"
            </p>
            <span className="text-[0.95rem] opacity-75 group-hover:opacity-100 transition-opacity duration-300 tracking-widest mt-1">
              @naminails →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
