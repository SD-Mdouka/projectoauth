import React from "react";
import CardBack from "./Card/userBack";
import CardFront from "./Card/CardFront";

const Profil = () => {
  return (
    <div className="card-container">
      <div className="card-body">
        <CardBack classes="side-front" classBack="side-back" />
        <CardFront classes="side-front" />
      </div>
    </div>
  );
};

export default Profil;
