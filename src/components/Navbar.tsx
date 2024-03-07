import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import './Navbar.css';
import { LogoType } from '../types/logoType';
const Navbar = ({ logo }: LogoType) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <nav id="menu" className="menubar">
      <h1>{logo}</h1>
      <ul id="lists" className={isOpenMenu ? '#lists active' : '#lists'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
      </ul>
      <div className="icons" onClick={() => setIsOpenMenu(!isOpenMenu)}>
        {isOpenMenu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
