import React from "react";
import Footer from "./footer";
import Header from "./header";
import PropTypes from "prop-types";

const Layout = ({children, footer = true}) => {
  return (
    <div className="main-layout-grid-container">
      <Header/>
      <div className="main-content">
        {children}
      </div>
      {footer ? <Footer/> : null  }
    </div>
  );};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  footer: PropTypes.bool
};