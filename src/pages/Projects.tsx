import { FC } from 'react';
import './Projects.css';
import { projects } from '../Data/dataProjects';
const Projects: FC = () => {
  return (
    <section className="projects_page">
      {projects.map((project) => (
        <section className="indvidual_proj">
          <div>{project.name}</div>
          <img src={project.img} alt={project.name} width={100} />
        </section>
      ))}
    </section>
  );
};

export default Projects;
