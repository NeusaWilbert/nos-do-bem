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
          href="http://www.catarse.me/apadrinhe_nosdobem_protecaoanimal_ea61?ref=project_link"
        >
          Campanha de Apadrinhamento
        </a>
      </Button>
      <Button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/brechodobem_pelosanimais/"
        >
          Brechó do Bem
        </a>
      </Button>
      <Button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:nosdobemprotecaoanimal@gmail.com?subject=Quero%20adotar%20um%20animal&amp;body=Ol%C3%A1!%20Tenho%20interesse%20em%20adotar%20um%20animal%3A%20"
        >
          Quero Adotar um Animal
        </a>
      </Button>
      <Button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.morenopetblog.com.br/2020/06/16/paula-picceli/"
        >
          Entrevista - Moreno Pet Blog
        </a>
      </Button>
      <Button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.catarse.me/tratamento_mara_c8d4?ref=user_contributed&amp;project_id=111644&amp;project_user_id=1254354"
        >
          Apadrinhamento - Tratamento Mara
        </a>
      </Button>
    </div>
  </div>
);

export default Menu;
