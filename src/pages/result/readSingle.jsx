import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ReadSingle = () => {
  const params = useParams()

  const [register, setRegister] = useState("")
  const [result, setResult] = useState("")
  const [description, setDescription] = useState("")

  //useEffect(()=>{
    const getSingleResult=async()=>{
      const response = await fetch(`http://localhost:5000/result/${params.id}`)
      const jsonResponse = await response.json()
        setRegister(jsonResponse.singleResult.register)
        setResult(jsonResponse.singleResult.result)
        setDescription(jsonResponse.singleResult.result)
    }
    getSingleResult()
  //},[params.id])

  return (
    <div>
      <h1>{console.log(params.id)}</h1>
        <p>{register}</p>
        <p>{result}</p>
        <p>{description}</p>
    </div>
  )
}

export default ReadSingle
