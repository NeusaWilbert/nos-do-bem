import React from "react";

import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <div
        style={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          youtube
          <input type="file" name="Filedata" multiple></input>
        </div>
        <div>
          one
          <input type="file" accept="image/*,video/*" capture></input>
        </div>
        <div>
          two
          <input type="file" accept="image/*,video/*" capture="camera"></input>
        </div>
        <div>
          three
          <input type="file" capture="camera"></input>
        </div>
        <div>
          four
          <input type="file" capture></input>
        </div>
        <div>
          five
          <input type="file" accept="image/*,video/*"></input>
        </div>
      </div>
      {/*
      <header className="App-header">Nos do Bem</header>
      <Gallery />
      */}
    </div>
  );
}

export default App;
