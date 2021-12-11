import React, { useState } from 'react';
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
    padding: 0;
    .burger-menu-icon {
      display: block;
    }
    .hide-item {
      transform: translateY(calc(-100% - 1rem));
    }
    .navItems {
      position: absolute;
      transition: 0.3s ease transform;
      width: 100%;
      max-width: 320px;
      right: 0.6rem;
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
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div className="burger-menu-icon">
        <MdMenu
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div className="close-nav-icon">
          <MdClose
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          />
        </div>
        <li>
          <NavLink
            to="/"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutme"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            ABOUT ME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactme"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            CONTACT ME
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
