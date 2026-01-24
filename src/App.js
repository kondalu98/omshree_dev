import { Route, Routes } from "react-router-dom";

import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import MainHome from "./Components/Home/MainHome";
import Nav from "./Components/NavBar/Nav";
import WhoWeAre from "./Components/Home/whoweare";

function App() {
  return (
    <div className="App">
     <Nav />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={ <WhoWeAre></WhoWeAre>} />
        <Route path="/products" element={<MainHome />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 Page */}
        <Route path="*" element={<p> Not Found </p> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
