import React from 'react'
import {NavigationBar,  Blog, Footer, Gallery, ImageCarousel, MissionCard, OurImpact, Project, QuotesSlider, Whatwedo, WhereWeWork, Whoarewe } from '../index'

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
      
      <Footer />
    </div>
  )
}

export default Home