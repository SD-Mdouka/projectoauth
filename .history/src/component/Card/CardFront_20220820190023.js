import React from "react";
import LoginButton from "../LoginButton";

const CardFront = () => {
  return (
    <div className="card-side">
      <div className="container-fluid">
        <div className="row">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default CardFront;
