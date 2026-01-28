import { ChevronDown, Menu, X, Phone } from "lucide-react";
import logo from '../assets/check.png';
import { useState } from "react";

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [showcaseOpen, setShowcaseOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* ================= LOGO ================= */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Om Shree Enterprises Logo"
              // h-12 on mobile, h-14 on desktop, w-auto keeps aspect ratio correct
              className="h-14 md:h-15 w- object-contain" 
            />
          </a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-slate-700 font-medium">
            <a href="/" className="hover:text-sky-300 transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-sky-300 transition-colors">
              About Us
            </a>

            {/* Products Dropdown */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-sky-300 transition-colors py-6 focus:outline-none"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full w-64 pt-2 transition-all duration-200 origin-top z-50 ${
                  productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2">
                  <a href="/products/upvc-windows" className="block px-6 py-3 hover:bg-slate-50 hover:text-sky-300 transition-colors">
                    UPVC Windows
                  </a>
                  <a href="/products/upvc-doors" className="block px-6 py-3 hover:bg-slate-50 hover:text-sky-300 transition-colors">
                    UPVC Doors
                  </a>
                </div>
              </div>
            </div>

            {/* Showcase Dropdown */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setShowcaseOpen(true)}
              onMouseLeave={() => setShowcaseOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-sky-300 transition-colors py-6 focus:outline-none"
              >
                Showcase
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${showcaseOpen ? "rotate-180" : ""}`}
                />
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full w-64 pt-2 transition-all duration-200 origin-top z-50 ${
                  showcaseOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2">
                  <a href="/gallery" className="block px-6 py-3 hover:bg-slate-50 hover:text-sky-300 transition-colors">
                    Gallery
                  </a>
                  <a href="/testimonials" className="block px-6 py-3 hover:bg-slate-50 hover:text-sky-300 transition-colors">
                    Testimonials
                  </a>
                </div>
              </div>
            </div>

            <a href="/contact" className="hover:text-sky-300 transition-colors">
              Contact Us
            </a>
          </div>

          {/* ================= DESKTOP CALL BUTTON ================= */}
          <div className="hidden lg:flex items-center">
             <a 
               href="tel:+916303511130" 
               className="flex items-center gap-2 text-[#0F2A44] font-bold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
             >
                <div className="bg-sky-100 p-2 rounded-full text-sky-600">
                  <Phone size={20} className="fill-current" />
                </div>
                <span>+91 63035 11130</span>
             </a>
          </div>

          {/* ================= MOBILE MENU TOGGLE ================= */}
          <button
            className="lg:hidden text-[#0F2A44] p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100 flex-shrink-0">
             <span className="font-bold text-lg text-[#0F2A44]">Menu</span>
             <button 
                onClick={() => setMobileOpen(false)}
                className="text-slate-500 hover:text-slate-800 transition p-2 bg-slate-50 rounded-full"
             >
                 <X size={24} />
             </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          <a href="/" className="block py-3 px-2 text-lg font-medium text-slate-800 border-b border-slate-50 hover:bg-slate-50 rounded-lg">
            Home
          </a>
          <a href="/about" className="block py-3 px-2 text-lg font-medium text-slate-800 border-b border-slate-50 hover:bg-slate-50 rounded-lg">
            About Us
          </a>

          {/* Mobile Products Accordion */}
          <div className="border-b border-slate-50">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex w-full justify-between items-center py-3 px-2 text-lg font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Products
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {productsOpen && (
              <div className="ml-2 pl-4 border-l-2 border-slate-100 space-y-1 mb-2">
                <a href="/products/upvc-windows" className="block py-2 text-slate-600">uPVC Windows</a>
                <a href="/products/upvc-doors" className="block py-2 text-slate-600">uPVC Doors</a>
              </div>
            )}
          </div>

          {/* Mobile Showcase Accordion */}
          <div className="border-b border-slate-50">
            <button
              onClick={() => setShowcaseOpen(!showcaseOpen)}
              className="flex w-full justify-between items-center py-3 px-2 text-lg font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Showcase
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${showcaseOpen ? "rotate-180" : ""}`}
              />
            </button>
            {showcaseOpen && (
              <div className="ml-2 pl-4 border-l-2 border-slate-100 space-y-1 mb-2">
                <a href="/gallery" className="block py-2 text-slate-600">Gallery</a>
                <a href="/testimonials" className="block py-2 text-slate-600">Testimonials</a>
              </div>
            )}
          </div>

          <a href="/contact" className="block py-3 px-2 text-lg font-medium text-slate-800 hover:bg-slate-50 rounded-lg">
            Contact Us
          </a>
        </div>

        {/* Mobile Footer Call Button */}
        <div className="p-6 border-t border-slate-100 bg-slate-50">
           <a 
               href="tel:+916303511130" 
               className="flex items-center justify-center gap-3 w-full bg-[#0F2A44] text-white py-4 rounded-xl font-semibold shadow-lg active:scale-95 transition-transform"
             >
                <Phone size={20} />
                <span>+91 63035 11130</span>
           </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;