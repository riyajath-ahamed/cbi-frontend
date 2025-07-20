import React, { useState } from 'react'
import { AllPublication } from '../../blog/articles';
import { NavLink } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';

const ProjectHome = () => {
  const [articlesCount, setArticlesCount] = useState("0")
  return (
    <div id="project" className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {articlesCount} Successful Stories
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
          slug="projects"
          panel="projects"
        />
      </div>
    </div>
  );
}
export default ProjectHome