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

const LandingPageBody = () => {
  const ref = useRef()
    const [viewPortWidth, setViewPortWidth] = useState(320)

  useEffect(() => {
    const vw = document.documentElement.clientWidth;
    setViewPortWidth(vw)
  }, [])

  useEffect(() => {
      document.getElementsByTagName("body")[0].style.padding = 0;
    return () => {
      document.getElementsByTagName("body")[0].style.padding = "2rem 1rem";
    }
  }, [])

  console.log('viewPortWidth', viewPortWidth)
  return (
    <>
      <Parallax
        pages={viewPortWidth < 400 ? 6.75 : 4.35}
        ref={(ref) => ref}
        style={{ backgroundColor: colors.gPSparkleWhite }}
      >
        <NavBar />
        <ParallaxLayer offset={0} speed={-0.5}>
          <div className="header-logo-container">
            <img className="header-logo" src="https://gdurl.com/4KdN" />
          </div>
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
