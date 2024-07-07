import React from 'react'
import { HeroImage1, HeroImage2, HeroImage3 } from '../../assets'
import { Carousel } from 'react-responsive-carousel'
import "./imageCarousel.css";

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
                    <img src={HeroImage1} />
                    <p className="legend">#helpChildren</p>
                </div>
                <div>
                    <img src={HeroImage2}  />
                    <p className="legend">#socialJustice</p>
                </div>
                <div>
                    <img src={HeroImage3}  />
                    <p className="legend">#forGreateFuture</p>
                </div>
            </Carousel>
    </div>
  )
}

export default ImageCarousel