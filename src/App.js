import { Route, Routes } from "react-router-dom";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Feedback from "./Components/Testominals/Feedback";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import MainHome from "./Components/Home/MainHome";
import Nav from "./Components/NavBar/Nav";
import DoorProduct from "./Components/Door/Door_Product";
import WindowProduct from "./Components/Window/Window_product";
import WhatsAppButton from "./Components/Home/Whatshapp";

function App() {
  return (
    <div className="App">
     <Nav />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={ <About></About>} />
        <Route path="/products" element={<MainHome />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/gallery" element={<Gallery />} />

         <Route path="/products/upvc-doors" element={<DoorProduct />} />
         <Route path="/products/upvc-windows" element={<WindowProduct />} />
           <Route path="/testimonials" element={<Feedback />} />
        {/* 404 Page */}
        <Route path="*" element={<p> Not Found </p> } />
      </Routes>
      <WhatsAppButton></WhatsAppButton>
      <Footer />
    </div>
  );
}

export default App;
