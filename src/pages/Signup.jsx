import React, { useState } from 'react'
import { useSignUp } from '../hooks/useSignUp';

function Signup() {

  const { error, isPending, signUp } = useSignUp();


   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");

   const handleSubmit = (e) => {
     e.preventDefault();

     signUp(email, password, name);
   };



  return (
    <div className="pt-24">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-8 w-96 mx-auto my-auto text-xl"
      >
        <label htmlFor="input1">
          email: <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email kiritin..."
            className="border border-black w-full rounded px-2 py-1 mt-1"
            id="input1"
            type="email"
          />
        </label>
        <label htmlFor="input2">
          password: <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password kiriting..."
            className="border  border-black w-full rounded px-2 py-1 mt-1"
            id="input2"
            type="text"
          />
        </label>
        <label htmlFor="input3">
          displayName: <br />
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Ismingizni kiriting kiriting..."
            className="border  border-black w-full rounded px-2 py-1 mt-1"
            id="input3"
            type="text"
          />
        </label>
        {!isPending && (
          <button className="hover:bg-green-600 hover:text-white transition-all delay-150 ease-linear border-green-600 p-1 w-32 rounded border-2 text-green-600 font-bold">
            Signup
          </button>
        )}
        {isPending && (
          <button className="hover:bg-green-600 hover:text-white transition-all delay-150 ease-linear border-green-600 p-1 w-32 rounded border-2 text-green-600 font-bold">
            uploading...
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup