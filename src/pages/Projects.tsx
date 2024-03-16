import { FC } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { SiRender } from 'react-icons/si';

import { projects } from '../Data/dataProjects';
const Projects: FC = () => {
  return (
    <div className="projects_page">
      <h2>
        Latest <span>Projects</span>
      </h2>
      <section className="projects_item">
        {projects.map((project, idx) => (
          <section className="indvidual_proj" key={idx}>
            <a href={project.lin}>
              <img src={project.img} alt={project.name} />
            </a>

            <div>{project.des}</div>
            <div className="projects_icon ">
              <span>
                <a href={project.lin}>
                  <FaGithub />
                </a>
              </span>
              {/* <a href={project.lin}>
                <FaGithub />
              </a> */}
              <span>
                <SiRender />
              </span>
              {/* <SiRender /> */}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Projects;
