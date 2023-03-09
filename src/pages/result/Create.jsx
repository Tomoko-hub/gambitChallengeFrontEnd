import React from 'react'
import { useState } from 'react'

const Create = () => {
  const [register, setRegister] = useState("")
  const [result, setResult] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit=async(event)=>{
    event.preventDefault()
    try {
      const response = await fetch("http://localhost:5000/result/create", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          register: register,
          result: result,
          description: description
        })
      })
      const jsonData = await response.json()
      alert(jsonData.message)

    }catch(err){
      alert("Create result failed..")
    }
  }

  return (
    <div>
      <h1 className='page-title'>Create Result</h1>
      <form onSubmit={handleSubmit}>
        <input 
          value={register} onChange={(event)=> setRegister(event.target.value)}
          type="number" name="register" placeholder='Register number' required />
        <input
          value={result} onChange={(event)=> setResult(event.target.value)}
          type="number" name="result" placeholder='Type result here.' required />
        <textarea
          value={description} onChange={(event)=> setDescription(event.target.value)} 
          type="text" rows="15" name="description" placeholder='Some description.' />
        <button>Create Result</button>
      </form>
      
    </div>
  )
  }

export default Create