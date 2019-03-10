import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.randomizeImages(props.id)} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;