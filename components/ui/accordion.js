import React, { useState} from 'react'


const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  console.log('isOpen', isOpen)
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div>{isOpen ? null : title}</div>
        <div>
          {isOpen ? (
            <div onClick={() => setOpen(!isOpen)} className="arrow-up"></div>
          ) : (
            <div onClick={() => setOpen(!isOpen)} className="arrow-down"></div>
          )}
        </div>
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
export default Accordion;
