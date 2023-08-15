import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { projectAuth } from '../firebase/config';

function Navbar() {

  const { user, dispatch } = useContext(AuthProvider);

  console.log("salom");


  return (
    <div className="px-12 py-4 bg-green-400 mx-auto flex justify-between text-xl items-center">
      <div>
        <NavLink to="/" className="font-bold text-2xl ">
          MyMoney
        </NavLink>
      </div>
      <div className="flex gap-6">
        {!user && (
          <>
            <NavLink
              to="/signup"
              className="border-b-2 px-4 py-1  hover:border-red-700 hover:text-red-700 text-white ease-linear transition-all duration-100"
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              className="border-b-2 px-4 py-1  hover:border-red-700 hover:text-red-700 text-white ease-linear transition-all duration-100"
            >
              Login
            </NavLink>
          </>
        )}
        {user && (
          <h1>
            {" "}
            Hello {user.displayName}{" "}
            <button className="border rounded px-2 py-1 ml-5" onClick={ async ()=>{

              await projectAuth.signOut()
              dispatch({
                type: "LOGOUT",
              });
            }}>
              Log out
            </button>{" "}
          </h1>
        )}
      </div>
    </div>
  );
}

export default Navbar