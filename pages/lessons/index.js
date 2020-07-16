import React from "react";
import Layout from "../../components/layout/layout";
import MultiLineLessons from "../../components/gpComponents/multiLineLessons";
import VideoPlayer from "../../components/gpComponents/videoPlayer";

const Lessons = () => {
  return (
    <Layout>
      <div className="general-page-body-grid">
        <div className="general-page-main-content">
          <p>
            Female birds can sing! Is our first module, showcasing a model for
            translation of current research into standards-aligned,
            interdisciplinary (STEAM) lessons. The lessons will always be free
            and we look forward to your feedback on how to improve them.
          </p>
          <VideoPlayer videoId="424642268" />
          <MultiLineLessons />
        </div>
      </div>
    </Layout>
  );
};

export default Lessons;
