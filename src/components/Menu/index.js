import React from "react";

import Button from "../Button";

import "./menu.css";

const Menu = () => (
  <div className="menu">
    <div className="menu__buttons">
      <Button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/brechodobem_pelosanimais/"
        >
          Instagram Brechó do Bem
        </a>
      </Button>
      <Button>
        <a rel="noopener noreferrer" href="/facebook">
          Facebook Nós do Bem
        </a>
      </Button>
    </div>
  </div>
);

export default Menu;
