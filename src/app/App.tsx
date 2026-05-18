import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import FaqSection from "./components/FaqSection";
import BookingSection from "./components/BookingSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] relative">
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <LocationSection />
        <GallerySection />
        <FaqSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}