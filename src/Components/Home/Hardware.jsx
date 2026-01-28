import hardware1 from "../assets/windows/door_1.jpg";
import hardware2 from "../assets/windows/door_2.jpg";
import hardware3 from "../assets/windows/door_3.jpg";
import { motion } from "framer-motion";

const hardwareImages = [
  hardware1,
  hardware2,
  hardware3,
];

function HardwareSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT – HARDWARE IMAGE GRID */}
          {/* order-2 puts this BELOW content on mobile */}
          {/* md:order-1 puts this LEFT of content on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full order-2 md:order-1"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Image 1: Full Width */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="col-span-2 overflow-hidden rounded-2xl"
              >
                <img
                  src={hardwareImages[0]}
                  alt="Window Hardware Main"
                  // 'object-cover' fills the space, 'bg-slate-50' adds a subtle background if image has transparency
                  className="w-full h-48 sm:h-64 object-cover md:object-contain bg-slate-50"
                />
              </motion.div>

              {/* Image 2 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={hardwareImages[1]}
                  alt="Window Hardware Detail"
                  className="w-full h-32 sm:h-48 object-cover md:object-contain bg-slate-50"
                />
              </motion.div>

              {/* Image 3 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={hardwareImages[2]}
                  alt="Window Hardware Detail"
                  className="w-full h-32 sm:h-48 object-cover md:object-contain bg-slate-50"
                />
              </motion.div>
            </div>
          </motion.div>


          {/* RIGHT – CONTENT */}
          {/* order-1 puts this ABOVE images on mobile */}
          {/* md:order-2 puts this RIGHT of images on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 md:pl-4 order-1 md:order-2"
          >
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Premium Hardware
            </h2>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                The quality of hardware plays a vital role in the overall
                performance and longevity of your windows. We provide
                carefully selected hardware systems sourced from trusted
                global suppliers.
              </p>

              <p>
                Every component is rigorously tested to ensure it is
                <strong className="text-slate-800 font-semibold">
                  {" "}sturdy, dependable, resilient, and long-lasting
                </strong>.
                This ensures smooth operation, enhanced safety, and reliable
                performance over time.
              </p>

              <p>
                All accessories and metal fittings come with a
                <strong className="text-slate-800 font-semibold">
                  {" "}five-year warranty
                </strong>,
                giving you complete peace of mind.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HardwareSection;