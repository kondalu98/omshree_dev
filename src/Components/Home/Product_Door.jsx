import { ArrowRight } from "lucide-react"; 
import { Link } from "react-router-dom"; // kept if you use Link, otherwise use <a>
import { motion } from "framer-motion";
import door from "../assets/windows/door.jpg";

export default function ProductDoor() {
  return (
    <section className="overflow-hidden bg-white">
       
      {/* 2. FEATURED PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-24">
      <h2 className="text-3xl md:text-3xl font-bold text-[#0F2A44] leading-tight">
      Premium uPVC doors  <span className="text-slate-500">Crafted for Modern Living</span> </h2>
        {/* grid-cols-1 (Mobile): Stacked
            md:grid-cols-2 (Tablet/Desktop): Side-by-side 50/50 split 
            items-stretch: Forces both columns to be equal height
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* LEFT CONTENT (Text + Button) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            // flex column + justify-center centers the text vertically within the equal height container
            className="flex flex-col justify-center space-y-8 order-1"
          >

             
              

            <div>
                
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                Smart Door Solutions for <span className="text-sky-600">Indian Homes</span>
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Engineered for strength, insulation, and elegance, our uPVC
                doors enhance natural light, security, and
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
            <div className="pt-2">
              <a href="/gallery">
                <button className="group flex items-center gap-3 bg-sky-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-sky-500/30">
                  Explore Our Doors
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT CONTENT (Image Animation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] order-2"
          >
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-sky-50 rounded-full blur-3xl opacity-60 -z-10"></div>
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              // h-full ensures the container takes the full height of the grid cell
              className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100"
            >
              <img
                src={door}
                alt="uPVC Windows by Baydee Profiles"
                // object-cover ensures the image fills the height without stretching/distortion
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}