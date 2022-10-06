import React from "react";
import AnimeDetails from "./AnimeDetails";
import Card from "react-bootstrap/Card";

function AnimeCard({ anime }) {
  return (
    <>
    <Card className="card">
      <ul id="animeCardList">
        <li id="animeCardItem">
          <a
            href={anime.url}
            target="_blank"
            rel="noopener noreferrer"
            className="animeCardATag"
          >
            <Card.Img
              src={anime.images.jpg.image_url}
              alt="Anime Art"
              className="img-thumbnail img-fluid animeCardImg"
            />
            </a>
            <Card.Body>
          <div>
            <AnimeDetails anime={anime} />
          </div>
          </Card.Body>
        </li>
      </ul>
      </Card>
    </>
  );
}

export default AnimeCard;
