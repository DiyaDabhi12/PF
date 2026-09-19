import React from "react";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-7">
            <p className="text-info fs-5 mb-2">
              Hello, I'm
            </p>

            <h1 className="display-2 fw-bold text-white">
              Diya Dabhi
            </h1>

            <h2 className="text-white mb-3">
              Front-End Developer
            </h2>

            <p className="text-secondary fs-5">
              I create modern, responsive and user-friendly
              websites using HTML, CSS, Bootstrap, JavaScript
              and React.
            </p>

            <div className="mt-4">
              <a href="#projects" className="btn btn-info me-3">
                View My Work
              </a>

              <a href="#contact" className="btn btn-outline-light">
                Contact Me
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <div className="profile-circle">
              <h2>DD</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;