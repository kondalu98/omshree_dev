function TrustSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44]">
            Why Clients Trust Us
          </h2>
          <p className="text-slate-600 mt-3 text-base md:text-lg">
            We deliver results that truly matter.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-sky-500">50+</h3>
            <p className="mt-2 text-slate-700 font-medium">
              Projects Delivered
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-sky-500">98%</h3>
            <p className="mt-2 text-slate-700 font-medium">
              Client Satisfaction
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-sky-500">24/7</h3>
            <p className="mt-2 text-slate-700 font-medium">
              Support Available
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-4xl font-bold text-sky-500">5+</h3>
            <p className="mt-2 text-slate-700 font-medium">
              Years Experience
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/gallery"
            className="
              inline-flex items-center justify-center
              px-8 py-4
              rounded-full
              bg-sky-500 text-white
              font-semibold text-base
              shadow-lg shadow-sky-500/30
              hover:bg-sky-600 hover:shadow-xl
              transition-all duration-300
            "
          >
            Explore Our Works
          </a>
        </div>

      </div>
    </section>
  );
}

export default TrustSection;
