import React from "react";

import "./layout.css";

const Layout = ({ children }) => (
  <div className="layout">
    <header className="App-header layout__header">
      <a href="/">
        <img
          alt="Nós do Bem Logo"
          style={{ height: "100px" }}
          src="images/logo2.png"
        />
      </a>
    </header>
    {children}
    <footer className="layout__footer">
      <div>Outras dúvidas?</div>
      <a href="mailto:nosdobemprotecaoanimal@gmail.com">
        nosdobemprotecaoanimal@gmail.com
      </a>
    </footer>
  </div>
);

export default Layout;
