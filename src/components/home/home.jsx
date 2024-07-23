import React from 'react'
import {  Blog, Gallery, ImageCarousel, MissionCard, OurImpact, Project, QuotesSlider, Whatwedo, WhereWeWork, Whoarewe } from '../index'

const Home = () => {
  return (
    <div className=''>
      <ImageCarousel  />
      <Whoarewe />

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