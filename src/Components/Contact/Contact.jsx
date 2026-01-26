import { Mail, MapPin, Phone } from "lucide-react";

import contact from "../assets/About_slider.png";

function Contact() {
  return (
    <div>
 <section className="relative w-full h-[400px] sm:h-[380px] md:h-[450px] overflow-hidden">
        <img
          src={contact}
          alt="About Baydee Profiles uPVC Windows and Doors"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg animate-fade-in-up">
              Contact Us
            </h3>
            <div className="h-1 w-20 bg-sky-500 mt-4 rounded-full"></div>
          </div>
        </div>
      </section>

    
      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">
              Send Us a Message
            </h2>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY"
              />

              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-700 mb-1 text-left">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-700 mb-1 text-left">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>

              {/* Mobile */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-700 mb-1 text-left">
                  Mobile No *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-700 mb-1 text-left">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold transition shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-5">
                Contact Information
              </h3>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-500 mt-0.5" />
                 <span className="leading-relaxed">
  Kommadi Village Road,<br />
  HDFC Bank Backside,<br />
  Visakhapatnam, Andhra Pradesh – 530048
</span>

                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sky-500" />
                  <a href="tel:+916303511130" className="hover:text-sky-500">
                    +91 63035 11130
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-sky-500" />
                  <a
                    href="mailto:omshreeenterprises69@gmail.com"
                    className="hover:text-sky-500 break-all"
                  >
                    omshreeenterprises69@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* MAP */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden h-[260px]">
              <iframe
                title="Omshree Enterprises Location"
                src="https://www.google.com/maps?q=Kommadi%20Village%20Road%20HDFC%20Bank%20Backside%20Visakhapatnam%20530048&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
