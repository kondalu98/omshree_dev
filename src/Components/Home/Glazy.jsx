import { motion } from "framer-motion";
import p55 from "../assets/windows/one.png";
import p60 from "../assets/windows/one.png";
import t62_25t from "../assets/windows/three.png";
import t62_3t from "../assets/windows/three.png";

// DATA
const profileData = [
  {
    img: p55,
    title: "2.5 Track-Sliding",
    specs: "W-80mm, H-50mm",
  },
  {
    img: t62_25t,
    title: "3 Track-Sliding",
    specs: "W-99mm, H-50mm",
  },
  {
    img: t62_3t,
    title: "3 Track-Sliding",
    specs: "W-112mm, H-52mm",
  },
  {
    img: p60,
    title: "2.5 Track-Sliding",
    specs: "W-90mm, H-48mm",
  },
];

function SlidingProfiles() {
  return (
    <section className="py-8 md:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-6">
         <h2 className="
  text-xl sm:text-2xl md:text-4xl
  font-semibold
  text-[#0F2A44]
  text-center
">
  Glazing Systems Window Designs
</h2>

          <div className="w-28 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
         <p className="mt-4 text-lg text-slate-600">
            Explore our standard window layouts and configurations
          </p>
        </div>

        {/* GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            items-start
          "
        >
          {profileData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center text-center"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-h-56 object-contain"
              />

              {/* TEXT */}
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                <span className="block font-medium text-slate-700">
                  {item.title}
                </span>
                {item.specs}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default SlidingProfiles;
