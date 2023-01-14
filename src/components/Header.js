import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/register">Register</NavLink>
        </li>

        <li>
          <NavLink to="/students">Students</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header
