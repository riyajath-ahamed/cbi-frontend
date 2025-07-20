import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { imagesIds } from '../../constants/images';

const GalleryImage = ({ src, alt, overlayText, onClick }) => (
  <div
    className="relative overflow-hidden rounded-lg shadow hover:cursor-pointer"
    onClick={onClick}
  >
    <img src={src} alt={alt} className="h-full w-full object-cover" />
    {overlayText && (
      <div className="absolute inset-0 bg-slate-900/80 flex justify-center items-center text-white text-xl">
        <p className='hover:bg-slate-500/30 p-1 rounded-md'>
          {overlayText} more
        </p>
      </div>
    )}
  </div>
);

const Gallery = () => {
  const navigate = useNavigate();

  const displayCount = 4;
  const remainingImagesCount = imagesIds.length - displayCount;

  return (
    <div id="project" className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Image Gallery
          </p>
          <div
            className="mt-6 mb-4 text-lg leading-8 text-primary hover:cursor-pointer"
            onClick={() => navigate("/gallery")}
          >
            View Images{" "}
            <span className="inline-block">
              <IoArrowForward />
            </span>
          </div>
        </div>

        {/* Replaced layout with bento-style grid */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <GalleryImage
              src={imagesIds[0]?.img}
              alt="Gallery Image 1"
              onClick={() => navigate("/gallery")}
            />
          </div>
          <div className="relative max-lg:row-start-1">
            <GalleryImage
              src={imagesIds[1]?.img}
              alt="Gallery Image 2"
              onClick={() => navigate("/gallery")}
            />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <GalleryImage
              src={imagesIds[2]?.img}
              alt="Gallery Image 3"
              onClick={() => navigate("/gallery")}
            />
          </div>
          <div className="relative lg:row-span-2">
            <GalleryImage
              src={imagesIds[3]?.img}
              alt="Gallery Image 4"
              onClick={() => navigate("/gallery")}
            />
          </div>

          {remainingImagesCount > 0 && imagesIds[4] && (
            <div className="relative lg:col-start-2 lg:row-start-2">
              <GalleryImage
                src={imagesIds[4]?.img}
                alt="More Images"
                overlayText={`+ ${remainingImagesCount}`}
                onClick={() => navigate("/gallery")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
