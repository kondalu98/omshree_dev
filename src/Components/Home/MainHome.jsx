import HeroSecton from "./HeroSection";
import ProductShowcase from "./WindowType";
import ProductWindow from "./Product_window";
import TechnicalGallerySlider from "./WindowType";
import WhoWeAre from "./whoweare";
import Whychoose from "./Whychoose";
import WindowShowcaseSlider from "./WindowType";

function MainHome()
{

    return(
        <div>
        <HeroSecton></HeroSecton>
        <WhoWeAre></WhoWeAre>
       
        <ProductWindow></ProductWindow>
     <WindowShowcaseSlider></WindowShowcaseSlider>
         <Whychoose></Whychoose>
        </div>
    )
}
export default MainHome;