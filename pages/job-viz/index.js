import React, { useEffect, useState } from "react";
import initJobVizGraphic from "./initJobVizGraphic";
import Header from "../../components/layout/header.js";
import NavBar from "../../components/layout/navBar"
// import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

const JobViz = () => {
  var margin = { top: 0, right: 60, bottom: 0, left: 60 };

  useEffect(() => {
    const width = Math.max(window.innerWidth, 1600) - margin.right - margin.left;
    const height = window.innerHeight - margin.top - margin.bottom;
    initJobVizGraphic(width, height);
    
    const svgs = document.getElementsByTagName("svg");
    return function cleanUp() {
      svgs.length > 0 && svgs[0].remove();
    };
  }, []);

    return (
      <>
      <div className="job-viz-header">
        <NavBar />
      </div>
      {/* <div className="job-viz-body-grid"> */}
        <div className="svg-container" />
        {/* <Parallax
            pages={2}
            ref={(ref) => (this.parallax = ref)}
            style={{ width: "70%" }}
          >
            <ParallaxLayer offset={0} speed={2}>
              <div className="job-viz-grad-background" />
            </ParallaxLayer>
            <ParallaxLayer offset={.4} speed={2}>
              <div className="job-viz-grad-background-2" />
            </ParallaxLayer>
            <ParallaxLayer offset={.75} speed={1}>
              <div className="diagonal-box-2">
                <div className="content" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.20} speed={2}>
              <div className="diagonal-box">
                <div className="content" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
              <img src="https://gdurl.com/4KdN" height="600" />
            </ParallaxLayer>
          </Parallax> */}
      {/* </div> */}
      </>
    );
}

export default JobViz;
