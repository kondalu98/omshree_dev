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
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div>
            <p className="text-sky-500 font-semibold uppercase tracking-wide">
              Advantages
            </p>
            <h2 className="text-3xl md:text-3xl font-bold text-slate-900 mt-2">
              Why Choose Us?
            </h2>
          </div>

          <p className="text-slate-800 leading-relaxed">
            We deliver premium uPVC windows and doors designed for durability,
            comfort, and long-lasting performance. Our solutions are engineered
            specifically for Indian climatic conditions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center
                         shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center
                              justify-center rounded-full bg-sky-100 text-2xl">
                {item.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-slate-800">
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
