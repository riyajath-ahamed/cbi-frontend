import React from 'react';
import {AboutUs, BlogHome, ContactUs, DonatePage, Home, NavigationBar, ProjectHome, BlogPost, Footer } from './components';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="relative">
      <NavigationBar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/articles" element={<BlogHome />} />
        <Route path="/projects" element={<ProjectHome />} />
        <Route path="/articles/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
