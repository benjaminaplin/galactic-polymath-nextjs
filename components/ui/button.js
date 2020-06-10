import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({classProp, buttonText, path }) => {
  return (
      <Link href={path}>
        <a>
          <button className={classProp}>
            {buttonText}
          </button>
        </a>
      </Link>
  );
};

Button.propTypes = {
  classProp: PropTypes.string,
  buttonText: PropTypes.string,
  path: PropTypes.string
};

export default Button;