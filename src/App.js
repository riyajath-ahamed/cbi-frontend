import React from 'react';
import {ImageCarousel,  MissionCard,  NavigationBar, Whatwedo, Whoarewe } from './components';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ImageCarousel />
      <Whoarewe />

      {/* Carousel goes here */}

      <Whatwedo />
      <MissionCard />
      

    </div>
  );
}

export default App;

