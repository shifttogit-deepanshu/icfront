import React from "react"
import ShadowBox from "./ShadowBox"

const ContainerPort = (props)=>(
    <div className="app-port">
    <ShadowBox><div className="app-port__mainbox--container">{props.children}</div></ShadowBox>
    </div>
)

export default ContainerPort