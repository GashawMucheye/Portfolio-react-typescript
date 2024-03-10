import { FC } from 'react';
import './Header.css';
import Navbar from './Navbar';
const Header: FC = () => {
  return (
    <header className="header">
      <Navbar logo="Logo" />
    </header>
  );
};

export default Header;
