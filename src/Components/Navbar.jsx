import React, { useState } from "react";
import "../Styles/Navbar.css";
import "../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header id="header">
        <nav id="navbar">
          <img src="./logo.svg" alt="#" />
          <div className="header_list">
            <ul>
              <li>Pricing</li>
              <li>Product</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Community</li>
            </ul>
          </div>
          <p className="header_btn">Get Started</p>

          <div id="menu">
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              onClick={toogleMenu}
            />
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className="dropdownwrapper">
          <div className="dropdown">
            <ul>
              <li>Pricing</li>
              <li>Product</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Community</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
