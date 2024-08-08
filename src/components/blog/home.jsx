import React, { useState } from 'react'
import {AllPublication} from './articles'

const BlogHome = () => {
    const [articlesCount, setArticlesCount] = useState("0")
  return (
    <div id="project" className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Articles
          </p>
          <p className="mt-6 text-lg leading-8 text-primary">
           {articlesCount} Articles are Available
          </p>
        </div>
        <AllPublication host="beyondchildhoodinternational.com/article" setArticlesCount={setArticlesCount} slug="articles" />
      </div>
    </div>
  )
}

export default BlogHome