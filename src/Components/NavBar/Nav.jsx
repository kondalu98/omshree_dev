import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from '../assets/final_logo.png';

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [showcaseOpen, setShowcaseOpen] = useState(false);
  
  // State to track current URL path (handles active highlighting)
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Set path on mount
    setCurrentPath(window.location.pathname);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  // Helper: Returns active styling classes if path matches
  // strict = true checks exact match (e.g., Home)
  // strict = false checks if url starts with path (e.g., Parent Dropdowns)
  const getLinkClass = (path, strict = true) => {
    const baseClass = "transition-colors duration-200 font-medium ";
    const matched = strict 
      ? currentPath === path 
      : currentPath.startsWith(path) && path !== "/";

    return matched 
      ? `${baseClass} text-sky-500` // Active Style
      : `${baseClass} text-slate-700 hover:text-sky-500`; // Inactive Style
  };

  // Helper for Mobile links
  const getMobileLinkClass = (path) => {
    const baseClass = "block py-3 px-2 text-lg font-medium border-b border-slate-50 rounded-lg ";
    return currentPath === path
      ? `${baseClass} text-sky-500 bg-slate-50` 
      : `${baseClass} text-slate-800 hover:text-sky-500 hover:bg-slate-50`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* ================= 1. LOGO (FAR LEFT) ================= */}
          <a href="/" className="flex-shrink-0 flex items-center pr-4">
            <img
              src={logo}
              alt="Om Shree Enterprises Logo"
              className="h-12 md:h-14 w-auto object-contain" 
            />
          </a>

          {/* ================= 2. RIGHT SIDE CONTAINER ================= */}
          <div className="flex items-center gap-8">
            
            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center gap-8 font-medium">
              <a href="/" className={getLinkClass("/")}>
                Home
              </a>
              <a href="/about" className={getLinkClass("/about")}>
                About Us
              </a>

              {/* Products Dropdown */}
              <div
                className="relative group h-20 flex items-center"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  // Checks if any child path (starts with /products) is active
                  className={`flex items-center gap-1 transition-colors focus:outline-none ${
                    currentPath.includes('/products') ? 'text-sky-500' : 'text-slate-700 hover:text-sky-500'
                  }`}
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full w-56 pt-2 transition-all duration-200 origin-top z-50 ${
                    productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2">
                    <a href="/products/uPVC-windows" className={`block px-6 py-3 transition-colors ${currentPath === '/products/uPVC-windows' ? 'text-sky-500 bg-slate-50' : 'hover:bg-slate-50 hover:text-sky-500 text-slate-600'}`}>
                      uPVC Windows
                    </a>
                    <a href="/products/uPVC-doors" className={`block px-6 py-3 transition-colors ${currentPath === '/products/uPVC-doors' ? 'text-sky-500 bg-slate-50' : 'hover:bg-slate-50 hover:text-sky-500 text-slate-600'}`}>
                      uPVC Doors
                    </a>
                  </div>
                </div>
              </div>

              {/* Showcase Dropdown */}
              <div
                className="relative group h-20 flex items-center"
                onMouseEnter={() => setShowcaseOpen(true)}
                onMouseLeave={() => setShowcaseOpen(false)}
              >
                <button
                   // Manually checking children paths for parent highlighting
                  className={`flex items-center gap-1 transition-colors focus:outline-none ${
                    currentPath === '/gallery' || currentPath === '/testimonials' ? 'text-sky-500' : 'text-slate-700 hover:text-sky-500'
                  }`}
                >
                  Showcase
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${showcaseOpen ? "rotate-180" : ""}`}
                  />
                </button>
                
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full w-56 pt-2 transition-all duration-200 origin-top z-50 ${
                    showcaseOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2">
                    <a href="/gallery" className={`block px-6 py-3 transition-colors ${currentPath === '/gallery' ? 'text-sky-500 bg-slate-50' : 'hover:bg-slate-50 hover:text-sky-500 text-slate-600'}`}>
                      Gallery
                    </a>
                    <a href="/testimonials" className={`block px-6 py-3 transition-colors ${currentPath === '/testimonials' ? 'text-sky-500 bg-slate-50' : 'hover:bg-slate-50 hover:text-sky-500 text-slate-600'}`}>
                      Testimonials
                    </a>
                  </div>
                </div>
              </div>

              <a href="/contact" className={getLinkClass("/contact")}>
                Contact Us
              </a>
            </div>

            {/* Desktop Call Button */}
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

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-[#0F2A44] p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <Menu size={28} />
            </button>
          </div>
          
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100 flex-shrink-0">
             <span className="font-bold text-lg text-[#0F2A44]">Menu</span>
             <button 
                onClick={() => setMobileOpen(false)}
                className="text-slate-500 hover:text-slate-800 transition p-2 bg-slate-50 rounded-full"
             >
                  <X size={24} />
             </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          <a href="/" className={getMobileLinkClass("/")}>
            Home
          </a>
          <a href="/about" className={getMobileLinkClass("/about")}>
            About Us
          </a>

          {/* Mobile Products */}
          <div className="border-b border-slate-50">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={`flex w-full justify-between items-center py-3 px-2 text-lg font-medium hover:bg-slate-50 rounded-lg ${
                  currentPath.includes('/products') ? 'text-sky-500' : 'text-slate-800 hover:text-sky-500'
              }`}
            >
              Products
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {productsOpen && (
              <div className="ml-2 pl-4 border-l-2 border-slate-100 space-y-1 mb-2">
                <a href="/products/uPVC-windows" className={`block py-2 ${currentPath === '/products/uPVC-windows' ? 'text-sky-500 font-medium' : 'text-slate-600'}`}>uPVC Windows</a>
                <a href="/products/uPVC-doors" className={`block py-2 ${currentPath === '/products/uPVC-doors' ? 'text-sky-500 font-medium' : 'text-slate-600'}`}>uPVC Doors</a>
              </div>
            )}
          </div>

          {/* Mobile Showcase */}
          <div className="border-b border-slate-50">
            <button
              onClick={() => setShowcaseOpen(!showcaseOpen)}
              className={`flex w-full justify-between items-center py-3 px-2 text-lg font-medium hover:bg-slate-50 rounded-lg ${
                 currentPath === '/gallery' || currentPath === '/testimonials' ? 'text-sky-500' : 'text-slate-800 hover:text-sky-500'
              }`}
            >
              Showcase
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${showcaseOpen ? "rotate-180" : ""}`}
              />
            </button>
            {showcaseOpen && (
              <div className="ml-2 pl-4 border-l-2 border-slate-100 space-y-1 mb-2">
                <a href="/gallery" className={`block py-2 ${currentPath === '/gallery' ? 'text-sky-500 font-medium' : 'text-slate-600'}`}>Gallery</a>
                <a href="/testimonials" className={`block py-2 ${currentPath === '/testimonials' ? 'text-sky-500 font-medium' : 'text-slate-600'}`}>Testimonials</a>
              </div>
            )}
          </div>

          <a href="/contact" className={getMobileLinkClass("/contact")}>
            Contact Us
          </a>
        </div>

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