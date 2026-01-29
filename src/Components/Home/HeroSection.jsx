import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import img_1 from "../assets/slider_img_1.png";
import img_2 from "../assets/windows/c-profile-pic.jpg";
import img_3 from "../assets/slider_5.jpg";

const slides = [
  {
    image: img_1,
    title: "Transform Your Space",
    subtitle: "Premium UPVC Windows",
    desc: "Our UPVC windows combine modern aesthetics with exceptional insulation and durability, improving energy efficiency, security, and comfort.",
    buttons: [{ label: "View Windows", link: "/products/upvc-windows", type: "primary" }],
  },
  {
    image: img_2,
    title: "Luxury Meets Durability",
    subtitle: "Discover Our UPVC Doors",
    desc: "Designed for strength and sophistication, our UPVC doors deliver unmatched security, excellent energy efficiency, and a refined modern look.",
    buttons: [{ label: "View Doors", link: "/products/upvc-doors", type: "primary" }],
  },
  {
    image: img_3,
    title: "Modernize Your Space",
    subtitle: "UPVC Facades & Panels",
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

  // ✅ Auto Slide Logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000); 
    return () => clearTimeout(timer);
  }, [current, isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // ✅ Swipe Handlers
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
    // Height fixed to prevent layout shifts. 
    // h-[600px] for mobile ensures images aren't too short.
    // h-[90vh] for desktop fills the screen nicely.
    <section
      className="relative w-full h-[600px] md:h-[90vh] overflow-hidden group bg-slate-900"
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
            {/* Gradient Overlay:
              Changed to bg-black/50 (50% opacity) for better text readability on all images.
              Added a gradient to ensure bottom text/dots are always visible.
            */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6 md:px-12">
            <div
              key={current}
              // Added simple translate animation for the text
              className={`max-w-4xl w-full text-white space-y-4 md:space-y-6 transform transition-all duration-700 ease-out ${
                index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Subtitle Badge */}
              <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs md:text-sm font-semibold tracking-wide uppercase backdrop-blur-sm mb-2">
                {slide.subtitle}
              </span>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-2xl md:text-3xl font-semibold tracking-tight drop-shadow-lg leading-tight">
                {slide.title}
              </h2>

              {/* Description */}
              <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                {slide.desc}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                {slide.buttons.map((btn, i) => (
                  <a
                    key={i}
                    href={btn.link}
                    className="
                      inline-flex items-center justify-center
                      px-8 py-3.5 text-sm md:text-base
                      rounded-full
                      bg-sky-600 hover:bg-sky-500
                      text-white font-bold
                      transition-all duration-300
                      shadow-lg hover:shadow-sky-500/40 hover:-translate-y-1
                    "
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (Desktop Only) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110"
      >
        <ChevronRight size={28} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
              current === index
                ? "w-10 bg-sky-500"
                : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;