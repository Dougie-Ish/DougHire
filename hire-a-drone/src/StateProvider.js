// Setup data layer - to track cart

import React, { createContext, useContext, useReducer } from 'react';

// Data layer
export const StateContext = createContext();

// Provider build
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how it is used inside a component 
export const useStateValue = () => useContext(StateContext);