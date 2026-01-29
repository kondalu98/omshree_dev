import { ArrowRight } from "lucide-react";
import black from "../assets/windows/black.jpg";
import darkOak from "../assets/windows/dark.jpg";
import goldenOak from "../assets/windows/GOLDEN.png";
import grey from "../assets/windows/grey.jpg";
import mahogany from "../assets/windows/mahogany.jpg";
import { motion } from "framer-motion";

const laminations = [
  { name: "Dark Oak", img: darkOak },
  { name: "Golden Oak", img: goldenOak },
  { name: "Mahogany", img: mahogany },
  { name: "Grey", img: grey },
  { name: "Black", img: black },
];

function WindowLamination() {
  return (
    <section className="bg-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Changed grid-cols to 1 on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT SIDE – IMAGE GRID */}
          {/* order-2 puts this BELOW the text on mobile */}
          {/* md:order-1 puts this ON THE LEFT on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            {/* Decorative blur */}
            <div className="absolute -inset-6 bg-slate-100 rounded-full blur-3xl opacity-60 -z-10" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {laminations.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-28 sm:h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-3 text-center font-semibold text-slate-700">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE – CONTENT */}
          {/* order-1 puts this ON TOP on mobile */}
          {/* md:order-2 puts this ON THE RIGHT on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 order-1 md:order-2"
          >
            {/* Heading */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-sky-600"></div>
                <span className="text-sky-600 font-bold uppercase tracking-widest text-sm">
                  Lamination Options
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0F2A44]">
                Window Lamination Color Options
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-5 text-slate-600 text-lg">
              <p>
                Choose from a wide range of premium lamination finishes that
                enhance the beauty and durability of your UPVC windows.
              </p>

              <p>
                Our lamination options are designed to resist fading, scratches,
                and weather damage while perfectly complementing modern and
                traditional interiors.
              </p>

              <p className="border-l-4 border-sky-200 pl-4 italic text-slate-700">
                From rich wood textures to elegant modern shades, our laminations
                deliver long-lasting style and protection.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a href="/contact">
                <button className="group flex items-center gap-3 bg-sky-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#0F2A44] hover:shadow-lg hover:shadow-sky-500/30">
                  Explore All Options
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WindowLamination;