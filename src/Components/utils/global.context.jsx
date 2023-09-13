import { createContext, useReducer, useMemo } from "react";
import reducer from "../../reducer/reducer.js"
export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)
  const apiDentistas = () => dispatch({type: "fetchApi"})
  const changeTheme = () => dispatch({type: "changeTheme"})
  return (
    <ContextGlobal.Provider value={{state, apiDentistas, changeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
