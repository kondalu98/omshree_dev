import { ArrowRight } from "lucide-react"; // Make sure you have lucide-react or use another icon library
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import windowImg from "../assets/window_right.png";

export default function ProductWindow() {
  return (
    <section className="overflow-hidden">
      
      {/* 1. HEADER SECTION */}
      <div className="bg-white pt-14 pb-6 md:pt-16 md:pb-8">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-sky-500"></div>
              <span className="text-sky-600 font-bold uppercase tracking-widest text-sm">
                Our Products
              </span>
            </div>

            
            <h2 className="text-3xl md:text-3xl font-bold text-[#0F2A44] leading-tight">
              Premium uPVC Windows And uPVC Doors <br className="hidden md:block" />
              
              <span className="text-slate-500">Crafted for Modern Living</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* 2. FEATURED PRODUCT SECTION */}
     <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-8 pb-14">

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          
          {/* LEFT CONTENT (Text + Button) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Smart Window Solutions for <span className="text-sky-600">Indian Homes</span>
              </h2>
              <p className="text-lg text-slate-900 leading-relaxed">
                Engineered for strength, insulation, and elegance, our uPVC
                windows and doors enhance natural light, security, and
                long-lasting performance for every space.
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-sky-200 pl-6 text-lg">
              <p className="text-slate-600 leading-relaxed">
                Baydee Profiles offers premium <strong>Casement Windows</strong> and{" "}
                <strong>Sliding Windows</strong> designed to meet the comfort,
                safety, and aesthetic needs of today’s homes and commercial spaces.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our windows ensure superior durability, smooth operation, and
                long-lasting performance in Indian climatic conditions.
              </p>
            </div>

            {/* BUTTON */}
           <div className="pt-4">
           <a href="/gallery">
              <button className="group flex items-center gap-3   bg-sky-600  text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-500/30">
                Explore Our Windows
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT (Image Animation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background blob */}
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
              
              {/* Optional: Glass effect overlay at bottom of image */}
              
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}