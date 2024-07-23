import React from 'react'
import { IoArrowForward } from "react-icons/io5";

const Gallery = () => {
  return (
    <div id="project" className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Image Gallery
          </p>
          <p className="mt-6 text-lg leading-8 text-primary">
          View Images <span className='inline-block'><IoArrowForward /></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gallery