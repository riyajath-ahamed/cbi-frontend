import React, { useState } from 'react';
import { BrandLogoOriginal} from '../../assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";

const NavigationBar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 w-full bg-white z-50 shadow-md shadow-green-200/20">
      <div className="hidden md:block border-b border-gray-300 py-1 ">
        <div className="flex justify-end space-x-8 pr-4 py-2 sm:mr-5">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate("/projects");
            }}
            className="text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer"
          >
            Projects
          </div>
          <div
            onClick={() => {
              navigate("/articles");
            }}
            className="text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer"
          >
            Articles
          </div>
          <div
            onClick={() => {
              navigate("/about");
            }}
            className="text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer"
          >
            About Us
          </div>
          <div
            onClick={() => {
              navigate("/contact");
            }}
            className="text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer"
          >
            Contact
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between  items-center pl-5 pr-9 py-2">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="logo"
        >
          <img
            src={BrandLogoOriginal}
            alt="Logo"
            className="h-9 md:h-12 w-auto hover:cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          <div className="ml-7">
            <a
              href="#whoarewe"
              className="text-gray-800 no-underline hover:text-green-500 transition-all duration-400 pr-5 border-r-2 "
            >
              Who We Are
            </a>
          </div>
          <div className="ml-7">
            <a
              href="#wherewework"
              className="text-gray-800 no-underline hover:text-green-500 transition-all duration-400 pr-5 border-r-2 "
            >
              Where We Work
            </a>
          </div>
          <div className="ml-7">
            <a
              href="#whatwedo"
              className="text-gray-800 no-underline hover:text-green-500 transition-all duration-400 pr-5 border-r-2 "
            >
              What We Do
            </a>
          </div>
          <div className="ml-7">
            <a
              href="#ourimpact"
              className="text-gray-800 no-underline hover:text-green-500 transition-all duration-400  "
            >
              What We Do
            </a>
          </div>
        </div>
        <NavLink to="/donate">
          <button className="bg-green-500 border-green-500 text-white border-2 px-8 py-2 ml-5 cursor-pointer rounded-md transition-all duration-200 hover:text-green-700 hover:bg-white hover:border-green-700">
            Donate
            <span className="inline-block text-lg">
              <BiSolidDonateHeart />
            </span>
          </button>
        </NavLink>
      </div>

      <div className="flex md:hidden py-2 px-1 justify-between">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="logo"
        >
          <img
            src={BrandLogoOriginal}
            alt="Logo"
            className="h-12 w-auto hover:cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          <NavLink to="/donate">
            <button className="bg-green-500 border-green-500 text-white border-2 px-5 py-1 ml-3 cursor-pointer rounded-md transition-all duration-200 hover:text-green-700 hover:bg-white hover:border-green-700">
              Donate{" "}
              <span className="inline-block">
                <BiSolidDonateHeart />
              </span>
            </button>
          </NavLink>
          <div className="text-slate-500 m-2 hover:bg-slate-200  rounded-md"
            onClick={toggleMenu}
          >
            <IoMenu className="text-3xl" />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-cardOverlay fixed border-t w-full rounded-b-lg backdrop-blur-xl border-gray-200 shadow-md">
          <div className="flex flex-col items-start py-2 px-4 space-y-5">
            <div onClick={() => {navigate("/"); setIsMenuOpen(!isMenuOpen); }} className="w-full text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer">
              Home
            </div>
            <div onClick={() => {navigate("/projects"); setIsMenuOpen(!isMenuOpen);}} className="w-full text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer">
              Projects
            </div>
            <div onClick={() => {navigate("/articles"); setIsMenuOpen(!isMenuOpen);}} className="w-full text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer">
              Articles
            </div>
            <div onClick={() => {navigate("/about"); setIsMenuOpen(!isMenuOpen);}} className="w-full text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer">
              About Us
            </div>
            <div onClick={() => {navigate("/contact"); setIsMenuOpen(!isMenuOpen);}} className="w-full text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer">
              Contact
            </div>
            <hr className="w-full border-gray-200" />
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a
                href="#whoarewe"
                className="w-full text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer block"
              >
                Who We Are
              </a>
            </div>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a
                href="#wherewework"
                className="w-full text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer block"
              >
                Where We Work
              </a>
            </div>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a
                href="#whatwedo"
                className="w-full text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer block"
              >
                What We Do
              </a>
            </div>
            <div className='' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a
                href="#ourimpact"
                className="w-full text-black hover:text-green-500 transition-all duration-400 hover:cursor-pointer block"
              >
                Our Impact
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default NavigationBar;
