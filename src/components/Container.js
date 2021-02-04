import React from "react"
import axios from "axios"
import {connect} from "react-redux"
import {setLogs} from "../store/actions/container"

const Container = (props)=>{
    const handleOpenContainer = ()=>{
        setInterval(()=>{
            var config = {
                method: 'get',
                url: 'http://localhost:3000/getlogs?cid='+props.id,
                headers: {},
              };
              
              axios(config)
              .then(function (response) {
                console.log(response.data.data);
                props.setLogs(response.data.data)
              })
              .catch(function (error) {
                console.log(error);
              }); 
        },1000)
                
        console.log("clicked",props.id)
    }

    return (
        <div style={{border:"2px solid black",margin:"10px"}} onClick={()=>handleOpenContainer()}>
                 <div>{props.id}</div>   
                 <div>{props.temp}</div>   
                 <div>{props.lat}</div>   
                 <div>{props.long}</div> 
                 <div>{props.time}</div>  
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return ({
        setLogs: (logs)=>dispatch(setLogs(logs))
    })
}
export default connect(undefined,mapDispatchToProps)(Container)