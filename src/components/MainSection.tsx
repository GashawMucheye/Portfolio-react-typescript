import { FC } from 'react';
import './MainSection.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
const MainSection: FC = () => {
  return (
    <main className="main_section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </main>
  );
};

export default MainSection;
