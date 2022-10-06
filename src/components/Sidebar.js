import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Sidebar() {
  const [topAnime, setTopAnime] = useState([]);

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/top/anime?&filter=bypopularity`
    ).then((res) => res.json());
    setTopAnime(temp.data.slice(0, 5));
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  const popularAnime = topAnime.map((anime) => (
    <a
      href={anime.url}
      target="_blank"
      key={anime.mal_id}
      rel="noopener noreferrer"
      role="button"
      id="topAnimeList"
    >
      {anime.title}
    </a>
  ));
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Popular Anime</Navbar.Brand>
          <Nav className="me-auto">
            {popularAnime}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;
