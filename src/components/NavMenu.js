import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavMenuStyles = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 1rem 0;
  background-color: var(--dark-bg);
  ul {
  }
`;

const NavMenu = () => (
  <NavMenuStyles>
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
  </NavMenuStyles>
);

export default NavMenu;
