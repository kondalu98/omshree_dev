import { ArrowRight } from "lucide-react";
import about from '../assets/whoweare.png';
import { motion } from "framer-motion";

function WhoWeAre() {
  return (
    <section className="bg-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE SECTION (Left Side) */}
          {/* Animates in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Background Blob */}
            <div className="absolute -inset-4 bg-slate-100 rounded-full blur-3xl opacity-60 -z-10" />
            
            {/* Decorative Outline Box (Visible on desktop) */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-full h-full border-2 border-slate-100 rounded-2xl -z-10"></div>

            <motion.img
              src={about}
              alt="Baydee Profiles uPVC Windows and Doors in Vizag"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[450px] object-cover rounded-2xl shadow-xl z-10 relative"
            />
          </motion.div>

          {/* CONTENT SECTION (Right Side) */}
          {/* Animates in from the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Heading Group */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="h-[2px] w-12 bg-sky-600"></div>
                 <span className="text-sky-600 font-bold uppercase tracking-widest text-sm">About Us</span>
              </div>
              <h2 className="text-3xl md:text-3xl font-bold text-[#0F2A44] leading-tight">
                Who We Are
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-slate-600 text-lg">
              <p className="leading-relaxed">
                <strong className="text-slate-900">Baydee Profiles</strong>, powered by <strong>Om Shree Enterprises</strong>,
                is a trusted brand in premium <strong>uPVC windows and doors in Vizag
                (Visakhapatnam)</strong>, delivering reliable solutions for modern homes
                and commercial spaces.
              </p>

              <p className="leading-relaxed">
                With over a decade of experience, we specialize in durable,
                energy-efficient, and low-maintenance uPVC systems designed
                for Indian climatic conditions.
              </p>

              <p className="leading-relaxed">
                Our products offer excellent protection against dust, noise,
                heat, pollution, and harsh weather while enhancing comfort,
                safety, and aesthetic appeal.
              </p>
              
              <p className="leading-relaxed border-l-4 border-sky-200 pl-4 italic text-slate-700">
                We stand for <strong>quality, trust, and innovation</strong>,
                ensuring long-lasting value and superior craftsmanship.
              </p>
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

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;