import React, { createContext, useContext, useReducer } from "react";
//Prepares the Data Layer / Holder /
export const DatalayerContext = createContext();

// Creating the Reducer / State / Props & We wrap our app in it giving it access to the useContext api
export const Datalayer = ({ reducer, initialState, children }) => (
  <DatalayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DatalayerContext.Provider>
);

//Pulling information from Data Layer
export const useDatalayerValue = () => useContext(DatalayerContext)
