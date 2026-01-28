import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down a bit (optional polish)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Initial check in case page is already scrolled
    toggleVisibility(); 

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Replace with your actual WhatsApp number
  const phoneNumber = "916303511130"; 
  const message = "Hello! I would like to know more about your uPVC products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-[9999] 
        group flex items-center justify-center
        transition-all duration-500 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}
      `}
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip / Label (Hidden on mobile to save space, visible on hover desktop) */}
      <span className="
        absolute right-full mr-3 
        bg-white text-slate-800 text-sm font-semibold 
        px-3 py-1.5 rounded-lg shadow-md border border-slate-100
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
        whitespace-nowrap hidden md:block
      ">
        Chat with us
      </span>

      {/* Button Container with Pulse Effect */}
      <div className="relative">
        {/* Ping Animation Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
        
        {/* Main Button */}
        <div className="
          relative flex items-center justify-center 
          w-14 h-14 bg-[#25D366] rounded-full shadow-xl 
          hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300
        ">
          <MessageCircle color="white" size={32} strokeWidth={2.5} />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;