import React from "react"
import axios from "axios"

const Container = (props)=>{
    const handleOpenContainer = ()=>{
        console.log("clicked")
    }

    return (
        <div style={{border:"2px solid black",margin:"10px"}} onClick={()=>handleOpenContainer()}>
                 <div>{props.id}</div>   
                 <div>{props.temp}</div>   
                 <div>{props.lat}</div>   
                 <div>{props.long}</div>   
        </div>
    )
}

export default Container