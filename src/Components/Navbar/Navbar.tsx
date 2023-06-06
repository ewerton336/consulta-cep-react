import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/">Sobre</Link>
        </li>
        <li>
          <Link to="/">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
