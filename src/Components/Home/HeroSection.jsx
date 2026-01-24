import { useEffect, useState } from "react";

import img_1 from "../assets/img3.webp";
import img_2 from "../assets/windows_img_2.jpg";

const slides = [
  {
    image: img_1,
    title: "Baydee Profiles",
    subtitle: "Windows Designed for a Better Life",
    desc: "Premium quality uPVC windows and doors engineered for strength, durability, and modern living."
  },
  {
    image: img_2,
    title: "Built for Indian Conditions",
    subtitle: "Strong. Durable. Energy Efficient.",
    desc: "Specially designed to protect against dust, noise, heat, pollution, and harsh weather."
  },
  {
    image: img_2,
    title: "Quality You Can Trust",
    subtitle: "Comfort • Safety • Style",
    desc: "Low maintenance, long-lasting performance, and elegant designs for homes and commercial spaces."
  }
];

function HeroSecton() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[85vh] w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Background Image */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/55"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="max-w-2xl text-white space-y-6">
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                    {slide.title}
                                </h1>

                                <h2 className="text-xl md:text-2xl text-slate-200">
                                    {slide.subtitle}
                                </h2>

                                <p className="text-slate-300">
                                    {slide.desc}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <a
                                        href="/enquiry"
                                        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow-sm hover:shadow-md"
                                    >
                                        Request a Quote
                                    </a>


                                    <a
                                        href="/products"
                                        className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
                                    >
                                        View Products
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full transition ${current === index ? "bg-sky-500" : "bg-white/60"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}
export default HeroSecton;