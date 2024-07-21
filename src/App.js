import React from 'react';
import {AboutUs, Blog, ContactUs, DonatePage, Footer, Gallery, ImageCarousel,  MissionCard,  NavigationBar, OurImpact, Project, QuotesSlider, Whatwedo, WhereWeWork, Whoarewe } from './components';

import './App.css';

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
      

      {/* <DonatePage /> */}
      {/* <AboutUs /> */}
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
