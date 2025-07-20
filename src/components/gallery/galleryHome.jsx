import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { imagesIds } from "../../constants/images";
import Masonry from "../Masonry/Masonry";

const GalleryHome = () => {
  const navigate = useNavigate();

  return (
    <div id="project" className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Image Gallery
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Some of the moments we captured on our journey
          </p>
        </div>

        <div
          onClick={() => {
            navigate("/");
          }}
          className="text-lg mb-5 leading-8 text-gray-600 text-left hover:cursor-pointer hover:text-primary transition-all duration-500 "
        >
          <span className="inline-block">
            <MdArrowBack />
          </span>
          Back
        </div>

        <div className=" relative h-auto">
          </div>
            <Masonry
              items={imagesIds}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />

        
      </div>
    </div>
  );
};

export default GalleryHome;
