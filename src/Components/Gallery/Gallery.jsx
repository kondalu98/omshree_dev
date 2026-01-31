import { AnimatePresence, motion } from "framer-motion";
import { memo, useState } from "react";

import { X } from "lucide-react";
import g1 from "../assets/Gallery/photo_1.webp";
import g10 from "../assets/Gallery/photo_10.webp";
import g2 from "../assets/Gallery/photo_2.webp";
import g3 from "../assets/Gallery/photo_12.webp";
import g4 from "../assets/Gallery/photo_4.webp";
import g5 from "../assets/Gallery/photo_5.webp";
import g6 from "../assets/Gallery/photo_6.webp";
import g7 from "../assets/Gallery/photo_8.webp";
import g8 from "../assets/Gallery/photo_16.webp";
import g9 from "../assets/Gallery/photo_11.webp";
import hero from "../assets/About_slider.png";

const galleryImages = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
];

// Memoized image card (prevents re-render)
const ImageCard = memo(({ src, onClick, span }) => (
  <div
    onClick={onClick}
    className={`relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-lg transition group ${span}`}
  >
    <img
      src={src}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      alt="Gallery"
    />
  </div>
));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const getSpan = (i) => {
    if (i % 6 === 0) return "md:col-span-2 md:row-span-2";
    if (i % 3 === 0) return "md:col-span-2";
    return "";
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[300px] md:h-[400px]">
        <img src={hero} alt="Gallery slider" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
         <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg animate-fade-in-up">
              Gallery
            </h3>
            <div className="h-1 w-20 bg-sky-500 mt-4 rounded-full"></div>
          </div>
        </div>
      </section>

    <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h3 className="text-3xl sm:text-4xl font-bold text-slate-700 tracking-tight">
      Our Work
    </h3>

    <p className="mt-2 text-xl text-slate-600 max-w-xl mx-auto">
      A glimpse of our premium uPVC window and door installations
    </p>
  </div>
</section>


      {/* GRID */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
            {galleryImages.map((src, i) => (
              <ImageCard
                key={i}
                src={src}
                span={getSpan(i)}
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white">
              <X size={32} />
            </button>

            <motion.img
              src={selectedImage}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
