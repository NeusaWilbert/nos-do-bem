import React from "react";

import Button from "../Button";

import "./card.css";

const Card = ({ info }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img
          style={{ maxWidth: "400px", maxHeight: "400px" }}
          src={`images/${info.imageName}`}
          alt="cachorro"
        />
      </div>
      <div className="card__dog-info">
        <div>{info.description}</div>
        <Button>
          <a target="_blank" rel="noopener noreferrer" href={info.buttonUrl}>
            {info.buttonText}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Card;
