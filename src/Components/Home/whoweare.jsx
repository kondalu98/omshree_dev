import about from '../assets/whoweare.png';

function WhoWeAre() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="w-full">
            <img
              src={about}
              alt="Baydee Profiles uPVC Windows and Doors in Vizag"
              className="w-full h-[420px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-3xl font-bold text-[#0F2A44]">
              Who We Are
            </h2>

            <p className="text-slate-700 leading-relaxed">
              <strong>Baydee Profiles</strong>, powered by <strong>Om Shree Enterprises</strong>,
              is a trusted brand in premium <strong>uPVC windows and doors in Vizag
              (Visakhapatnam)</strong>, delivering reliable solutions for modern homes
              and commercial spaces.
            </p>

            <p className="text-slate-700 leading-relaxed">
              With over a decade of experience, we specialize in durable,
              energy-efficient, and low-maintenance uPVC systems designed
              for Indian climatic conditions.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Our products offer excellent protection against dust, noise,
              heat, pollution, and harsh weather while enhancing comfort,
              safety, and aesthetic appeal.
            </p>

            <p className="text-slate-700 leading-relaxed">
              We stand for <strong>quality, trust, and innovation</strong>,
              ensuring long-lasting value and superior craftsmanship.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/about"
                className="inline-block bg-sky-500 hover:bg-sky-600
                           text-white px-6 py-3 rounded-lg font-semibold
                           transition shadow-sm hover:shadow-md"
              >
                Know More About Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
