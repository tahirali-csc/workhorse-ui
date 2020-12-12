import React from 'react'
import {
    useParams
  } from "react-router-dom";

const LogView = () => {
    
    let { buildId } = useParams()
    // let id = p.buildId
    // console.log("ID==", p.buildId)

    return( 
        <h1>Log{buildId}</h1>
    )
}

export default LogView