import React from "react";
import AnimeDetails from "./AnimeDetails";

function AnimeCard({ anime }) {
  return (
    <ul id="animeCardList">
      <li id="animeCardItem">
        <a
          href={anime.url}
          target="_blank"
          rel="noopener noreferrer"
          className="animeCardATag"
        >
          <figure>
            <img
              src={anime.images.jpg.image_url}
              alt="Anime Art"
              className="img-thumbnail img-fluid"
            />
          </figure>
          <div id="titleDiv">
            <h3 id="animeCardTitle">{anime.title_english || anime.title}</h3>
          </div>
        </a>
        <div>
          <AnimeDetails anime={anime} />
        </div>
      </li>
    </ul>
  );
}

export default AnimeCard;
