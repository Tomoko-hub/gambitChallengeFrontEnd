import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit=async(event)=>{
        event.preventDefault()
        try{
            const response = await fetch("http://localhost:5000/user/login",{
                method: "POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const jsonResponse = await response.json()
            localStorage.setItem("token",jsonResponse.token)
            console.log(jsonResponse)
            alert(jsonResponse.message)
        }catch(err){
            return alert("Login failed..")
        }

    }

  return (
    <div>
        <h1 className='page-title'>Login</h1>
        <form onSubmit={handleSubmit}>
            <input
                value={email}
                onChange={(event)=>setEmail(event.target.value)} 
                type="text" name="email" placeholder='Please put your email address.' required />
            <input 
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                type="text" name='password' placeholder='Password' required />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login