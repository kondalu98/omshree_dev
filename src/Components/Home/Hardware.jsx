import { CheckCircle2 } from "lucide-react";
import hardwareMain from "../assets/hardware.png";
import { motion } from "framer-motion";

function HardwareSection() {
  
  // Key features list to make content easier to scan
  const hardwareFeatures = [
    "Multi-Point Locking Systems for Extra Security",
    "SS 304 Grade Rust-Free Fittings",
    "Heavy-Duty Friction Stays & Hinges",
    "Smooth Gliding Rollers for Sliding Doors"
  ];

  return (
    <section className="py-12 md:py-18 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= IMAGE SECTION ================= */}
          {/* Mobile: Order 2 (Bottom) | Desktop: Order 1 (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full order-2 md:order-1"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-100"
            >
              {/* Single Large Image */}
              <img
                src={hardwareMain}
                alt="Premium uPVC Window Hardware and Handles"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              
              {/* Optional: Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-white/50">
                <p className="text-xs font-bold text-[#0F2A44] uppercase tracking-wider">
                  German Precision
                </p>
              </div>
            </motion.div>
          </motion.div>


          {/* ================= CONTENT SECTION ================= */}
          {/* Mobile: Order 1 (Top) | Desktop: Order 2 (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 md:pl-4 order-1 md:order-2"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                 <div className="h-[2px] w-10 bg-sky-600"></div>
                 <span className="text-sky-600 font-bold uppercase tracking-widest text-sm">Components</span>
              </div>


               <h2 className="text-3xl md:text-3xl  sm:text-1xl font-semibold text-[#0F2A44] leading-tight">
               Hardware for <span></span>
              
              <span className="text-sky-600">Ultimate Performance</span>
            </h2>
              
            </div>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                A window or door is only as good as its hardware. We equip our uPVC systems with 
                <strong className="text-slate-900"> ergonomic handles, multi-point locks, and precision rollers </strong> 
                sourced from global leaders in architectural hardware.
              </p>

              <p>
                Our hardware is engineered to withstand heavy daily usage and harsh weather conditions. 
                Whether it's the smooth glide of a sliding door or the tight seal of a casement window, 
                every component ensures effortless operation and <strong className="text-slate-900">maximum security</strong> against intruders.
              </p>
            </div>

            {/* Feature List */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 mt-2">
              <ul className="grid gap-3">
                {hardwareFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HardwareSection;