import React, { useState } from 'react'
import {AllPublication} from './articles'
import { NavLink } from 'react-router-dom'
import { IoArrowBackSharp } from 'react-icons/io5'

const BlogHome = () => {
    const [articlesCount, setArticlesCount] = useState("0")
  return (
    <div id="project" className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Articles
          </p>
          <p className="mt-6 text-lg leading-8 text-primary">
            {articlesCount} Articles are Available
          </p>
        </div>
        <NavLink to="/" className="hover:text-primary p">
          <div className="inline-block mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-6xl">
            <IoArrowBackSharp />
          </div>{" "}
          Back
        </NavLink>
        <AllPublication
          host="beyondchildhoodinternational.com/article"
          setArticlesCount={setArticlesCount}
          slug="articles"
          panel="articles"
        />
      </div>
    </div>
  );
}

export default BlogHome