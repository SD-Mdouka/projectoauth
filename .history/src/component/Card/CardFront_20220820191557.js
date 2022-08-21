import React from "react";
import LoginButton from "../LoginButton";

const CardFront = () => {
  return (
    <div className="card-side side-front">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6">
            <img src="01.png" />
          </div>
          <span>+</span>
          <div className="col-xs-6">
            <img src="01.png" />
          </div>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default CardFront;
