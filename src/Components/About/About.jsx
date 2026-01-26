import TrustSection from "./TrustSection";
import about from "../assets/About_slider.png";
import aboutleft from "../assets/About_left.png";

function About() {
  return (
    <>
      {/* 🔝 Top Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[380px] md:h-[450px] overflow-hidden">
        <img
          src={about}
          alt="About Baydee Profiles uPVC Windows and Doors"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg animate-fade-in-up">
              About Us
            </h3>
            <div className="h-1 w-20 bg-sky-500 mt-4 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ⬇️ About Content Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* 📝 TEXT FIRST ON MOBILE */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-2xl font-bold text-[#0F2A44] leading-tight">
                About Us
              </h2>
              <div className="h-1 w-16 bg-sky-500 rounded-full"></div>

              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-[#0F2A44]">Baydee Profiles</span>, powered by{" "}
                  <span className="font-semibold text-sky-600">Om Shree Enterprises</span>, is a trusted brand in
                  premium{" "}
                  <span className="text-sky-600 font-medium">
                    uPVC windows and doors in Vizag (Visakhapatnam)
                  </span>
                  , delivering reliable solutions for modern homes and commercial spaces.
                </p>

                <p>
                  With over a decade of experience, we specialize in durable,
                  energy-efficient, and low-maintenance uPVC systems designed
                  specifically for{" "}
                  <span className="font-medium">Indian climatic conditions</span>.
                </p>

                <p>
                  Our products offer excellent protection against dust, noise,
                  heat, pollution, and harsh weather while enhancing comfort,
                  safety, and aesthetic appeal.
                </p>

                <div className="p-4 bg-white border-l-4 border-sky-500 rounded-r-lg shadow-sm">
                  <p className="font-medium text-[#0F2A44]">
                    We stand for{" "}
                    <span className="text-sky-600 font-bold">
                      quality, trust, and innovation
                    </span>
                    , ensuring long-lasting value and superior craftsmanship.
                  </p>
                </div>
              </div>
            </div>

            {/* 🖼️ IMAGE SECOND ON MOBILE */}
            <div className="w-full order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={aboutleft}
                  alt="Baydee Profiles uPVC Windows and Doors in Vizag"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center transition duration-500 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ⭐ Trust Section */}
      <TrustSection />
    </>
  );
}

export default About;
