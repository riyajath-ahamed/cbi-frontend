import React from 'react'
import Publication from './articles'
import { IoIosArrowRoundForward } from "react-icons/io";

const Blog = () => {
  return (
    <div id="project" className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Articles
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Read our latest articles from Here
          </p>
          <p onClick=""  className="text-lg leading-8 text-gray-600 text-right hover:cursor-pointer">
          View All <span className="inline-block"><IoIosArrowRoundForward /></span>
          </p>
        </div>
        <Publication host="beyondchildhoodinternational.com/article" />
      </div>
    </div>
  )
}

export default Blog