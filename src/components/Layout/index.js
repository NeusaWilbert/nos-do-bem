import React from "react";

import "./layout.css";

const Layout = ({ children }) => (
  <div className="layout">
    <header className="App-header layout__header">
      <img
        alt="Nós do Bem Logo"
        style={{ height: "60px" }}
        src="images/logo2.png"
      />
    </header>
    {children}
  </div>
);

export default Layout;
