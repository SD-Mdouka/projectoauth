import React from "react";
import LoginButton from "../LoginButton";

const CardFront = () => {
  return (
    <div className="card-side side-front">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6">
            <img src="01.png" />
            <span
              style={{
                fontSize: "50px",
                color: "blue",
                background: "#EEE",
                borderRadius: "50%",
                margin: "20px",
              }}
            >
              +
            </span>
            <img src="01.png" />
          </div>

          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default CardFront;
