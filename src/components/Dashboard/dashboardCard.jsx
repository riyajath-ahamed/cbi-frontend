import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const DashboardCard = () => {
  return (
    <div>
      <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500
       hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500
        hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left
        hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50
        text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] 
        before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute 
        after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
        Blog <span className="inline-block"><MdOutlineArrowOutward /></span>
      </button>
      <div className="grid grid-cols-1 gap-5 my-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Subscribers
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                71,897
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Subscribers
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                71,897
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Subscribers
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                71,897
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500
       hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500
        hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left
        hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50
        text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] 
        before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute 
        after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
        Blog <span className="inline-block"><MdOutlineArrowOutward /></span>
      </button>

      <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500
       hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500
        hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left
        hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50
        text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] 
        before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute 
        after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
        Blog <span className="inline-block"><MdOutlineArrowOutward /></span>
      </button>

      <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500
       hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500
        hover:duration-500  hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left
        hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50
        text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] 
        before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute 
        after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
        Blog <span className="inline-block"><MdOutlineArrowOutward /></span>
      </button>
    </div>
  );
}

export default DashboardCard