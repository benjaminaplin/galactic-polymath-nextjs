import React, { useEffect, useRef, useState } from "react";
import MultiLineLessons from "../../components/gpComponents/multiLineLessons";
import Layout from "../../components/layout/layout";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";
import NavBar from '../../components/layout/navBar'
import Footer from '../../components/layout/footer'
import colors from '../../styles/colors'
// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calc = (o) => `translateY(${o * 0.5}px)`;

// height of container as rendered 3752 - height of container as it should be 3282
//470
// 3282
const LandingPageBody = () => {
  const ref = useRef()
    const [viewPortWidth, setViewPortWidth] = useState(320)
    const [numPages, setNumPages] = useState(320)

  useEffect(() => {
    const vw = document.documentElement.clientWidth;
    setViewPortWidth(vw)
  }, [])

  return (
    <div>
      <Parallax
        // pages={viewPortWidth < 350 ? 5.5 : 4}
        pages={3.5}
        ref={(ref) => ref}
        style={{
          backgroundColor: colors.gPSparkleWhite,
          width: "100%",
          // height: "3282px",
        }}
      >
        <NavBar />
        {/* <div style={{ width: viewPortWidth }}> */}
        <ParallaxLayer
          // style={{ width: "100%" }}
          factor={1}
          offset={0}
          speed={-0.5}
        >
          <div className="header-logo-container">
            <img className="header-logo" src="https://gdurl.com/4KdN" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={3}>
          <div>
            <div className="landing-page-body-grid">
              <img className="classroom-image" src="https://gdurl.com/9GiJ" />
              <div className="mission-statement-text">
                <p>
                  <strong>We are a startup education studio. </strong>
                  We think learning should be fun. When it&rsquo;s not fun, it
                  should be interesting. And to be interesting, it needs to
                  connect to the real world.
                </p>
              </div>
              <div className="stem-image-row">
                <img className="stem-image" src="/stem.png" />
              </div>
              <div className="summary-statement-row">
                <p>
                  We work directly with experts to translate complex knowledge
                  into rigorous, but fun,{" "}
                  <strong>standards-aligned learning experiences</strong> for
                  students.
                </p>
                <p>
                  Here&rsquo;s our first unit-made up of 4 interdisciplinary
                  lessons (a math, ELA, science, and social studies lesson)
                  built around a brand new study on birdsong, and centering on
                  the theme of how our assumptions affect our conclusions.
                </p>
              </div>
              <MultiLineLessons />
              <Footer />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}


export default LandingPageBody;
