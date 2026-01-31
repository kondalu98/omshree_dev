import GlassOptions from "./Glass";
import HardwareSection from "./Hardware";
import { Helmet } from "react-helmet-async";
import HeroSecton from "./HeroSection";
import ProductDoor from "./Product_Door";
import ProductWindow from "./Product_window";
import SlidingProfiles from "./Glazy";
import WhoWeAre from "./whoweare";
import Whychoose from "./Whychoose";
import WindowLamination from "./Lamination";
import WindowShowcaseSlider from "./WindowType";

function MainHome()
{

    return(
        <div>

<Helmet>
  <meta charSet="utf-8" />

  <title>uPVC Windows & Doors in Vizag | Om Shree Enterprises</title>

  <meta
    name="description"
    content="Om Shree Enterprises is a trusted fabrication and installer of premium uPVC windows and doors in Vizag. We offer energy-efficient, durable, soundproof, and stylish uPVC solutions for homes, apartments, and commercial buildings."
  />

  <meta
    name="keywords"
    content="
      Best upvc windows in Vishakapatnam,
      upvc windows Vizag,
      uPVC doors Vizag,
      uPVC window fabrications Vizag,
      uPVC door suppliers Vizag,
      best uPVC windows in Vizag,
      uPVC sliding windows Vizag,
      uPVC casement windows Vizag,
      uPVC doors for home Vizag,
      soundproof windows Vizag,
      Om Shree Enterprises.
      Vishakapatnam,
      Om shree,
      Best doors and windows
      Best windows
    "
  />

  <link rel="canonical" href="https://omshreeenterprises.in/" />

  {/* Open Graph */}
  <meta property="og:title" content="uPVC Windows & Doors in Vizag | Om Shree Enterprises" />
  <meta property="og:description" content="Premium uPVC windows and doors in Vizag for homes and commercial projects." />
  <meta property="og:url" content="https://omshreeenterprises.in/" />
  <meta property="og:type" content="website" />
</Helmet>

        
        <HeroSecton></HeroSecton>
        <WhoWeAre></WhoWeAre>
       
       <ProductWindow
  buttonText="View uPVC Windows"
  buttonLink="/products/uPVC-windows"
/>

     <WindowShowcaseSlider></WindowShowcaseSlider>
     <WindowLamination></WindowLamination>
      <GlassOptions></GlassOptions>
      <SlidingProfiles></SlidingProfiles>
      <HardwareSection></HardwareSection>
     <ProductDoor
  buttonText="View uPVC Doors"
  buttonLink="/products/uPVC-doors"
/>

         <Whychoose></Whychoose>
        
        </div>
    )
}
export default MainHome;