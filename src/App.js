import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState("");


  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&limit=10&sort=asc`
    ).then((res) => res.json());
    SetAnimeList(temp.data);
  };


  return (
    <div className="App">
      <Header />
      <div id="body">
        <div className="content-wrap" id="sidebar">
          <Sidebar />
        </div>
        <div id="main">
          <MainContent
            handleSearch={handleSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={animeList}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
