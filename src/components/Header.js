import React from "react"
import image from "../images/logo.png"

const Header = ()=>{
    return (
    <div className="header">    
        <div className="logo"><img src={image} className="medi-logo"/></div>
        <a href="https://gentle-ocean-088afaf10.azurestaticapps.net"><div className="bot">Need Help ?</div></a>
    </div>
    )
}

export default Header