import React, { Component } from "react";
import "./NavBar.css";

const NavBar = ({ handleClick }) => {
  return (
    <div>
      <ul className="nav">
        <li onClick={() => handleClick("blog")}>
          <a href="#" id="special">
            {" "}
            PORTFOLIO
          </a>
        </li>

        <li onClick={() => handleClick("contact")}>
          <a href="#" id="special">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
