import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


const ReadAllResuts = () => {
    const [allResults, setAllResults] = useState("")

    useEffect(()=>{

        const getAllResults=async()=>{
            const response = await fetch("http://localhost:5000/")
            const jsonResponse = await response.json()
            setAllResults(jsonResponse)
        }
        getAllResults()
    },[])


  return (
    <div className='grid-container-in'>
        {allResults && allResults.allResults.map(result =>
            <Link to={`/result/${result._id}`} key={result._id}> 
                <div key={result._id}>
                    <h2>{result.register}</h2>
                    <h3>{result.result}</h3>
                    <p>{result.description}</p>
                </div>
            </Link>    
        )}
    </div>
  )
}

export default ReadAllResuts