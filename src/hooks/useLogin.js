import { useContext, useState } from "react";
import { projectAuth } from "../firebase/config";
import { AuthProvider } from "../context/AuthContext";

export function useLogin() {

  const { dispatch } = useContext(AuthProvider);

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const login = async (email, password) => {

    try {
      setIsPending(true);
      const req = await projectAuth.signInWithEmailAndPassword(email, password);


      dispatch({
        type: "LOGIN",
        payload: req.user,
      });

     
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      setError(err.message);
    }
  };

  return { error, isPending, login };
}
