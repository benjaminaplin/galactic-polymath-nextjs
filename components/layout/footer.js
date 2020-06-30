import React from "react";

const Footer = ({numPages, footerOffset}) => {
  return (
    <div className="footer">
          <div>NumPages: {numPages}</div>
          <div>FooterOffset: {footerOffset}</div>
      <div className="footer-grid">
        <div className="first-row">
          {/* <div className="first-row-footer-text">Education that inspires.</div> */}
        </div>
        <div className="second-row">
          <div>
            Think <span className="large-footer-text">bigger</span>. Learn
            everything.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
