import React from "react";

import "./card.css";

const Card = ({ dog }) => {
  return (
    <>
      <div className="card">
        <img
          style={{ maxWidth: "200px", maxHeight: "200px" }}
          src={`images/${dog.imageName}`}
          alt="cachorro"
        />
        <div className="card__dog-info">
          <p>Nome: {dog.name}</p>
          <p>Idade: {dog.age}</p>
          <p>Raça: {dog.race}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
