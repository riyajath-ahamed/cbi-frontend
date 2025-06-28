import React, { useEffect, useState } from 'react'
import { HeroImage1, HeroImage2, HeroImage3 } from '../../assets'
import { Carousel } from 'react-responsive-carousel'
import { PiMouseScrollLight } from "react-icons/pi";
import "./imageCarousel.css";

// TODO :  - Add read more button
//         - fix mobilre responsive Captions 


const ImageCarousel = () => {

   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="rounded-3xl overflow-hidden relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        //showIndicators={false}  -> if needed set as true
        showThumbs={false}
        showArrows={false}
        swipeable={!isMobile}         
        emulateTouch={!isMobile} 
        
      >
        <div>
          <img src={HeroImage1} alt="Hero-image" loading="lazy" />
          <p className="legend hover:cursor-pointer underline-offset-2">
            #helpChildren
          </p>
          {readMoreButton()}
        </div>
        <div>
          <img src={HeroImage2} alt="Hero-image" loading="lazy" />
          <p className="legend hover:cursor-pointer underline-offset-2">
            #socialJustice
          </p>
          {readMoreButton()}
        </div>
        <div>
          <img src={HeroImage3} alt="Hero-image" loading="lazy" />
          <p className="legend hover:cursor-pointer underline-offset-2">
            #forGreateFuture
          </p>
        {readMoreButton()}
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel

const readMoreButton = () => {
  return (
    <button
  className="readmore hover:cursor-pointer w-28 underline-offset-2 bg-white/10"
  onClick={() => window.scrollBy(0, window.innerHeight)}
>
  Read More
</button>
  );
}