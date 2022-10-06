import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AnimeDetails({ anime }) {
  const [showModal, setShow] = useState(false);

  const [synopsisClass, setButton] = useState("fs-6 text-truncate");

  const handleLess = () => setButton("fs-6 text-truncate");
  const handleMore = () => setButton("fs-6");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Button onClick={handleShow}>Details</Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About {anime.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className={synopsisClass}>{anime.synopsis}</p>
          <Button
            variant="outline-dark"
            className="synopsisButtons"
            onClick={handleMore}
          >
            More?
          </Button>
          <Button
            variant="outline-dark"
            className="synopsisButtons"
            onClick={handleLess}
          >
            Less
          </Button>
        </Modal.Body>
        <Modal.Footer id="modalFooterDiv">
          <div id="modalFooter">
            <p className="modalFooterDetails">Rating: {anime.score}</p>
            <p className="modalFooterDetails">Episodes: {anime.episodes}</p>
            <p className="modalFooterDetails">{anime.rating}</p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AnimeDetails;
