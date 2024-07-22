import React from 'react';
import { BrandLogoOriginal } from '../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiSolidDonateHeart } from "react-icons/bi";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 w-full bg-white z-50 shadow-md shadow-green-200/20">
      <div className="border-b border-gray-300 py-1 my-2 ">
        <div className="flex justify-end space-x-8 pr-4 sm:mr-5">
          <a href="/" className="text-black hover:text-green-500 transition-all duration-400">Home</a>
          <a href="/projects" className="text-black hover:text-green-500 transition-all duration-400">Projects</a>
          <a href="/articles" className="text-black hover:text-green-500 transition-all duration-400">Articles</a>
          <a href="/about" className="text-black hover:text-green-500 transition-all duration-400">About Us</a>
          <a href="/contact" className="text-black hover:text-green-500 transition-all duration-400">Contact</a>
        </div>
      </div>
      <div className="flex justify-between  items-center pl-5 pr-9 py-2">
        <div onClick={() => {
          navigate("/");
        }} className="logo">
          <img src={BrandLogoOriginal} alt="Logo" className="h-12 w-auto hover:cursor-pointer"/>
        </div>
        <div className="flex items-center">
          <div className="ml-7">
            <a href="#whoarewe" className="text-gray-800 no-underline hover:text-green-500 transition-all duration-400 pr-5 border-r-2 ">Who We Are</a>
          </div>
          <div className="ml-7">
            <a href="#wherewework" className="text-gray-800 no-underline hover:text-green-500 transition-all duration-400 pr-5 border-r-2 ">Where We Work</a>
          </div>
          <div className="ml-7">
            <a href="#whatwedo" className="text-gray-800 no-underline hover:text-green-500 transition-all duration-400 pr-5 border-r-2 ">What We Do</a>
          </div>
          <div className="ml-7">
            <a href="#ourimpact" className="text-gray-800 no-underline hover:text-green-500 transition-all duration-400  ">Our Impact</a>
          </div>
        </div>
        <NavLink to="/donate" >
          <button className="bg-green-500 border-green-500 text-white border-2 px-8 py-2 ml-5 cursor-pointer rounded-md transition-all duration-200 hover:text-green-700 hover:bg-white hover:border-green-700">
            Donate <span className='inline-block'><BiSolidDonateHeart /></span> 
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationBar;
