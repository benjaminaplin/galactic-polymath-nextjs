import React, { useEffect, useRef } from "react";
import MultiLineLessons from "../../components/gpComponents/multiLineLessons";
import Layout from "../../components/layout/layout";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";

// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calc = (o) => `translateY(${o * 0.5}px)`;

const LandingPageBody = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const width = '100%'
  return (
    <div ref={ref}>
      <div
        className="landing-page-parallax-container"
      >
        <div
          style={{
            background: "ddd",
            height: "200px",
          }}
        />
        <div
          style={{
            background: "#123456",
            position: "relative",
            width,
            height: "400px",
          }}
        >
          <animated.div
            style={{
              background: "blue",
              position: "absolute",
              width,
              height: "100px",
              top: 0,
              left: 0,
              transform: offset.interpolate(calc),
            }}
          >I am moving around</animated.div>
        </div>
      </div>
    </div>
  );
};


export default LandingPageBody;
