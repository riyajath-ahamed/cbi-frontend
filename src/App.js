import React from 'react';
import {ImageCarousel, NavigationBar, Whatwedo, Whoarewe } from './components';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ImageCarousel />
      <Whoarewe />

      {/* Carousel goes here */}
    <div className="bg-white py-24 sm:py-32">
      <Whatwedo />
      
      </div>
    </div>
  );
}

export default App;

