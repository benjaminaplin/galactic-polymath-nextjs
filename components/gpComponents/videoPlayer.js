import React from "react";
import PropTypes from "prop-types";
import Vimeo from "@u-wave/react-vimeo";

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="vimeo-player-container">
      <Vimeo video={videoId} />
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string,
};

export default VideoPlayer;
