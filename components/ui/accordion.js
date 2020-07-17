import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classNames";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  const arrowClasses = classNames({
    "arrow-up": isOpen,
    "arrow-down": !isOpen,
  });

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div>{isOpen ? null : title}</div>
        <div>
          <div onClick={() => setOpen(!isOpen)} className={arrowClasses} />
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
