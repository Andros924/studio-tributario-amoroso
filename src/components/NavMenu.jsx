import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Servizi</NavLink>
        </li>
        <li>
          <NavLink to="/about">Chi sono</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contatti</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
