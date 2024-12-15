import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h3 id="contactme">
          <span></span>
          <span className="primary">#</span>Contact Me
        </h3>

        <div className="card1">
          {/* Slide 1 */}
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide slide2">
            <div className="content">
              <div className="footer-icons">
                <span>
                  <a
                    href="https://github.com/mohammadnoorsaqer?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/mohammadnoor-saqer-187261182/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </span>
              </div>
              <div className="footer-text">
                <h6>
                  Email<span><i className="fa-solid fa-envelope"></i></span>:
                  mnoorsaqer@gmail.com
                </h6>
                <h6>
                  Phone<span><i className="fa-solid fa-phone"></i></span>(962)
                  779394950
                </h6>
                <pre>&copy; made by mohammadnoor</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
