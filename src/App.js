import React from 'react';
import {Footer, ImageCarousel,  MissionCard,  NavigationBar, OurImpact, QuotesSlider, Whatwedo, Whoarewe } from './components';

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
      <Footer />
      

    </div>
  );
}

export default App;

