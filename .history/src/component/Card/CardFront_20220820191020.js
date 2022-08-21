import React from "react";
import LoginButton from "../LoginButton";

const CardFront = () => {
  return (
    <div className="card-side side-front">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6">
            <img src="https://source.unsplash.com/w8YICpz1I10/358x458" />
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
