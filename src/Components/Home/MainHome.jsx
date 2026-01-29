import GlassOptions from "./Glass";
import HardwareSection from "./Hardware";
import HeroSecton from "./HeroSection";
import ProductDoor from "./Product_Door";
import ProductShowcase from "./WindowType";
import ProductWindow from "./Product_window";
import SlidingProfiles from "./Glazy";
import TechnicalGallerySlider from "./WindowType";
import WhoWeAre from "./whoweare";
import Whychoose from "./Whychoose";
import WindowLamination from "./Lamination";
import WindowShowcaseSlider from "./WindowType";

function MainHome()
{

    return(
        <div>
        <HeroSecton></HeroSecton>
        <WhoWeAre></WhoWeAre>
       
       <ProductWindow
  buttonText="View uPVC Windows"
  buttonLink="/products/upvc-windows"
/>

     <WindowShowcaseSlider></WindowShowcaseSlider>
     <WindowLamination></WindowLamination>
      <GlassOptions></GlassOptions>
      <SlidingProfiles></SlidingProfiles>
      <HardwareSection></HardwareSection>
     <ProductDoor
  buttonText="View UPVC Doors"
  buttonLink="/products/upvc-doors"
/>

         <Whychoose></Whychoose>
        
        </div>
    )
}
export default MainHome;