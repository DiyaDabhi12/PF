import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-info">What I Know</p>

          <h2 className="text-white fw-bold display-5">
            My Skills
          </h2>
        </div>

        <div className="row g-4">

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h3>HTML</h3>
              <p>
                I use HTML to create the structure and content
                of web pages.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h3>CSS</h3>
              <p>
                I use CSS to design attractive layouts,
                colors, fonts and responsive websites.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h3>Bootstrap</h3>
              <p>
                I use Bootstrap to create responsive and
                mobile-friendly web pages.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h3>JavaScript</h3>
              <p>
                I use JavaScript to add functionality and
                interactivity to websites.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h3>React</h3>
              <p>
                I use React to build modern and reusable
                user interfaces.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h3>Git & GitHub</h3>
              <p>
                I use Git and GitHub to manage and share
                my projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;