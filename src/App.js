import React from 'react';
import {Blog, Footer, Gallery, ImageCarousel,  MissionCard,  NavigationBar, OurImpact, Project, QuotesSlider, Whatwedo, WhereWeWork, Whoarewe } from './components';
import DonatePage from './components/donateUs/donateNow';
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
      

      <DonatePage />
    </div>
  );
}

export default App;
