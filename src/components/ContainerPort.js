import React from "react"

const ContainerPort = (props)=>(
    <div className="app-port">
        <div className="app-port__mainbox--container">{props.children}</div>
    </div>
)

export default ContainerPort