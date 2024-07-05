import React from 'react';
import { NavigationBar, Whatwedo } from './components';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      {/* Carousel goes here */}
    <div className="bg-white py-24 sm:py-32">
      <Whatwedo />
      
      </div>
    </div>
  );
}

export default App;

