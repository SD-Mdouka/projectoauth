import React from "react";
import "./App.css";
import CardFront from "./component/Card/CardFront";
import CardBack from "./component/Card/userBack";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ....</div>;
  }
  return (
    <>
      <div
        style={{
          display: "block",
        }}
      >
        <div className="card-container">
          <div className="card-body">
            <CardBack />
          </div>
        </div>
        <div className="card-container">
          <div className="card-body">
            <CardBack />
            <CardFront />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
