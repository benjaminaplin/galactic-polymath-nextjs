import React  from "react";
import Layout from "../../components/layout/layout";
import Avatar from "../../components/ui/avatar";
import Accordion from "../../components/ui/accordion";

const About = () => {
  return (
    <Layout>
      <div className="about-body-grid">
        <p className="about-paragraph">
          Galactic Polymath (GP) is an early-stage startup based in Nashville,
          TN, USA. It was founded by Matt Wilkins, PhD, a biologist,
          multi-award-winning science communicator, and k-12 educator. The goal
          of GP is to create a nimble studio that works with experts to
          translate complicated, cutting-edge knowledge into mind-blowing
          lessons that are better than what&rsquo;s currently available, but
          also as easy to teach as possible.
        </p>
        <Avatar name="Matt Wilkins, PhD" description="Founder, CEO" />
        <Accordion title={"Having done scientific research for 12 years.."}>
          <p className="about-paragraph">
            taught at the undergraduate and graduate level, and worked for three
            years developing teaching curricula in Metro Nashville Public
            Schools, I know about the challenges teachers face. I know how
            little time they have to plan and collaborate, how what little time
            they have is often sucked up into parent calls and meetings, and yet
            how they are asked to connect more and more dots in the classroom
            year after year. Teachers must connect lessons to real world
            examples, to career options, to other standards across subjects, to
            encourage collaboration, and critical thinking, to provide
            opportunities for creative solutions and communications of ideas,
            and to transform stale, rote material created by education pubishers
            into memorable, active lessons. I&rsquo;s all too much!
          </p>

          <p className="about-paragraph">
            We want to give teachers a head start: to provide amazing materials
            that provide game-changing experiences out of the box, but can be
            moified to suit teachers&rsquo; needs and styles. We also value
            teachers&rsquo; feedback and want to build and active community that
            helps us revise and update every one of our lessons to get better
            over time. This is my vision for education: to transform the
            hard-won knowledge currently locked up in journals most of us
            can&rsquo;t read or understand into world-expanding lessons that
            empower both teachers and students with an impossible, aspirational
            goal: think bigger; learn everything!
          </p>
        </Accordion>
        <Avatar name="Ethan Williams" description="Back-end Developer" />
        <Accordion title="About Ethan...">
         <p className="about-paragraph">Text Text Text Text</p>
        </Accordion>
        <Avatar name="Arda Turkman" description="Back-end Developer" />
        <Accordion title="About Ada">
        <p className="about-paragraph">Text Text Text Text</p>
        </Accordion>
      </div>
    </Layout>
  );
};

export default About;