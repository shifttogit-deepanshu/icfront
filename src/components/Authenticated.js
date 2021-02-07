import React from "react"
import GetContainers from "./GetContainers"
const Authenticated = ()=>{
    return (
        <div className="loginform"> 
        <div className="loginform__title">Log In Successful</div>
        <div>
            <GetContainers/>
        </div>
        <div className="login__message"><div className="login__message__title login__message__title--top">Authenticated Successfully !</div></div>
        </div>
    )
}

export default Authenticated