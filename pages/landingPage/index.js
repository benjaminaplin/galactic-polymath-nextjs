import React, { Component , useRef} from "react";
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

const LandingPageBody = () => {
  const ref = useRef()
  
  return (
    <>
      <Parallax
        pages={4}
        ref={(ref) => ref}
        style={{ backgroundColor: colors.gPSparkleWhite }}
      >
        <NavBar />
        <ParallaxLayer offset={0} speed={-0.5}>
          <div className="header-logo-container">
            <img className="header-logo" src="https://gdurl.com/4KdN" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={.05} speed={1}>
          <div className="diagonal-box">offset .05 layer</div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={.1}>
          <div className="diagonal-box-2">offset 1.5 layer</div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={2}>
          <div className="diagonal-box">offset 1.75 layer</div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <div className="diagonal-box-2">offset 2 layer</div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2}>
          <div className="diagonal-box">offset 3 layer</div>
        </ParallaxLayer>
        <div className="landing-page-body-grid">
            <img className="classroom-image" src="https://gdurl.com/9GiJ" />
            <div className="mission-statement-text">
              <p>
                <strong>We are a startup education studio. </strong>
                We think learning should be fun. When it&rsquo;s not fun, it
                should be interesting. And to be interesting, it needs to connect
                to the real world.
              </p>
            </div>
          <div className="stem-image-row">
            <img className="stem-image" src="https://gdurl.com/UWKg" />
          </div>
          <div className="summary-statement-row">
            <p>
              We work directly with experts to translate complex knowledge into
              rigorous, but fun,{" "}
              <strong>standards-aligned learning experiences</strong> for
              students.
            </p>
            <p>
              Here&rsquo;s our first unit-made up of 4 interdisciplinary lessons
              (a math, ELA, science, and social studies lesson) built around a
              brand new study on birdsong, and centering on the theme of how our
              assumptions affect our conclusions.
            </p>
          </div>
          <MultiLineLessons />
          <Footer />
        </div>
      </Parallax>
    </>
  );
}


export default LandingPageBody;
