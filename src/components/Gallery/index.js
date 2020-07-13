import React from "react";

import Card from "../Card";

import "./gallery.css";

const Gallery = () => {
  const infoDogs = [
    {
      imageName: "dog1.jpg",
      description: "Ajude um amigo no seu tratamento.",
      buttonText: "Campanha de Tratamento",
      buttonUrl:
        "https://www.catarse.me/tratamento_mara_c8d4?ref=user_contributed&amp;project_id=111644&amp;project_user_id=1254354",
    },
    {
      imageName: "dog2.jpg",
      description: "Em busca de um novo amigo?",
      buttonText: "Quero Adotar",
      buttonUrl:
        "mailto:nosdobemprotecaoanimal@gmail.com?subject=Quero%20adotar%20um%20animal&amp;body=Ol%C3%A1!%20Tenho%20interesse%20em%20adotar%20um%20animal%3A%20",
    },
    {
      imageName: "dog3.jpg",
      description: "O que acha de ser meu padrinho?",
      buttonText: "Campanha de Apadrinhamento",
      buttonUrl:
        "http://www.catarse.me/apadrinhe_nosdobem_protecaoanimal_ea61?ref=project_link",
    },
    {
      imageName: "paula.jpeg",
      description: "Leia a entrevista com a Paula Picceli!",
      buttonText: "Entrevista - Moreno Pet Blog",
      buttonUrl: "http://www.morenopetblog.com.br/2020/06/16/paula-picceli/",
    },
  ];

  return (
    <>
      <div className="dog-list">
        {infoDogs.map((infoDog) => {
          return <Card info={infoDog} />;
        })}
      </div>
    </>
  );
};

export default Gallery;
