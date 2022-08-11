import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initile State default value

const initileState = {
  users: [
    { id: 1, name: 'salah' },
    { id: 2, name: 'ahmed' },
    { id: 3, name: 'amin' },
  ],
};

// context state

export const GlobalContxt = createContext(initileState);

// ajoute provider global

export const GlobalProvider = ({ children }) => {
  const [state, dispatsh] = useReducer(AppReducer, initileState);
  return (
    <GlobalContxt.Provider
      value={{
        users: state.users,
      }}
    >
      {children}
    </GlobalContxt.Provider>
  );
};
