import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { BrandLogoOriginal } from "../../assets";

const mainNavLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/articles" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const anchorLinks = [
  { name: "Who We Are", href: "#whoarewe" },
  { name: "Where We Work", href: "#wherewework" },
  { name: "What We Do", href: "#whatwedo" },
  { name: "Our Impact", href: "#ourimpact" },
];

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md shadow-green-200/20">
      {/* Top Bar for Main Links (Desktop) */}
      <div className="hidden md:flex justify-end space-x-8 py-2 border-b border-gray-300 pr-6">
        {mainNavLinks.map(({ name, path }) => (
          <button
            key={name}
            onClick={() => handleNavigate(path)}
            className="text-black hover:text-green-500 transition-all duration-300"
          >
            {name}
          </button>
        ))}
      </div>

      {/* Logo + Anchor Links + Donate (Desktop) */}
      <div className="hidden md:flex items-center justify-between px-6 py-3">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={BrandLogoOriginal} alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center space-x-6">
          {isHomePage &&
            anchorLinks.map(({ name, href }, i) => (
              <a
                key={name}
                href={href}
                className={`text-gray-800 hover:text-green-500 transition-all duration-300 ${
                  i < anchorLinks.length - 1 ? "pr-5 border-r-2" : ""
                }`}
              >
                {name}
              </a>
            ))}
          <NavLink to="/donate">
            <button className="flex items-center bg-green-500 border-green-500 text-white border-2 px-6 py-2 rounded-md transition hover:text-green-700 hover:bg-white hover:border-green-700">
              Donate <BiSolidDonateHeart className="ml-2 text-lg" />
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between py-2 px-3">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={BrandLogoOriginal} alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center">
          <NavLink to="/donate">
            <button className="bg-green-500 border-green-500 text-white border-2 px-4 py-1 rounded-md transition hover:text-green-700 hover:bg-white hover:border-green-700">
              Donate <BiSolidDonateHeart className="inline ml-1" />
            </button>
          </NavLink>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="ml-3 text-slate-600 hover:bg-slate-200 p-2 rounded-md"
          >
            <IoMenu className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 rounded-b-lg backdrop-blur-xl">
          <div className="space-y-4">
            {mainNavLinks.map(({ name, path }) => (
              <div
                key={name}
                onClick={() => handleNavigate(path)}
                className="text-black hover:text-green-500 transition cursor-pointer"
              >
                {name}
              </div>
            ))}
            {isHomePage && (
              <>
                <hr className="border-gray-200" />
                {anchorLinks.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-black hover:text-green-500 transition"
                  >
                    {name}
                  </a>
                ))}
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavigationBar;
