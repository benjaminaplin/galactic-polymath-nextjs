import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({classProp, buttonText, path }) => {
  return (
      <Link href={path}>
          <button className={classProp}>
            {buttonText}
          </button>
      </Link>
  );
};

Button.propTypes = {
  classProp: PropTypes.string,
  buttonText: PropTypes.string,
  path: PropTypes.string
};

export default Button;