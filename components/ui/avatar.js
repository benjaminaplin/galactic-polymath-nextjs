import React from "react";
import PropTypes from "prop-types";

const Avatar = ({imgUrl, name, description}) => {
 return ( 
  <div className="avatar-container">
      <div className="avatar-img-container">
        <img src={imgUrl ? imgUrl :" https://www.gravatar.com/avatar?d=mp&s=150"} />
      </div>
      <div className="avatar-info-container">
        <div className="avatar-name">{name}</div>
        <div className="avatar-descriptions">{description}</div>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Avatar;