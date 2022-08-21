import React from "react";
import CardBack from "./Card/userBack";
import CardFront from "./Card/CardFront";

const Profil = () => {
  return (
    <div className="card-container">
      <div className="card-body">
        <CardBack classes="side-back" classBack="side-back" />
        <CardFront classes="side-back" />
      </div>
    </div>
  );
};

export default Profil;
