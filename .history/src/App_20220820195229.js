import React from "react";
import "./App.css";
import LogoutButton from "./component/LogoutButton";
import Profil from "./component/Profil";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ....</div>;
  }
  return (
    <>
      <div className="react-card">
        <LogoutButton />
      </div>
      <div>
        <Profil />
      </div>
    </>
  );
}

export default App;
