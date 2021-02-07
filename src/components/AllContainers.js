import React from "react"
import Containers from "./Containers"

const AllContainers = ()=>{
    return (
        <div className="allcontainers">
            <div className="allcontainertab"><Containers /></div> 
            <div className="maptab"></div>
        </div>
    )
}

export default AllContainers