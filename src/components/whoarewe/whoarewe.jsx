import React from 'react'
import { WhoAreWe } from '../../assets'


const Whoarewe = () => {
  return (
    <div id="whoarewe" className="overflow-hidden bg-white py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-6">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who are we</p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are an Australian registered public guaranteed company working towards education, health, economic & skill development.
        </p>  
        </div>
      
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 text-justify lg:text-left">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div  className=" ">
                    Beyond Childhood International is a nonpartisan development organisation dedicated to 
                    working with children, youth families, and communities to overcome challenges such as 
                    reduced parental care, economic stress and vulnerabilities, social norms and attitudes, 
                    and skill gaps to meet the demands of the national and international labor market.
                  </div>
                  <div  className=""> 
                  We work through our main sectors like education, health and nutrition, economic development,
                   and child protection – serving all people, regardless of religion, race, ethnicity or gender.
                  </div>
              </dl>
              
            </div>
            <div className=" mt-6 lg:mt-10  text-center">

              <button className="bg-white hover:bg-green-600 text-green-600 border-2 border-green-600 font-bold py-2 px-4 hover:text-white flex items-center cursor-pointer rounded-md transition-all duration-200">
                Explore More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              </div>
            
          </div>
          <img
            alt="Product screenshot"
            src={WhoAreWe}
            className="w-[20rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] lg:-ml-0"
          />
        </div>

      </div>
    </div>
  )
}

export default Whoarewe