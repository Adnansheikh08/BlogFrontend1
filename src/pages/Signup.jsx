import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signup() {
    fetch("http://localhost:5050/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err)=>console.log(err))
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-white shadow-xl border p-4 w-[26%] rounded-md">
        <div className="text-lg font-bold">Create an account</div>

        <div className="text-sm mt-3 mb-1">Full name</div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Full name here"
        />

        <div className="text-sm mt-3 mb-1">Email address</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Email address here"
        />

        <div className="text-sm mt-3 mb-1">Password</div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Password here"
        />
        <div className="text-sm mt-3 mb-1">Confirm password</div>
        <input
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Type password again"
        />

        <button
          onClick={() => signup()}
          className="w-full bg-black text-white mt-3 p-2 rounded text-sm"
        >
          Signup
        </button>
        <a href=""></a>
        <Link to="/login">
          <div className="text-center text-sm mt-4 underline">
            I have an account already
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
