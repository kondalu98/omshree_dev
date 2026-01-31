import { Mail, MapPin, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";

import { Helmet } from "react-helmet-async";
import contact from "../assets/About_slider.png";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Your form is submitted. We’ll connect soon 😊");
        formRef.current.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  // Input styles: Full width, clean focus ring, consistent spacing
  const inputClasses = "w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 bg-slate-50 focus:bg-white";

  return (

    <>
    <Helmet>
  <title>Contact Om Shree Enterprises | uPVC Windows Vizag</title>

  <meta
    name="description"
    content="Contact Om Shree Enterprises in Vizag for uPVC windows and doors. Call or WhatsApp us for free consultation, pricing, and site visit."
  />

  <meta
    name="keywords"
    content="
      contact uPVC windows Vizag,
      uPVC window dealers Vizag,
      Om Shree Enterprises contact
      Vishakapatnam uPVC windows,
      vizag,
      om shree enterprises number,
      upvc windows contact
    "
  />

  <link rel="canonical" href="https://omshreeenterprises.in/contact" />
</Helmet>

    <div className="bg-white min-h-screen">
      <Toaster position="top-center" />

      {/* HERO SECTION */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] overflow-hidden">
        <img
          src={contact}
          alt="Contact Baydee Profiles"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />

        <div className="relative z-10 h-full flex items-center justify-center md:justify-start">
          <div className="max-w-7xl mx-auto px-6 w-full text-center md:text-left">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg animate-fade-in-up">
              Get in Touch
            </h3>
            <div className="h-1.5 w-24 bg-sky-500 mt-4 rounded-full mx-auto md:mx-0"></div>
            <p className="text-slate-200 mt-4 text-lg max-w-lg mx-auto md:mx-0">
              We are here to help with your uPVC needs. Reach out to us today!
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* 1. CONTACT FORM (Inputs Stacked One by One) */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 sm:p-10 border border-slate-100 order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800">Send a Message</h2>
              <p className="text-slate-500 mt-2">We typically reply within 24 hours.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="access_key" value="d57dc43d-8a64-4eae-aa7f-f6cfb78d5c94" />

              {/* INPUTS STACKED VERTICALLY */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Type your message here..."
                  required
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98] disabled:opacity-70 mt-2"
              >
                {loading ? "Sending Message..." : "Submit Inquiry"}
              </button>
            </form>
          </div>

          {/* 2. INFO & MAP SECTION */}
          <div className="space-y-8 order-1 lg:order-2">
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-sky-100 p-3 rounded-full text-sky-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Visit Us</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Kommadi Double Road, <br/>
                    Backside of HDFC Bank, <br/>
                    Visakhapatnam – 530048
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-sky-100 p-3 rounded-full text-sky-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Call Us</h4>
                  <a href="tel:+916303511130" className="text-slate-600 hover:text-sky-600 transition-colors">
                    +91 63035 11130
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-sky-100 p-3 rounded-full text-sky-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Email Us</h4>
                  <a href="mailto:omshreeenterprises69@gmail.com" className="text-slate-600 hover:text-sky-600 transition-colors">
                    omshreeenterprises69@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* MAP SECTION (Full Color) */}
            <div className="w-full h-[300px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                title="Omshree Enterprises Location"
                // Using a query search to point to the location
                src="https://www.google.com/maps?q=17.825132,83.352280&z=16&output=embed"
                className="w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>

          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Contact;