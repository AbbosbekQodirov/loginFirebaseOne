import { useContext, useState } from "react";
import { projectAuth } from "../firebase/config";
import { AuthProvider } from "../context/AuthContext";

export function useSignUp() {



  const { dispatch } = useContext(AuthProvider);

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const signUp = async (email, password, name) => {
    try{
        setIsPending(true)
    const req = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    await req.user.updateProfile({displayName: name})

    dispatch({
      type: "LOGIN",
      payload: req.user,
    });
    
     setIsPending(false);
    } catch(err){   
        setIsPending(false);
        setError(err.message)
    }
  };

  return { error, isPending, signUp };
}
