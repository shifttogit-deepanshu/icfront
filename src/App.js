import React from "react"
import LoginForm from "./components/LoginForm"
import GetContainers from "./components/GetContainers"
import Containers from "./components/Containers"
import {connect} from "react-redux"
import TempChart from "./components/TempChart"
import Map from "./components/Map"
import TempMeterPos from "./components/TempMeterPos"
import TempMeterNeg from "./components/TempMeterNeg.js"
import ShadowBox from "./components/ShadowBox"
import Header from "./components/Header"
import AppPort from "./components/AppPort"

const App = (props)=>{
 
  return (
    <div>
    <Header />
    <AppPort>{(props.uid===0 || props.uid===-1) && <LoginForm /> }</AppPort>
     
    {props.uid===0 && <div>Please Login To continue</div>}
  
    {props.uid===-1 && <div>Auth failed Please check credentials and try again</div>}
    {(props.uid!==0 && props.uid!==-1) && <div><div>Authenticated!!</div><div><GetContainers/></div></div>}
    {(props.uid!==0 && props.uid!==-1) && <div> <Containers /></div>}
      <TempChart />
      <Map />
      <TempMeterPos />
      <TempMeterNeg />
      </div>        
  )
}

const mapStateToProps = (state)=>{
  return ({
      uid:state.users.uid
  })
}

export default connect(mapStateToProps)(App)