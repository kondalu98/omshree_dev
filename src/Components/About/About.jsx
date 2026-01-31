import { CheckCircle2 } from "lucide-react"; // Imported for the feature list
import { Helmet } from "react-helmet-async";
import TrustSection from "./TrustSection";
import about from "../assets/About_slider.png";
import aboutleft from "../assets/About_left.png";

function About() {

  // Key features regarding Om Shree / Baydee uPVC
  const features = [
    "Authorized Partner of Baydee Profiles",
    "German-Engineered uPVC Technology",
    "Soundproof & Thermal Insulation",
    "100% Termite & Corrosion Resistant",
    "Customizable Designs (Sliding, Casement, Villa)",
    "5+ Years of Industry Expertise"
  ];

  return (
    <>
<Helmet>
  <title>About Om Shree Enterprises | uPVC Experts in Vizag</title>

  <meta
    name="description"
    content="Om Shree Enterprises is a leading uPVC windows and doors company in Vizag with years of experience delivering quality, reliability, and customer satisfaction."
  />

  <meta
    name="keywords"
    content="
      Om Shree Enterprises,
      uPVC company Vizag,
      window suppliers Vizag,
      door fabrications Vizag,
      Best upvc doors
      Best upvc windows,
      uPVC experts Vizag,
      Baydee Profiles partner,
      Baydee uPVC Vizag,
    "
  />

  <link rel="canonical" href="https://omshreeenterprises.in/about" />
</Helmet>

    
      {/* 🔝 Top Hero Section */}
      <section className="relative w-full h-[350px] sm:h-[380px] md:h-[450px] overflow-hidden">
        <img
          src={about}
          alt="About Om Shree Enterprises and Baydee Profiles"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h3 className="text-white text-3xl sm:text-3xl md:text-3xl font-bold drop-shadow-lg animate-fade-in-up">
              About Us
            </h3>
            <div className="h-1.5 w-24 bg-sky-500 mt-4 rounded-full"></div>
            <p className="text-slate-200 mt-4 text-lg md:text-xl font-medium max-w-2xl">
              Transforming Vizag's Skyline with Premium uPVC Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ⬇️ About Content Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* 📝 TEXT SECTION */}
            {/* Mobile: Order 1 (Top) | Desktop: Order 2 (Right) */}
            <div className="space-y-6 order-1 md:order-2">
              
              <div>
               
   <h2 className="text-3xl md:text-3xl  sm:text-1xl font-semibold text-[#0F2A44] leading-tight">
               Welcome to <span></span>
              
              <span className="text-sky-600">Om Shree Enterprises</span>
            </h2>
                
                <div className="h-1.5 w-20 bg-sky-500 rounded-full mt-5"></div>
              </div>

              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">
                <p>
                  Established with a vision to revolutionize modern architecture in Vizag, 
                  <strong className="text-slate-900"> Om Shree Enterprises</strong> stands as a premier provider of 
                  high-performance fenestration solutions. We are the authorized channel partner for 
                  <strong className="text-slate-900"> Baydee Profiles</strong>, bringing world-class uPVC quality to your doorstep.
                </p>

                <p>
                  We specialize in a wide range of products including <span className="font-semibold text-sky-700">Sliding Doors, Casement Windows, Villa Windows, and Ventilators</span>. 
                  Our profiles are reinforced with galvanized steel, making them sturdy enough to withstand high wind loads—perfect for high-rise buildings and coastal weather conditions.
                </p>

                <p>
                  Beyond aesthetics, our uPVC systems are engineered for functionality. They offer superior 
                  <span className="font-semibold text-slate-900"> noise reduction (up to 40dB)</span>, excellent thermal insulation to reduce AC bills, 
                  and complete protection against dust and pollution.
                </p>
              </div>

              {/* Feature List Grid */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 mt-2">
                <h4 className="font-bold text-[#0F2A44] mb-3">Why Choose Us?</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm md:text-base font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 border-l-4 border-sky-500 bg-sky-50/50 rounded-r-lg">
                 <p className="italic text-slate-700 font-medium">
                   "We don't just sell windows; we deliver peace of mind with products built on quality, trust, and innovation."
                 </p>
              </div>
            </div>

            {/* 🖼️ IMAGE SECTION */}
            {/* Mobile: Order 2 (Bottom) | Desktop: Order 1 (Left) */}
            <div className="w-full order-2 md:order-1 relative">
              {/* Decorative Blob (Desktop) */}
              <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={aboutleft}
                  alt="Om Shree Enterprises Office and Showroom"
                  className="w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover object-center transition duration-700 hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-5 py-3 rounded-xl shadow-lg border border-slate-100 hidden sm:block">
                  <p className="text-[#0F2A44] font-bold text-sm uppercase tracking-wider">
                    Trusted by 50+ Clients
                  </p>
                </div>
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