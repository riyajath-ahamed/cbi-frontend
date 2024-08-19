import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { imagesIds } from "../../constants/images";
import { GalleryImage } from "./galleryFunction";

const GalleryHome = () => {
  const navigate = useNavigate();
  const displayCount = imagesIds.length;

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

        <div className="grid grid-cols-6 gap-2">
          {imagesIds.slice(0, displayCount).map((image, index) => (
            <GalleryImage
              key={image.id}
              src={`https://drive.google.com/thumbnail?id=${image.id}&sz=w1000`}
              alt={`Gallery Image ${index + 1}`}
              colSpan={index < 2 ? 3 : 2} // First two images span 3 columns, next two span 2 columns
              maxHeight={index < 2 ? "14rem" : "10rem"} // First two images have a max height of 14rem, others 10rem
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryHome;
