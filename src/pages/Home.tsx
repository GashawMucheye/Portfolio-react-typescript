import { FC } from 'react';
import './Home.css';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import SectionHome from '../components/SectionHome';
import Skills from './Skills';
const Home: FC = () => {
  return (
    <div className="home_page" id="homing">
      <SectionHome />
      <hr />

      <About />
      <hr />

      <Contact />
      <hr />

      <Skills />
      <hr />

      <Projects />
      <hr />

      <Services />

      <div
        style={{
          background: 'red',
          maxWidth: '1250px',
          position: 'relative',
          // marginBottom: '12em',
        }}
      >
        <a
          href="#homing"
          style={{
            fontSize: '35px',
            padding: '6px',
            position: 'absolute',
            top: '0px',
            right: '0px',
          }}
        >
          <FaArrowAltCircleUp id="up_arrow" />
        </a>
      </div>
    </div>
  );
};

export default Home;
