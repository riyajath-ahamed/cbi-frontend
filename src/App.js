import React from 'react';
import {Blog, Footer, Gallery, ImageCarousel,  MissionCard,  NavigationBar, OurImpact, Project, QuotesSlider, Whatwedo, WhereWeWork, Whoarewe } from './components';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ImageCarousel />
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
  );
}

export default App;

