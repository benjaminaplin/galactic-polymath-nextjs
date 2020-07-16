import React from "react";
import PropTypes from "prop-types";
import Button from "../ui/button";
import Link from "next/link";

export const NavBarLinks = ({ containerClass = "" }) => {
  return (
    <div className={`nav-bar-links-container ${containerClass}`}>
      <Button path="/" buttonText="Home" classProp="header-nav-button" />
      <Button
        path="/lessons"
        buttonText="Lessons"
        classProp="header-nav-button"
      />
      <Button
        path="/job-viz"
        buttonText="JobViz"
        classProp="header-nav-button"
      />
      <Button
        path="/hireUs"
        buttonText="Hire Us"
        classProp="header-nav-button"
      />
      <Button path="/about" buttonText="About" classProp="header-nav-button" />
      <Button path="/logIn" buttonText="Login" classProp="header-nav-button" />
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link href="/">
        <a>
          <div className="navbar-logo_container">
            <img className="navbar-logo" src="https://gdurl.com/Z6pp" />
          </div>
        </a>
      </Link>
      <NavBarLinks />
    </div>
  );
};

export default NavBar;

NavBarLinks.propTypes = {
  containerClass: PropTypes.string,
};
