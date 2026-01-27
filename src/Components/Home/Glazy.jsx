import { motion } from "framer-motion";
import p55 from "../assets/windows/one.png";
import p60 from "../assets/windows/one.png";
import t62_25t from "../assets/windows/three.png";
import t62_3t from "../assets/windows/three.png";

// DATA
const profileData = [
  {
    img: p55,
    title: "P 55 – 2.5T Sliding",
    specs: "W-81mm, H-45mm",
  },
  {
    img: t62_25t,
    title: "T 62 – 2.5T Sliding",
    specs: "W-97mm, H-45mm",
  },
  {
    img: t62_3t,
    title: "T 62 – 3T Sliding",
    specs: "W-112mm, H-45mm",
  },
  {
    img: p60,
    title: "P 60 – 2.5T Sliding",
    specs: "W-89mm, H-42mm",
  },
];

function SlidingProfiles() {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Glazing Systems Window Designs
          </h2>
          <div className="w-16 h-1 bg-sky-500 mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm md:text-base">
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
