import React from "react";
import LoginButton from "../LoginButton";

const CardFront = () => {
  return (
    <div className="card-side side-back">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6" style={{ display: "flex", margin: "30px" }}>
            <img
              width={"250px"}
              height={"250px"}
              src="Auth0-multifactor-API.png"
            />
            <span
              style={{
                fontSize: "50px",
                color: "blue",
                background: "#EEE",
                display: "block",
                margin: "100px",
                padding: "10px",
              }}
            >
              +
            </span>
            <img width={"250px"} height={"250px"} src="redux-logo-8.jpg" />
          </div>

          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default CardFront;
