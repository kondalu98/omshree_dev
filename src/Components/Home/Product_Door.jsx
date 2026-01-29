import { ArrowRight, CheckCircle2 } from "lucide-react";

import door from "../assets/windows/door.jpg";
import { motion } from "framer-motion";

export default function ProductDoor({
  buttonText = "Explore Our Doors",
  buttonLink = "/gallery",
}) {
  
  // New: List of key features to display
  const features = [
    "Soundproof & Noise Reduction",
    "Termite & Corrosion Proof",
    "Energy Efficient Insulation",
    "Multi-Point Locking Security"
  ];

  return (
    <section className="py-8 md:py-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 md:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F2A44] mb-3 md:mb-4">
                Smart Door Solutions for{" "}
                <span className="text-sky-600">Indian Homes</span>
              </h3>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Engineered for strength, insulation, and elegance, our uPVC
                doors enhance natural light, security, and long-lasting performance.
                Whether you need a grand entrance or a space-saving balcony door, 
                we have the perfect fit.
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-sky-200 pl-4 md:pl-6 text-base md:text-lg">
              <p className="text-slate-600 leading-relaxed">
                Omshree Enterprises offers premium{" "}
                <strong>Sliding Doors</strong>, <strong>Casement Doors</strong>, and{" "}
                <strong>Fold & Slide Doors</strong> designed for modern comfort and safety.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our doors utilize advanced sealing technology to prevent dust, 
                water seepage, and noise pollution, making them ideal for urban living.
              </p>
            </div>

            {/* 🔹 ADDED: Key Benefits List */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-semibold text-[#0F2A44] mb-3">Why Choose Our uPVC Doors?</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-700 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 🔹 DYNAMIC BUTTON */}
            <div className="pt-2">
              <a href={buttonLink} className="inline-block">
                <button className="group flex items-center gap-2 md:gap-3 bg-sky-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-500/30">
                  {buttonText}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="absolute -inset-4 bg-sky-50 rounded-full blur-3xl opacity-60 -z-10"></div>

            <div className="relative h-64 sm:h-80 lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src={door}
                alt="uPVC Doors by Baydee Profiles"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Optional: Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-white/50">
                <span className="text-xs font-bold text-[#0F2A44] uppercase tracking-wider">Premium Finish</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}