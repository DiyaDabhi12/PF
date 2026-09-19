import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-info">My Recent Work</p>

          <h2 className="text-white fw-bold display-5">
            My Projects
          </h2>
        </div>

        <div className="row g-4">

          {/* React Project */}
          <div className="col-md-6 col-lg-4">
            <div className="project-card">

              <div className="project-image">
                <h3>React Project</h3>
              </div>

              <div className="p-4">
                <h4 className="text-white">
                  Car Collection
                </h4>

                <p className="text-secondary">
                  A React JS project that displays a collection
                  of cars using components, props and map().
                </p>

                <span className="badge bg-info text-dark me-2">
                  React
                </span>

                <span className="badge bg-secondary me-2">
                  Bootstrap
                </span>

                <span className="badge bg-secondary">
                  CSS
                </span>

                <div className="mt-4">
                  <a
                    href="https://github.com/DiyaDabhi12/React-Project"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-info"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* JavaScript Project */}
          <div className="col-md-6 col-lg-4">
            <div className="project-card">

              <div className="project-image">
                <h3>JavaScript</h3>
              </div>

              <div className="p-4">
                <h4 className="text-white">
                  Product Management
                </h4>

                <p className="text-secondary">
                  A product management system with CRUD,
                  search, category filter, sorting and local storage.
                </p>

                <span className="badge bg-info text-dark me-2">
                  JavaScript
                </span>

                <span className="badge bg-secondary me-2">
                  HTML
                </span>

                <span className="badge bg-secondary">
                  CSS
                </span>

                <div className="mt-4">
                  <a
                    href="https://github.com/DiyaDabhi12/Final-Project-JS"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-info"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Quiz Project */}
          <div className="col-md-6 col-lg-4">
            <div className="project-card">

              <div className="project-image">
                <h3>Quiz</h3>
              </div>

              <div className="p-4">
                <h4 className="text-white">
                  Quiz Application
                </h4>

                <p className="text-secondary">
                  An interactive quiz project created as part
                  of my front-end learning projects.
                </p>

                <span className="badge bg-info text-dark me-2">
                  JavaScript
                </span>

                <span className="badge bg-secondary">
                  HTML & CSS
                </span>

                <div className="mt-4">
                  <a
                    href="https://github.com/DiyaDabhi12/Quiz"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-info"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;