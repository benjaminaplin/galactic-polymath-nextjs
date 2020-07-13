import React, { useEffect, useRef, useState } from "react";
import MultiLineLessons from "../../components/gpComponents/multiLineLessons";
import Layout from "../../components/layout/layout";

const LandingPageBody = () => {

 function handleScroll() {
   const top =  window.pageYOffset
   const headerLogoContainer = 
   document.querySelector(
     ".header-logo-container"
   )
   headerLogoContainer.style.transform = `translateY(${top / 1.5}px)`;
   headerLogoContainer.style.opacity = 1 - Math.max(top / (window.innerHeight * .3), 0)

  }
    
  useEffect(() => {
  const watchScroll = () => {
    window.addEventListener("scroll", handleScroll);
   }
   watchScroll();
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 });

  return (
    <Layout>
      <>
        <div className="header-logo-container">
          <img className="header-logo" src="https://gdurl.com/4KdN" />
        </div>
        <div className="landing-page-body-grid">
          <img className="classroom-image" src="https://gdurl.com/9GiJ" />
          <div className="mission-statement-text">
            <p>
              <strong>We are a startup education studio. </strong>
              We make lessons that are{" "}
              <i>creative, authentic, and interdisciplinary</i>. We translate
              knowledge that is not generally available to the public by working
              directly with experts.
            </p>
          </div>
          <div className="stem-image-row">
            <img className="stem-image" src="/stem.png" />
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
        </div>
      </>
    </Layout>
  );
}


export default LandingPageBody;
