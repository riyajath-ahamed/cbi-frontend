import React from 'react'
import { NavLink, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { SinglePost } from '../../blog/articles';


const ProjectPost = () => {
    let params = useParams();
    
  return (
    <div className="p-8 mt-12 flex flex-col items-center">
      <div className="">
        <div className="flex items-center text-center justify-start text-gray-500">
          <NavLink to="/projects" className="hover:text-primary">
            <span className="inline-block ">
              <IoArrowBackSharp />
            </span>{" "}
            Back Projects
          </NavLink>
        </div>
        <div className="mt-4">
          <SinglePost
            host="beyondchildhoodinternational.com/article"
            slug={params.slug}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectPost