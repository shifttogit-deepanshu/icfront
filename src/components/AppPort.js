import React from "react"
import ShadowBox from "./ShadowBox"

const AppPort = (props)=>(
    <div className="app-port">
    <ShadowBox><div className="app-port__mainbox">{props.children}</div></ShadowBox>
    </div>
)

export default AppPort