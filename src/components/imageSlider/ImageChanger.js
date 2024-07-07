import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageChanger = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    process.env.PUBLIC_URL + '/images/background_image1.png',
    process.env.PUBLIC_URL + '/images/background_image3.png',
    process.env.PUBLIC_URL + '/images/background_image2.png',
    process.env.PUBLIC_URL + '/images/background_image2.png',
    process.env.PUBLIC_URL + '/images/background_image3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextImageIndex((prevIndex) => (prevIndex + 2) % images.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <img
        src={images[currentImageIndex]}
        alt="Auto changing"
        className={`slider-image ${isTransitioning ? 'slide-out' : ''}`}
      />
      <img
        src={images[nextImageIndex]}
        alt="Auto changing"
        className={`slider-image next-image ${isTransitioning ? 'slide-in' : ''}`}
      />
    </div>
  );
};

export default ImageChanger;