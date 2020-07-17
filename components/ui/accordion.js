import React, { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div>{isOpen ? null : title}</div>
        <div>
          <div
            onClick={() => setOpen(!isOpen)}
            className={isOpen ? "arrow-up" : "arrow-down"}
          />
        </div>
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Accordion;
