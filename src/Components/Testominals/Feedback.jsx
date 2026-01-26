import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

import test from '../assets/About_slider.png'; // Your main section background

// I added 'postImg' to each object. This is the background image of the card (the room/window).
const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    role: "Home Owner, Vizag",
    image: "https://i.pravatar.cc/150?img=12", // Person
    postImg: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop", // Room/Window result
    review: "The uPVC windows look premium and reduce noise significantly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sujatha Rao",
    role: "Apartment Resident",
    image: "https://i.pravatar.cc/150?img=47",
    postImg: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop",
    review: "Excellent service. The doors are strong, stylish, and perfect for the weather.",
    rating: 5,
  },
  {
    id: 3,
    name: "Imran Khan",
    role: "Commercial Client",
    image: "https://i.pravatar.cc/150?img=33",
    postImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    review: "Professional team. Improved insulation and appearance of our office.",
    rating: 4,
  },
  {
    id: 4,
    name: "Lakshmi Devi",
    role: "Villa Owner",
    image: "https://i.pravatar.cc/150?img=56",
    postImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
    review: "Installation was smooth, completed on time, and left the site clean.",
    rating: 5,
  },
];

function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Swipe state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Responsive Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const next = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

  // Swipe Logic
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

  return (
    <>
      {/* 🔝 Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
        <img
          src={test}
          alt="Client Testimonials"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg animate-fade-in-up">
              Testimonials
            </h3>
            <div className="h-1 w-20 bg-sky-500 mt-4 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ⬇️ Feedback Section */}
      <section 
        className="bg-gray-100 py-16 md:py-24"
        onTouchStart={onTouchStart} 
        onTouchMove={onTouchMove} 
        onTouchEnd={onTouchEnd}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2A44] mt-2">
              Trusted by Hundreds
            </h2>
            <p className="text-slate-500 mt-2">See our installations and what clients say.</p>
          </div>

          <div className="relative">
            {/* Slider Track */}
            <div className="overflow-hidden pb-10"> {/* Padding bottom for shadow space */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 px-3 md:px-4"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    {/* 🎨 NEW CARD DESIGN STARTS HERE */}
                    <div className="relative h-[480px] w-full rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer">
                      
                      {/* 1. Background Image (The Project) */}
                      <img 
                        src={item.postImg} 
                        alt="Project" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Dark gradient at bottom to make card pop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                      {/* 2. The White Floating Card */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-3xl p-6 pt-12 text-center shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                        
                        {/* 3. Avatar (Overlapping) */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                            />
                            {/* Optional: Glow effect behind avatar */}
                            <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] -z-10"></div>
                          </div>
                        </div>

                        {/* Name & Role */}
                        <h4 className="text-xl font-bold text-[#0F2A44]">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-wide">
                          {item.role}
                        </p>

                        {/* Review Text */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          "{item.review}"
                        </p>

                        {/* Stars */}
                        <div className="flex justify-center gap-1">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star
                              key={idx}
                              size={16}
                              className={`${
                                idx < item.rating
                                  ? "text-orange-400 fill-orange-400"
                                  : "text-gray-200 fill-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* 🎨 NEW CARD DESIGN ENDS HERE */}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons (Outside the card like the design) */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-6 bg-white text-slate-700 h-12 w-12 rounded-full shadow-xl flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all z-20 hidden md:flex border border-gray-100"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-6 bg-white text-slate-700 h-12 w-12 rounded-full shadow-xl flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all z-20 hidden md:flex border border-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedback;