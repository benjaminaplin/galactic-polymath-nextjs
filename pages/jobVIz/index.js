import React, {Component} from "./node_modules/react";
import Layout from "../../components/layout/layout";
// import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

class JobViz extends Component {
  render(){
    return (
      <Layout footer={false}>
        <div className="job-viz-body-grid">
          <div style={{ width: "70%", textAlign: "center" }}>
            yay
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
        </div>
      </Layout>
    );
  }
}

export default JobViz;
