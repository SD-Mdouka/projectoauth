import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initile State default value

const initileState = {
  users: [
    { id: 1, name: "salah" },
    { id: 2, name: "ahmed" },
    { id: 3, name: "amin" },
  ],
};

// context state

export const GlobalContxt = createContext(initileState);

// ajoute provider global

export const GlobalProvider = ({ children }) => {
  const [state, dispatsh] = useReducer(AppReducer, initileState);

  //   Action
  const removeUser = (id) => {
    dispatsh({
      type: "REMOVEUser",
      data: id,
    });
  };
  const addUser = (user) => {
    dispatsh({
      type: "ADDUser",
      data: user,
    });
  };
  const editUsers = (user) => {
    dispatsh({
      type: "EDITUser",
      data: user,
    });
  };

  return (
    <GlobalContxt.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUsers,
      }}
    >
      {children}
    </GlobalContxt.Provider>
  );
};
