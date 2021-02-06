import React from "react"
import LoginForm from "./components/LoginForm"
import Containers from "./components/Containers"
import {connect} from "react-redux"
import TempChart from "./components/TempChart"
import Map from "./components/Map"
import TempMeterPos from "./components/TempMeterPos"
import TempMeterNeg from "./components/TempMeterNeg.js"
import ShadowBox from "./components/ShadowBox"
import Header from "./components/Header"
import AppPort from "./components/AppPort"
import Authenticated from "./components/Authenticated"
import ContainerPort from "./components/ContainerPort"

const App = (props)=>{
 
  return (
    <div>
    <Header />
    
    {(props.uid===0 || props.uid===-1) && <AppPort><LoginForm /></AppPort> }
    {(props.uid!==0 && props.uid!==-1 && props.containers.length==0) && <AppPort><Authenticated /></AppPort>}
     
    
    {(props.uid!==0 && props.uid!==-1 && props.containers.length!==0) && <ContainerPort>
      </ContainerPort>}
      </div>        
  )
}

const mapStateToProps = (state)=>{
  return ({
      uid:state.users.uid,
      containers:state.users.containers
  })
}

export default connect(mapStateToProps)(App)