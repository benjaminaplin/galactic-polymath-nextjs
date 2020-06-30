import React, { useEffect, useRef, useState } from "react";
import MultiLineLessons from "../../components/gpComponents/multiLineLessons";
import Layout from "../../components/layout/layout";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";
import NavBar from '../../components/layout/navBar'
import Footer from '../../components/layout/footer'
import colors from '../../styles/colors'

const LandingPageBody = () => {
  const ref = useRef()
  const [numPages, setNumPages] = useState(3)
  const [footerOffset, setFooterOffset] = useState(2.8)
  const [MainContentOffset, setMainContentOffset] = useState(.5)

  useEffect(() => {
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    console.log('view port width', vw)
    console.log('view port height', vh)
    if(vw <= 400){
      setNumPages(4)
      setFooterOffset(3.95)
      setMainContentOffset(.2)
    }
    if(vw > 400 && vw < 750){
      setNumPages(3)
      setFooterOffset(2.85)
      setMainContentOffset(.25)
    }
    if(vw >= 750 && vw < 930){
      setNumPages(3)
      setFooterOffset(2.75)
      setMainContentOffset(.35)
    }
  }, [])

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: colors.gPSparkleWhite,
          zIndex: "-100",
          // height: '100vh'
        }}
      >
        <Parallax
          style={{ backgroundColor: colors.gPSparkleWhite, overflow: "hidden" }}
          pages={numPages}
          ref={(ref) => ref}
        >
          <ParallaxLayer offset={0} speed={-0.5}>
            <div className="header-logo-container">
              <img className="header-logo" src="https://gdurl.com/4KdN" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={MainContentOffset}>
            <div>
              <div className="landing-page-body-grid">
                <img className="classroom-image" src="https://gdurl.com/9GiJ" />
                <div className="mission-statement-text">
                  <p>
                    <strong>We are a startup education studio. </strong>
                    We make lessons that are{" "}
                    <i>creative, authentic, and interdisciplinary</i>. We
                    translate knowledge that is not generally available to the
                    public by working directly with experts.
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
              </div>
            </div>          
          </ParallaxLayer>
          <ParallaxLayer
            offset={footerOffset}
            style={{
              width: "100%",
            }}
          >
            <Footer parallax numPages={numPages} footerOffset={footerOffset}/>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}


export default LandingPageBody;
