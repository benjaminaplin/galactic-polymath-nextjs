import React from "react";
import Button from "../ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link href="/">
        <a>
        <div className="navbar-logo_container">
          <img  className="navbar-logo" src="https://gdurl.com/Z6pp" />
        </div>
        </a>
      </Link>
      <Button path="/" buttonText="Home" classProp="header-nav-button" />
      <Button path="/lessons" buttonText="Lessons" classProp="header-nav-button" />
      <Button path="/jobViz" buttonText="JobViz" classProp="header-nav-button" />
      <Button path="/hireUs" buttonText="Hire Us" classProp="header-nav-button" />
      <Button path="/about" buttonText="About" classProp="header-nav-button" />
      <Button path="/login" buttonText="Login" classProp="header-nav-button" />
    </div>
  );
};

export default NavBar;