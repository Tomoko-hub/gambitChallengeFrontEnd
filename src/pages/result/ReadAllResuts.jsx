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
    <div>
        {allResults && allResults.allResults.map(item =>
            <Link to="" key={item._id}> 
                <div key={item._id}>
                    <h2>{item.register}</h2>
                    <h3>{item.result}</h3>
                    <p>{item.description}</p>
                </div>
            </Link>    
        )}
    </div>
  )
}

export default ReadAllResuts