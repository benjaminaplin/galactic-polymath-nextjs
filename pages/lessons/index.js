import React from "react";
import Layout from "../../components/layout/layout";
import MultiLineLessons from "../../components/gpComponents/multiLineLessons";

const Lessons = () => {
  return (
    <Layout>
      <div className="landing-page-body-grid">
          <p>
            Female birds can sing! Is our first module, showcasing a model for translation of current research into standards-aligned, interdisciplinary (STEAM) lessons. The lessons will always be free and we look forward to your feedback on how to improve them.
          </p>
        <MultiLineLessons />
      </div>
    </Layout>
  );
};

export default Lessons;