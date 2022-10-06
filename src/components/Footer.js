import React from "react";

function Footer() {
  return (
    <div className="footer--pin">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-1">
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="https://www.linkedin.com/in/alisson-ricardo/"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="https://github.com/alissonkhr"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center text-dark p-3">
          © 2022 Copyright:
          <a
            className="text-dark sourceLink"
            href="https://github.com/alissonkhr/APIReactApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;