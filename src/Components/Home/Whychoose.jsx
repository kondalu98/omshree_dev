function Whychoose() {
  const features = [
    { title: "Strength & Durability", icon: "🛡️" },
    { title: "Noise Reduction", icon: "🔇" },
    { title: "Weatherproof", icon: "🌬️" },
    { title: "Energy Efficient", icon: "⚡" },
    { title: "Eco-Friendly", icon: "🌱" },
    { title: "Easy Installation", icon: "🛠️" },
    { title: "Corrosion Resistant", icon: "🌧️" },
    { title: "Fire Resistant", icon: "🔥" },
  ];

  return (
    <section className="py-4 sm:py-16 md:py-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* CENTER HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-sky-500 font-semibold uppercase tracking-wide">
            Advantages
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900 mt-2">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-slate-600  text-lg leading-relaxed">
            We deliver premium uPVC windows and doors designed for durability,
            comfort, and long-lasting performance. Our solutions are engineered
            specifically for Indian climatic conditions.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-5 sm:p-6
                text-center
                shadow-sm
                hover:shadow-md
                transition
                flex
                flex-col
                items-center
              "
            >
              <div
                className="
                  w-12 h-12 sm:w-14 sm:h-14
                  mb-3 sm:mb-4
                  flex items-center justify-center
                  rounded-full
                  bg-sky-100
                  text-xl sm:text-2xl
                "
              >
                {item.icon}
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Whychoose;
