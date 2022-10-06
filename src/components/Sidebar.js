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
    setTopAnime(temp.data.slice(0, 6));
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
      <Navbar bg="light" variant="light" expand="lg" className="nav">
        <Container>
          <Navbar.Brand>Popular Anime</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navList">{popularAnime}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;
