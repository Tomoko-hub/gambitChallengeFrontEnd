import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Delete = () => {
  const params = useParams()

  const [register, setRegister] = useState("")
  const [result, setResult] = useState("")
  const [description, setDescription] = useState("")

  useEffect(()=>{
    const getSingleResult=async()=>{
      const response = await fetch(`http://localhost:5000/result/${params.id}`)
      const jsonResponse = await response.json()
        setRegister(jsonResponse.singleResult.register)
        setResult(jsonResponse.singleResult.result)
        setDescription(jsonResponse.singleResult.result)
    }
    getSingleResult()
  },[params.id])

  const handleSubmit=async(event)=>{
    event.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/result/delete/${params.id}`, {
        method: "DELETE",
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
      alert("Delete result failed..")
    }
  }


  return (
    <div>
      <h1>Delete Result</h1>
      <form onSubmit={handleSubmit}>
        <h2>{register}</h2>
        <h3>{result}</h3>
        <p>{description}</p>
        <button>Edit</button>
      </form>
      
    </div>
  )
}

export default Delete
