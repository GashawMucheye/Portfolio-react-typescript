import { FC } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { SiRender } from 'react-icons/si';
import { motion } from 'framer-motion';
import { projects } from '../Data/dataProjects';
const Projects: FC = () => {
  return (
    <div className="projects_page">
      <motion.h2
        initial={{ translateX: -1000 }}
        animate={{ translateX: 5 }}
        transition={{ duration: 0.9 }}
      >
        Latest <span>Projects</span>
      </motion.h2>
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
