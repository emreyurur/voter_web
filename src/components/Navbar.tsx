import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import daoLogo1 from '../assets/dao_logo1.png';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src={daoLogo1} alt="DAO Logo" className="daoLogo1" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/my-proposals" onClick={() => setMenuOpen(false)}>My Proposals</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
