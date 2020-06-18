import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

class ParallaxLogo extends Component {
  render(){
  return (
    <div className="header-logo-container">
      <Parallax
        pages={2}
        ref={(ref) => (this.parallax = ref)}
        style={{ width: "70%" }}
      >
        <ParallaxLayer offset={0} speed={2}>
          <div className="job-viz-grad-background" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={2}>
          <div className="job-viz-grad-background-2" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.75} speed={1}>
          <div className="diagonal-box-2">
            <div className="content" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={2}>
          <div className="diagonal-box">
            <div className="content" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div>
            <img className="header-logo" src="https://gdurl.com/4KdN" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
  }
}

export default ParallaxLogo;
