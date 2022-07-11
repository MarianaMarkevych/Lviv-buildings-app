import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <section className="social-media">
        <div className="social-media-wrap">
          <p className="footer--text">Фоловіть та пишіть сюди:</p>
          <div class="social-icons">
            <a
              href="https://github.com/MarianaMarkevych"
              className="social-icon-link github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/mariana-markevych-b6aa6719b/"
              className="social-icon-link linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>

            <a
              className="social-icon-link telegram"
              href="https://t.me/mariana_markevych"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="telegram"
            >
              <i className="fab fa-telegram" />
            </a>
          </div>
        </div>
      </section>
      <small className="website-rights">
        © 2022, created by MarianaMarkevych
      </small>
    </div>
  );
}

export default Footer;
