import { Route, Routes } from "react-router-dom";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import DoorProduct from "./Components/Door/Door_Product";
import Feedback from "./Components/Testominals/Feedback";
import FloatingSocial from "./Components/Home/SocialMedia";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import { Helmet } from "react-helmet-async";
import MainHome from "./Components/Home/MainHome";
import Nav from "./Components/NavBar/Nav";
import WhatsAppButton from "./Components/Home/Whatshapp";
import WindowProduct from "./Components/Window/Window_product";

function App() {
  return (
    <>
     <Helmet>
        <title>Om Shree Enterprises | uPVC Windows & Doors in Vizag</title>
        <meta
          name="description"
          content="Premium uPVC windows and doors in Vizag by Om Shree Enterprises. Energy-efficient, durable, and stylish solutions."
        />
        <link rel="canonical" href="https://omshreeenterprises.in/" />
      </Helmet>
    
    <div className="App">
     <Nav />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={ <About></About>} />
        <Route path="/products" element={<MainHome />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/gallery" element={<Gallery />} />

         <Route path="/products/uPVC-doors" element={<DoorProduct />} />
         <Route path="/products/uPVC-windows" element={<WindowProduct />} />
           <Route path="/testimonials" element={<Feedback />} />
        {/* 404 Page */}
        <Route path="*" element={<p> Not Found </p> } />
      </Routes>
      <FloatingSocial></FloatingSocial>
      <WhatsAppButton></WhatsAppButton>
      <Footer />
    </div>
    </>
  );
}

export default App;
