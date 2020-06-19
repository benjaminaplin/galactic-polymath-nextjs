<Parallax
          pages={5}
          ref={(ref) => (this.parallax = ref)}
          // style={{ width: "95%" }}
        >
          <ParallaxLayer offset={0} speed={-0.3} style={{ zIndex: "80" }}>
            <div className="header-logo-container">
              <img className="header-logo" src="https://gdurl.com/4KdN" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1} style={{ zIndex: "100" }}>
            <div className="landing-page-body-grid">
              <div className="mission-statement-row">
                <img className="classroom-image" src="https://gdurl.com/9GiJ" />
                <div className="mission-statement-text">
                  <p>
                    <strong>We are a startup education studio. </strong>
                    We think learning should be fun. When it&rsquo;s not fun, it
                    should be interesting. And to be interesting, it needs to
                    connect to the real world.
                  </p>
                </div>
              </div>
              <div className="stem-image-row">
                <img className="stem-image" src="https://gdurl.com/UWKg" />
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
              <div className="job-viz-db-container">
                <img className="job-viz-db-img" src="/jbviz-db.png" />
                <div className="jobviz-description-container">
                  <p>
                    All of our lessons are connected to careers with JobViz: a
                    visual explorer for 1000 of the most common jobs and a
                    database of diverse people doing these jobs!
                  </p>
                </div>
              </div>
              <div className="gp-signup-container"></div>
              <p>
                <strong>Sign up</strong> to stay in the loop about new lessons,
                add a profile, and join the growing community of researchers,
                educators, and professionals who want a more ambitious vision
                for education... and our future.
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1}>
            <div className="diagonal-box-2">
              <div className="content" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.75} speed={2}>
            <div className="diagonal-box">
              <div className="content" />
            </div>
          </ParallaxLayer>
        </Parallax>