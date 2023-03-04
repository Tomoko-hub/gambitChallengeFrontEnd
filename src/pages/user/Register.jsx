import React, { useState } from 'react'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit=async(event)=> {
        event.preventDefault()
        try{
            const response = await fetch("http://localhost:5000/user/register", {
                method: "POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
            const jsonResponse = await response.json()
            alert(jsonResponse.message)
            return
        }catch(err){
            return alert("Register user faild..")
        }

    }

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input 
                value={name}
                onChange={(event)=>setName(event.target.value)}
                type="text" 
                name="name" placeholder='Please enter your name.' />
            <input
                value={email}
                onChange={(event)=>setEmail(event.target.value)} 
                type="text" 
                name="email" placeholder='Your mail address.' required />
            <input 
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                type="text" 
                name="password" placeholder='PASSWORD' required />

            <button>Register</button>
        </form>
    </div>
  )
}

export default Register