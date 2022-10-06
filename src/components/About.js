import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function About() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="secondary" className="alert">
        <Alert.Heading>Welcome to AnimAPI ッ</Alert.Heading>
        <p>
          Above, you will see some of the top anime out there and can click on
          the titles to get some more details about them from{" "}
          <a
            href="https://myanimelist.net/"
            target="_blank"
            rel="noopener noreferrer"
            id="aboutLink"
          >
            My Anime List
          </a>
          ! If you are looking for something else though, type it in the search
          bar to get a list of some results.
        </p>
        <hr />
        <div className="d-flex justify-content-between">
          <small id="smallAlertMsg">
            Special thanks to{" "}
            <a
              href="https://jikan.moe/"
              target="_blank"
              rel="noopener noreferrer"
              id="aboutLink"
            >
              Jikan
            </a>{" "}
            for providing the information brought to you by{" "}
            <span className="mal">My Anime List</span> for this site ᵔᴥᵔ
          </small>
          <Button className="aboutCloseBtn" variant="outline-dark" onClick={() => setShow(false)}>
          <i class="bi bi-x-circle-fill"></i>
          </Button>
        </div>
      </Alert>

      {!show && (
        <div className="d-flex justify-content-center aboutBtnDiv">
          <Button className="aboutBtn text-dark" variant="secondary" onClick={() => setShow(true)}>
            About AnimAPI!
          </Button>
        </div>
      )}
    </>
  );
}

export default About;
