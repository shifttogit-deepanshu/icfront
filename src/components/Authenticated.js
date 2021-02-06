import React from "react"
import GetContainers from "./GetContainers"
const Authenticated = ()=>{
    return (
        <div className="loginform"> 
        <div className="loginform__title">Authenticated Successfully!</div>
        <div class>
            <GetContainers/>
        </div>
        </div>
    )
}

export default Authenticated