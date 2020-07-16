import React from "react";

const MultiLineLessons = () => {
  return (
    <div className="nested-multiline-grid">
      <div className="red-line" />
      <div className="blue-line" />
      <div className="yellow-line" />
      <div className="green-line" />
      <div className="math-lesson-img-container">
        <img
          alt="math lesson image"
          className="math-lesson-image"
          src="https://res.cloudinary.com/galactic-polymath/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1592966102/Math_Lesson_Cover_iyenko.svg"
        />
      </div>
      <div className="math-lesson-text">
        Math lesson: a grit-building "Nearly Impossible Task." Works on data
        literacy through puzzles. Students analyze real data from the birdsong
        study.
      </div>
      <div className="science-lesson-img-container">
        <img
          alt="science lesson image"
          className="science-lesson-image"
          src="https://res.cloudinary.com/galactic-polymath/image/upload/v1592966098/Placeholder_graphic_for_science_lesson_uyvrxj.png"
        />
      </div>
      <div className="science-lesson-text">
        Science lesson: Students test hypotheses for the evolution of birdsong
        by exploring vocalizations across the tree of life with the OneZoom
        Explorer.
      </div>
      <div className="social-studies-lesson-img-container">
        <img
          alt="social studies lesson image"
          className="social-studies-lesson-image"
          src="https://res.cloudinary.com/galactic-polymath/image/upload/v1592966098/Placeholder_graphic_for_science_lesson_uyvrxj.png"
        />
      </div>
      <div className="social-studies-lesson-text">
        Social Studies Lesson: Students learn about how language and geography
        affect our assumptions through a role-playing data exploration exercise
        using OneZoom.
      </div>
      <div className="english-lesson-img-container">
        <img
          alt="english lesson image"
          className="english-lesson-image"
          src="https://res.cloudinary.com/galactic-polymath/image/upload/v1592966097/2015fall_checking-the-bias_1920x1080_rypbyq.jpg"
        />
      </div>
      <div className="english-lesson-text">
        English lesson: Students play out a role playing simulation to connect
        their personal experiences with bias to scientific assumptions, and how
        addressing bias in each of these domains marks progress.
      </div>
    </div>
  );
};

export default MultiLineLessons;
