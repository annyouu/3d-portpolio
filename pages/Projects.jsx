import React from 'react'
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const Projects = () => {
  return (
    <div>
      <section className="max-container">
        <h1 className="head-text">
          My Projects
        </h1>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4>
                  {project.name}
                </h4>
                <p>
                  {project.description}
                </p>
                <div>
                  <Link 
                  to={project.link} 
                  target="_blank" 
                  rel="nooperner noreferrer"
                  className="font-semibold text-blue-600"
                  >
                    詳細
                  </Link>
                  <img 
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  )
}

export default Projects
