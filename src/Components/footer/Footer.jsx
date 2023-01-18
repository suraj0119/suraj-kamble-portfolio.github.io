import React from "react";
import './footer.css';
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Suraj Kamble</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/suraj0119/?hl=en"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/suraj-kamble-1a4359179/"
              className="footer__social-link"
              target="_blank"
            >
              <bx className="bx bxl-linkedin"></bx>
            </a>

            <a
              href="https://github.com/suraj0119"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-github"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; Crypticalcoder. All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
