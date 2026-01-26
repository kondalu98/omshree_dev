import { ChevronLeft, ChevronRight } from "lucide-react"; // If you don't have lucide-react, you can use text arrows "<" ">"
import { useEffect, useState } from "react";

import img_1 from "../assets/window_img_1.png";
import img_2 from "../assets/img3.webp";
import img_3 from "../assets/slider_5.jpg";

const slides = [
  {
    image: img_1,
    title: "Transform Your Space",
    subtitle: "Premium uPVC Windows",
    desc: "Our uPVC windows combine modern aesthetics with exceptional insulation and durability, improving energy efficiency, security, and comfort.",
    buttons: [{ label: "View Products", link: "/products", type: "primary" }],
  },
  {
    image: img_2,
    title: "Luxury Meets Durability",
    subtitle: "Discover Our uPVC Doors",
    desc: "Designed for strength and sophistication, our uPVC doors deliver unmatched security, excellent energy efficiency, and a refined modern look.",
    buttons: [{ label: "About Us", link: "/about", type: "primary" }],
  },
  {
    image: img_3,
    title: "Modernize Your Space",
    subtitle: "uPVC Facades & Panels",
    desc: "Upgrade your interiors and exteriors with durable, stylish uPVC facades and panels built for long-lasting beauty and contemporary design.",
    buttons: [{ label: "Contact Us", link: "/contact", type: "primary" }],
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Touch state for mobile swiping
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // ✅ Auto Slide Logic (Simplified & Robust)
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Cleanup function clears the timer if the component unmounts 
    // OR if 'current' changes (reseting the clock on manual click)
    return () => clearTimeout(timer);
  }, [current, isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // ✅ Swipe Handlers for Mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <section
      className="relative w-full min-h-[500px] md:h-[85vh] overflow-hidden bg-gray-900 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover object-center"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 md:bg-black/40" />
          </div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6 md:px-12">
            <div
              key={current} // This key ensures text animates every time slide changes
              className={`max-w-4xl w-full text-white space-y-5 md:space-y-6 ${
                index === current ? "animate-fade-in-up" : ""
              }`}
            >
              {/* 🔹 Adjusted Title Size (Smaller as requested) */}
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-md">
                {slide.title}
              </h2>

              <h3 className="text-lg sm:text-xl md:text-2xl text-sky-400 font-medium tracking-wide">
                {slide.subtitle}
              </h3>

              <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {slide.desc}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 md:pt-6">
                {slide.buttons.map((btn, i) => (
                  <a
                    key={i}
                    href={btn.link}
                    className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-sky-500/40 transform hover:-translate-y-1 text-sm md:text-base"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (Hidden on Mobile) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-black hover:border-white"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-black hover:border-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-sky-500"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;