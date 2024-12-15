import React from "react";
import logoImage from "../images/Logo.png"; // Import the logo image

const NavBar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={logoImage} alt="Logo" /> {/* Use the imported logo image */}
            <h4>MohammadNoor</h4>
          </div>
          <ul className="nav-links">
            <li className="links">
              <a href="#home" className="active">
                <span className="primary">#</span>home
              </a>
            </li>
            <li className="links">
              <a href="#projects" className="gray">
                <span className="primary">#</span>projects
              </a>
            </li>
            <li className="links">
              <a href="#aboutme" className="gray">
                <span className="primary">#</span>aboutme
              </a>
            </li>
            <li className="links">
              <a href="#skills" className="gray">
                <span className="primary">#</span>skills
              </a>
            </li>
            <li className="links">
              <a href="#contactme" className="gray">
                <span className="primary">#</span>contacts
              </a>
            </li>
            <li className="links">
              <select name="language" id="language">
                <option value="EN">EN</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
