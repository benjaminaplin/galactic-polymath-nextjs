import React from "react";
import { NavBarLinks } from "./navBar";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="first-row">
          <div className="first-row-footer-text">Education that inspires.</div>
        </div>
        <div className="second-row">
          <div>
            Think <span className="large-footer-text">bigger</span>. Learn
            everything.
          </div>
        </div>
        <div className="third-row">
          <NavBarLinks containerClass="footer-nav-links" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
