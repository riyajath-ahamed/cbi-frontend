import React  from 'react';
import MapChart from '../worldMap/worldMap';

const WhereWeWork = () => {

  return (
    <div id='wherewework' className='max-w-[90rem] w-full mx-auto flex flex-1 items-center justify-center' style={{ height: '100vh' }}>
      <div className='py-10 flex-col pb-8 w-full justify-center max-w-full flex min-w-0'>
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Where we work
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re part of the global World Vision Partnership across 4 countries
          </p>
        </div>

        <div className='mx-auto max-w-2xl  w-full flex items-center justify-center'>
          <MapChart/>
        </div>
      </div>
    </div>
  );
}

export default WhereWeWork;
