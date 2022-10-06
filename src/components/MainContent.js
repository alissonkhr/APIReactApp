import React from "react";
import AnimeCard from "./AnimeCard";
import About from "./About";

function MainContent(props) {
  const animeSearched = props.animeList.map((anime) => (
    <AnimeCard anime={anime} key={anime.mal_id} />
  ));

  return (
    <main>
      <div>
        <About />
      </div>
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
            <input className="btn btn-outline-dark submitBtn" type="submit" value="Go!" />
        </form>
      </div>
      <div id="animeListDiv">{animeSearched}</div>
    </main>
  );
}

export default MainContent;
