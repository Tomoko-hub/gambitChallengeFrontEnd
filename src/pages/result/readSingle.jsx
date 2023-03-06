import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'

const ReadSingle = () => {
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

  return (
    <div>
      <p>{register}</p>
      <p>{result}</p>
      <p>{description}</p>
      <div>
        <Link to={`/result/update/${params.id}`}>Update Result</Link>
        <Link to={`/result/delete/${params.id}`}>Delete Result</Link>
      </div>
    </div>
  )
}

export default ReadSingle
