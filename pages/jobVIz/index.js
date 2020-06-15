import React, { useEffect } from "react";
import Layout from "../../components/layout/layout";
import initJobVizGraphic from "./initJobVizGraphic";
import Header from "../../components/layout/header.js";
// import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

const JobViz = () => {

	useEffect(()=>{
		initJobVizGraphic()
		console.log('we loaded')
		return function cleanUp() {
			const svgs = document.getElementsByTagName("svg");
			console.log('cleanin it up!', svgs)
			svgs.length > 0 && svgs[0].remove();
			console.log('cleaned it up!', svgs)
		}
	},[])

    return (
      <>
      <Header />
        <div className="job-viz-body-grid">
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
          </div>
      </>
    );
}

export default JobViz;
