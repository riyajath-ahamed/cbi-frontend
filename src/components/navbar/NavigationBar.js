import React from 'react';
import './NavigationBar.css';
import { BrandLogoOriginal } from '../../assets';

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
          <img src={BrandLogoOriginal} alt="Logo" />
        </div>
        <div className="flex justify-between items-center pl-5 pr-9 py-2">
        <div className="flex items-center">
          <div className='who-we-are'>
            <a href="/who-we-are" className="ml-7 text-gray-800 no-underline hover:text-green-500 transition-all duration-400">Who We Are</a>
          </div>
          <div className='where-we-work'>
            <a href="/where-we-work" className="ml-7 text-gray-800 no-underline hover:text-green-500 transition-all duration-400">Where We Work</a>
          </div>
          <div className='what-we-do'>
            <a href="/what-we-do" className="ml-7 text-gray-800 no-underline hover:text-green-500 transition-all duration-400">What We Do</a>
          </div>
          <div className='our-impact'>
            <a href="/our-impact" className="ml-7 text-gray-800 no-underline hover:text-green-500 transition-all duration-400">Our Impact</a>
          </div>
        </div>
        <button className="bg-green-500 text-white border-none px-8 py-2 ml-5 cursor-pointer rounded transition-all duration-200 hover:text-green-700 hover:bg-white hover:border-2 hover:border-green-700">
          Donate
        </button>
      </div>

      </div>
    </div>
  );
};

export default NavigationBar;
