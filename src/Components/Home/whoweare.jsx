import { ArrowRight, CheckCircle2 } from "lucide-react";

import about from "../assets/whoweare.png";
import { motion } from "framer-motion";

function WhoWeAre() {
  
  // List of key features to display in a grid
  const features = [
    "German Technology",
    "Energy Efficient",
    "Lead-Free Profiles",
    "Low Maintenance"
  ];

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ================= CONTENT SECTION ================= */}
          {/* Mobile: Order 1 (Top) | Desktop: Order 2 (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-1 md:order-2"
          >
            {/* Heading */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-sky-600"></div>
                <span className="text-sky-600 font-bold uppercase tracking-widest text-sm">
                  About Us
                </span>
              </div>

                 <h2 className="text-3xl md:text-3xl  sm:text-1xl font-semibold text-[#0F2A44] leading-tight">
               Redefining Spaces with <span></span>
              
              <span className="text-sky-600">Premium UPVC Solutions</span>
            </h2>
              
            </div>

            {/* Expanded Text Content */}
            <div className="space-y-4 text-slate-600 text-base md:text-lg">
              <p className="leading-relaxed">
                <strong className="text-slate-900">Om Shree Enterprises</strong> is the authorized partner of 
                <strong className="text-slate-900"> Baydee Profiles</strong> in Vizag. We are committed to transforming 
                homes and offices with high-performance uPVC windows and doors that blend aesthetics with functionality.
              </p>

              <p className="leading-relaxed">
                From <strong>Casement and Sliding windows</strong> to <strong>Villa windows and Arch designs</strong>, 
                our product range is engineered to withstand Indian climatic conditions. Our profiles offer superior insulation against 
                scorching heat, heavy rains, and urban noise.
              </p>

              <p className="border-l-4 border-sky-200 pl-4 italic text-slate-700 bg-slate-50/50 py-2 pr-2 rounded-r-lg">
                "We don't just sell windows; we provide lasting peace of mind with products built on <strong>trust, quality, and innovation</strong>."
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 pt-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a href="/about">
                <button className="group flex items-center gap-3 bg-sky-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#0F2A44] hover:shadow-lg hover:shadow-sky-500/30">
                  Know More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* ================= IMAGE SECTION ================= */}
          {/* Mobile: Order 2 (Bottom) | Desktop: Order 1 (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1 mt-4 md:mt-0"
          >
            {/* Decorative elements - Desktop only */}
            <div className="hidden md:block absolute -inset-4 bg-slate-100 rounded-full blur-3xl opacity-60 -z-10" />
            <div className="hidden md:block absolute -bottom-6 -left-6 w-full h-full border-2 border-slate-100 rounded-2xl -z-10"></div>

            <motion.img
              src={about}
              alt="Baydee Profiles UPVC Windows and Doors in Vizag"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="
                w-full 
                h-[280px] sm:h-[350px] md:h-[500px] 
                object-cover 
                rounded-2xl 
                shadow-xl
                z-10 relative
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;