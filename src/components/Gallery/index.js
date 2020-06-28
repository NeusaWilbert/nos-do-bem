import React from "react";

import Card from "../Card";

const Gallery = () => {
  const dogs = [
    {
      imageName: "dog1.jpg",
      name: "Pluto",
      age: 3,
      race: "Sem Raça Definida",
    },
    {
      imageName: "dog2.jpg",
      name: "Ervilha",
      age: 6,
      race: "Dálmata",
    },
    {
      imageName: "dog3.jpg",
      name: "Rex",
      age: 2,
      race: "Bull dog",
    },
    {
      imageName: "dog4.jpg",
      name: "Wilson",
      age: 7,
      race: "São Bernardo",
    },
  ];

  return (
    <>
      <h1>Para adoção</h1>
      <div>
        {dogs.map((dog) => {
          return <Card dog={dog} />;
        })}
      </div>
    </>
  );
};

export default Gallery;
