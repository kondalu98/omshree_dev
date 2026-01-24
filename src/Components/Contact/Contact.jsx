import contact from '../assets/contacts.png';

function Contact() {
  return (
    <div className="bg-slate-50">

     <section className="relative flex items-center justify-center 
                    h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh]">

  {/* Background Image */}
  <img
    src={contact}
    alt="Contact Om Shree Enterprises"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-sky-900/40"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      Contact Us
    </h1>

    <p className="mt-3 text-sm sm:text-base md:text-lg text-sky-100">
      Vizag, Andhra Pradesh | +91 98765 43210 | support@baydeeprofiles.com
    </p>
  </div>

</section>


      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Send Us a Message
            </h2>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5"
            >
              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY"
              />

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Mobile No *
                </label>
                <input
                  type="number"
                  name="subject"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:ring-sky-500"
                ></textarea>
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
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Contact Information
              </h3>

              <ul className="space-y-3 text-slate-700 text-sm">
                <li>📍 Vizag (Visakhapatnam), Andhra Pradesh</li>
                <li>📞 +91 77026 94949</li>
                <li>✉️ sales@omshreeenterprises.com</li>
              </ul>
            </div>

            {/* MAP */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden h-[260px]">
              <iframe
                title="Om Shree Enterprises Location"
                src="https://www.google.com/maps?q=Visakhapatnam%20Andhra%20Pradesh&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
