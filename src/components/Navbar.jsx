import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <h1>Hotel Management Application</h1>

        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
