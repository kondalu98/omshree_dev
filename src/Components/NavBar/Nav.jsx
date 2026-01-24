import { ChevronDown, Menu, X } from "lucide-react";

import { useState } from "react";

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [showcaseOpen, setShowcaseOpen] = useState(false);

  // Helper to toggle mobile menu prevents scrolling the body (optional polish)
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-[#0F2A44] tracking-wide"
          >
            Om Shree Enterprises
          </a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-10 text-slate-800 font-medium">
            <a href="/" className="hover:text-[#0F2A44] transition">
              Home
            </a>
            <a href="/about" className="hover:text-[#0F2A44] transition">
              About Us
            </a>

            {/* Products Dropdown (Desktop) */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 hover:text-[#0F2A44] transition py-4"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 top-full w-60 pt-4 transition-all duration-200 origin-top ${
                  productsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                  <a
                    href="/products/upvc-windows"
                    className="block px-6 py-3 hover:bg-slate-50 transition-colors"
                  >
                    uPVC Windows
                  </a>
                  <a
                    href="/products/upvc-doors"
                    className="block px-6 py-3 hover:bg-slate-50 transition-colors"
                  >
                    uPVC Doors
                  </a>
                </div>
              </div>
            </div>

            {/* Showcase Dropdown (Desktop) */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setShowcaseOpen(true)}
              onMouseLeave={() => setShowcaseOpen(false)}
            >
              <button
                onClick={() => setShowcaseOpen(!showcaseOpen)}
                className="flex items-center gap-1 hover:text-[#0F2A44] transition py-4"
              >
                Showcase
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    showcaseOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 top-full w-56 pt-4 transition-all duration-200 origin-top ${
                  showcaseOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                  <a
                    href="/gallery"
                    className="block px-6 py-3 hover:bg-slate-50 transition-colors"
                  >
                    Gallery
                  </a>
                  <a
                    href="/testimonials"
                    className="block px-6 py-3 hover:bg-slate-50 transition-colors"
                  >
                    Testimonials
                  </a>
                </div>
              </div>
            </div>

            <a href="/contact" className="hover:text-[#0F2A44] transition">
              Contact Us
            </a>
            <a
              href="/enquiry"
              className="ml-4 bg-sky-400 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition shadow-sm hover:shadow-md"
            >
              Enquiry / Quote
            </a>
          </div>

          {/* ================= MOBILE TOGGLE BUTTON ================= */}
          <button
            className="lg:hidden text-[#0F2A44] z-50 relative"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
           {/* We leave only the Menu icon here. The Close icon moves inside the drawer */}
            <Menu size={28} /> 
          </button>
        </div>
      </div>

      {/* ================= MOBILE DRAWER / SIDEBAR ================= */}
      
      {/* 1. The Backdrop (Overlay) */}
      {/* This sits behind the menu but over the content. Clicking it closes the menu. */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* 2. The Sliding Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-white z-[70] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header (Close Button) */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-slate-100">
             <span className="font-bold text-lg text-[#0F2A44]">Menu</span>
             <button 
                onClick={() => setMobileOpen(false)}
                className="text-slate-500 hover:text-slate-800 transition"
             >
                 <X size={28} />
             </button>
        </div>

        {/* Drawer Content (Scrollable) */}
        <div className="p-6 overflow-y-auto h-[calc(100vh-72px)] space-y-4 text-slate-800">
          <a href="/" className="block py-2 text-lg font-medium border-b border-slate-50">
            Home
          </a>
          <a href="/about" className="block py-2 text-lg font-medium border-b border-slate-50">
            About Us
          </a>

          {/* Mobile Products */}
          <div className="border-b border-slate-50 pb-2">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex w-full justify-between items-center py-2 text-lg font-medium"
            >
              Products
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {productsOpen && (
              <div className="pl-4 space-y-2 mt-2 bg-slate-50 rounded-lg p-3">
                <a href="/products/upvc-windows" className="block py-2">
                  uPVC Windows
                </a>
                <a href="/products/upvc-doors" className="block py-2">
                  uPVC Doors
                </a>
              </div>
            )}
          </div>

          {/* Mobile Showcase */}
          <div className="border-b border-slate-50 pb-2">
            <button
              onClick={() => setShowcaseOpen(!showcaseOpen)}
              className="flex w-full justify-between items-center py-2 text-lg font-medium"
            >
              Showcase
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  showcaseOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {showcaseOpen && (
              <div className="pl-4 space-y-2 mt-2 bg-slate-50 rounded-lg p-3">
                <a href="/gallery" className="block py-2">
                  Gallery
                </a>
                <a href="/testimonials" className="block py-2">
                  Testimonials
                </a>
              </div>
            )}
          </div>

          <a href="/contact" className="block py-2 text-lg font-medium border-b border-slate-50">
            Contact Us
          </a>

          <div className="pt-4">
            <a
                href="/enquiry"
                className="block text-center bg-sky-400 hover:bg-sky-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
            >
                Request a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;