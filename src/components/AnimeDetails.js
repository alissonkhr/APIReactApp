import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AnimeDetails({ anime }) {
  const [show, setShow] = useState(false);
  const [theClass, setClass] = useState("fs-6 text-truncate");
  const [button, setButton] = useState(true);

  const handleLess = () => {
    setClass("fs-6 text-truncate");
    setButton(true);
  };
  const handleMore = () => {
    setClass("fs-6");
    setButton(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Button
          id="animeDetailsBtn"
          variant="secondary"
          className="btn btn-outline-dark"
          onClick={handleShow}
        >
          {anime.title}
        </Button>
      </div>
      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">About {anime.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className={theClass}>{anime.synopsis}</p>
          <div className="modalBtns">
          <Button
            variant="outline-dark"
            className="synopsisButtons"
            onClick={handleMore}
          >
            More?
          </Button>
          {!button && (
            <Button
              variant="outline-dark"
              className="synopsisButtons"
              onClick={handleLess}
            >
              Less
            </Button>
          )}
          </div>
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
