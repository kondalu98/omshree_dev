import { Instagram, Phone } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

function FloatingSocial() {
  return (
    <div className="fixed left-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/916303511130"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/omshreeenterprises69"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 text-white shadow-lg hover:scale-110 transition"
      >
        <Instagram size={22} />
      </a>

      {/* Call */}
      <a
        href="tel:+916303511130"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 text-white shadow-lg hover:scale-110 transition"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}


export default FloatingSocial;
