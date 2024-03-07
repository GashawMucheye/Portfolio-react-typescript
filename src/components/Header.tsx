import { FC } from 'react';
import './Header.css';
import Navbar from './Navbar';
const Header: FC = () => {
  return (
    <header className="header">
      <Navbar logo="PORTFOLIO" />
    </header>
  );
};

export default Header;
