import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Contact } from "../ContactButton";

const Profil = () => {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <div className="card-side ">
      <div className="container-fluid">
        <h1>My contact </h1>

        <form
          formAction=""
          className="card-form"
          style={{ display: "inline-flex" }}
        >
          <div className="row">
            <div className="col">
              <div className="">
                <img className="picture" src={user.picture} alt={user.name} />
              </div>
            </div>
            <div className="col">
              <p>
                <span className="FirstName">Nickname : </span>
                {user.nickname}
              </p>
            </div>
            <div className="col">
              <p>
                <span className="FirstName">Email :</span>
                {user.email}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Contact />
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="card-side side-front">
      <p
        style={{
          backgroundColor: "ButtonText",
          color: "white",
          margin: "50px auto",
          padding: "20px",
          display: "grid",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        Slider Your Card but is you connect
        <span style={{ display: "flex", fontSize: "70px" }}>{" >>"}</span>
      </p>
    </div>
  );
};

export default Profil;
