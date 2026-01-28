import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../assets/check.png";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Main Grid Layout 
            - Mobile: 1 column (Stack)
            - Tablet: 2 columns (2 rows of 2)
            - Desktop: 4 Equal columns (1 row of 4)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10 items-start">

          {/* 1. Company Info */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Omshree Enterprises Logo"
              className="lg:h-13 md:h-14 sm:h-14 w-auto object-contain" 
            />
            <p className="text-sm leading-relaxed text-slate-400">
              Omshree Enterprises provide Premium UPVC windows and doors in Vizag, delivering durable,
              energy-efficient, and stylish solutions for homes and
              commercial spaces.
            </p>
          </div>

          {/* 2. Quick Links */}
          {/* Using h-full ensures this column takes full height availability */}
          <div className="flex flex-col lg:ml-20 h-full">
            <h4 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "UPVC Windows", link: "/products/upvc-windows" },
                { name: "UPVC Doors", link: "/products/upvc-doors" },
                { name: "Gallery", link: "/gallery" },
                { name: "Contact", link: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="hover:text-sky-400 transition-colors duration-200 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Kommadi Village Road, <br />
                  HDFC Bank Backside, <br />
                  Visakhapatnam, <br />
                  Andhra Pradesh – 530048
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <a
                  href="tel:+916303511130"
                  className="hover:text-sky-400 transition-colors"
                >
                  +91 63035 11130
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <a
                  href="mailto:omshreeenterprises69@gmail.com"
                  className="hover:text-sky-400 transition-colors break-all"
                >
                  omshreeenterprises69@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Map */}
          <div className="w-full h-64 md:h-full min-h-[220px] rounded-xl overflow-hidden border border-slate-700 shadow-sm">
            <iframe
              title="Omshree Enterprises Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3798.243548983416!2d83.35973787517618!3d17.827364883136866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ5JzM4LjUiTiA4M8KwMjEnNDQuMyJF!5e0!3m2!1sen!2sin!4v1716900000000!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Omshree Enterprises. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;