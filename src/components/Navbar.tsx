import { FC, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
const Navbar: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <nav id="menu" className="menubar">
      <h1>LOGO</h1>
      <ul id="lists" className={isOpenMenu ? '#lists active' : '#lists'}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
      </ul>
      <div className="icons" onClick={() => setIsOpenMenu(!isOpenMenu)}>
        {isOpenMenu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
