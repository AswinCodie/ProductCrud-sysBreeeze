import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
      const res = api.post("/users",{
        name:name,
        email:email,
        password:password

      })
      navigate("/login")
    
  };
  return (
    <div>
      <h1>Signup</h1>
      <input type='email' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
      <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
      <input type='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button onClick={handleSignup}> Signup </button><br/>
      <Link to={"/login"}>You alredy haave a account?</Link>
    </div>
  );
}

export default Signup;
