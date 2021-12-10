import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/aboutme">About Me</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/contactme">Contact Me</NavLink>
      </li>
    </ul>
  </div>
);

export default NavMenu;
