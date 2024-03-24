import { allSkills } from '../Data/dataProjects.js';
import ProgressScreen from '../components/ProgressScreen.js';
import './skills.css';
const Skills = () => {
  return (
    <div className="skills">
      <h1 style={{ textAlign: 'center' }}>
        MY <span>SKILLS</span>
      </h1>

      {allSkills.map((skill, index) => (
        <ProgressScreen skill={skill} key={index} />
      ))}
    </div>
  );
};

export default Skills;
