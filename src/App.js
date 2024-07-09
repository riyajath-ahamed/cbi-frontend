import React from 'react';
import {ImageCarousel,  MissionCard,  NavigationBar, OurImpact, Whatwedo, Whoarewe } from './components';

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
      

    </div>
  );
}

export default App;

