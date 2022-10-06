import React from "react";
import AnimeCard from "./AnimeCard";

function MainContent(props) {
  const animeSearched = props.animeList.map((anime) => (
    <AnimeCard anime={anime} key={anime.mal_id} />
  ));

  return (
    <main>
      <div id="searchDiv">
        <form onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="Search for an anime"
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
            className="form-control"
            id="searchInput"
          />
        </form>
      </div>
      <div id="animeListDiv">{animeSearched}</div>
    </main>
  );
}

export default MainContent;
