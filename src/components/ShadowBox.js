import React from "react"

const ShadowBox = (props)=>{
    return (
        <div className="shadowbox">
            {props.children}
        </div>
    )
}

export default ShadowBox