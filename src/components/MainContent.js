import React from "react";
import AnimeCard from "./AnimeCard";
import About from "./About";
import Button from "react-bootstrap/Button";

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
            <Button
                variant="outline-dark"
                type="submit"
                className="submitBtn"
              >
              <i className="bi bi-search-heart"></i>
              </Button>
        </form>
      </div>
      <div id="animeListDiv">{animeSearched}</div>
    </main>
  );
}

export default MainContent;
