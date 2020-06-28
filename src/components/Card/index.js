import React from "react";

const Card = ({ dog }) => {
  return (
    <>
      <div>
        <img
          style={{ maxWidth: "200px", maxHeight: "200px" }}
          src={`images/${dog.imageName}`}
          alt="cachorro"
        />
        <p>{dog.name}</p>
        <p>{dog.age}</p>
        <p>{dog.race}</p>
      </div>
    </>
  );
};

export default Card;
