import React from "react";

function Header() {
  return (
    <header>
      <div id="headerDiv" className="d-flex justify-content-center">
        <h1 id="title" className="text-white">
          AnimAPI
        </h1>
        <div className="shibaDiv">
          <img
            src="https://i.pinimg.com/originals/41/5e/1f/415e1fdb515415677d7945f8ec0ffc3b.gif"
            alt="Shiba"
            className="shibaImg"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
