import React from "react"
import axios from "axios"

const Container = (props)=>{
    const handleOpenContainer = ()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:3000/getlogs?cid='+props.id,
            headers: {},
          };
          
          axios(config)
          .then(function (response) {
            console.log(response.data.data);
          })
          .catch(function (error) {
            console.log(error);
          });         
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

export default Container