// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>FIFA Players Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
