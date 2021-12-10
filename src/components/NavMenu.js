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
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 10px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      font-family: 'RobotoMono Regular';
      font-size: 2rem;
      padding: 1rem 2rem;
      display: inline-block;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
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
