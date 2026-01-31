import GlassOptions from "../Home/Glass";
import HardwareSection from "../Home/Hardware";
import { Helmet } from "react-helmet-async";
import ProductWindow from "../Home/Product_window";
import SlidingProfiles from "../Home/Glazy";
import WindowLamination from "../Home/Lamination";
import WindowShowcaseSlider from "../Home/WindowType";
import windowImg from "../assets/sample_window_slider.png";

function WindowProduct() {
  return (
<>
<Helmet>
  <title>uPVC Windows in Vizag | Sliding & Casement Windows</title>

  <meta
    name="description"
    content="Buy high-quality uPVC windows in Vizag from Om Shree Enterprises. We provide sliding, casement, fixed, and custom uPVC windows with superior insulation and durability."
  />

  <meta
    name="keywords"
    content="
      uPVC windows Vizag,
      sliding windows Vizag,
      casement windows Vizag,
      best window fabrications Vizag,
      uPVC window installation Vizag,
      noise reduction windows Vizag
    "
  />

  <link rel="canonical" href="https://omshreeenterprises.in/products/uPVC-windows" />
</Helmet>

    
    <div className="w-full overflow-x-hidden bg-white">
      
      {/* 🔝 Top Hero Section */}
      <section className="relative w-full h-[280px] sm:h-[360px] md:h-[500px]">
        {/* Background Image */}
        <img
          src={windowImg}
          alt="Premium Baydee uPVC Windows"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Gradient Overlay (Crucial for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
            
            {/* Animated Text */}
            <div className="animate-fade-in-up">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg animate-fade-in-up">
                Premium uPVC Windows
              </h3>
              
              {/* Decorative Underline */}
              <div className="h-1.5 w-20 sm:w-24 bg-sky-500 mt-4 rounded-full"></div>
              
              <p className="text-slate-200 mt-4 text-base sm:text-lg md:text-xl max-w-xl font-medium drop-shadow-md">
                Engineered for durability, designed for elegance. Experience the best in noise reduction and energy efficiency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 📦 Page Content Sections */}
      <div className="flex flex-col">
        
        {/* Main Product Intro */}
        <ProductWindow
          buttonText="Explore Our Windows"
          buttonLink="/gallery"
        />

        {/* Showcase Slider */}
        <div className="w-full">
          <WindowShowcaseSlider />
        </div>

        {/* Technical Details & Options */}
        <WindowLamination />
        <GlassOptions />
        <SlidingProfiles />
        <HardwareSection />
        
      </div>

    </div>
    </>
  );
}

export default WindowProduct;