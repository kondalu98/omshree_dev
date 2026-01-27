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
    <section className="py-10 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

         {/* LEFT – HARDWARE IMAGE GRID */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="w-full"
>
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-6
    "
  >
    {/* TOP – FULL WIDTH IMAGE */}
    <motion.div
      whileHover={{ y: -5 }}
      className="
        sm:col-span-2
        bg-white
        rounded-2xl
        p-6
        flex
        items-center
        justify-center
        shadow-sm
        border border-slate-100
      "
    >
      <img
        src={hardwareImages[0]}
        alt="Window Hardware Main"
        className="w-full h-48 sm:h-56 object-contain"
      />
    </motion.div>

    {/* BOTTOM – TWO IMAGES */}
    {hardwareImages.slice(1).map((img, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -5 }}
        className="
          bg-white
          rounded-2xl
          p-6
          flex
          items-center
          justify-center
          shadow-sm
          border border-slate-100
        "
      >
        <img
          src={img}
          alt={`Window Hardware ${index + 2}`}
          className="w-full h-40 object-contain"
        />
      </motion.div>
    ))}
  </div>
</motion.div>


          {/* RIGHT – CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 md:pl-4"
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