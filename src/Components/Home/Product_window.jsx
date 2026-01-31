import { ArrowRight, CheckCircle2 } from "lucide-react";

import { motion } from "framer-motion";
import windowImg from "../assets/window_right.png";

export default function ProductWindow({
  buttonText = "Explore Our Windows",
  buttonLink = "/gallery",
}) {

  // New: List of key window features
  const features = [
    "Superior Sound Insulation",
    "High Energy Efficiency",
    "Dust & Pollution Proof",
    "Rust & Termite Resistant"
  ];

  return (
    <section className="overflow-hidden bg-white">

      {/* 1. HEADER SECTION */}
      <div className="pt-14 pb-6 md:pt-16 md:pb-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Centered on mobile, Left on desktop */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="h-[2px] w-12 bg-sky-500"></div>
              <span className="text-sky-600 font-bold uppercase tracking-widest text-sm">
                Our Products
              </span>
            </div>
            
            
            <h2 className="text-3xl md:text-3xl  sm:text-1xl font-semibold text-[#0F2A44] leading-tight">
              Premium uPVC Windows  <span></span>
              
              <span className="text-slate-500">Crafted for Modern Living</span>
            </h2>

          </motion.div>
        </div>
      </div>

      {/* 2. CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-4 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F2A44] mb-3 md:mb-4">
                Smart Window Solutions for{" "}
                <span className="text-sky-600">Indian Homes</span>
              </h3>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Engineered for strength, insulation, and elegance, our uPVC
                windows enhance natural light, security, and long-lasting performance.
                Say goodbye to outside noise and high electricity bills.
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-sky-200 pl-4 md:pl-6 text-base md:text-lg">
              <p className="text-slate-600 leading-relaxed">
                Baydee Profiles offers premium <strong>Sliding Windows</strong>, 
                <strong> Casement Windows</strong>, and <strong>Tilt & Turn Windows</strong> 
                designed for modern aesthetic needs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our profiles are specially formulated to withstand harsh Indian 
                climatic conditions without fading or warping.
              </p>
            </div>

            {/* 🔹 ADDED: Key Advantages List */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-semibold text-[#0F2A44] mb-3">Why Choose Our Windows?</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-700 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BUTTON */}
            <div className="pt-2">
              <a href={buttonLink} className="inline-block">
                <button className="group flex items-center gap-3 bg-sky-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-500/30">
                  {buttonText}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Blob */}
            <div className="absolute -inset-4 bg-sky-100 rounded-full blur-3xl opacity-50 -z-10"></div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src={windowImg}
                alt="uPVC Windows by Baydee Profiles"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              {/* Optional Badge */}
              <div className="absolute bottom-4 right-4 bg-sky-600 text-white px-4 py-1.5 rounded-lg shadow-lg text-xs font-bold uppercase tracking-wide">
                 15-Year Warranty
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}