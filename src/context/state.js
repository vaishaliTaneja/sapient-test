import React, { useContext, useReducer } from "react";
import { Context } from "./context";
import Reducer from "./reducer";

export const useProduct = () => {
  const { state, dispatch } = useContext(Context);
  return [state, dispatch];
};

export const ProductState = ({ children }) => {
  const initialState = {
    products: [],
    loading: true,
    error: false,
    message: ""
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};
