import React from "react"
import AzureMap from "./AzureMap"
import {connect} from "react-redux"

const Map = (props)=>{
    console.log(props.containers)
    return (
        <div className="containers-maps">
        <AzureMap containers={props.containers}/>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return ({
        containers: state.users.containers
    })
}

export default connect(mapStateToProps)(Map)