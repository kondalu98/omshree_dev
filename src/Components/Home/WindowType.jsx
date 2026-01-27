import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";
import w1 from "../assets/windows/window_1.png";
import w10 from "../assets/windows/window_10.png";
import w11 from "../assets/windows/window_11.png";
import w12 from "../assets/windows/window_12.png";
import w13 from "../assets/windows/window_13.png";
import w14 from "../assets/windows/window_14.png";
import w15 from "../assets/windows/window_15.png";
import w16 from "../assets/windows/window_16.png";
import w17 from "../assets/windows/window_17.png";
import w18 from "../assets/windows/window_18.png";
import w19 from "../assets/windows/window_19.png";
import w2 from "../assets/windows/window_2.png";
import w20 from "../assets/windows/window_20.png";
import w3 from "../assets/windows/window_3.png";
import w4 from "../assets/windows/window_4.png";
import w5 from "../assets/windows/window_5.png";
import w6 from "../assets/windows/window_6.png";
import w7 from "../assets/windows/window_7.png";
import w8 from "../assets/windows/window_8.png";
import w9 from "../assets/windows/window_9.png";

// IMAGES





















// DATA
const windowDesigns = [
  { id: 1, src: w1, title: "Casement Fixed Double Open" },
  { id: 2, src: w2, title: "Fan Provision With Fixed Lowers" },
  { id: 3, src: w3, title: "Fan Provision With Fixed Top Hung" },
  { id: 4, src: w4, title: "Lowers With Fan Provision" },
  { id: 5, src: w5, title: "Mono Rail Sliding With Fixed" },
  { id: 6, src: w6, title: "Casement Top Hung" },
  { id: 7, src: w7, title: "2-Track 2-Panel" },
  { id: 8, src: w8, title: "5-Track 2-Panel Mesh" },
  { id: 9, src: w9, title: "2-Track 3-Panel Center Fixed" },
  { id: 10, src: w10, title: "2-Track 4-Panel" },
  { id: 11, src: w11, title: "Casement Fixed Single Open" },
  { id: 12, src: w12, title: "3-Panel Sliding" },
  { id: 13, src: w13, title: "3-Track 4-Panel Mesh" },
  { id: 14, src: w14, title: "Casement Center Fixed Open" },
  { id: 15, src: w15, title: "Casement Door With Fixed" },
  { id: 16, src: w16, title: "Casement Single Open" },
  { id: 17, src: w17, title: "Casement Double Open" },
  { id: 18, src: w18, title: "Fixed Window – 4 Parts" },
  { id: 19, src: w19, title: "Fixed With 2-Track" },
  { id: 20, src: w20, title: "Georgian Bar Windows" },
];

export default function WindowShowcaseSlider() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* SECTION */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-0 sm:px-6">

          {/* HEADER */}
          <div className="text-center mb-10 px-6 sm:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Window Configuration Designs
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-slate-600">
              Explore our standard window layouts and configurations
            </p>
          </div>

          {/* SLIDER */}
          <div className="relative">

            {/* LEFT ARROW (desktop only) */}
           {/* LEFT ARROW */}
<button
  className="window-prev absolute left-2 top-1/2 -translate-y-1/2 z-20
             flex items-center justify-center
             bg-white border border-slate-200 rounded-full
             p-2 sm:p-3 shadow
             hover:bg-sky-500 hover:text-white transition"
>
  <ChevronLeft size={20} className="sm:hidden" />
  <ChevronLeft size={24} className="hidden sm:block" />
</button>

{/* RIGHT ARROW */}
<button
  className="window-next absolute right-2 top-1/2 -translate-y-1/2 z-20
             flex items-center justify-center
             bg-white border border-slate-200 rounded-full
             p-2 sm:p-3 shadow
             hover:bg-sky-500 hover:text-white transition"
>
  <ChevronRight size={20} className="sm:hidden" />
  <ChevronRight size={24} className="hidden sm:block" />
</button>


            <Swiper
              className="w-full"
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".window-prev",
                nextEl: ".window-next",
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              spaceBetween={16}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {windowDesigns.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    onClick={() => setSelected(item)}
                    className="flex flex-col items-center cursor-pointer px-4"
                  >
                    {/* IMAGE */}
                    <div
                      className="w-full h-[200px] sm:h-[240px] md:h-[260px]
                                 bg-white border border-slate-200
                                 flex items-center justify-center"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* TITLE */}
                    <p
                      className="mt-3 text-center text-sm sm:text-base
                                 text-slate-800 font-medium leading-tight"
                    >
                      {item.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-6 right-6 text-white">
            <X size={32} />
          </button>

          <div
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="max-h-[80vh] w-full object-contain bg-white p-4 rounded-lg"
            />
            <p className="mt-4 text-white text-lg text-center">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
