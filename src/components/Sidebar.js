import React from "react";
import { useState, useEffect } from "react";

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
      className="btn btn-light nav-link"
      role="button"
      id="topAnimeList"
    >
      {anime.title}
    </a>
  ));

  return (
    <aside>
      <nav className="navbar">
        <div className="container-sm">
          <h3>Popular Anime</h3>
          {popularAnime}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
