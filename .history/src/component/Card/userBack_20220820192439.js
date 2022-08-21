import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Contact } from "../ContactButton";

const Profil = () => {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <div className="">
      <div className="container-fluid">
        <h1>My contact </h1>

        <div className="">
          <img className="picture" src={user.picture} alt={user.name} />
        </div>

        <form formAction="" className="card-form">
          <div className="row">
            <div className="col">
              <p>
                <span className="FirstName">Nickname : </span>
                {user.nickname}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p>
                <span className="FirstName">Email :</span>
                {user.email}
              </p>
            </div>
          </div>
        </form>
      </div>
      <Contact />
    </div>
  ) : (
    <div className="card-side side-back">
      <h1>No List</h1>
    </div>
  );
};

export default Profil;
