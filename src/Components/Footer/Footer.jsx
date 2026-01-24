function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Baydee Profiles
            </h3>
            <p className="text-sm leading-relaxed">
              Premium uPVC windows and doors in Vizag, delivering durable,
              energy-efficient, and stylish solutions for homes and
              commercial spaces.
            </p>

            <p className="text-sm">
              <span className="text-sky-400 font-medium">Serving:</span>{" "}
              Vizag & Andhra Pradesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-sky-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-sky-400 transition">About Us</a></li>
              <li><a href="/products" className="hover:text-sky-400 transition">Products</a></li>
              <li><a href="/gallery" className="hover:text-sky-400 transition">Gallery</a></li>
              <li><a href="/contact" className="hover:text-sky-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                📍 Vizag (Visakhapatnam), Andhra Pradesh
              </li>
              <li>
                📞 <a href="tel:+917702694949" className="hover:text-sky-400 transition">
                  +91 77026 94949
                </a>
              </li>
              <li>
                ✉️ <a
                  href="mailto:sales@baydeeprofiles.com"
                  className="hover:text-sky-400 transition"
                >
                  sales@baydeeprofiles.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="w-full h-[220px] rounded-xl overflow-hidden border border-slate-700">
            <iframe
              title="Baydee Profiles Location"
              src="https://www.google.com/maps?q=Visakhapatnam%20Andhra%20Pradesh&output=embed"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Baydee Profiles. All rights reserved.
          </p>

          <p className="text-slate-400">
            Designed with <span className="text-sky-400">care</span> for modern living
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
