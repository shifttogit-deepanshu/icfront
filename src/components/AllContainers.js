import React from "react"
import Containers from "./Containers"
import Map from "./ContainersMap"

const AllContainers = ()=>{
    
        return (
            <div className="allcontainers">
                <div className="allcontainertab"><Containers /></div> 
                <div className="maptab"><Map /></div>
            </div>
        ) 

    
}

export default AllContainers