import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

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
  .burger-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .close-nav-icon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .burger-menu-icon {
      display: block;
    }
    .navItems {
      position: absolute;
      transition: 0.3s ease transform;
      width: 90%;
      max-width: 300px;
      right: 1rem;
      padding: 2rem;
      border-radius: 12px;
      background-color: var(--deep-dark);
      .close-nav-icon {
        display: block;
        width: 3rem;
        position: absolute;
        right: 1rem;
        top: 1rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

const NavMenu = () => (
  <NavMenuStyles>
    <div className="burger-menu-icon">
      <MdMenu />
    </div>
    <ul className="navItems">
      <div className="close-nav-icon">
        <MdClose />
      </div>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/aboutme">ABOUT ME</NavLink>
      </li>
      <li>
        <NavLink to="/projects">PROJECTS</NavLink>
      </li>
      <li>
        <NavLink to="/contactme">CONTACT ME</NavLink>
      </li>
    </ul>
  </NavMenuStyles>
);

export default NavMenu;
