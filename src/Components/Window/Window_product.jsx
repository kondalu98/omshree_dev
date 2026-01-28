
import window from "../assets/windows/upvc_window_1.avif";
import GlassOptions from "../Home/Glass";
import SlidingProfiles from "../Home/Glazy";
import HardwareSection from "../Home/Hardware";
import WindowLamination from "../Home/Lamination";
import ProductWindow from "../Home/Product_window";
import WindowShowcaseSlider from "../Home/WindowType";


function WindowProduct() {
  return (
    <>
      {/* 🔝 Top Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[340px] md:h-[450px] overflow-hidden">
        <img
          src={window}
          alt="About Baydee Profiles uPVC Windows and Doors"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/30" /> */}

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg animate-fade-in-up">
              Upvc Windows
            </h3>
            <div className="h-1 w-20 bg-sky-500 mt-4 rounded-full"></div>
          </div>
        </div>
      </section>
      <ProductWindow></ProductWindow>
           <WindowShowcaseSlider></WindowShowcaseSlider>
           <WindowLamination></WindowLamination>
            <GlassOptions></GlassOptions>
            <SlidingProfiles></SlidingProfiles>
            <HardwareSection></HardwareSection>
     
    </>
  );
}

export default WindowProduct;
