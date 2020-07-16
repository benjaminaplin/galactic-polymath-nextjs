import React, { useEffect } from "react";
import MultiLineLessons from "../../components/gpComponents/multiLineLessons";
import Layout from "../../components/layout/layout";
import { makeCloudinaryUrl } from "../../shared/constants";

const LandingPageBody = () => {
  const inViewPort = (el) => {
    let rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
      (rect.top >= 0 && rect.bottom <= window.innerHeight)
    );
  };

  const handleScroll = () => {
    const top = window.pageYOffset;
    const headerLogoContainer = document.querySelector(
      ".header-logo-container"
    );
    headerLogoContainer.style.transform = `translateY(${top / 1.5}px)`;
    headerLogoContainer.style.opacity =
      1 - Math.max(top / (window.innerHeight * 0.3), 0);
    const mathLessonImage = document.querySelector(".math-lesson-image");
    // console.log("isInView?", inViewPort(mathLessonImage));
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", handleScroll);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Layout>
      <>
        <div className="header-logo-container">
          {/* <img className="header-logo" src="https://gdurl.com/4KdN" /> */}
          <img
            className="header-logo"
            src={makeCloudinaryUrl(
              "v1594935064/logos/GP-bl_text_rainbow_icon_alpha_bg-01_kfbga4.png"
            )}
          />
        </div>
        <div className="landing-page-body-grid">
          <img
            className="classroom-image"
            src={makeCloudinaryUrl(
              "v1592966103/Flowers_NIT_classroom_300ppi_ex64rj.png"
            )}
          />
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
            <img
              className="stem-image"
              src={makeCloudinaryUrl(
                "v1592966102/GP_Visual_Argument_sw6hv1.png"
              )}
            />
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
};

export default LandingPageBody;
