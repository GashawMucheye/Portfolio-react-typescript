import { FC } from 'react';
import './Header.css';
import Navbar from './Navbar';
const Header: FC = () => {
  return (
    <header className="header">
      <Navbar />
    </header>
  );
};

export default Header;
