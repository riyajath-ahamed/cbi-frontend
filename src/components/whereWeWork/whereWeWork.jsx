import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const WhereWeWork = () => {
  // const canvasRef = useRef();

  // useEffect(() => {
  //   let phi = 0;

  //   const globe = createGlobe(canvasRef.current, {
  //     devicePixelRatio: 2,
  //     width: 600 * 2,
  //     height: 600 * 2,
  //     phi: 0,
  //     theta: 0,
  //     dark: 0,
  //     diffuse: 1.2,
  //     mapSamples: 16000,
  //     mapBrightness: 6,
  //     baseColor: [1, 1, 1],
  //     markerColor: [0.133, 0.773, 0.369],
  //     glowColor: [1, 1, 1],
  //     markers: [
  //       // longitude latitude
  //       { location: [-37.8136, 144.9631], size: 0.05 }, // Melbourne
  //       { location: [7.8731, 80.7718], size: 0.05 } // Sri Lanka
  //       // Add more markers here
  //     ],
  //     onRender: (state) => {
  //       // Called on every animation frame.
  //       // `state` will be an empty object, return updated params.
  //       state.phi = phi;
  //       phi += 0.01;
  //     }
  //   });

  //   return () => {
  //     globe.destroy();
  //   };
  // }, []);

  // TODO: Add more markers to the globe
  //       Center the globe 

  return (
    <div className='max-w-[90rem] w-full mx-auto flex flex-1 items-center justify-center' style={{ height: '100vh' }}>
      <div className='py-10 flex-col pb-8 w-full justify-center max-w-full flex min-w-0'>
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Where we work
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re part of the global World Vision Partnership across 4 countries
          </p>
        </div>

        <div className='max-w-4xl px-6 md:px-8 pt-4 z-10 min-w-0 w-full flex justify-between'>
          {/* <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default WhereWeWork;
