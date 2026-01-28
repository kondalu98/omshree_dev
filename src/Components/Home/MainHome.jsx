import GlassOptions from "./Glass";
import HardwareSection from "./Hardware";
import HeroSecton from "./HeroSection";
import ProductShowcase from "./WindowType";
import ProductWindow from "./Product_window";
import SlidingProfiles from "./Glazy";
import TechnicalGallerySlider from "./WindowType";
import WhoWeAre from "./whoweare";
import Whychoose from "./Whychoose";
import WindowLamination from "./Lamination";
import WindowShowcaseSlider from "./WindowType";
import ProductDoor from "./Product_Door";

function MainHome()
{

    return(
        <div>
        <HeroSecton></HeroSecton>
        <WhoWeAre></WhoWeAre>
       
        <ProductWindow></ProductWindow>
     <WindowShowcaseSlider></WindowShowcaseSlider>
     <WindowLamination></WindowLamination>
      <GlassOptions></GlassOptions>
      <SlidingProfiles></SlidingProfiles>
      <HardwareSection></HardwareSection>
      <ProductDoor></ProductDoor>
         <Whychoose></Whychoose>
        
        </div>
    )
}
export default MainHome;