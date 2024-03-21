import { FC } from 'react';
import './Main.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import Skills from '../pages/Skills';
// import MainSection from './MainSection';
const Main: FC = () => {
  return (
    <main className="main">
      {/* <MainSection /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </main>
  );
};

export default Main;
