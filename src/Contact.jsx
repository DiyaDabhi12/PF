import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-info">Get In Touch</p>

          <h2 className="text-white fw-bold display-5">
            Contact Me
          </h2>

          <p className="text-secondary">
            Feel free to contact me for any project or opportunity.
          </p>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-8">

            <div className="contact-card p-4 p-md-5">

              <div className="row g-4">

                <div className="col-md-6">
                  <label className="form-label text-white">
                    Your Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label text-white">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label text-white">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label text-white">
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <div className="col-12 text-center">
                  <button className="btn btn-info px-5">
                    Send Message
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;