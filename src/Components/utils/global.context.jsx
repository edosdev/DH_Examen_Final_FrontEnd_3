import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducers/clasificacion";

export const initialState = {
  theme: "",
  data: []
}
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(prefersDarkScheme) {
  initialState.theme = "dark";
} else {
  initialState.theme = "light";
}


export const ContextGlobal = createContext(undefined);



export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);


useEffect(() => {
  document.documentElement.setAttribute("data-theme", state.theme);
},[state.theme])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch({ type: "GET_MEDICS", payload: res.data })
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
