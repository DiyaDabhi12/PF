import React from "react";

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-info">Get To Know Me</p>

          <h2 className="text-white fw-bold display-5">
            About Me
          </h2>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="about-box">
              <h1>DD</h1>
            </div>
          </div>

          <div className="col-lg-7">
            <h3 className="text-white mb-3">
              I'm a Front-End Developer
            </h3>

            <p className="text-secondary">
              Hello! My name is Diya Dabhi. I am passionate about
              web development and enjoy creating modern and
              responsive websites.
            </p>

            <p className="text-secondary">
              I am learning front-end technologies such as HTML,
              CSS, Bootstrap, JavaScript and React. My goal is to
              improve my skills and create beautiful user-friendly
              websites.
            </p>

            <div className="row mt-4">

              <div className="col-sm-6">
                <p className="text-white">
                  <strong>Name:</strong> Diya Dabhi
                </p>

                <p className="text-white">
                  <strong>Role:</strong> Front-End Developer
                </p>
              </div>

              <div className="col-sm-6">
                <p className="text-white">
                  <strong>Experience:</strong> Fresher
                </p>

                <p className="text-white">
                  <strong>Location:</strong> Gujarat, India
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;