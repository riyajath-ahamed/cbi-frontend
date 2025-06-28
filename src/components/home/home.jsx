import React from 'react'
import {  Blog, Gallery, ImageCarousel, MissionCard, OurImpact, Project, QuotesSlider, Whatwedo, WhereWeWork, Whoarewe } from '../index'
import { ScrollToTopButton } from '../common'

const Home = () => {
  return (
    <div className='px-2 md:px-0'>
      <ImageCarousel  />
      <Whoarewe />
      <ScrollToTopButton />

      {/* Carousel goes here */}

      <Whatwedo />
      <MissionCard />
      <OurImpact />
      <QuotesSlider />

      <Project />

      <WhereWeWork />
        
      <Blog />
      <Gallery />
      
    </div>
  )
}

export default Home