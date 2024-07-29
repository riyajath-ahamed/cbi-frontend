import React from 'react'
import { HeroImage1, HeroImage2, HeroImage3 } from '../../assets'
import { Carousel } from 'react-responsive-carousel'
import { PiMouseScrollLight } from "react-icons/pi";
import "./imageCarousel.css";

// TODO :  - Add read more button
//         - fix mobilre responsive Captions 


const ImageCarousel = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        //showIndicators={false}  -> if needed set as true
        showThumbs={false}
        showArrows={false}
        dynamicHeight={true}
      >
        <div>
          <img src={HeroImage1} alt="Hero-image" />
          <p className="legend hover:cursor-pointer underline-offset-2">
            #helpChildren
          </p>
          <p className="readmore  hover:cursor-pointer underline-offset-2">
            Read More
          </p>
        </div>
        <div>
          <img src={HeroImage2} alt="Hero-image" />
          <p className="legend hover:cursor-pointer underline-offset-2">
            #socialJustice
          </p>
          <p className="readmore hover:cursor-pointer underline-offset-2">
            Read More
          </p>
        </div>
        <div>
          <img src={HeroImage3} alt="Hero-image" />
          <p className="legend hover:cursor-pointer underline-offset-2">
            #forGreateFuture
          </p>
          <p className="readmore hover:cursor-pointer underline-offset-2">
            Read More
          </p>
        </div>
      </Carousel>
      <div className="relative hidden  bottom-20 md:bottom-32  w-full md:flex flex-col justify-center items-center">
        <button
          onClick={() => {
            window.scrollBy(0, window.innerHeight);
          }}
          className="bg-transparent text-white text-2xl md:text-5xl rounded-full p-3 shadow-lg "
        >
          <PiMouseScrollLight />
        </button>
        <p className="text-sm text-white">Scroll Down</p>
      </div>
    </div>
  );
}

export default ImageCarousel