import React,{useState} from "react"
import axios from "axios"
import {connect} from "react-redux"
import {setContainers} from "../store/actions/user"
import Loader from "./Loader"
const GetContainers = (props)=>{
    const [loading,setLoading] = useState(false)
    const handleGetContainers = ()=>{
    if(props.containers.length===0){
        setLoading(true)
    }
    else if(props.containers.length>0){
        setLoading(false)
    }
    
    setInterval(() => {
        setLoading(true)
        var data = JSON.stringify({"uid":props.uid});

        var config = {
    method: 'post',
    url: 'http://localhost:3000/getcontainers',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    // console.log(response.data)
    const containers = response.data.containers;
    props.setContainers(containers)
    setLoading(false)
    // console.log(containers)
    })
    .catch(function (error) {
    console.log(error);
    setLoading(false)
    });
    }, 10000);
        
    }


    return (
        <div>
        {loading && <Loader />}
        {!loading && <div>
            <button className="button button--container" onClick={()=>handleGetContainers()}>Start</button>
        </div>}
        </div>
        
    )
}

const mapStateToProps = (state)=>{
    return ({
        uid:state.users.uid,
        containers:state.users.containers
    })
}

const mapDispatchToProps = (dispatch)=>{
    return ({
        setContainers : (containers)=>dispatch(setContainers(containers))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(GetContainers)