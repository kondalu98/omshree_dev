import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Omshree Enterprises
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium uPVC windows and doors in Vizag, delivering durable,
              energy-efficient, and stylish solutions for homes and
              commercial spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Products", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(" ", "")}`}
                      className="hover:text-sky-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-8 h-8 text-sky-400 mt-0.5" />
                <span className="leading-relaxed">
                  Kommadi Village Road,  
                  HDFC Bank Backside,  
                  Visakhapatnam,  
                  Andhra Pradesh – 530048
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <a
                  href="tel:+916303511130"
                  className="hover:text-sky-400 transition"
                >
                  +91 63035 11130
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <a
                  href="mailto:omshreeenterprises69@gmail.com"
                  className="hover:text-sky-400 transition break-all"
                >
                  omshreeenterprises69@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="w-full h-[220px] rounded-xl overflow-hidden border border-slate-700">
            <iframe
              title="Omshree Enterprises Location"
              src="https://www.google.com/maps?q=Kommadi%20Village%20Road%20HDFC%20Bank%20Backside%20Visakhapatnam%20530048&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
          <p>
            © {new Date().getFullYear()} Omshree Enterprises. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
