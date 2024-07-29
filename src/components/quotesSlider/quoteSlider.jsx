import React from 'react'
import { Quotes1, Quotes2, Quotes3 } from '../../assets'
import { Carousel } from 'react-responsive-carousel'
import "./quoteSlider.css";

const QuoteSlider = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}  // -> if needed set as true
        showThumbs={false}
        showArrows={false}
        dynamicHeight={true}
      >
                <div>
                    <img src={Quotes1} alt='Hero-image' />
                </div>
                <div>
                    <img src={Quotes2} alt='Hero-image' />
                </div>
                <div>
                    <img src={Quotes3} alt='Hero-image' />
                </div>
            </Carousel>
    </div>
  )
}

export default QuoteSlider