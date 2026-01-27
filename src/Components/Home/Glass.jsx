import glass1 from "../assets/windows/glass_1.png";
import glass2 from "../assets/windows/glass_2.png";
import glass3 from "../assets/windows/glass_3.png";
import glass4 from "../assets/windows/glass_4.png";
import glassImg from "../assets/windows/Glass.jpg";
import { motion } from "framer-motion";

const glassTypes = [
  { img: glass1 },
  {  img: glass2 },
  {  img: glass3 },
  {  img: glass4 },
];

function GlassOptions() {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-sky-600"></div>
                <span className="text-sky-600 font-bold uppercase tracking-widest text-sm">
                  Glass Options
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#0F2A44]">
                Window Glass Options
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              The choice of glass plays a crucial role in determining energy
              efficiency, safety, privacy, and overall visual comfort in
              modern windows and doors.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              We provide multiple glazing thicknesses for sliding and
              casement systems, including
              <span className="font-medium text-slate-700">
                {" "}5mm, 6mm, 8mm, 10mm, 12mm, 20mm, and 24mm
              </span>,
              ensuring durability and long-term performance.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-6 bg-white/70 rounded-3xl blur-3xl -z-10" />
            <img
              src={glassImg}
              alt="Glass options for uPVC windows"
              className="w-full max-w-lg object-contain"
            />
          </motion.div>
        </div>

      
{/* BOTTOM – FULL IMAGE GLASS GRID (NO CROP) */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
>
  {glassTypes.map((glass, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center justify-center bg-white rounded-xl p-2"
    >
      <img
        src={glass.img}
        alt={glass.name}
        className="
          w-full
          h-40 sm:h-44 md:h-48
          object-contain
        "
      />
    </motion.div>
  ))}
</motion.div>



      </div>
    </section>
  );
}

export default GlassOptions;
