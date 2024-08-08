import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { RecentPublication } from '../blog/articles';

const Project = () => {
  const navigate = useNavigate();
  return (
    <div id="project" className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our Latest Projects
          </p>
        </div>
        <p
            onClick={() => {
              navigate("/projects");
            }}
            className="text-lg leading-8 text-gray-600 text-right hover:cursor-pointer hover:text-primary transition-all duration-500 "
          >
            View All{" "}
            <span className="inline-block">
              <IoIosArrowRoundForward />
            </span>
          </p>
      </div>
      <RecentPublication host="beyondchildhoodinternational.com/article" slug="projects" />
    </div>
  );
}
export default Project