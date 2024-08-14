import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { imagesIds } from '../../constants/images';

const GalleryImage = ({ src, alt, colSpan, maxHeight, overlayText, navigate }) => (
  <div className={`overflow-hidden rounded-xl col-span-${colSpan} max-h-[${maxHeight}] relative`}>
    {overlayText && (
      <div
        className="text-white text-xl absolute inset-0 bg-slate-900/80 flex justify-center items-center hover:cursor-pointer"
        onClick={() => {
          navigate("/gallery");
        }}
      >
        <p className='hover:bg-slate-500/30 p-1 rounded-md'>
          {overlayText} more
        </p>
        
      </div>
    )}
    <img className="h-full w-full object-cover" src={src} alt={alt} />
  </div>
);

const Gallery = () => {
  const navigate = useNavigate();

  const displayCount = 4; // Number of images to display normally
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
            onClick={() => {
              navigate("/gallery");
            }}
          >
            View Images{" "}
            <span className="inline-block">
              <IoArrowForward />
            </span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-6 gap-2">
            {imagesIds.slice(0, displayCount).map((image, index) => (
              <GalleryImage
                key={image.id}
                src={`https://drive.google.com/thumbnail?id=${image.id}&sz=w1000`}
                alt={`Gallery Image ${index + 1}`}
                colSpan={index < 2 ? 3 : 2} // First two images span 3 columns, next two span 2 columns
                maxHeight={index < 2 ? "14rem" : "10rem"} // First two images have a max height of 14rem, others 10rem
                navigate={navigate} // Passing navigate as a prop
              />
            ))}
            {remainingImagesCount > 0 && (
              <GalleryImage
              src={`https://drive.google.com/thumbnail?id=${imagesIds[displayCount].id}&sz=w1000`}
                alt="More Images"
                colSpan={2}
                maxHeight="10rem"
                overlayText={`+ ${remainingImagesCount}`}
                navigate={navigate} // Passing navigate as a prop
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
