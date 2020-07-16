import React from "react";
import Layout from "../../components/layout/layout";
import Avatar from "../../components/ui/avatar";
import Accordion from "../../components/ui/accordion";

const profiles = [
  {
    name: "Matt Wilkins, PhD",
    description: "Founder, CEO",
    imgUrl:
      "https://res.cloudinary.com/galactic-polymath/image/upload/w_150,c_fill,ar_1:1,q_auto,g_auto/Matt_Wilkins_profile_ukorql.jpg",
    accordionHeader: "Having done scientific research for 12 years...",
    aboutText: (
      <div>
        <p className="about-paragraph">
          Having done scientific research for 12 years, taught at the
          undergraduate and graduate level, and worked for three years
          developing teaching curricula in Metro Nashville Public Schools, I
          know about the challenges teachers face. I know how little time they
          have to plan and collaborate, how what little time they have is often
          sucked up into parent calls and meetings, and yet how they are asked
          to connect more and more dots in the classroom year after year.
          Teachers must connect lessons to real world examples, to career
          options, to other standards across subjects, to encourage
          collaboration, and critical thinking, to provide opportunities for
          creative solutions and communications of ideas, and to transform
          stale, rote material created by education publishers into memorable,
          active lessons. It&rsquo;s all too much!
        </p>

        <p className="about-paragraph">
          We want to give teachers a head start: to provide amazing materials
          that provide game-changing experiences out of the box, but can be
          moified to suit teachers&rsquo; needs and styles. We also value
          teachers&rsquo; feedback and want to build and active community that
          helps us revise and update every one of our lessons to get better over
          time. This is my vision for education: to transform the hard-won
          knowledge currently locked up in journals most of us can&rsquo;t read
          or understand into world-expanding lessons that empower both teachers
          and students with an impossible, aspirational goal: think bigger;
          learn everything!
        </p>
        <p className="about-paragraph">
          Learn more about me at{" "}
          <a href={"http://www.mattwilkinsbio.com"}>mattwilkinsbio.com</a>
        </p>
      </div>
    ),
  },
  {
    name: "Arda Turkman",
    description: "Back-end Developer",
    imgUrl: null,
    accordionHeader: "Arda is a senior at Vanderbilt University...",
    aboutText: (
      <div>
        <p className="about-paragraph">
          Arda is a senior at Vanderbilt University. He has been helping build
          back-end infrastructure for Galactic Polymath since Spring of 2019. He
          hopes to get into a PhD program after graduating from Vanderbilt.
        </p>
      </div>
    ),
  },
];

const About = () => {
  return (
    <Layout>
      <>
        <div className="general-page-body-grid">
          <div className="general-page-main-content">
            <div className="about-body-grid">
              <p className="about-paragraph">
                Galactic Polymath (GP) is an early-stage startup based in
                Nashville, TN, USA. It was founded by Matt Wilkins, PhD, a
                biologist, multi-award-winning science communicator, and k-12
                educator. The goal of GP is to create a nimble studio that works
                with experts to translate complicated, cutting-edge knowledge
                into mind-blowing lessons that are better than what&rsquo;s
                currently available, but also as easy to teach as possible.
              </p>
              <div>
                {profiles.map((profile) => (
                  <div key={profile.name} className="profile-container">
                    <Avatar
                      imgUrl={profile.imgUrl}
                      name={profile.name}
                      description={profile.description}
                    />
                    <Accordion title={profile.accordionHeader}>
                      {profile.aboutText}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default About;
