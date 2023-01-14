import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Header = () => {
  const stylelink = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "400",
      color: isActive ? "#909090" : "#369cff",
      fontSize: isActive ? "1.6rem" : "1rem",
      textDecoration: isActive ? "underline" : "none"
    };
  };

  return (
    <nav className="Navlink">
      <ul>
        <li>
          <NavLink style={stylelink} to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink style={stylelink} to="/register">
            Register
          </NavLink>
        </li>

        <li>
          <NavLink style={stylelink} to="/students">
            Students
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
