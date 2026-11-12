import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../api'

function Login() {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const navigate = useNavigate()

    const handleSubmit=async()=>{
        const user= await api.get("/users")
        const loggedIN = user.data.find((user)=>(
                    email==user.email && password == user.password
        ))
        if(loggedIN){

          navigate("/home")
        }
        if(!loggedIN){

          navigate("/login")
        }
        
       

    }
  return (
    <div>
      <h1>Login</h1>
      <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
      <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button onClick={handleSubmit}> Login </button><br/>
      <Link to={"/signup"}>You dont have account?</Link>

    </div>
  )
}

export default Login
