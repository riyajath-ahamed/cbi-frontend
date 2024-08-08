import React from 'react'
import { RecentPublication } from './articles'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate  } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div id="project" className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Articles
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Read our latest articles from Here
          </p>
        </div>
        <p
          onClick={() => {
            navigate("/articles");
          }}
          className="text-lg leading-8 text-gray-600 text-right hover:cursor-pointer hover:text-primary transition-all duration-500 "
        >
          View All{" "}
          <span className="inline-block">
            <IoIosArrowRoundForward />
          </span>
        </p>
      </div>
      <RecentPublication
        host="beyondchildhoodinternational.com/article"
        slug="articles"
      />
    </div>
  );
}

export default Blog