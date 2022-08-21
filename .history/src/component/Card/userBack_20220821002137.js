import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Contact } from "../ContactButton";
import LogoutButton from "../LogoutButton";

const Profil = () => {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <div className="card-side side-back">
      <div className="container-fluid">
        <div className="row">
          <div className="col" style={{ justifyContent: "space-between" }}>
            <h1>My contact </h1>
            <LogoutButton />
          </div>
        </div>

        <form
          formAction=""
          className="card-form"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="row">
            <div className="col">
              <p>
                <img className="picture" src={user.picture} alt={user.name} />
              </p>
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
            <div className="">
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
