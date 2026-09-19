import React from "react";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">

        <div className="row align-items-center py-4">

          <div className="col-md-6 text-center text-md-start">
            <h4 className="text-white fw-bold mb-2">
              Diya Dabhi
            </h4>

            <p className="text-secondary mb-0">
              Front-End Developer
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">

            <a
              href="https://github.com/DiyaDabhi12"
              target="_blank"
              rel="noreferrer"
              className="footer-link me-3"
            >
              GitHub
            </a>

            <a
              href="#home"
              className="footer-link"
            >
              Back to Top
            </a>

          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center py-3">
          <p className="text-secondary mb-0">
            © 2026 Diya Dabhi. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;