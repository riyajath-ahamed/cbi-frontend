import React from 'react';
import './NavigationBar.css';
import logo from './assets/BrandLogoOriginal.png'; 

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="top-navbar">
        <div className="top-links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/articles">Articles</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="bottom-navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="bottom-links">
            <div className='who-we-are'>
            <a href="/who-we-are">Who We Are</a>
            </div>
            <div className='where-we-work'>
            <a href="/where-we-work">Where We Work</a>
            </div>
            <div className='what-we-do'>
            <a href="/what-we-do">What We Do</a>
            </div>
            <div className='our-impact'>
            <a href="/our-impact">Our Impact</a>
            </div>
          <button className="donate-button">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
