import { createContext, useEffect, useReducer } from "react";

import {projectAuth} from "../firebase/config"


const AuthProvider = createContext()

function AuthContext({children}){

const ChangeContext = (state, action)=>{
    switch (action.type) {
      case "LOGIN":
        return { ...state, user: action.payload };
      case "LOGOUT":
        return { ...state, user: null };
      case "READY":
        return { ...state, user: action.payload, isReady: true };
      default:
        return state;
    }
}

const [state, dispatch] = useReducer(ChangeContext, {
  user: null,
  isReady: false
}); 

useEffect(()=>{
  const ready = projectAuth.onAuthStateChanged((user)=>{
      dispatch({
        type: "READY",
        payload: user
      })
      ready()
    })
  
}, [])
 
return (
  <AuthProvider.Provider value={{...state, dispatch}}>
    {children}
  </AuthProvider.Provider>
);    
}


export { AuthContext, AuthProvider };