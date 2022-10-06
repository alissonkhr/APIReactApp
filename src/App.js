import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&limit=10&sort=asc`
    ).then((res) => res.json());
    setAnimeList(temp.data);
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
            setSearch={setSearch}
            animeList={animeList}
          />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
