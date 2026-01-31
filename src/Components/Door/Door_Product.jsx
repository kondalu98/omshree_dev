import { Helmet } from "react-helmet-async";
import ProductDoor from "../Home/Product_Door";
import about from "../assets/windows/c-profile-pic.jpg";
import uPVC_door from "../assets/windows/upvc_door.png";

function DoorProduct() {
  return (
    <>
    <Helmet>
  <title>uPVC Doors in Vizag | Sliding & French Doors |omshreeenterprises | Vishakapatnam</title>

  <meta
    name="description"
    content="Explore premium uPVC doors in Vizag including sliding, French, and balcony doors. Om Shree Enterprises offers secure, weatherproof, and stylish uPVC door solutions."
  />

  <meta
    name="keywords"
    content="
    upvc doors,
     best doors in vizag,
     best doors in vishakapatnam,
      uPVC doors Vizag,
      sliding doors Vizag,
      French doors Vizag,
      balcony doors Vizag,
      uPVC door fabrications Vizag,
      weatherproof doors Vizag
    "
  />

  <link rel="canonical" href="https://omshreeenterprises.in/products/uPVC-doors" />
</Helmet>

    <>
      {/* 🔝 Top Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] overflow-hidden">
        <img
          src={about}
          alt="About Baydee Profiles uPVC Windows and Doors"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg animate-fade-in-up">              uPVC Doors
            </h3>
             <p className="text-slate-200 mt-4 text-base sm:text-lg md:text-xl max-w-xl font-medium drop-shadow-md">
                Engineered for durability, designed for elegance. Experience the best in noise reduction and energy efficiency.
              </p>
            <div className="h-1.5 w-24 bg-sky-500 mt-4 rounded-full shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Main Product Content */}
     <ProductDoor
  buttonText="Explore Our Doors"
  buttonLink="/gallery"
/>


      {/* 🖼️ Bottom Image Section (Responsive) */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Optional Heading for the image section */}
            <h4 className="text-2xl font-bold text-slate-800 mb-8">
                Our Door Styles & Configurations
            </h4>

            {/* Image Container */}
            <div className="bg-white p-2 md:p-4 rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <img 
                    src={uPVC_door} 
                    alt="uPVC Door Designs and Types" 
                    // 'w-full' makes it responsive width
                    // 'h-auto' keeps the aspect ratio correct
                    // 'object-contain' ensures the whole image is visible
                    className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
                />
            </div>
        </div>
      </section>
    </>
    </>
  );
}

export default DoorProduct;